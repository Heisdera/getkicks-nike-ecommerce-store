const API_KEY = "fb559c8619e7ba4daf04ba1a";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function fetchConversionRates(baseCurrency: string) {
  const response = await fetch(`${API_URL}/latest/${baseCurrency}`);
  const data = await response.json();

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch products data");
  }

  return data;
}
