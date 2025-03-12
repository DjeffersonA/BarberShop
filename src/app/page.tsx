"use client";
import { useEffect, useState } from "react";
import { getBarbers } from "@/lib/database";

export default function Home(){
  const [barbers, setBarbers] = useState<any[]>([]);

  useEffect(() => {
    const fetchBarbers = async () => {
      try{
        const data = await getBarbers();
        setBarbers(data);
      }catch(error){
        console.error("Error searching barbers: ", error);
      }
    };
		fetchBarbers();
  }, []);

  return(
    <div className="p-4">
      <h1 className="text-xl font-bold">Available Barbers</h1>
      <ul>
        {barbers.length > 0 ? (
          barbers.map((barber) => <li key={barber.id}>{barber.name}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}