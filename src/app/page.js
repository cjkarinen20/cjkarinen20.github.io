import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#192029]">
      <NavBar />
      <div class ="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
