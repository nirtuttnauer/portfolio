import { SectionLinks } from "./SectionLinks";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <div className="md:fixed md:top-0 md:left-0 h-full md:w-1/4 p-10 text-white flex flex-col justify-between">
      {/* Header Content */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Nir Tuttnauer</h1>
        <p className="text-xl text-gray-400 mb-6">Full Stack Developer</p>
        <p className="text-gray-300 leading-6">
          I build <span className="text-primary">web applications</span>,{" "}
          <span className="text-primary">mobile applications</span>,{" "}
          <span className="text-primary">ML solutions</span>, and{" "}
          <span className="text-primary">DevOps solutions</span>.
        </p>

        {/* Section Links */}
        <div className="mt-10">
          <SectionLinks />
        </div>
      </div>

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
}