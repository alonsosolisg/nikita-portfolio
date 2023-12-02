import React from "react";
import Header from "../reusable/header";
import WideParagraph from "../reusable/wide-paragraph";
import NarrowParagraph from "../reusable/narrow-paragraph";

const FreeChoicePlanning = ({
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
    <div className="py-16">
      <Header
        content={
          <div>
            Free Choice Assignment <br />& Planning
          </div>
        }
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="accent"
        image="/images/wide-free-choice-1.png"
        text="A primary objective of having a schedule is to attain a comprehensive view of your tasks, thereby promoting mental tranquility and boosting self-assurance. Additionally, a well-structured plan can serve as an antidote to procrastination, and it can be particularly valuable when dealing with issues related to discipline and concentration."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="secondary"
        image="/images/wide-free-choice-2.png"
        text="In the context of my minor in Event Experience, I've meticulously crafted a 11-week schedule that commences from week 5 (the start of the minor) and culminates in week 11 (the conclusion of the portfolio phase). This schedule accounts for the allocation of 280 hours, encompassing both mandatory assignments and optional tasks. Among these hours, I've apportioned 134 for the compulsory assignments and the portfolio itself, while reserving 116 hours for the elective assignments. Additionally, 30 hours have been earmarked for the weekly coaching sessions."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/free-choice.png"
        text="To monitor progress, I will create a schedule of work hours and a place to complete assigned tasks for each part of the task to develop the result. The coaching sessions require a base commitment of 2 hours per week, with additional hours contingent on the specific assignment's demands. The total hours allocated for each week are calculated within this framework, clearly indicating the activities that correspond to those hours. Portfolio: a total of 134 hours. Assignments: a total of 116 hours. Coaching sessions: total 30 hours."
        textColor="text"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default FreeChoicePlanning;
