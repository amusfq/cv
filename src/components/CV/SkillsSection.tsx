import { SkillCategory } from "@/types/cv";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block px-2 py-0.5 bg-blue-50 text-slate-800 text-sm rounded-md border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
