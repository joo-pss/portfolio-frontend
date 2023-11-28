import {
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiVitest,
  SiJest,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export function AboutMe() {
  const technologies = [
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Vitest", icon: <SiVitest /> },
    { name: "Jest", icon: <SiJest /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ];

  return (
    <div className="flex flex-col gap-5">
      <p>
        I'm a web developer currently residing in Portugal although my roots are
        from Brazil. My journey into the world of technology started a year ago.
        Ever since I have developed a strong passion for creating web solutions.
      </p>
      <p>
        My main programming language is TypeScript. I have primarily focused on
        back-end development. Additionally I also possess an understanding of
        front-end development.
      </p>
      <span>Some of the technologies I work with:</span>
      <ul className="my-1.5 grid w-full grid-cols-4 place-items-center gap-x-11 gap-y-8 min-[480px]:flex min-[480px]:justify-between min-[480px]:gap-0">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            className="group relative flex justify-center rounded-md bg-teal-400/10 p-2 text-[1.6rem] text-teal-300"
          >
            {technology.icon}
            <span className="invisible absolute top-full mt-1 rounded-md bg-teal-400/10 px-1.5 py-0.5 text-xs group-hover:visible">
              {technology.name}
            </span>
          </li>
        ))}
      </ul>
      <p>
        At this point in time I am excited to take the first step in my career
        by pursuing my opportunity, in the job market.
      </p>
    </div>
  );
}
