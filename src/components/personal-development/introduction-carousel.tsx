import React from "react";
import Header from "../reusable/header";
import Carousel from "../reusable/carousel";

const IntroductionCarousel = ({
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
    <div className="pb-20 pt-8 transition-all">
      <Header
        content={
          <div>
            Personal Development Plan: Introduction <br /> My name is Nikita
            Eesmaa, I am 20 years old
          </div>
        }
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Carousel
        content={[
          {
            image: "/images/intro_1.png",
            text1:
              "I am currently a bachelor's student and will be spending an exchange semester in the Netherlands, Amsterdam.",
            text2:
              "I can describe my personal characteristics as a person who always tries to keep a positive attitude, I am also a very ambitious person, tolerant and decent. I consider my main qualities to be a passion for ideas to complete a task and complete it as efficiently as possible.",
          },
          {
            image: "/images/intro_2.png",
            text1:
              "As a true workaholic, I believe that you should always be prepared for unexpected situations",
            text2:
              "and not lose heart even if it seems that everything is hopeless and go towards your goal or dream. My hobbies are golf and tennis, I used to go swimming, but because of problems with bleach, I gave up this sport. I like tennis because it develops strong concentration and the ability to react quickly, like golf, my favorite hobby.",
          },
          {
            image: "/images/intro_3.png",
            text1: "I like to enjoy the process of the game for me.",
            text2:
              "This is an opportunity to escape from problems and find solutions to some situations. I have experience in organizing sporting events as an Executive Supervisor in the Organizing Committee of the International Equestrian Federation (FEI) Estonia. ",
          },
          {
            image: "/images/intro_4.png",
            text1:
              "I also worked as a Coordinator in a logistics company and have a specialized education with international accreditation",
            text2:
              "from the Estonian Association of Supply Chain Management issued in 2022. My skills are the quick resolution of conflict situations, good communication skills, analytical thinking, and creativity. My main gap is the difficulty in making plans and managing time; it is very difficult for me to perform several actions in one second.",
          },
        ]}
        textColor="text"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default IntroductionCarousel;
