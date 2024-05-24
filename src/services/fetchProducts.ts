const api_key = import.meta.env.VITE_RAPID_API_KEY;
const BaseUrl = `https://nike-sneakers-api.p.rapidapi.com/collections`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": api_key,
    "X-RapidAPI-Host": "nike-sneakers-api.p.rapidapi.com",
  },
};

export async function fetchProducts(
  collection: string | undefined,
  pageNumber: number,
) {
  const response = await fetch(
    `${BaseUrl}/${collection}?page=${pageNumber}`,
    options,
  );
  const { products, total_results } = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products data");
  }

  return { products, total_results };
}
