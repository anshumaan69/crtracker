import { error } from "console";
import { NextResponse } from "next/server";
const coingeckoUrl = 
const api = process.env.API;

export async function GET(){
    const res = await fetch(something,{
        headers:{
            'x-cg-demo-api-key':api;
        },
        next:{revalidate:60}
        //ye cache krdega req ko for 60 sec 
        // that is next js will serve this same data to all users for 1 min     
        // this will protect the API limit
    });
    if(!res.ok){
        return NextResponse.json({
            error   :'failed to fetch data '
        },{
            status:500
        }
    )
    }

    const data = await res.json();

    return NextResponse.json(data);
}