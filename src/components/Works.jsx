import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project, onViewDetails }) => {
  const { name, description, tags, image } = project;
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`AI-generated concept illustration for ${name}; not an actual application screenshot`}
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <p className="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-[11px] text-white">
            AI-generated concept
          </p>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="mt-5 rounded-lg bg-[#915EFF] px-4 py-2 text-white font-medium hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          aria-label={`View details for ${name}`}
        >
          View details
        </button>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects reflect my ongoing work in accounting automation,
          cybersecurity, and personal software development. Select a project
          to learn more about its goals and current status.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            project={project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-tertiary p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#aaa6c3]">{selectedProject.status}</p>
                <h3 id="project-details-title" className="text-2xl font-bold text-white">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="rounded-lg px-3 py-1 text-2xl text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                ×
              </button>
            </div>
            <p className="mt-4 text-secondary">{selectedProject.description}</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-secondary">
              {selectedProject.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#aaa6c3]">
              This image is an AI-generated concept illustration, not an actual screenshot of the application.
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
