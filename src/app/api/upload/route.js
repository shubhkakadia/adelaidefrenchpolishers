import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Set file limits
const MAX_FILE_COUNT = 5;
const MAX_TOTAL_SIZE_MB = 5;
const MAX_TOTAL_SIZE_BYTES = MAX_TOTAL_SIZE_MB * 1024 * 1024;

export async function POST(request) {
  try {
    // Check content type - important for debugging
    const contentType = request.headers.get("content-type");
    console.log("Content-Type:", contentType);

    if (!contentType || !contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { success: false, message: "Content-Type must be multipart/form-data" },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const files = formData.getAll("files");
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";

    console.log("Files received:", files.length);
    console.log("First name:", firstName);
    console.log("Last name:", lastName);

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files uploaded" },
        { status: 400 }
      );
    }

    // Validate file count
    if (files.length > MAX_FILE_COUNT) {
      return NextResponse.json(
        { success: false, message: `Maximum ${MAX_FILE_COUNT} files allowed` },
        { status: 400 }
      );
    }

    // Validate total file size
    let totalSize = 0;
    for (const file of files) {
      totalSize += file.size;
    }

    if (totalSize > MAX_TOTAL_SIZE_BYTES) {
      return NextResponse.json(
        {
          success: false,
          message: `Total file size must not exceed ${MAX_TOTAL_SIZE_MB}MB`,
        },
        { status: 400 }
      );
    }

    // Get current date to create folder
    const today = new Date();
    const dateFolder = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

    // Create folder path based on environment
    // In your API route, add this
    const basePath =
      process.env.NODE_ENV === "production"
        ? "/home/adad1504/public_html"
        : process.cwd();

    // Consider using the env variable from next.config.ts:
const mediaDir = process.env.PUBLIC_UPLOADS_DIR || path.join(basePath, "media");

    const dateDir = path.join(mediaDir, dateFolder);

    // Create directories if they don't exist
    try {
      await mkdir(mediaDir, { recursive: true });
      await mkdir(dateDir, { recursive: true });
    } catch (error) {
      console.error("Error creating directories:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create directories",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Process each file
    const imageUrls = [];

    for (const file of files) {
      try {
        // Get file content as ArrayBuffer
        const buffer = Buffer.from(await file.arrayBuffer());

        // Generate filename: firstname_lastname_uuid.extension
        const originalName = file.name;
        const extension = originalName.split(".").pop();
        const uuid = uuidv4();
        const sanitizedFirstName = firstName
          .replace(/[^a-z0-9]/gi, "_")
          .toLowerCase();
        const sanitizedLastName = lastName
          .replace(/[^a-z0-9]/gi, "_")
          .toLowerCase();

        const filename = `${sanitizedFirstName}_${sanitizedLastName}_${uuid}.${extension}`;
        const filepath = path.join(dateDir, filename);

        // Write file to disk
        await writeFile(filepath, buffer);

        // Generate URL for the file
        const imageUrl = `https://adelaidefrenchpolishers.com.au/media/${dateFolder}/${filename}`;
        imageUrls.push(imageUrl);
      } catch (fileError) {
        console.error("Error processing file:", fileError);
        // Continue with other files instead of failing completely
      }
    }

    return NextResponse.json({
      success: true,
      imageUrls,
      message: `Successfully uploaded ${imageUrls.length} images`,
    });
  } catch (error) {
    console.error("Error processing upload:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process upload",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

// Required for Next.js App Router to handle larger file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
