import React from "react";

const NarrowParagraph = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
  text,
  textColor,
  image,
  textPosition,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
  text: string | JSX.Element;
  textColor: string;
  image: string;
  textPosition: "left" | "right";
}) => {
  return (
    <div
      className={`w-full py-8 h-fit justify-center items-center gap-11 inline-flex ${
        textPosition === "left" ? "flex-row" : "flex-row-reverse"
      } `}
    >
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`w-[597px] text-${textColor} text-3xl font-normal ${
          textPosition === "left" ? "text-left" : "text-right"
        }`}
      >
        {text}
      </div>
      <img
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
        className="w-[450px] h-[450px] rounded-[20px]"
        src={image}
      />
    </div>
  );
};

export default NarrowParagraph;
