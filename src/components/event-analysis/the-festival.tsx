import React from "react";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const TheFestival = ({
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
    <div className="bg-pattern-3 py-10 bg-opacity-40 flex justify-center items-center">
      <div className="bg-background p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
        <Header
          content={"What Is Thuishaven Festival?"}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/festival-1.png"
          textColor="primary"
          textPosition="left"
          text="Thuishaven Festival is a highly regarded and distinctive cultural phenomenon based in Amsterdam, the Netherlands. Translated as 'home port' in English, Thuishaven encapsulates a sense of belonging and adventure that goes beyond the conventional music festival. What sets this event apart is not only its rich and diverse musical program but also its immersive, ever-evolving themes and settings."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-festival-1.png"
          backgroundColor="secondary"
          textColor="accent"
          text="Thuishaven typically unfolds on Sundays, ushering in the warmer seasons, and extends its creative embrace from spring through to autumn. The festival unfolds within a vast, dynamic, and industrial space that undergoes remarkable transformations to become a temporary sanctuary for lovers of music, art, and entertainment. The masterminds behind Thuishaven are a collective of artistic visionaries and event organizers who have successfully created a festival experience that is both extraordinary and eclectic. The festival's founders and organizers possess a unique ability to curate events that transport attendees to a different world with each gathering."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/festival-2.png"
          textColor="primary"
          textPosition="right"
          text="At the heart of the Thuishaven Festival is a deep commitment to the arts, particularly electronic music. This event showcases a curated selection of both established and emerging artists, spanning various electronic music genres. Whether it's techno, house, or other electronic subgenres, the festival's stages resonate with the rhythms and beats that define contemporary electronic music. Attendees can expect an extensive and diverse musical landscape that evolves as the day progresses into a mesmerizing night."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-festival-2.png"
          backgroundColor="accent"
          textColor="accent"
          text="The festival is not just about music; it's a holistic sensory experience. Alongside the musical performances, visitors can immerse themselves in striking art installations that transform the venue into an otherworldly space. Additionally, a delectable array of food stalls caters to the culinary desires of festivalgoers. Thuishaven Festival boasts a strong sense of community and inclusivity, attracting an international audience. The organizers continuously strive to evolve and adapt, ensuring that each event is a fresh and captivating journey for all in attendance. Thuishaven was established in 2013 by Job Cederhout, Jordi van der Heij, Kasper Jorissen and Ilian Klinkhamer, who organized events at the location. The events were only held in good weather conditions and only on Sundays."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/festival-3.png"
          textColor="primary"
          textPosition="left"
          text="This new concept was a great success; this allowed the organization to buy a circus tent from a pensioned circus boss and made events in the winter possible. These events got the name the 'Wintercircus'. Thuishaven is located in an industrial area that is surrounded by big oil tankers, incoming industrial trains, scrap metal yards and heavy industry. Altogether, Thuishaven has an industrial aesthetic combined with a circus-like feel. (Thuishaven 2023,)"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <div className="w-full text-start">
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="mb-3 w-fit underline font-black h-fit text-[30px] text-start text-secondary"
          >
            Location & Facilities
          </h2>
        </div>
        <WideParagraph
          image="/images/wide-festival-3.png"
          backgroundColor="primary"
          textColor="accent"
          text="Thuishaven is in an industrial area (Amsterdam) which is surrounded by big oil tankers, incoming industrial trains, scrap metal yards and heavy industry. Altogether, Thuishaven has an industrial aesthetic combined with a circus-like feel. (Thuishaven 2023,). Thuishaven consist of six areas, which are the Mainstage, loods, circus tent, kas, barhuis and cafe. The main stage is 4500 square meters, surrounded by metal art pieces, rusty walls, and a food/drink bar with terras. The circus tent might be the signature area of Thuishaven; this area is provided with amazing lights consisting of 92 led-strips, its bar and a DJ-booth. The loods is where the heaviest techno or house music is being played. This area consists of a three-segment industrial shed with a dance floor, bar, and lounge area where people can rest. The kas is mostly used in the winter; it’s a 500 square meter greenhouse-like building that replaces the main stage in the winter. (Thuishaven 2023)."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <h2
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="mb-3 mt-4 w-fit underline font-black h-fit text-[30px] text-start text-secondary"
        >
          Why is the Thuishaven Festival one of the best festivals?{" "}
        </h2>
        <NarrowParagraph
          image="/images/festival-4.png"
          textColor="primary"
          textPosition="right"
          text="In the vibrant landscape of music and arts festivals, the Thuishaven Festival stands as a beacon of creativity, diversity, and innovation. This Amsterdam-based event has earned its reputation as one of the best festivals for a multitude of reasons, and its commitment to sustainability and eco-friendliness is a vital part of its identity. At the heart of Thuishaven's allure lies its commitment to delivering an experience that is nothing short of exceptional. The festival's distinctive themes, ever-evolving and carefully curated, transform each event into an immersive and imaginative world of its own."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/festival-5.png"
          textColor="primary"
          textPosition="left"
          text="The festival's diverse musical programming is another cornerstone of its success. It offers a musical journey that spans a broad spectrum of electronic music genres, featuring both established and emerging artists. This diversity caters to the tastes of a wide range of electronic music enthusiasts, making it a celebration of musical inclusivity. One cannot discuss Thuishaven without delving into the realm of aesthetics. The festival's organizers are renowned for their commitment to designing and decorating the event space with a meticulous eye for detail. The result is a visually stunning and captivating environment that complements the music and adds an artistic dimension to the experience."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-festival-4.png"
          backgroundColor="text"
          textColor="accent"
          text="Art is not confined to installations at Thuishaven; it is woven into the fabric of the festival. Attendees are treated to a visual feast, with art installations and visual experiences enhancing the overall atmosphere. The fusion of music and art creates an environment where creativity knows no bounds. Inclusivity is a core value at Thuishaven Festival. It is a place where the sense of community and belonging is palpable. Attendees from all walks of life come together to share in the magic of the festival, making it a welcoming and memorable event for all who attend. Behind the scenes, the festival's organizers demonstrate exceptional skill in creating a seamless and enjoyable experience. Their meticulous attention to detail, combined with their dedication to crafting unique themes, contributes significantly to the festival's success. Thuishaven Festival has garnered a strong reputation over the years, both locally and internationally. It has become a must-visit event on the Amsterdam cultural scene, drawing a dedicated following of music and arts enthusiasts."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-festival-5.png"
          backgroundColor="primary"
          textColor="accent"
          text="The festival's dynamic atmosphere is yet another facet of its allure. As the day transitions into night, the festival evolves, offering a sense of adventure and wonder that keeps attendees engaged and enthralled. One of the most commendable aspects of Thuishaven Festival is its dedication to sustainability and eco-friendliness. The festival actively follows sustainable practices, including the use of eco-friendly materials, recycling, and encouraging attendees to return bottles and other items for reuse. This commitment to ecology and environmental responsibility adds another layer of significance to the festival, making it a conscientious and forward-thinking event. Thus, the Thuishaven Festival's status as one of the best festivals is well-earned. Its unique themes, diverse music, creative staging, immersive art, inclusivity, strong organization, reputation, dynamic atmosphere, and commitment to sustainability and eco-friendliness combine to create an event that stands out in the world of music and arts festivals. Thuishaven Festival is a testament to the power of creativity, diversity, and the enduring spirit of artistic innovation, all while preserving the planet for future generations."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default TheFestival;
