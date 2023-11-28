import { Title } from "../components/Title";
import { Project } from "../components/Project";
import { Loading } from "../components/Loading";
import { useContext } from "react";
import { FetchContext } from "../contexts/FetchContext";

export function Work() {
  const { projects: fetchProjects, isFetching } = useContext(FetchContext);

  const staticProjects = [
    {
      repositoryPath: "https://github.com/joo-pss/portfolio-frontend",
      hasDeploy: false,
      deployPath: null,
      name: "My Personal Portfolio",
      description: `My portfolio is a full-stack web application developed with React and Express. It utilizes React Hook Form for form management, Zod for data validation, Nodemailer for email communication, Prisma to simplify database integration, and PostgreSQL as the database.`,
      technologies: ["TypeScript", "Express", "React", "PostgreSQL"],
    },
    {
      repositoryPath: "https://github.com/joo-pss/jwt-auth-nestjs",
      hasDeploy: false,
      deployPath: null,
      name: "JWT Authentication",
      description: `This NestJS API, developed in TypeScript, incorporates a JWT authentication system with login, registration, and private routes for user account management. PostgreSQL and Prisma serve as the database and ORM, respectively. Bcryptjs secures password hashing, Jest handles unit tests, and SWC optimizes compilation.`,
      technologies: ["NestJS", "TypeScript", "JWT", "Prisma", "Jest", "SWC"],
    },
  ];

  return (
    <>
      <Title text={["some things", "I've built"]} />
      <ul className="mb-8 flex flex-col gap-8">
        {staticProjects.map((project) => (
          <li key={project.repositoryPath}>
            <Project
              repositoryPath={project.repositoryPath}
              hasDeploy={project.hasDeploy}
              deployPath={project.deployPath}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
            />
          </li>
        ))}
      </ul>
      {isFetching ? (
        <Loading />
      ) : (
        <ul className="flex flex-col gap-8">
          {fetchProjects?.map((project) => (
            <li key={project.id}>
              <Project
                repositoryPath={project.repositoryPath}
                hasDeploy={project.hasDeploy}
                deployPath={project.deployPath}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
