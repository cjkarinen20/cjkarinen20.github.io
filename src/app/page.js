"use client";

import { useState } from "react";
import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";

export default function Home() {
  const [activeSkillFilter, setActiveSkillFilter] = useState("");

  const handleSkillFilterChange = (skill) => {
    setActiveSkillFilter(prevSkill => (prevSkill === skill ? "" : skill));
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#192029]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        
        <AboutSection onSkillSelect={handleSkillFilterChange} />
        
        <ProjectsSection activeSkillFilter={activeSkillFilter} />
        
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
