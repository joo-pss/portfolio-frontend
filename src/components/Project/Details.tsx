export interface DetailsProps {
  name: string;
  description: string;
}

export function Details({ name, description }: DetailsProps) {
  return (
    <div className="mb-5 flex flex-col gap-2">
      <span className="text-base text-slate-200">{name}</span>
      <p>{description}</p>
    </div>
  );
}
