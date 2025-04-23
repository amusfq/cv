import { Project } from "@/types/cv";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {project.name}
              </h3>
            </div>

            <p className="text-slate-700 mb-2">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Visit Website
                </a>
              )}

              {project.github && (
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                  View Source Code
                </a>
              )}
            </div>

            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
