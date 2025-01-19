import React from "react";

export const CircularLoader = () => {
  return (
    <div className="relative w-5 h-5">
      <div className="absolute w-full h-full border-1 border-white/20 rounded-full"></div>
      <div
        className="absolute w-full h-full rounded-full animate-spin"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, transparent 10%, white 35%)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        }}
      ></div>
    </div>
  );
};
