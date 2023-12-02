import React from "react";
import Header from "../reusable/header";
import WideParagraph from "../reusable/wide-paragraph";
import NarrowParagraph from "../reusable/narrow-paragraph";

const WhatToAchieve = ({
  textEnter,
  textLeave,
  imageEnter,
  imageLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
  imageEnter: () => void;
  imageLeave: () => void;
}) => {
  return (
    <div className="py-10">
      <Header
        content={<div>What Do I want to achieve in 5 years?</div>}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="accent"
        image="/images/wide-achieve-1.png"
        text="In the coming five times, I am looking forward to a transformative
          trip that aligns with my unique rates and gests. At 20 times old, I am
          presently a bachelorette pupil, and I am thrilled about my exchange
          semester in the vibrant megacity of Amsterdam, Netherlands."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/achieve-1.png"
        text="I consider myself a person who always strives to maintain a positive
          station, and I carry a strong sense of ambition, along with rates like
          forbearance and decency. I believe in passionately pursuing my ideas
          and completing tasks as efficiently as possible. Being a true
          workaholic, I forcefully hold the belief that one should always be
          prepared for unanticipated challenges and should noway lose heart,
          indeed when the effects feel bleak."
        textColor="text"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/achieve-2.png"
        text="My pursuits, similar to golf and tennis, aren't just pastimes for
        me; they're avenues to develop strong attention, and quick
        responses, and find joy in the process of the game. My professional
        trip has formerly been relatively important. I have had the honor of
        organizing sporting events as an Administrative Supervisor in the
        Organizing Committee of the International Equestrian Federation( FEI)
        Estonia. I have also worked as a fellow in a logistics company."
        textColor="text"
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="secondary"
        image="/images/wide-achieve-2.png"
        text="My chops include quick conflict resolution, effective communication,
        logical thinking, and creativity. still, I fete that I face challenges
        in making plans and managing my time efficiently, which I intend to
        address. In the coming times, my particular pretensions are clear. I
        want to enhance my time operation chops and come more effective at
        prioritizing tasks. contemporaneously, I aim to ameliorate my
        professional chops and bolster my theoretical knowledge through
        farther education."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="primary"
        image="/images/wide-achieve-3.png"
        text="Looking ahead, I see a trip filled with ambition, positivity, and
        adaptability, guided by my unique rates and unwavering fidelity to
        growth. My story is one of particular development and ambition taking
        flight. So, watch this space, because I am determined to make the
        utmost of the coming five times and beyond. I also plan to continue
        working in the entertainment assiduity and explore new avenues in that
        direction. Taking this course in Amsterdam will help me expand my
        knowledge about event gests , which is a significant part of the
        entertainment assiduity I am passionate about."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default WhatToAchieve;
