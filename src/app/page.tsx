"use client";
import { useEffect, useState } from "react";
import { getBarbers } from "@/lib/database";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: "barber" | "customer";
  photo?: string;
  created_at: string;
};

export default function Home(){
  const [barbers, setBarbers] = useState<User[]>([]);

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
    <>
    <Header/>
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
    <Footer/>
    </>
  );
}