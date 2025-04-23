import { useCV } from "@/data/useCV";
import Header from "@/components/CV/Header";
import SkillsSection from "@/components/CV/SkillsSection";
import ExperienceSection from "@/components/CV/ExperienceSection";
import EducationSection from "@/components/CV/EducationSection";
import ProjectsSection from "@/components/CV/ProjectsSection";
import CertificatesSection from "@/components/CV/CertificatesSection";

const ViewCV = () => {
  const { cv } = useCV();

  return (
    <div className="w-full max-w-[21cm] mx-auto md:my-4 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden print:shadow-none print:border-0 print:max-w-full">
      <div className="p-8 print:p-0">
        <Header personalInfo={cv.personalInfo} />
        <SkillsSection skillCategories={cv.skillCategories} />
        <ExperienceSection experiences={cv.experiences} />
        <EducationSection education={cv.education} />
        <ProjectsSection projects={cv.projects} />
        <CertificatesSection certificates={cv.certificates} />
      </div>
    </div>
  );
};

export default ViewCV;
