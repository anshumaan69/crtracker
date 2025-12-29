"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  // const [coins,setCoins]= useState([]);
  // useEffect(()=>{
  //   //calling the next js api
  //   fetch('/api/market')
  //   .then((res)=>res.json())
  //   .then((data)=>setCoins(data));
  // },
  // [])

  return (
    <main className="main-container">
      <section className="home-grid">
        {/* <p>Coin overview</p> */}
        <div id="coin-overview">
          <div className="header">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={56}
              height={56}
            ></Image>
            <div className="info">
              <p>BitCoin/BTC</p>
              <h1>$8900000 </h1>
            </div>
          </div>
        </div>

        <p>Trending coins</p>
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>

      {/* <h1>Crypto Marketplace</h1> */}
      {/* {coins.map((coin)=>(
        <div key={coin.id}>{coin.name}:${coin.current_price}</div>

      ))} */}
    </main>
  );
}
