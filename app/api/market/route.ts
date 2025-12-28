// import { NextResponse } from "next/server";

// const BASE_URL = "https://api.coingecko.com/api/v3";
// const api = process.env.API;

// export async function GET() {
//   const res = await fetch(
//     `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
//     {
//       headers: {
//         "x-cg-demo-api-key": api,
//       },
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) {
//     // Error handling thoda clean kiya hai
//     return NextResponse.json(
//       { error: "Failed to fetch data from CoinGecko" },
//       { status: res.status }
//     );
//   }

//   const data = await res.json();
//   return NextResponse.json(data);
// }
export {};
