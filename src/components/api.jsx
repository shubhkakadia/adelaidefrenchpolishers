const STORE_NAME = process.env.REACT_APP_SHOPIFY_STORE_NAME;
const API_KEY = process.env.REACT_APP_SHOPIFY_API_KEY;

export const addSubscriber = async (email) => {
  console.log(STORE_NAME, API_KEY, email);
  const endpoint = `https://${STORE_NAME}/admin/api/2023-10/customers.json`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": API_KEY,
      },
      body: JSON.stringify({
        customer: {
          email,
          accepts_marketing: true,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors || "Failed to subscribe.");
    }

    return await response.json(); // Success
  } catch (error) {
    console.error("Error adding subscriber:", error.message);
    throw error;
  }
};
