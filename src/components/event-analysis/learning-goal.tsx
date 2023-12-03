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
            In researching the Thuishaven Festival and its related topics, I
            conducted a thorough investigation using a range of reputable
            sources. These sources included databases i used different
            databases. To ensure a comprehensive exploration, I employed
            specific keywords such as &quot;Thuishaven Festival,&quot;
            &quot;event organization,&quot; and &quot;music festivals.&quot;
            These keywords were used in varying combinations to encompass a wide
            spectrum of pertinent information. And also I watched a Documentary
            film about the Thuishaven Festival and how this festival is
            organized from backstage. In addition to these initial searches, I
            implemented a snowball method by scrutinizing the references of the
            sources I identified. This approach allowed me to uncover additional
            materials and perspectives related to the Thuishaven Festival and
            the event management industry.
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
