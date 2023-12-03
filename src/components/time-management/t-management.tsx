import React from "react";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";
import Link from "next/link";

const TManagement = ({
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
    <div className="py-20">
      <Header
        content={"Learning Goals Development"}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/mandatory-5.png"
        text={
          <p>
            This assignment ensures that I can achieve my first learning goal:
            enhancing my time management skills by enrolling in a Time
            Management Course on LinkedIn Learning. This platform offers a
            convenient and accessible way to acquire valuable insights and
            practical strategies for effective time management. Through this
            course, I anticipate gaining a blend of theoretical knowledge and
            actionable techniques.
          </p>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-prod-1.png"
        backgroundColor="primary"
        textColor="accent"
        text={
          <p>
            Engaging with the Time Management Course on LinkedIn Learning not
            only aligns with my goal but also provides a unique opportunity to
            leverage the networking aspects of the platform. By actively
            participating in relevant discussions, connecting with professionals
            who excel in time management, and staying abreast of industry
            trends, I aim to create a holistic learning experience. This
            strategic use of LinkedIn enhances the educational journey, offering
            not only course content but also real-world insights and advice from
            seasoned professionals who have successfully mastered the art of
            time management.
          </p>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Header
        content={"Learning Goals Development"}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-prod-1.png"
        backgroundColor="primary"
        textColor="accent"
        text={
          <div className="mt-8">
            <p className=" font-bold mb-4">
              Imagine what you could accomplish with an extra 10 hours each
              week. Seems like a far-fetched idea?
            </p>
            <p className="mb-4">
              Enter productivity expert Dave Crenshaw&apos;s course, where he
              unveils the secrets to achieving more in less time, granting you
              that elusive extra free time. The course not only establishes the
              theoretical foundations of productivity but also delves into
              practical strategies for overcoming obstacles. (LinkedIn Learning
              2023.)
            </p>

            <p className=" font-bold mb-4">
              Crenshaw&apos;s teachings are structured around three main areas
              of productivity enhancement.
            </p>
            <p className="mb-4">
              Firstly, he guides you on developing habits to declutter your
              workspace and foster organizational skills. Next, he explores
              methods to stay mentally focused, eliminating those floating
              to-dos from your mind. Finally, the course instructs on creating a
              time budget, ensuring maximum efficiency during your workday and
              prioritizing your most valuable activities. (LinkedIn Learning
              2023.)
            </p>

            <p className=" font-bold mb-4">
              If you&apos;ve been on the lookout for effective strategies to
              streamline your time management, this course is a valuable
              investment. Here are the learning objectives:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>1. Discover the principles of time management.</li>
              <li>
                2. Identify why switchtasking is an ineffective work method.
              </li>
              <li>3. Create a more focused schedule and workspace.</li>
            </ul>

            <p className="mb-4">
              Taking online courses is a practical method for acquiring
              theoretical knowledge. I, for instance, enrolled in the &quot;Time
              Management Fundamentals&quot; course to enhance my time management
              skills. The course, comprising an introduction, 10 chapters, and a
              conclusion.
            </p>

            <p className="mb-4">
              Upon completing the course, I gained valuable information on how
              to manage my time, how to keep a work-life balance, and how to be
              stress-resilient. To validate my completion, I received a
              certificate for the &quot;Time Management Fundamentals&quot;
              course.
            </p>
          </div>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/mandatory-5.png"
        text={
          <div className=" mt-8">
            <p className="mb-4">
              Each section during the course, I needed to complete the quiz to
              ensure that the information provided in the course was understood,
              and I got it.
            </p>

            <div className="border-t border-gray-300 mt-6 pt-6">
              <p className="text-lg font-bold mb-2">Lecturer:</p>
              <p className="mb-4">
                Dave Crenshaw
                <span className="block text-sm text-gray-500">
                  Author and Leadership Coach specializing in productive
                  leadership
                </span>
              </p>
            </div>

            <p className="mb-4">
              I took a total of 11 quizzes, and I needed to get 76% correct on
              each quiz to pass the course.
            </p>
          </div>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/mandatory-5.png"
        text={
          <div className=" mt-8">
            During the course, I completed about 9 tasks to master the
            theoretical basis in practice analyze my level of chaos in time
            management and correct the situation.
          </div>
        }
        textColor="accent"
        backgroundColor="primary"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/mandatory-5.png"
        text={
          <div className=" mt-8">
            Example of Assignment In this assignment, I had to draw up a work
            schedule in such a way that my time would be allocated to work and
            to my personal life. The purpose of the assignment was to maintain a
            balance between work and personal life. I also took tests to
            identify results in improving productivity and devoted approx. 5
            hours a week of time management processes.
          </div>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/mandatory-5.png"
        text={
          <div className="mt-8">
            On the other hand, the Lecturer gives advice to take some of his
            optional Tip&apos;s videos. To get the full scope of knowledge, I
            watched about 10 videos with tips on how to better cope with stress
            and how to use time correctly with maximum productivity. At the end
            of the course, there was an exam of about 35 questions that had to
            be answered correctly by 65%, In the end, I successfully passed the
            exam and received a certificate of completion of the course with
            international accreditation.
          </div>
        }
        textColor="accent"
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-mandatory-1.png"
        text={
          <div className="mt-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Theoretical Foundations
              </h2>
              <p className="mb-4">
                The course begins by laying a solid theoretical foundation,
                delving into the principles of time management. It explores the
                concept that effective time management is not merely about
                squeezing more tasks into a day but involves prioritizing and
                allocating time to activities that align with overarching goals.
                Crenshaw emphasizes the importance of distinguishing between
                tasks that are urgent and those that are truly important,
                drawing on the Eisenhower Matrix as a conceptual tool.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Course Structure and Content
              </h2>
              <p className="mb-4">
                Structured across an introduction, 10 chapters, and a
                conclusion, the course navigates participants through three
                fundamental pillars of productivity enhancement. It commences
                with insights on developing habits to declutter workspaces,
                fostering organizational skills that serve as a cornerstone for
                efficient time management. Participants learn to create a
                conducive work environment that minimizes distractions and
                optimizes focus.
              </p>
              <p className="mb-4">
                The subsequent section of the course explores methods to stay
                mentally focused, addressing the pitfalls of switchtasking is a
                concept introduced in the course. Switchtasking, as elucidated
                by Crenshaw, involves rapidly shifting attention between tasks,
                leading to reduced efficiency and increased stress. The course
                educates participants on the detriments of this practice and
                provides alternatives to maintain a concentrated workflow.
              </p>
              <p className="mb-4">
                Finally, the course guides participants in creating a time
                budget, a strategic tool for allocating time to activities that
                yield the highest returns. This practical approach ensures
                maximum efficiency during the workday, emphasizing the
                importance of prioritizing tasks based on their value.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Learning Objectives and Practical Application
              </h2>
              <p className="mb-4">
                The outlined learning objectives - discovering time management
                principles, recognizing the ineffectiveness of switchtasking,
                and creating a focused schedule and workspace - underscore the
                practical application of the course. Participants engage in
                quizzes, tasks, and assignments, such as the creation of a
                balanced work schedule, reinforcing the theoretical concepts
                learned throughout the course.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Assessment and Certification
              </h2>
              <p className="mb-4">
                To gauge comprehension, participants are required to pass 11
                quizzes, each demanding a minimum of 76% correct answers. The
                inclusion of a final exam adds an additional layer of
                assessment, challenging participants to demonstrate a
                comprehensive understanding of the &quot;Time Management
                Fundamentals.&quot; Successful completion culminates in the
                attainment of a certificate, validating the participant&apos;s
                mastery of the course content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Instructor: Dave Crenshaw
              </h2>
              <p className="mb-4">
                As the course&apos;s instructor, Dave Crenshaw, an accomplished
                author and leadership coach specializing in productive
                leadership, imparts a wealth of expertise. His guidance aligns
                with contemporary theories on time management, emphasizing the
                symbiotic relationship between effective time utilization and
                achieving long-term objectives.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                (Optional Tips Videos)
              </h2>
              <p className="mb-4">
                Complementing the core content, optional Tips videos provide
                participants with additional insights on stress management and
                strategies for maximizing productivity. These videos contribute
                to a well-rounded understanding of time management, addressing
                the psychological and emotional aspects that can impact
                one&apos;s ability to manage time effectively.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Personal Experience</h2>
              <p className="mb-4">
                As a participant, the practical application of the course
                allowed for a tangible transformation in time management skills.
                The incorporation of theoretical concepts, combined with
                hands-on tasks and assessments, created a comprehensive learning
                experience. By dedicating approximately 5 hours per week to the
                time management processes, the course not only enhanced my
                ability to manage time but also fostered a sense of work-life
                balance and stress resilience.
              </p>
            </section>

            <p className="mb-4">
              The &quot;Time Management Fundamentals&quot; course provides an
              intricate tapestry of theoretical knowledge and practical
              application. Its structured approach, expert guidance, and
              emphasis on cultivating habits for efficient time management
              position it as a valuable investment. The course equips
              participants with the necessary tools to navigate the complexities
              of modern life, enabling them to achieve more in less time while
              fostering a sustainable and balanced lifestyle.
            </p>
          </div>
        }
        textColor="accent"
        backgroundColor="accent"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Header
        content="Reflection Analysis"
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-reflection-event-1.png"
        backgroundColor="accent"
        textColor="text"
        text={
          <div>
            <p>
              Embarking on the &quot;Time Management Fundamentals&quot; course
              was driven by a profound desire to reclaim control over my daily
              schedule, enhance productivity, and strike a harmonious balance
              between professional and personal spheres. As the course unfolded,
              it became evident that the insights gained would significantly
              contribute to achieving these goals. The theoretical foundations
              laid in the course provided a paradigm shift in how I perceive and
              approach time management. Understanding the principles of
              effective time allocation, as illuminated by Dave Crenshaw, has
              enabled me to transcend the mere completion of tasks and focus on
              those that truly propel me toward my overarching objectives. The
              introduction of the Eisenhower Matrix, in particular, has become a
              mental model guiding my daily decisions on task prioritization.
              The course&apos;s structured exploration of decluttering
              workspaces and fostering organizational habits has yielded
              tangible improvements in my daily workflow. I have implemented
              practical strategies to minimize distractions and create an
              environment conducive to sustained focus. The emphasis on mental
              focus and the dangers of switchtasking have prompted a
              reevaluation of my work habits, leading to a more concentrated and
              efficient approach to tasks. The creation of a time budget has
              proven to be a transformative tool. By systematically allocating
              time to high-value activities, I&apos;ve experienced a notable
              increase in productivity and a discernible reduction in the stress
              associated with overwhelming workloads. The course&apos;s
              practical application tasks, such as crafting a balanced work
              schedule, have served as hands-on exercises that reinforced the
              theoretical concepts, fostering a deeper understanding of their
              real-world applicability. Completing the quizzes and the final
              exam was not merely an assessment requirement but an opportunity
              to solidify my understanding of the course material. Achieving the
              76% benchmark on each quiz and successfully navigating the final
              exam affirmed my grasp of the time management fundamentals,
              instilling a newfound confidence in my ability to apply these
              principles in my daily life. Furthermore, Dave Crenshaw&apos;s
              optional Tips videos enriched my learning experience by providing
              additional insights into stress management and maximizing
              productivity. These supplementary resources, coupled with the core
              content, have equipped me with a comprehensive toolkit for
              navigating the challenges of time management in a holistic manner.
              In conclusion, the &quot;Time Management Fundamentals&quot; course
              has been instrumental in reshaping my approach to time,
              productivity, and work-life balance. The knowledge gained and the
              practical strategies implemented have translated into a tangible
              transformation in my daily routine. As I reflect on the journey
              through this course, I am not only equipped with a certificate of
              completion but, more importantly, with a set of skills and
              perspectives that will continue to shape my personal and
              professional life positively. And by doing so, I accomplished my
              SMART goal of improving my time management skills. Now I can say
              with all confidence that I have improved my time management skills
              and know how to use them in the future to achieve secondary and
              tertiary goals. (Link to the &quot;Time Management
              Fundamentals&quot; course and certificate) Look below:
            </p>
            <Link
              href="https://www.linkedin.com/learning/time-management-fundamentals-14548057/the-power-of-managing-your-time"
              target="_blank"
              className="underline"
            >
              Link to the &quot;Time Management Fundamentals&quot; course and
              certificate
            </Link>
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
          textColor="text"
          text={
            <div>
              Originally, I had planned around 15 hours to complete this
              assignment and was considering taking additional courses to reach
              the required number of hours. However, in the end, I was surprised
              when, during the course, a significant amount of tasks, exercises,
              and tests emerged and tips videos, required a substantial amount
              of time. In the end + Report, so overall I spent in a total of 30
              hours.
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

export default TManagement;
