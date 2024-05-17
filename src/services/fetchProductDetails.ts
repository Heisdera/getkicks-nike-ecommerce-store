const api_key = import.meta.env.VITE_RAPID_API_KEY;
const URL = "https://nike-sneakers-api.p.rapidapi.com/products";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": api_key,
    "X-RapidAPI-Host": "nike-sneakers-api.p.rapidapi.com",
  },
};

export async function fetchProductDetails(productId: string | undefined) {
  const individualProductURL = `${URL}/${productId}`;

  const response = await fetch(individualProductURL, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch product details data");
  }

  return data;
}
