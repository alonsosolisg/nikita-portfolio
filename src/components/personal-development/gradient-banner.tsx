import React from "react";

const GradientBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/mesh-gradient.png)",
      }}
      className="w-full my-10 font-avenir h-[601px] flex-col justify-center items-center gap-2.5 inline-flex"
    >
      <div className="w-[1090px] text-center">
        <span className="text-text text-[45px] font-normal font-['Avenir LT Std']">
          My personal{" "}
        </span>
        <span className="text-text text-[45px] font-black font-['Avenir LT Std']">
          goals
        </span>
        <span className="text-text text-[45px] font-normal font-['Avenir LT Std']">
          {" "}
          are to develop a better{" "}
        </span>
        <span className="text-text text-[45px] font-black font-['Avenir LT Std']">
          time management ability
        </span>
        <span className="text-text text-[45px] font-normal font-['Avenir LT Std']">
          {" "}
          to prioritize and work on improving my{" "}
        </span>
        <span className="text-text text-[45px] font-black font-['Avenir LT Std']">
          professional skills
        </span>
        <span className="text-text text-[45px] font-normal font-['Avenir LT Std']">
          {" "}
          and to develop and strengthen my{" "}
        </span>
        <span className="text-text text-[45px] font-black font-['Avenir LT Std']">
          theoretical skills
        </span>
        <span className="text-text text-[45px] font-normal font-['Avenir LT Std']">
          {" "}
          through this course.
        </span>
      </div>
    </div>
  );
};

export default GradientBanner;
