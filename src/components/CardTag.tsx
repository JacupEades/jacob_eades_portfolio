import React from "react";

type Props = { text: string; color: string };

function CardTag({ text, color }: Props) {
  return (
    <div
      className="flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  );
}

export default CardTag;
