import { motion } from "framer-motion";
import Image from "next/image";
// SectionTitle Component
export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-5xl text-primary font-mono font-bold mb-12">{title}</h2>
  );
}

// CellTitle Component
export function CellTitle({ title }: { title: string }) {
  return (
    <h3 className="text-2xl text-teal-400 font-semibold mb-2 group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
  );
}

// CellDates Component
export function CellDates({
  dates,
  startDate,
  endDate,
}: {
  dates?: string;
  startDate?: string;
  endDate?: string;
}) {
  if (!dates && !startDate && !endDate) return null;

  return (
    <div className="text-gray-500 mb-4 text-sm">
      {dates ?? `${startDate} - ${endDate}`}
    </div>
  );
}

// CellTechnologies Component
export function CellTechnologies({
  techStack,
  technologies,
}: {
  techStack?: string;
  technologies?: string;
}) {
  if (!techStack && !technologies) return null;

  const renderTech = (techString: string, prefix: string) =>
    techString.split(",").map((tech, idx) => (
      <span
        key={`${prefix}-${idx}`}
        className="px-3 py-1 text-sm bg-teal-100 text-teal-600 rounded-full"
      >
        {tech.trim()}
      </span>
    ));

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techStack && renderTech(techStack, "techStack")}
      {technologies && renderTech(technologies, "technologies")}
    </div>
  );
}

export function Cell({
  item,
  title,
  isProject,
}: {
  item: any;
  title: string;
  isProject?: boolean;
}) {
  return (
    <motion.div
      className="group my-8 p-6 rounded-lg shadow-lg transition-colors duration-300"
      whileHover={{
        scale: 1.05,
        border: "white",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Title */}
      <CellTitle title={title} />

      {/* Dates */}
      <CellDates
        dates={item?.dates}
        startDate={item?.startDate}
        endDate={item?.endDate}
      />

      {/* Description and Image Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Description Block */}
        {item.description && (
          <div className="flex-1">
            <p className="text-gray-400 leading-7">{item.description}</p>
          </div>
        )}

        {/* Image Block */}
        {isProject && item.image && (
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title || "Project image"}
              layout="responsive"
              width={300}
              height={200}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        )}
      </div>

      {/* Tech Stack / Technologies */}
      <CellTechnologies
        techStack={item?.techStack}
        technologies={item?.technologies}
      />
    </motion.div>
  );
}

// Section Component
export default function Section({
  title,
  data,
}: {
  title: string;
  data: any[];
}) {
  const isProjectSection = title.toLowerCase() === "projects";

  return (
    <section id={title.toLowerCase()} className="py-20 px-10 md:px-20">
      {/* Section Title */}
      <SectionTitle title={title} />

      {/* Section Cells */}
      {data.map((item, index) => (
        <Cell
          key={index}
          item={item}
          title={item.title || title}
          isProject={isProjectSection}
        />
      ))}
    </section>
  );
}
