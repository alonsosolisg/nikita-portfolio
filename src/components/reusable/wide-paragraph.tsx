import Image from "next/image";
import React from "react";

const WideParagraph = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
  text,
  textColor,
  backgroundColor,
  image,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
  text: string | JSX.Element;
  textColor: string;
  backgroundColor: string;
  image: string;
}) => {
  return (
    <div className="w-full py-8 h-fit flex-col justify-center items-center gap-[68px] inline-flex">
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className={`w-[1074px] text-justify text-${textColor} text-3xl font-normal`}
      >
        {text}
      </div>
      <div className="w-[1081px] h-[560px] relative">
        <div
          className={`w-[1057px] h-[530px] left-[24px] top-[30px] absolute bg-${backgroundColor} rounded-[20px]`}
        />
        <Image
          onMouseEnter={imageEnter}
          onMouseLeave={imageLeave}
          className="w-[1056px] h-[529px] left-0 top-0 absolute rounded-[20px]"
          src={image}
          alt={image}
          width={1056}
          height={529}
        />
      </div>
    </div>
  );
};

export default WideParagraph;
