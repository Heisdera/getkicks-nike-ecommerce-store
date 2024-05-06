const url = "https://nike-sneakers-api.p.rapidapi.com/products";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3c0382c237msh8ad630ef926afb9p1e2058jsnb2b8078139cc",
    "X-RapidAPI-Host": "nike-sneakers-api.p.rapidapi.com",
  },
};

export async function fetchProductDetails(productId: string | undefined) {
  // const individualURL = `${url}/nike-dunk-low-medium-olive`
  const individualProductURL = `${url}/${productId}`;

  const response = await fetch(individualProductURL, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch product details data");
  }

  return data;
}
