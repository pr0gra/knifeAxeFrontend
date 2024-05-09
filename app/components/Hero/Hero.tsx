"use client"
import { useEffect, useState } from "react";

export function Hero(){
    const [footerData, setFooterData] = useState([]);
    useEffect(() => {
      fetch("https://nozhtopor.na4u.ru/wp-json/wp/v2/site-options")
        .then((response) => response.json())
        .then((data) => setFooterData(data));
    }, []);
    console.log(footerData)
    return <section className="hero">
        
    </section>
}