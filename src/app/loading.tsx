import { CircularLoaderColored } from "@/components/loaders/circular-loader-colored";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CircularLoaderColored />
    </div>
  );
}
