import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectsSection";
import EmailSection from "./component/EmailSection";
// import Footer from "./component/Footer";
// import HeroSection from "./component/HeroSection";
// import AchievementsSection from "./component/AchievementsSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-5 mx-auto px-12 py-4">
        {/* <HeroSection /> */}
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
