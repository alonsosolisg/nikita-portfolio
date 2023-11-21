import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const IntroductionCarousel = () => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, rgba(62, 95, 180, 1), rgba(119, 98, 154, 1), rgba(162, 101, 134, 1), rgba(216, 104, 109, 1), rgba(241, 105, 97, 1), rgba(242, 92, 104, 0.95), rgba(243, 80, 111, 0.9), rgba(245, 65, 119, 0.83), rgba(247, 36, 135, 0.71))`,
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 10s ease infinite",
  };

  const [currentSlide, setCurrentSlide] = React.useState(1);

  return (
    <div className="py-20 transition-all">
      <h1
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          ...gradientStyle,
        }}
        className="mb-20 w-full font-black h-fit text-[50px] text-center custom-gradient"
      >
        My name is Nikita Eesmaa, I am 20 years old
      </h1>
      {currentSlide === 1 && (
        <div className="w-full select-none h-fit justify-center items-center gap-[95px] inline-flex">
          <img
            className="w-[450px] h-[450px] rounded-[25px]"
            src="/images/intro_1.png"
          />
          <div className="w-[571px] h-fit">
            <span className="text-text text-3xl font-black">
              I am currently a bachelor&apos;s student and will be spending an
              exchange semester in the Netherlands, Amsterdam.
            </span>
            <span className="text-text text-3xl font-normal font-['Avenir LT Std']">
              {" "}
            </span>
            <span className="text-text text-[28px] font-normal font-['Avenir LT Std']">
              I can describe my personal characteristics as a person who always
              tries to keep a positive attitude, I am also a very ambitious
              person, tolerant and decent. I consider my main qualities to be a
              passion for ideas to complete a task and complete it as
              efficiently as possible.
            </span>
          </div>
        </div>
      )}
      {currentSlide === 2 && (
        <div className="w-full select-none h-fit justify-center items-center gap-[93px] inline-flex">
          <div className="w-[598px] h-fit text-right">
            <span className="text-text text-3xl font-black font-['Avenir LT Std']">
              As a true workaholic, I believe that you should always be prepared
              for unexpected situations
            </span>
            <span className="text-text text-3xl font-normal font-['Avenir LT Std']">
              {" "}
            </span>
            <span className="text-text text-[28px] font-normal font-['Avenir LT Std']">
              and not lose heart even if it seems that everything is hopeless
              and go towards your goal or dream. My hobbies are golf and tennis,
              I used to go swimming, but because of problems with bleach, I gave
              up this sport. I like tennis because it develops strong
              concentration and the ability to react quickly, like golf, my
              favorite hobby.
            </span>
          </div>
          <img
            className="w-[450px] h-[450px] rounded-[25px]"
            src="/images/intro_2.png"
          />
        </div>
      )}
      {currentSlide === 3 && (
        <div className="w-full select-none h-fit justify-center items-center gap-[82px] inline-flex">
          <img
            className="w-[450px] h-[450px] rounded-[25px]"
            src="/images/intro_3.png"
          />
          <div className="w-[563px] h-fit">
            <span className="text-text text-3xl font-black font-['Avenir LT Std']">
              I like to enjoy the process of the game for me.
            </span>
            <span className="text-text text-3xl font-normal font-['Avenir LT Std']">
              {" "}
            </span>
            <span className="text-text text-[28px] font-normal font-['Avenir LT Std']">
              This is an opportunity to escape from problems and find solutions
              to some situations. I have experience in organizing sporting
              events as an Executive Supervisor in the Organizing Committee of
              the International Equestrian Federation (FEI) Estonia.{" "}
            </span>
          </div>
        </div>
      )}

      {currentSlide === 4 && (
        <div className="w-full select-none h-fit justify-center items-center gap-[85px] inline-flex">
          <div className="w-[598px] h-fit text-right">
            <span className="text-text text-3xl font-black font-['Avenir LT Std']">
              I also worked as a Coordinator in a logistics company and have a
              specialized education with international accreditation
            </span>
            <span className="text-text text-3xl font-normal font-['Avenir LT Std']">
              {" "}
            </span>
            <span className="text-text text-[28px] font-normal font-['Avenir LT Std']">
              from the Estonian Association of Supply Chain Management issued in
              2022. My skills are the quick resolution of conflict situations,
              good communication skills, analytical thinking, and creativity. My
              main gap is the difficulty in making plans and managing time; it
              is very difficult for me to perform several actions in one second.
            </span>
          </div>
          <img
            className="w-[450px] h-[450px] rounded-[25px]"
            src="/images/intro_4.png"
          />
        </div>
      )}
      <div className="w-full text-accent flex justify-center gap-3 mt-8">
        <FaCircleChevronLeft
          onClick={() => {
            if (currentSlide === 1) {
              setCurrentSlide(4);
            } else {
              setCurrentSlide(currentSlide - 1);
            }
          }}
          className="w-7 h-7 cursor-pointer hover:scale-105"
        />
        <FaCircleChevronRight
          onClick={() => {
            if (currentSlide === 4) {
              setCurrentSlide(1);
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          }}
          className="w-7 h-7 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default IntroductionCarousel;
