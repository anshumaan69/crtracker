"use client";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Crypto Marketplace</h1>
      {/* {coins.map((coin)=>(
        <div key={coin.id}>{coin.name}:${coin.current_price}</div>
      ))} */}
    </div>
  );
}
