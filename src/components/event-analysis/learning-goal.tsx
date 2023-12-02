import React from "react";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const LearningGoal = ({
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
        content="Learning Goal"
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/learning-goal.png"
        textColor="accent"
        textPosition="left"
        text="In this task, I want to conduct an analysis of the event in order to get a complete picture of the role of the Producer in the creation of events, as well as organizational processes, planning, and many other aspects of organizing the event. For this purpose, I completed tasks to analyze the Selected event."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <h2
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="mb-3 mt-8 w-full underline font-black h-fit text-[30px] text-center text-background"
      >
        Desk Research
      </h2>
      <WideParagraph
        image="/images/wide-desk.png"
        backgroundColor="primary"
        textColor="background"
        text={
          <div>
            The festival&apos;s dynamic atmosphere is yet another facet of its
            allure. As the day transitions into night, the festival evolves,
            offering a sense of adventure and wonder that keeps attendees
            engaged and enthralled. One of the most commendable aspects of
            Thuishaven Festival is its dedication to sustainability and
            eco-friendliness. The festival actively follows sustainable
            practices, including the use of eco-friendly materials, recycling,
            and encouraging attendees to return bottles and other items for
            reuse. This commitment to ecology and environmental responsibility
            adds another layer of significance to the festival, making it a
            conscientious and forward-thinking event. Thus, the Thuishaven
            Festival&apos;s status as one of the best festivals is well-earned.
            Its unique themes, diverse music, creative staging, immersive art,
            inclusivity, strong organization, reputation, dynamic atmosphere,
            and commitment to sustainability and eco-friendliness combine to
            create an event that stands out in the world of music and arts
            festivals. Thuishaven Festival is a testament to the power of
            creativity, diversity, and the enduring spirit of artistic
            innovation, all while preserving the planet for future generations.
          </div>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default LearningGoal;
