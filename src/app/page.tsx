import Navbar from "@/components/Navbar";
import HomePage from "@/components/Home";
import "./globals.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <Footer />
    </main>
  );
}
