"use client"
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "VIDYAone IT Solutions",
      role: "Developer Intern",
      duration: "Apr 2025 - present",
      description:
        "Developing a live website with Next.js to provide full-stack, SEO-friendly solutions while adhering to industry norms such as Agile process and project management with JIRA.",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGdNFuDUmVqUQ/company-logo_100_100/company-logo_100_100/0/1709610837874?e=1752710400&v=beta&t=_BmNKzmgbTeXbV7kp_j2Cx8PtQvjHmJ0uFWlC_7krGY",
    },
    {
      company: "Decimal Technology",
      role: "App developer Intern",
      duration: "Nov 2024 - Apr 2025",
      description:
        " Developed applications using the company’s own development products, enhancing skills in building user-friendly and efficient solutions, Strengthened logic-building abilities and gained exposure to corporate workflows, improving problem-solving and adaptability.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEFNK3c9NtIgw/company-logo_100_100/B56ZWnj66FHQAQ-/0/1742272967657/decimaltech_logo?e=1752710400&v=beta&t=u2zJlqxzFa4c7MJCGyrxQFBAI90VRl5lrsBFHCy9lsU",
    },
    {
      company: "Baoiam Innovations Pvt Ltd",
      role: "Frontend Developer Intern",
      duration: "July 2024 - Oct 2024",
      description:
        " During my internship, I worked on a live project where I used React.js and Tailwind CSS to build a responsive and user-friendly UI, leading to a 35% increase in user engagement during early testing. I was also responsible for identifying and fixing UI issues to ensure a polished final product.",
      logo: "https://baoiam-undertesting.vercel.app/assets/logoLight-CdO4H5tM.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="exp" className="md:px-16 px-4 my-12">
      <div className="flex items-center gap-4 my-6">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h2 className="text-4xl font-semibold text-center">Experience Journey</h2>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>

      <motion.div
        className="relative mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-black"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:items-start" : "md:flex-row-reverse md:items-end"
            } md:justify-between md:gap-12`}
            variants={itemVariants}
          >
            <motion.div
              className={`md:w-1/2 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="bg-[#F2F2F2] rounded-xl shadow-md p-6 relative z-10">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-4 italic">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>

            <motion.div className="hidden md:flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white border border-black rounded-full z-20 flex items-center justify-center shadow-md cursor-pointer"
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
