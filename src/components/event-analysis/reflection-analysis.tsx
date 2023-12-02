import React from "react";
import Header from "../reusable/header";
import WideParagraph from "../reusable/wide-paragraph";

const ReflectionAnalysis = ({
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
        content="Reflection Analysis"
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-reflection-event-1.png"
        backgroundColor="accent"
        textColor="background"
        text={
          <div>
            I am satisfied with the thoroughness and comprehensiveness of the
            analysis I carried out on the Thuishaven Festival. I made good use
            of the time and effort I put into this research and the freedom I
            had to shape the analysis allowed me to explore the subject matter
            in a unique manner. Through this analysis, I learned to view an
            event from the perspective of a producer, focusing on the essential
            elements to avoid a superficial assessment I delved into video
            analyses to gain a deeper understanding of the producer&apos;s role.
            The more I explored different materials and films, the more my
            curiosity about the producer&apos;s role in event organization grew.
            This event analysis offered valuable insights into the intricacies
            of organizing a large-scale event and the pivotal role played by
            producers. In future event analyses, I plan to incorporate field
            research to glean additional insights and personal stories from
            producers. These firsthand accounts provide a rich and authentic
            perspective on their profession, the event, and the industry. This
            experience has not only expanded my understanding of event
            management but has also ignited my passion to explore the untold
            stories and experiences behind the scenes in even greater depth. At
            the beginning of this minor, I established three distinct learning
            objectives to hone my time management skills and expand my knowledge
            in event management. The event analysis project has been
            instrumental in realizing my second learning goal. Specifically, my
            aim was to gain a deeper understanding of the role of a producer
            within the event management field. This project has shed light on
            the producer&apos;s responsibilities, the time commitments involved,
            the collaborative dynamics, and the career progression required to
            attain such a role.
          </div>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="mt-10">
        <Header
          content="Time Registration"
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-reflection-event-2.png"
          backgroundColor="primary"
          textColor="background"
          text={
            <div>
              I invested a total of 42 hours in completing my event analysis.
              Presented below is a schematic representation of my time
              allocation. The left side displays the week numbers, and beneath
              that, the days of the week. It delineates the weekly breakdown of
              the hours I dedicated to my event analysis.
            </div>
          }
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default ReflectionAnalysis;
