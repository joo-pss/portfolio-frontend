import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col rounded-lg border border-teal-400/10 bg-[#112240]/50 p-8 shadow-lg">
      {children}
    </div>
  );
}
