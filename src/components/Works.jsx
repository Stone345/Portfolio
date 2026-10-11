import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
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
          onClick={(event) => onViewDetails(project, event.currentTarget)}
          className="mt-5 min-h-[44px] rounded-lg bg-[#915EFF] px-4 py-2 text-white font-medium hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          aria-label={`View details for ${name}`}
        >
          View details
        </button>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const trigger = triggerRef.current;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    dialog.querySelector("button").focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
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
            onViewDetails={(project, trigger) => {
              triggerRef.current = trigger;
              setSelectedProject(project);
            }}
          />
        ))}
      </div>

      {selectedProject && createPortal(
        <dialog
          ref={dialogRef}
          aria-modal="true"
          aria-labelledby="project-details-title"
          onCancel={() => setSelectedProject(null)}
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              const targets = dialogRef.current.querySelectorAll("button, [tabindex='0']");
              const first = targets[0];
              const last = targets[targets.length - 1];
              if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
              } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
              }
            }
          }}
          className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-black/80 p-4 open:flex items-center justify-center"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            tabIndex={0}
            aria-label="Project details content"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl bg-tertiary p-6 shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
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
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="min-h-[44px] min-w-[44px] shrink-0 rounded-lg px-3 py-1 text-2xl text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
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
        </dialog>,
        document.body
      )}
    </>
  );
};

const WorksSection = SectionWrapper(Works, "");
export default WorksSection;
