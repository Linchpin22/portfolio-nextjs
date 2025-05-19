"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPython, FaDatabase,FaGithub } from 'react-icons/fa'
import { SiTailwindcss,SiNextdotjs,SiJira } from 'react-icons/si'
import { motion } from 'framer-motion'

const skills = [
    { name: 'HTML', icon: <FaHtml5 size={72} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt  size={72} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs size={72}  className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact size={72}  className="text-cyan-400" /> },
    { name: 'Next', icon: <SiNextdotjs size={72}  className="" /> },
    { name: 'Figma', icon: <FaFigma  size={72} className="text-pink-500" /> },
    { name: 'Python', icon: <FaPython size={72}  className="text-blue-400" /> },
    { name: 'SQL', icon: <FaDatabase size={72}  className="text-indigo-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={72}  className="text-sky-400" /> },
    { name: 'Jira', icon: <SiJira  size={72} className="text-indigo-400" /> },
    { name: 'Github', icon: <FaGithub size={72}  className="text-black" /> },
]
const SkillMarquee = () => (
  <div className="overflow-hidden relative py-8">
    <motion.div
      className="flex gap-12 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 18,
        ease: 'linear',
      }}
      style={{ willChange: 'transform' }}
    >
      {[...skills, ...skills].map((skill, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="flex flex-col items-center min-w-[120px] px-4"
        >
          <div className="text-5xl mb-2 drop-shadow-lg">{skill.icon}</div>
          <span className="text-lg font-semibold">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
)

const Slider = () => {
  return (
    <div >
<SkillMarquee />
    </div>
  );
};

export default Slider;
