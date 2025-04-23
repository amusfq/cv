import { Education } from "@/types/cv";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
        Education
      </h2>

      <div className="space-y-5">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {edu.institution}
                </h3>
                <h4 className="text-md font-medium text-slate-700">
                  {edu.degree} in {edu.field}
                </h4>
              </div>

              <div className="text-sm text-slate-600 mt-1 sm:mt-0">
                {edu.startDate} - {edu.endDate}
              </div>
            </div>

            {edu.description && (
              <p className="text-slate-700">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
