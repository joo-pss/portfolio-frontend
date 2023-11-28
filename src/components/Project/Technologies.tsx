export interface TechnologiesProps {
  technologies: string[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
