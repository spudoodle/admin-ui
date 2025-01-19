import React, { ReactElement } from "react";

interface PrimaryButtonProps {
  label: string | ReactElement;
  customClass?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({
  label,
  customClass,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`bg-primary-color text-white text-sm font-bold h-[48px] rounded-full shadow-[0_2px_15px_0px_#FF950040] flex items-center justify-center hover:bg-opacity-75 ${customClass}`}
      disabled={disabled}
      type="submit"
    >
      {label}
    </button>
  );
};
