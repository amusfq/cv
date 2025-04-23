import { Certificate } from "@/types/cv";
import { formatDate } from "@/utils/formatters";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

const CertificatesSection = ({ certificates }: CertificatesSectionProps) => {
  if (certificates.length === 0) return null;

  // Filter out expired certificates
  const currentDate = new Date();
  const validCertificates = certificates.filter((cert) => {
    if (!cert.expiryDate) return true;

    const [expiryYear, expiryMonth] = cert.expiryDate.split("-");
    const expiryDate = new Date(
      parseInt(expiryYear),
      parseInt(expiryMonth) - 1,
      1
    );

    return expiryDate > currentDate;
  });

  if (validCertificates.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
        Licenses & Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {validCertificates.map((cert, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900">
                {cert.name}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block ml-2 text-blue-600 hover:text-blue-700"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </h3>
              <p className="text-slate-700">{cert.issuer}</p>
              <p className="text-sm text-slate-600">
                Issued {formatDate(cert.issueDate)}
                {cert.expiryDate && (
                  <> · Expires {formatDate(cert.expiryDate)}</>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
