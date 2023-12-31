import { edu } from "@data/edu.js";
import SkillSet from "./SkillSet";
import { skills } from "@data/skills.js";
const Education = () => {
  return (
    <section
      id="education"
      className="mt-8 max-w-full scroll-mt-24 px-8 lg:mt-16 lg:px-16"
    >
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Education & Skills
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
        <div className="pt-4">
          <p className="indent-4 text-lg leading-8 lg:text-xl">{edu.desc}</p>
          <div className="flex items-center justify-center p-4 grayscale ">
            <img src={edu.certificate} alt="certificate" />
          </div>
        </div>
        <ul className=" divide-y divide-slate-700 dark:divide-slate-300">
          {skills.map((skill, index) => (
            <SkillSet skillSet={skill} index={index} key={skill.title} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
