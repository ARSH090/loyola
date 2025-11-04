import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

async function setupFirestore() {
  try {
    // Hero Section
    await setDoc(doc(collection(db, "hero"), "main"), {
      title: "Loyola School",
      subtitle: "Excellence in Education",
      image: "https://your-website.com/hero.jpg",
    });

    // Contact Info
    await setDoc(doc(collection(db, "contact"), "main"), {
      email: "info@loyola.com",
      phone: "+91 9876543210",
      address: "Loyola School, Patna",
    });

    // Gallery Images
    const galleryRef = collection(db, "gallery");
    await setDoc(doc(galleryRef, "image1"), {
      image: "https://your-website.com/gallery1.jpg",
    });
    await setDoc(doc(galleryRef, "image2"), {
      image: "https://your-website.com/gallery2.jpg",
    });

    console.log("✅ Firestore setup complete!");
  } catch (error) {
    console.error("❌ Error setting up Firestore:", error);
  }
}

setupFirestore();
