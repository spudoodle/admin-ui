import { SearchIcon } from "@/utils/icons";
import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  onSearch,
}: InputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="max-w-[340px] w-full grid grid-cols-[0.15fr_1fr] group">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={handleKeyPress}
        className="w-full placeholder:text-[15px] min-h-[40px] tracking-[-0.5px] border border-gray-border pl-10 rounded-lg col-start-1 col-end-3 row-start-1 row-end-2 group-hover:border-primary-color focus:border-primary-color transition-colors duration-300  focus:outline-none"
      />
      <SearchIcon
        size={20}
        className="col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center pointer-events-none"
      />
    </div>
  );
};
