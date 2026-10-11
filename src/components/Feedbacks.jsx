import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const principles = [
  {
    title: "Human Oversight",
    description: "I design AI-assisted workflows so people review and approve important outputs before they become final actions or published knowledge.",
  },
  {
    title: "Security by Design",
    description: "I prioritize access controls, separation of sensitive information, and safe handling of unsupported requests.",
  },
  {
    title: "Build, Test, Improve",
    description: "I use prototypes and simulated environments to validate ideas, document limitations, and improve systems incrementally.",
  },
];

const Feedbacks = () => (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My approach</p>
        <h2 className={styles.sectionHeadText}>How I Build.</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          variants={fadeIn("", "spring", index * 0.5, 0.75)}
          className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
        >
          <h3 className="text-white font-bold text-[22px]">{principle.title}</h3>
          <p className="mt-4 text-secondary text-[16px] leading-7">{principle.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const FeedbacksSection = SectionWrapper(Feedbacks, "");
export default FeedbacksSection;
