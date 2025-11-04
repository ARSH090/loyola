import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function HeroSection() {
  const [hero, setHero] = useState({ title: "", subtitle: "", image: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      const docRef = doc(db, "websiteContent", "heroSection");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as { title: string; subtitle: string; image: string };
        setHero(data);
      }
      setLoading(false);
    };
    fetchHero();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">{hero.title}</h1>
        <p className="text-xl">{hero.subtitle}</p>
      </div>
    </section>
  );
}
