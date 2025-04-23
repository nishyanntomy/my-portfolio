import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { SkillsSection } from "@/sections/Skills";
import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
