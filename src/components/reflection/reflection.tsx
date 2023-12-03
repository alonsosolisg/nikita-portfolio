import React from "react";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const ReflectionMain = ({
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
        content={"Reflection"}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/reflection-1.png"
        text={
          <p>
            My journey of this Event Experience course, I set out with a clear
            Personal Development Plan, complete with SMART goals to guide my
            academic and personal growth. The subsequent reflections on the
            diverse assignments and experiences encapsulated in this portfolio
            reveal a transformative journey across various domains, offering a
            comprehensive view of my accomplishments and insights gained.
          </p>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="mix-blend-difference bg-background my-10">
        <WideParagraph
          image="/images/wide-reflection.png"
          backgroundColor="primary"
          textColor="accent"
          text={
            <p>
              The analysis of the Thuishaven Festival stands as a testament to
              the depth and thoroughness of my exploration into event
              management. Delving beyond the superficial aspects, I approached
              the festival analysis with curiosity and dedication. The freedom
              to shape the analysis uniquely allowed me to view the event from
              the producer&apos;s perspective, emphasizing essential elements
              for a nuanced understanding. The journey into video analyses
              served as a pivotal step, providing insights into the
              producer&apos;s role and the complexities of organizing
              large-scale events. The firsthand accounts gathered through expert
              interviews with Denis Chirkovskiy and Jelena Sbitneva enriched my
              understanding of the equestrian world&apos;s event organization.
              Challenges faced during the FEI Equestrian Championship, such as
              gaining approval and securing sponsors, showcased the resilience
              and determination essential in such roles. And of course, in
              another sense, it was very important to show yourself as a
              specialist so that the portfolio would have value, so the next
              step was to carry out personal branding The Personal Branding
              assignment marked a transformative journey aimed at presenting
              myself as a specialist. The creation of a positive persona, a
              captivating PR video, and a thoughtful logo became instrumental in
              shaping a comprehensive representation of my professional
              identity. Each element was meticulously chosen to convey
              authenticity, expertise, and a celebration of diversity. The
              intentional use of colors in the logo, particularly the Art-Deco
              Brown Gold scheme, communicated sophistication and reliability.
              The alignment of personal branding goals with the assignments
              undertaken reflected not only a showcase of skills but a conscious
              effort to improve and project a positive and enthusiastic outlook.
              The resulting portfolio, with a simple and straightforward CV, now
              serves as a key tool for professional engagement and networking.
              After completing the required assignments, I began to fulfill my
              goals, which I set for myself at the very beginning of this
              semester, my 3 goals were to improve time management and media
              skills, and ultimately also expand my knowledge in management and
              management within companies, thereby my a portfolio provides a
              certain meaning aimed at obtaining theoretical knowledge and
              subsequently using this knowledge in practice. Completing these
              tasks was a time-consuming and complex process that was definitely
              not easy because at the very beginning I had difficulties with
              time management and planning in general, so my first task was to
              improve my time management skills so that I could continue to work
              productively on the rest of the tasks. The Time Management
              Fundamentals course emerged as a transformative tool in reshaping
              my approach to time, productivity, and work-life balance. The
              theoretical foundations, practical strategies, and hands-on
              exercises, including the creation of a time budget, significantly
              improved my daily workflow. The course was not just an academic
              endeavor; it instilled confidence in my ability to apply time
              management principles effectively. Practical application tasks,
              such as crafting a balanced work schedule, served as hands-on
              exercises that reinforced the theoretical concepts, fostering a
              deeper understanding of their real-world applicability. Achieving
              the 76% benchmark on quizzes and successfully navigating the final
              exam affirmed my grasp of time management fundamentals, instilling
              newfound confidence. In the process of completing the time
              management course, I was also engaged in studying literature and
              gaining theoretical knowledge in management and organizational
              behavior within organizations, which in turn was necessary to
              fulfill my second smart goal of expanding theoretical knowledge in
              business management, reading this book definitely expanded my
              knowledge and helped to understand the organizational process in a
              broader sense. The book&apos;s insights into global challenges,
              crisis management, information technology, and shifts in work
              relationships broadened my comprehension of the intricate workings
              within organizations. At the outset, I set the task of improving
              my media skills, culminating in the creation of a website coded
              entirely from scratch. This hands-on experience, coupled with
              theoretical knowledge and the reading of a programming book,
              provided invaluable work experience. The positive outcome
              reaffirmed my SMART goal&apos;s accomplishment, indicating not
              only technical proficiency but also gained confidence in applying
              theoretical knowledge in practice. As I reflect on this extensive
              and enriching journey, I see a multifaceted individual equipped
              with a holistic understanding of event management, personal
              branding, time management, organizational behavior, and media
              skills. The Personal Development Plan and SMART goals were not
              mere academic exercises but strategic roadmaps guiding me toward a
              more refined version of myself.
            </p>
          }
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
      <NarrowParagraph
        image="/images/reflection-2.png"
        text={
          <p>
            This portfolio is not just a testament to my achievements but a
            blueprint for continuous learning and development. The person I am
            today embraces challenges, values growth, and seeks excellence in
            all endeavors. Moving forward, I carry not just knowledge but a
            mindset that fosters resilience, creativity, and a strategic
            outlook, ready to tackle new challenges in the ever-evolving
            landscape of my chosen fields. The journey may have reached this
            milestone, but the path of exploration and growth continues, with
            each experience contributing to the multifaceted tapestry of my
            evolving identity.
          </p>
        }
        textColor="accent"
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default ReflectionMain;
