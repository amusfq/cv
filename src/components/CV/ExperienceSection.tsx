import { Experience } from "@/types/cv";
import { formatDate } from "@/utils/formatters";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {experience.position}
                </h3>
                <h4 className="text-md font-medium text-slate-700">
                  {experience.company}
                </h4>
              </div>

              <div className="text-sm text-slate-600 mt-1 sm:mt-0">
                <span>
                  {formatDate(experience.startDate)} -{" "}
                  {experience.endDate === "Present"
                    ? "Present"
                    : formatDate(experience.endDate)}
                </span>
                {experience.location && (
                  <span className="block sm:inline sm:before:content-['•'] sm:before:mx-1">
                    {experience.location}
                  </span>
                )}
              </div>
            </div>

            {experience.description && (
              <p className="text-slate-700 mb-3">{experience.description}</p>
            )}

            {experience.achievements.length > 0 && (
              <div className="mb-3">
                <h5 className="text-sm font-semibold text-slate-800 mb-2">
                  Key Responsibilities:
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  {experience.achievements.map((responsibility, idx) => (
                    <li key={idx} className="text-slate-700">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies.length > 0 && (
              <div className="mt-3">
                <h5 className="text-sm font-semibold text-slate-800 mb-2">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
