import { FaFolder } from "react-icons/fa6";
import { TbBrandGithub, TbWorldShare } from "react-icons/tb";

export interface AnchorsProps {
  repositoryPath: string;
  hasDeploy: boolean;
  deployPath: string | null;
}

export function Anchors({
  repositoryPath,
  hasDeploy,
  deployPath,
}: AnchorsProps) {
  const anchorStyle = "duration-300 ease-in-out hover:text-teal-300";

  return (
    <div className="mb-4 flex items-center justify-between">
      <FaFolder className="text-5xl text-teal-300" />
      <div className="flex gap-3 text-[1.75rem]">
        <a href={repositoryPath} target="_blank" className={anchorStyle}>
          <TbBrandGithub />
        </a>
        {hasDeploy && (
          <a
            href={deployPath as string}
            target="_blank"
            className={anchorStyle}
          >
            <TbWorldShare />
          </a>
        )}
      </div>
    </div>
  );
}
