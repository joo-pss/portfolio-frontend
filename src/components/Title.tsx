import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface TitleProps {
  text: string[];
}

export function Title({ text }: TitleProps) {
  const anchorStyle = `text-[1.7rem] text-slate-200 duration-300 ease-in-out hover:text-teal-300`;

  return (
    <div className="mb-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-slate-200">
        {text[0]} <span className="whitespace-nowrap">{text[1]}</span>
      </h1>
      <div className="ml-6 flex gap-5">
        <a
          href="https://github.com/joo-pss"
          target="_blank"
          className={anchorStyle}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joaopss255"
          target="_blank"
          className={anchorStyle}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
