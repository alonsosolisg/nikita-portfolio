import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const Carousel = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
  content,
  textColor,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
  content: {
    image: string;
    text1: string;
    text2: string;
  }[];
  textColor: string;
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(1);

  return (
    <div>
      {content.map((item, index) => (
        <div
          key={index}
          className={` ${index + 1 === currentSlide ? "flex" : "hidden"} ${
            (index + 1) % 2
              ? "text-left flex-row"
              : "text-right flex-row-reverse"
          }  w-full select-none h-fit justify-center items-center gap-[95px] text-${textColor}`}
        >
          <img
            onMouseEnter={imageEnter}
            onMouseLeave={imageLeave}
            className="w-[450px] h-[450px] rounded-[25px]"
            src={item.image}
          />
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[571px] h-fit"
          >
            <span className="text-3xl font-black">{item.text1}</span>
            <span className="text-3xl font-normal"> </span>
            <span className="text-[28px] font-normal">{item.text2}</span>
          </div>
        </div>
      ))}

      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="w-full text-accent flex justify-center gap-3 mt-8"
      >
        <FaCircleChevronLeft
          onClick={() => {
            if (currentSlide === 1) {
              setCurrentSlide(content.length);
            } else {
              setCurrentSlide(currentSlide - 1);
            }
          }}
          className="w-7 h-7 hover:scale-125"
        />
        <FaCircleChevronRight
          onClick={() => {
            if (currentSlide === content.length) {
              setCurrentSlide(1);
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          }}
          className="w-7 h-7 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Carousel;
