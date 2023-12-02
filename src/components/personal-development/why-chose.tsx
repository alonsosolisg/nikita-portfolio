import React from "react";
import WideParagraph from "../reusable/wide-paragraph";
import NarrowParagraph from "../reusable/narrow-paragraph";

const WhyChose = ({
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
    <div className="py-10 bg-pattern bg-opacity-40 flex justify-center items-center">
      <div className="bg-secondary p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-8 w-full font-black h-fit text-[50px] text-center text-background"
        >
          Why did I choose this role?
        </h1>
        <NarrowParagraph
          image="/images/whychoose-1.png"
          text="I have chosen the role of a producer in this course for several
        compelling reasons. As I embark on this journey, I recognize that
        being a producer is akin to being the linchpin in event
        organization, the spider in the web, orchestrating every intricate
        detail. This role demands accuracy, proactivity, efficiency, and a
        flexible, service-oriented mindset. Working alongside colleagues, a
        producer strives for nothing less than a flawless outcome, ensuring
        that attendees feel at home, with hospitality as the guiding
        principle."
          textColor="background"
          textPosition="left"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          backgroundColor="accent"
          image="/images/wide-whychoose-1.png"
          text="The allure of being a producer lies in the ability to create
        remarkable events that stir emotions and leave people with
        goosebumps. The role doesn't shy away from hard work, even when
        friends are celebrating, because the true satisfaction comes from
        crafting exceptional experiences. A producer's responsibilities
        encompass organization, consultation, and problem-solving. In the
        face of unforeseen challenges, a producer excels at finding creative
        solutions. The role centers around the question of how to translate
        creative ideas into achievable actions. It also involves overseeing
        production planning and managing budgets."
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/whychoose-2.png"
          text="What makes a producer stand out are a set of essential competencies,
          including creative thinking, stress resistance, strong communication
          skills, open-mindedness, technical insight, quick decision-making,
          independence, and a strong sense of responsibility. The versatility
          of the role is also intriguing. A producer can find a place in event
          agencies, festival organizations, or cultural-social organizations,
          each focusing on different aspects of the event industry, such as
          music, lifestyle, visual arts, dance, or film."
          textColor="background"
          textPosition="right"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          backgroundColor="primary"
          image="/images/wide-whychoose-2.png"
          text='This broad spectrum provides room for specialization in sub-aspects
          of production, like "crowd support," artist handling, and
          ticketing. Furthermore, a producer&apos;s work is not confined to
          the office; it spans both office-based planning and hands-on
          involvement at event locations. In my decision to pursue the role of
          a producer, I am attuned to the thriving growth within the event
          industry. This growth signifies a rising demand for well-trained
          event producers who possess in-depth knowledge of event approaches.'
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/whychoose-3.jpg"
          text="By delving into this role, I aim to equip myself with the necessary
          expertise and insights for a future in the event industry. I am also
          eager to seek to find a job that will provide practical experience
          and deepen my understanding of the producer's role. I resonate
          with the inherent qualities a producer should possess and believe
          that I already possess several of these traits. This alignment
          between the role's requirements and my own characteristics
          makes it a compelling choice for my future endeavors in the event
          industry."
          textColor="background"
          textPosition="left"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default WhyChose;
