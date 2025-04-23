import { PersonalInfo } from "@/types/cv";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header = ({ personalInfo }: HeaderProps) => {
  const {
    name,
    title,
    email,
    phone,
    location,
    website,
    linkedin,
    github,
    summary,
  } = personalInfo;

  return (
    <header className="mb-8 cv-header">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-slate-900">{name}</h1>
        <h2 className="text-xl text-blue-700 mt-1 font-normal">{title}</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-slate-700">
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 hover:text-blue-700"
          >
            <FaEnvelope className="text-blue-700" />
            {email}
          </a>
        )}

        {phone && (
          <a
            href={`https://wa.me/${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1 hover:text-blue-700"
          >
            <FaWhatsapp className="text-blue-700" />
            {phone}
          </a>
        )}

        {location && (
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-700" />
            {location}
          </span>
        )}

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-700"
          >
            <FaGlobe className="text-blue-700" />
            {website.replace(/^https?:\/\//, "")}
          </a>
        )}

        {linkedin && (
          <a
            href={`https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-700"
          >
            <FaLinkedin className="text-blue-700" />
            {linkedin.replace(/^https?:\/\//, "")}
          </a>
        )}

        {github && (
          <a
            href={`https://${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-700"
          >
            <FaGithub className="text-blue-700" />
            {github.replace(/^https?:\/\//, "")}
          </a>
        )}
      </div>

      <p className="text-slate-700 leading-relaxed text-center">{summary}</p>
    </header>
  );
};

export default Header;
