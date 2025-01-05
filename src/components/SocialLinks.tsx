import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="flex flex-row items-center space-x-6 mt-10">
      {/* GitHub */}
      <Link
        href="https://github.com/nirtuttnauer"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaGithub className="text-2xl text-gray-400 group-hover:text-primary transition-colors duration-300" />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/nir-tuttnauer/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <FaLinkedin className="text-2xl text-gray-400 group-hover:text-primary transition-colors duration-300" />
      </Link>
    </div>
  );
}