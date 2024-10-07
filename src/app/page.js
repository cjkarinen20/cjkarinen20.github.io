import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#192029]">
      <div class ="container mx-auto px-12 py-4">
      <HeroSection />
      </div>
    </main>
  );
}
