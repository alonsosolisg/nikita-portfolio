import React from "react";

const WhatToAchieve = () => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, rgba(62, 95, 180, 1), rgba(119, 98, 154, 1), rgba(162, 101, 134, 1), rgba(216, 104, 109, 1), rgba(241, 105, 97, 1), rgba(242, 92, 104, 0.95), rgba(243, 80, 111, 0.9), rgba(245, 65, 119, 0.83), rgba(247, 36, 135, 0.71))`,
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 10s ease infinite",
  };
  return (
    <div className="py-10">
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          ...gradientStyle,
        }}
        className="mb-8 w-full font-black h-fit text-[50px] text-center custom-gradient"
      >
        What Do I want to achieve in 5 years?
      </h1>
      <div className="w-full py-8 h-fit flex-col justify-center items-center gap-[68px] inline-flex">
        <div className="w-[1074px] text-justify text-text text-3xl font-normal font-['Avenir LT Std']">
          In the coming five times, I am looking forward to a transformative
          trip that aligns with my unique rates and gests. At 20 times old, I am
          presently a bachelorette pupil, and I am thrilled about my exchange
          semester in the vibrant megacity of Amsterdam, Netherlands.
        </div>
        <div className="w-[1081px] h-[560px] relative">
          <div className="w-[1057px] h-[530px] left-[24px] top-[30px] absolute bg-pink-600 rounded-[20px]" />
          <img
            className="w-[1056px] h-[529px] left-0 top-0 absolute rounded-[20px]"
            src="/images/wide-achieve-1.png"
          />
        </div>
      </div>
      <div className="w-full py-8 h-fit justify-center items-center gap-11 inline-flex">
        <div className="w-[597px] text-text text-3xl font-normal font-['Avenir LT Std']">
          I consider myself a person who always strives to maintain a positive
          station, and I carry a strong sense of ambition, along with rates like
          forbearance and decency. I believe in passionately pursuing my ideas
          and completing tasks as efficiently as possible. Being a true
          workaholic, I forcefully hold the belief that one should always be
          prepared for unanticipated challenges and should noway lose heart,
          indeed when the effects feel bleak.
        </div>
        <img
          className="w-[450px] h-[450px] rounded-[20px]"
          src="/images/achieve-1.png"
        />
      </div>
      <div className="w-full h-fit py-8 justify-center items-center gap-[77px] inline-flex">
        <img
          className="w-[450px] h-[450px] rounded-[20px]"
          src="/images/achieve-2.png"
        />
        <div className="w-[566px] text-right text-text text-3xl font-normal font-['Avenir LT Std']">
          {" "}
          My pursuits, similar to golf and tennis, aren&apos;t just pastimes for
          me; they&apos;re avenues to develop strong attention, and quick
          responses, and find joy in the process of the game. My professional
          trip has formerly been relatively important. I have had the honor of
          organizing sporting events as an Administrative Supervisor in the
          Organizing Committee of the International Equestrian Federation( FEI)
          Estonia. I have also worked as a fellow in a logistics company.{" "}
        </div>
      </div>
      <div className="w-full h-fit py-8 flex-col justify-center items-center gap-[91px] inline-flex">
        <div className="w-[1068px] text-justify text-text text-3xl font-normal font-['Avenir LT Std']">
          My chops include quick conflict resolution, effective communication,
          logical thinking, and creativity. still, I fete that I face challenges
          in making plans and managing my time efficiently, which I intend to
          address. In the coming times, my particular pretensions are clear. I
          want to enhance my time operation chops and come more effective at
          prioritizing tasks. contemporaneously, I aim to ameliorate my
          professional chops and bolster my theoretical knowledge through
          farther education.
        </div>
        <div className="w-[1089px] h-[562px] relative">
          <div className="w-[1057px] h-[530px] left-[32px] top-[32px] absolute bg-blue-800 rounded-[20px]" />
          <img
            className="w-[1068px] h-[534px] left-0 top-0 absolute rounded-[20px]"
            src="/images/wide-achieve-2.png"
          />
        </div>
      </div>
      <div className="w-full h-fit py-8 flex-col justify-center items-center gap-[115px] inline-flex">
        <div className="w-[1072px] text-justify text-text text-3xl font-normal font-['Avenir LT Std']">
          Looking ahead, I see a trip filled with ambition, positivity, and
          adaptability, guided by my unique rates and unwavering fidelity to
          growth. My story is one of particular development and ambition taking
          flight. So, watch this space, because I am determined to make the
          utmost of the coming five times and beyond. I also plan to continue
          working in the entertainment assiduity and explore new avenues in that
          direction. Taking this course in Amsterdam will help me expand my
          knowledge about event gests , which is a significant part of the
          entertainment assiduity I am passionate about.
        </div>
        <div className="w-[1089px] h-[571px] relative">
          <div className="w-[1057px] h-[530px] left-[32px] top-[41px] absolute bg-red-400 rounded-[20px]" />
          <img
            className="w-[1068px] h-[534px] left-0 top-0 absolute rounded-[20px]"
            src="/images/wide-achieve-3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatToAchieve;
