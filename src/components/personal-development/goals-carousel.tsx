import React from "react";
import Header from "../reusable/header";
import Carousel from "../reusable/carousel";

const GoalsCarousel = ({
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
    <div className="py-20 transition-all">
      <Header
        content={
          <div>
            Learning goals: SMART <br /> Learning Goals Explanation
          </div>
        }
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Carousel
        textColor="text"
        content={[
          {
            image: "/images/smart-1.png",
            text1:
              "I want to improve my time management skills to increase my productivity and reduce stress in both my personal and professional life.",
            text2:
              "Specifically, I struggle with procrastination and ineffective task prioritization, I plan to measure my progress by maintaining a daily time log for the next three months. This log will help me identify time-wasting habits and monitor how well I stick to schedules. Additionally, I will aim to complete tasks within set timeframes and track the number of tasks accomplished.",
          },
          {
            image: "/images/smart-2.png",
            text1:
              "To achieve this, I will invest time in learning and applying time management techniques.",
            text2:
              "I'll attend a time management workshop, and seek guidance from a time management coach. I'll set aside 15 minutes each day for time management reflection and planning. Developing strong time management skills is vital for my future goals, as it will significantly enhance my productivity and help me maintain a healthier work-life balance.",
          },
          {
            image: "/images/smart-3.png",
            text1:
              "It aligns with my career aspirations and will make me a more effective and reliable professional. I plan to actively work on my time management skills over the next three months, with specific milestones set for each month.",
            text2:
              "After three months, I'll evaluate my progress and make necessary adjustments. In the long term, I will continue to apply these improved time management skills to excel in my current position and achieve my career objectives.",
          },
          {
            image: "/images/smart-4.png",
            text1:
              "Over the next months, I will develop and refine my event organization skills and theoretical knowledge to become a more proficient event planner.",
            text2:
              "To achieve this, I will identify and target key areas for improvement in event planning and theoretical knowledge, such as budgeting, marketing, logistics, and risk management.",
          },
          {
            image: "/images/smart-5.png",
            text1:
              "This will help me in the future to be a more wanted employee in the labor market.",
            text2:
              "I aim to enhance my media skills to secure a fulfilling career in the dynamic field of events and promote myself as a potential employee. I'm particularly interested in improving my proficiency in production, graphic design, and content creation.",
          },
          {
            image: "/images/smart-6.png",
            text1:
              "I will set clear, monthly goals for skill improvement and document my progress through completed projects (developing my personal website).",
            text2:
              "I will allocate time each week for learning and practicing media skills, and I'll actively seek opportunities to apply my knowledge in real-world projects. Additionally, I will collaborate with industry professionals and mentors for guidance and advice.",
          },
          {
            image: "/images/smart-7.png",
            text1:
              "Enhancing my media skills is vital for my future career aspirations.",
            text2:
              "It aligns with my passion for creative content creation and will enable me to be competitive in the labor market by providing personal branding in a more advanced way and effective event design.",
          },
          {
            image: "/images/smart-8.png",
            text1:
              "Over the next months, I will increase my theoretical knowledge by reading management and organization process literature related to event planning.",
            text2:
              "I will actively seek mentorship from an experienced event planner to enhance my skills. I will set clear, monthly goals for skill improvement and document my progress through completed projects (developing my personal website).",
          },
          {
            image: "/images/smart-9.png",
            text1:
              "Additionally, I will collaborate with industry professionals and mentors for guidance and advice. ",
            text2:
              "Enhancing my media skills is vital for my future career aspirations. It aligns with my passion for creative content creation and will enable me to be competitive in the labor market due providing personal branding in a more advanced way and effective event design.",
          },
        ]}
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default GoalsCarousel;
