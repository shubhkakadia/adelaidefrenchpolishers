<?php
// secure-contact-handler.php

// Set proper CORS headers
header('Access-Control-Allow-Origin: https://adelaidefrenchpolishers.com.au/'); // Replace with your domain
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Return early for preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Basic rate limiting (using sessions)
    session_start();
    $now = time();
    if (isset($_SESSION['last_submit_time']) && 
        $now - $_SESSION['last_submit_time'] < 60) { // 1 minute cooldown
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Please wait before submitting again']);
        exit();
    }
    $_SESSION['last_submit_time'] = $now;

    // Get and validate input
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Server-side validation
    $errors = [];
    
    if (empty($data['firstName']) || !preg_match('/^[A-Za-z]+$/', $data['firstName'])) {
        $errors[] = 'Invalid first name';
    }
    
    if (empty($data['lastName']) || !preg_match('/^[A-Za-z]+$/', $data['lastName'])) {
        $errors[] = 'Invalid last name';
    }
    
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
    
    if (empty($data['phoneNumber']) || !preg_match('/^[0-9]+$/', $data['phoneNumber'])) {
        $errors[] = 'Invalid phone number';
    }
    
    if (empty($data['message'])) {
        $errors[] = 'Message is required';
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
        exit();
    }

    // Sanitize data
    $firstName = htmlspecialchars($data['firstName']);
    $lastName = htmlspecialchars($data['lastName']);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phoneNumber = htmlspecialchars($data['phoneNumber']);
    $message = htmlspecialchars($data['message']);

    // Email settings
    $to = "admin@adelaidefrenchpolishers.com.au"; // Replace with your email
    $subject = "New Contact Form Submission from $firstName $lastName";
    
    // Create email body
    $emailBody = "Name: $firstName $lastName\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phoneNumber\n\n";
    $emailBody .= "Message:\n$message";

    // Email headers
    $headers = "From: noreply@adelaidefrenchpolishers.com.au\r\n"; // Use a valid domain email
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $emailBody, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>