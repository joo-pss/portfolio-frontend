export function Loading() {
  const divStyle = "h-[15rem] max-w-[38rem] rounded-lg bg-[#112240]/50";

  return (
    <div className="flex animate-pulse flex-col gap-8">
      <div className={divStyle}></div>
      <div className={divStyle}></div>
    </div>
  );
}
