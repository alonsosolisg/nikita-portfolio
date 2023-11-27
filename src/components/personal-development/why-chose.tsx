import React from "react";

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
        <div className="w-full py-8 h-fit justify-center items-center gap-11 inline-flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[597px] text-background text-3xl font-normal font-['Avenir LT Std']"
          >
            I have chosen the role of a producer in this course for several
            compelling reasons. As I embark on this journey, I recognize that
            being a producer is akin to being the linchpin in event
            organization, the spider in the web, orchestrating every intricate
            detail. This role demands accuracy, proactivity, efficiency, and a
            flexible, service-oriented mindset. Working alongside colleagues, a
            producer strives for nothing less than a flawless outcome, ensuring
            that attendees feel at home, with hospitality as the guiding
            principle.
          </div>
          <img
            onMouseEnter={imageEnter}
            onMouseLeave={imageLeave}
            className="w-[450px] h-[450px] rounded-[20px]"
            src="/images/whychoose-1.png"
          />
        </div>
        <div className="w-full py-8 h-fit flex-col justify-center items-center gap-[68px] inline-flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[1074px] text-justify text-background text-3xl font-normal font-['Avenir LT Std']"
          >
            The allure of being a producer lies in the ability to create
            remarkable events that stir emotions and leave people with
            goosebumps. The role doesn&apos;t shy away from hard work, even when
            friends are celebrating, because the true satisfaction comes from
            crafting exceptional experiences. A producer&apos;s responsibilities
            encompass organization, consultation, and problem-solving. In the
            face of unforeseen challenges, a producer excels at finding creative
            solutions. The role centers around the question of how to translate
            creative ideas into achievable actions. It also involves overseeing
            production planning and managing budgets.
          </div>
          <div className="w-[1081px] h-[560px] relative">
            <div className="w-[1057px] h-[530px] left-[24px] top-[30px] absolute bg-accent rounded-[20px]" />
            <img
              onMouseEnter={imageEnter}
              onMouseLeave={imageLeave}
              className="w-[1056px] h-[529px] left-0 top-0 absolute rounded-[20px]"
              src="/images/wide-whychoose-1.png"
            />
          </div>
        </div>
        <div className="w-full h-fit py-8 justify-center items-center gap-[77px] inline-flex">
          <img
            onMouseEnter={imageEnter}
            onMouseLeave={imageLeave}
            className="w-[450px] h-[450px] rounded-[20px]"
            src="/images/whychoose-2.png"
          />
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[566px] text-right text-background text-3xl font-normal font-['Avenir LT Std']"
          >
            What makes a producer stand out are a set of essential competencies,
            including creative thinking, stress resistance, strong communication
            skills, open-mindedness, technical insight, quick decision-making,
            independence, and a strong sense of responsibility. The versatility
            of the role is also intriguing. A producer can find a place in event
            agencies, festival organizations, or cultural-social organizations,
            each focusing on different aspects of the event industry, such as
            music, lifestyle, visual arts, dance, or film.
          </div>
        </div>
        <div className="w-full h-fit py-8 flex-col justify-center items-center gap-[115px] inline-flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[1072px] text-justify text-background text-3xl font-normal font-['Avenir LT Std']"
          >
            This broad spectrum provides room for specialization in sub-aspects
            of production, like &quot;crowd support,&quot; artist handling, and
            ticketing. Furthermore, a producer&apos;s work is not confined to
            the office; it spans both office-based planning and hands-on
            involvement at event locations. In my decision to pursue the role of
            a producer, I am attuned to the thriving growth within the event
            industry. This growth signifies a rising demand for well-trained
            event producers who possess in-depth knowledge of event approaches.
          </div>
          <div className="w-[1089px] h-[571px] relative">
            <div className="w-[1057px] h-[530px] left-[32px] top-[41px] absolute bg-red-400 rounded-[20px]" />
            <img
              onMouseEnter={imageEnter}
              onMouseLeave={imageLeave}
              className="w-[1068px] h-[534px] left-0 top-0 absolute rounded-[20px]"
              src="/images/wide-whychoose-2.png"
            />
          </div>
        </div>
        <div className="w-full py-8 h-fit justify-center items-center gap-11 inline-flex">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="w-[597px] text-background text-3xl font-normal font-['Avenir LT Std']"
          >
            By delving into this role, I aim to equip myself with the necessary
            expertise and insights for a future in the event industry. I am also
            eager to seek to find a job that will provide practical experience
            and deepen my understanding of the producer&apos;s role. I resonate
            with the inherent qualities a producer should possess and believe
            that I already possess several of these traits. This alignment
            between the role&apos;s requirements and my own characteristics
            makes it a compelling choice for my future endeavors in the event
            industry.
          </div>
          <img
            onMouseEnter={imageEnter}
            onMouseLeave={imageLeave}
            className="w-[450px] h-[450px] rounded-[20px]"
            src="/images/whychoose-3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
