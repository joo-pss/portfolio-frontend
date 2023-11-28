interface SubtitleProps {
  text: string;
}

export function Subtitle({ text }: SubtitleProps) {
  return (
    <h2 className="mb-5 flex items-center gap-4 text-xl text-slate-200">
      {text}
      <div className="mt-2 h-px flex-1 bg-teal-400/[0.15]"></div>
    </h2>
  );
}
