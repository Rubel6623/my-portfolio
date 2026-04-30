import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import GithubSection from "@/components/GithubSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import EducationAndExperience from "@/components/Education&Exprerience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <AboutSection />
      <TechStackSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationAndExperience />
      <GithubSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
