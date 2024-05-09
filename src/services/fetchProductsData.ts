const BaseUrl = `https://nike-sneakers-api.p.rapidapi.com/products`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c0382c237msh8ad630ef926afb9p1e2058jsnb2b8078139cc",
    "X-RapidAPI-Host": "nike-sneakers-api.p.rapidapi.com",
  },
};

export async function fetchProductsData(page: number) {
  const response = await fetch(`${BaseUrl}?page=${page}`, options);
  const { products, total_results } = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch products data");
  }

  return { products, total_results };
}
