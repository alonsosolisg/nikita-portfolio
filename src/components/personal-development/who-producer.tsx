import React from "react";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const WhoProducer = ({
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
    <div className="py-10 bg-primary">
      <h1
        className="mb-8 w-full font-black h-fit text-[50px] text-center text-text"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Who is a Producer and why do I <br /> think that I belong to this role?
      </h1>
      <NarrowParagraph
        image="/images/whoprod-1.png"
        text="Choosing to be a producer in the event industry is a decision rooted in the recognition of the dynamic and growing nature of this field. The role of a producer is multifaceted demanding a diverse set of skills and qualities to orchestrate successful events. A producer is not merely an organizer but a problem solver, a creative thinker, and a crucial link in ensuring that the vision of an event is translated into a tangible and awe-inspiring experience for the audience."
        textColor="text"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="secondary"
        image="/images/wide-whoprod-1.png"
        text="The role requirements for a producer highlight the need for accuracy, proactivity, efficiency, flexibility, and a strong service orientation. It is emphasized that a producer plays a central role in creating a perfect result, ensuring that people feel at home and that hospitality is paramount. The ability to move people and evoke emotions is a key aspect of the job, and the producer's satisfaction is derived from the success of the event rather than adhering to a traditional work schedule."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/whoprod-2.png"
        text="Competencies expected from a producer encompass a range of skills, including creative thinking, stress resistance, strong communication, open-mindedness, idea formulation, technical insight, quick decision-making, independence, and responsibility. These competencies underscore the diverse challenges a producer may encounter, from handling unforeseen situations creatively to converting creative ideas into actionable plans."
        textColor="text"
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        backgroundColor="accent"
        image="/images/wide-whoprod-2.png"
        text="The decision to pursue the role of a producer is driven by a strategic understanding of the industry's growth and the increasing demand for skilled professionals. This decision reflects a desire to acquire knowledge about the intricacies of the role and gain practical experience. Aligning with the identified competencies, I  recognize that possess several qualities necessary for success in this role. My motivation is not only to contribute to the growth of the event industry but also to find personal satisfaction in a career that demands a unique blend of creativity, problem-solving, and organizational skills."
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default WhoProducer;
