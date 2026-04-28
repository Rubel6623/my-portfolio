import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import GithubSection from "@/components/GithubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <GithubSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
