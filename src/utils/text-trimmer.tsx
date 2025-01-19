import React from "react";
import { Tooltip } from "react-tooltip";

interface TrimmedTextWithTooltipProps {
  text: string;
  maxLength?: number;
}

export const TrimmedTextWithTooltip: React.FC<TrimmedTextWithTooltipProps> = ({
  text,
  maxLength = 30,
}) => {
  const trimmedText = text.slice(0, maxLength) + "...";

  return (
    <>
      <span
        data-tooltip-id="user-table-trimmed-email-tooltip"
        data-tooltip-content={text}
      >
        {trimmedText}
      </span>
      <Tooltip
        id="user-table-trimmed-email-tooltip"
        place="bottom"
        opacity={1}
      />
    </>
  );
};
