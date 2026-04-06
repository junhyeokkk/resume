import Footer from "./common/Footer";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import IntroduceSection from "./components/IntroduceSection";
import PrintResumeButton from "./components/PrintResumeButton";
import ProfileHeader from "./components/ProfileHeader";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import TrainingSection from "./components/TrainingSection";
import RightSideNav from "./Navigation/RightSideNav";

export default function Home() {
  return (
    <>
      <RightSideNav />
      <main className="min-h-screen bg-slate-100 text-slate-900">
        <PrintResumeButton />

        <div className="print-container mx-auto max-w-5xl px-6 py-12 md:px-8 lg:py-16">

          <ProfileHeader />

          <IntroduceSection />

          <ExperienceSection />

          <ProjectSection />

          <SkillSection />

          <EducationSection />

          <TrainingSection />
          <Footer />
        </div>
      </main>
    </>

  );
}