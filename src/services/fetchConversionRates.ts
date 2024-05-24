// const api_key = import.meta.env.VITE_EXCHANGERATE_API_KEY;
// const URL = `https://v6.exchangerate-api.com/v6/${api_key}`;

// export async function fetchConversionRates(baseCurrency: string) {
//   const response = await fetch(`${URL}/latest/${baseCurrency}`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error("Failed to fetch conversion rates");
//   }

//   return data;
// }

const api_key = import.meta.env.VITE_RAPID_API_KEY;

const BaseUrl = `https://exchangerate-api.p.rapidapi.com/rapid`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": api_key,
    "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
  },
};

export async function fetchConversionRates(baseCurrency: string) {
  const response = await fetch(`${BaseUrl}/latest/${baseCurrency}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch conversion rates");
  }

  return data;
}
