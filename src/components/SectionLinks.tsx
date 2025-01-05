import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function SectionLinks() {
  const links = {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  };

  const router = useRouter();

  // State to manage active link
  const [activeLink, setActiveLink] = useState<string | null>(
    router.asPath.split("#")[1] || null
  );

  useEffect(() => {
    // Update activeLink whenever the route changes
    const handleRouteChange = (url: string) => {
      const hash = url.split("#")[1] || null;
      setActiveLink(hash);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Set initial active link when the component mounts
    handleRouteChange(router.asPath);

    // Cleanup listener on component unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const handleClick = (key: string) => {
    setActiveLink(key); // Update activeLink state on click
    router.push(`#${key}`); // Navigate to the hash
  };

  return (
    <ul className="space-y-4 text-sm font-mono">
      {Object.entries(links).map(([key, label]) => (
        <li key={key}>
          <button
            onClick={() => handleClick(key)}
            className="flex items-center space-x-2 group"
          >
            <motion.div
              className="w-5 h-5"
              animate={{
                width: activeLink === key ? 100 : 20,
                height: 20,
                backgroundColor: activeLink === key ? "#ffffff" : "#a1a1a1",
              }}
              whileHover={{
                width: 100,
                height: 20,
                backgroundColor: "#e5e5e5",
              }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            />
            <p
              className={`text-gray-400 group-hover:text-white ${
                activeLink === key ? "text-white font-bold" : ""
              }`}
            >
              {label}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
}