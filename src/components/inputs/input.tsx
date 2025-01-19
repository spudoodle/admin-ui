"use client";

import classNames from "classnames";

interface InputProps {
  id: string;
  label: string;
  type: string;
  error?: boolean;
  errorMessage?: string;
  handleChange?: (value: string | ((prevState: string) => string)) => void;
}

export const Input = ({
  id,
  label,
  type,
  error,
  errorMessage,
  handleChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 group">
      <label htmlFor={id} className="font-medium text-xs text-primary-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={classNames({
          "h-[44px] bg-white border rounded-lg text-[15px] text-primary-black transition-colors duration-300  focus:outline-none px-4":
            true,
          "border-error-red group-hover:border-error-red focus:border-error-red":
            error,
          "border-gray-border group-hover:border-primary-color focus:border-primary-color":
            !error,
        })}
        onChange={(e) => handleChange?.(e.target.value)}
      />
      {error && <p className="text-error-red text-xs -mt-1">{errorMessage}</p>}
    </div>
  );
};
