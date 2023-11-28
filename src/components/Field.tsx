import { ReactNode } from "react";
import { TbExclamationCircle } from "react-icons/tb";

interface FieldProps {
  children: ReactNode;
  htmlFor: string;
  labelText: string;
  hasError: boolean;
  errorMessage?: string;
}

export function Field({
  children,
  htmlFor,
  labelText,
  hasError,
  errorMessage,
}: FieldProps) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={htmlFor}
        className="absolute -top-3 left-2 bg-[#101c35] px-1 text-slate-200"
      >
        {labelText}
      </label>
      {hasError && (
        <div className="mt-2 flex items-center gap-1.5 text-teal-300">
          <TbExclamationCircle className="mt-[1px]" />
          <span className="text-xs">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
