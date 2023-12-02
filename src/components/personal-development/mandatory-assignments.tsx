import React from "react";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const MandatoryAssignments = ({
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
    <div className="py-10 bg-pattern-2 bg-opacity-40 flex justify-center items-center">
      <div className="bg-text p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-8 w-full font-black h-fit text-[50px] text-center text-background"
        >
          Mandatory Assignments
        </h1>
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 w-full underline font-black h-fit text-[30px] text-start text-background"
        >
          Event Analysis
        </h2>
        <WideParagraph
          backgroundColor="accent"
          image="/images/wide-mandatory-1.png"
          text="The producer's primary focus lies in overseeing the central production phase of the event, encompassing aspects like logistics, technological requirements, necessary permits, and more. This entails an in-depth examination of the production components, along with providing recommendations for future actions. "
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/mandatory-1.png"
          text={
            <div>
              <ul className="list-disc list-inside mb-4">
                <div className="mb-4">
                  For the event analysis, I looked at an event where:
                </div>
                <li>I was visited and observed.</li>
                <li>Which I enjoyed as a guest</li>
                <li>Type of Festival (Music etc.) that I&apos;m passionate.</li>
              </ul>
              Event Name: Thuishaven Festival <br />
              Organizers: Job Cederhout, Jordi van der Heij, Kasper Jorissen and
              Ilian Klinkhamer.
            </div>
          }
          textColor="background"
          textPosition="left"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/mandatory-2.png"
          text=" To analyze this festival, I will adhere to a general market analysis, a general description of the event based on my own experience, and study the production phase of the event, technological aspects, necessary licenses, descriptions of producer elements, and also give advice for the future."
          textColor="background"
          textPosition="right"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 w-full underline font-black h-fit text-[30px] text-start text-background"
        >
          Expert Interview
        </h2>
        <WideParagraph
          backgroundColor="primary"
          image="/images/wide-mandatory-2.png"
          text="The task at hand involves the student conducting an interview with a seasoned professional in their specific role. The goal is to create a comprehensive portrait of a producer, encompassing their responsibilities, tasks, essential qualities, knowledge, and expertise."
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 w-full underline font-black h-fit text-[30px] text-start text-background"
        >
          In selecting the expert for the interview, I sought someone who:{" "}
        </h2>
        <NarrowParagraph
          image="/images/mandatory-3.png"
          text={
            <div>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Holds the position of a producer or responsible for the task
                  same as a producer.
                </li>
                <li>
                  Is affiliated with an organization where I worked before.
                </li>
                <li>
                  Boasts substantial experience within their field and the
                  industry.
                </li>
              </ul>
              Name of Organization: Equestrian Sport Center OU <br />
              Name of Expert: Jelena Sbitneva, Denis Chirkovskiy (Producer)
            </div>
          }
          textColor="background"
          textPosition="left"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 w-full underline font-black h-fit text-[30px] text-end text-background"
        >
          Personal Branding
        </h2>
        <NarrowParagraph
          image="/images/mandatory-4.png"
          text="The task at hand requires the student to craft a personal representation and generate materials for potential career opportunities. This endeavor should embody creativity, manifesting in various forms such as an inventive CV, a persona profile, or a captivating PR video. The assignment calls for me, as a budding professional, to craft a vivid self-portrait and create assets tailored for future career opportunities. This task encourages a creative approach, allowing for the creation of distinctive materials such as an imaginative CV, a captivating PR video, or a personalized persona profile.
          "
          textColor="background"
          textPosition="right"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          backgroundColor="secondary"
          image="/images/wide-mandatory-3.png"
          text="In my case, I've decided to create a persona profile as part of my personal branding strategy. My primary goal is to ensure that this profile authentically reflects my professionalism, creativity, and practicality. Through this persona profile, I intend to offer a snapshot of my current life stage, highlighting my unique strengths. The imperative of standing out among a sea of applicants is clear to me. Upon researching my industry, I've observed a shift in the preferences of many organizations. They now seek more than just the conventional motivation letter and CV. Recognizing this, I'm taking the initiative to develop a persona profile. This persona profile will be a valuable addition when I submit my applications, alongside my CV and motivation letter."
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 w-full underline font-black h-fit text-[30px] text-start text-background"
        >
          Choices & Approach
        </h2>
        <NarrowParagraph
          image="/images/mandatory-5.png"
          text="I chose web design for creating a website because I personally consider it very important. A website can be a valuable asset for me in the future, helping me find employers and promote my personal brand. In my country, having your own website is highly regarded. Additionally, I believe that creating a website will allow me to develop my skills in coding and graphic design."
          textColor="background"
          textPosition="left"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          backgroundColor="primary"
          image="/images/wide-mandatory-4.png"
          text="I also chose a brown and gold color scheme for the Persona because it symbolizes elegance, confidence, and stability to me, all of which describe my personality. In marketing, these are also excellent colors. For mandatory tasks, I selected website design for personal branding because it aligns with my goals of personal development and future promotion through the website. I am also interested in creating a PR video and personal information. For optional tasks, I opted for a time management course, studying personnel management literature to enhance my skills in event organization, writing an essay about read literature, and further developing my website creation skills by creating my own website to boost my personal brand."
          textColor="background"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/mandatory-6.png"
          text="I believe these tasks will help me grow as an individual, unlock my professional potential, and enable me to handle everyday responsibilities better. All of this will make me a more capable worker who can effectively plan their time, promote their professional brand, and enhance their skills in management and event organization in the future."
          textColor="background"
          textPosition="right"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default MandatoryAssignments;
