import React from "react";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const TargetGroup = ({
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
    <div className="bg-primary py-16">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className=" font-black h-fit text-[50px] text-center text-background"
      >
        Target Group
      </h1>
      <NarrowParagraph
        image="/images/target-1.png"
        textColor="background"
        textPosition="right"
        text="In the world of event production, understanding the demographics and target audience is a pivotal aspect that shapes the success and essence of a festival. Thuishaven Festival, celebrated for its creative and diverse offerings, stands as a testament to the significance of knowing one's audience.  Thuishaven Festival draws a diverse range of attendees, but it predominantly attracts a youthful audience around 18-27 years old also you can find people from more older generations."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/target-2.png"
        textColor="background"
        textPosition="left"
        text="The festival's age group typically spans from late teens to early thirties. This demographic choice is a deliberate one, reflecting the festival's vibrant and dynamic atmosphere. The youthful energy is infectious, lending itself to the ever-evolving spirit of the event, keeping it in tune with emerging trends and diverse tastes. Music Enthusiasts At its core, the Thuishaven Festival is a sanctuary for music enthusiasts. The festival's musical programming spans a broad spectrum of electronic music genres, making it a haven for those who share a deep passion for music. "
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-target-1.png"
        backgroundColor="accent"
        textColor="background"
        text="Whether it's techno, house, or any other electronic subgenre, the festival's musical diversity caters to a wide range of musical preferences. Art and Culture Lovers! Beyond the music, Thuishaven places art and culture at the forefront. The festival's immersive art installations and visual experiences cater to attendees with a keen appreciation for creativity. Those who seek the harmonious fusion of artistic expressions with music find themselves immersed in a world of inspiration. Thuishaven Festival transcends geographical boundaries. It draws both local attendees from various parts of the Netherlands and international visitors who journey to Amsterdam to partake in the festivities. This mix of local and global perspectives enriches the cultural tapestry of the event, fostering a sense of global unity and diversity. Sustainability and eco-friendliness are central pillars of the Thuishaven Festival. The commitment to eco-friendly practices, including recycling and reducing its ecological footprint, appeals to individuals who value environmental responsibility. It's a testament to the festival's ethos of responsible event production."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-target-2.png"
        backgroundColor="secondary"
        textColor="background"
        text="Community Seekers, A palpable sense of community and belonging permeates the festival. Those seeking connections and shared experiences with like-minded individuals find Thuishaven to be a welcoming space. It's a place where attendees can immerse themselves in the collective spirit of the event, fostering a sense of unity. Creatives and Innovators: Thuishaven often serves as a magnet for professionals in creative industries. Artists, musicians, and event organizers are not just attendees but active participants. They come to network, share their talents, and be part of the creative exchange that defines the event. The festival provides a unique platform for creativity to flourish. Open-Minded Explorers, The festival holds a particular allure for those with an adventurous spirit. Attendees who are open to exploration, who are willing to embrace the unexpected, find in Thuishaven a space that caters to their sense of adventure. The ever-evolving themes, dynamic atmosphere, and the element of unpredictability appeal to their sense of curiosity."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/target-3.png"
        textColor="background"
        textPosition="right"
        text="In summary, Thuishaven Festival's demographics and target audience form a multifaceted tapestry of diversity and inclusivity. Understanding this audience is pivotal for a producer. It shapes everything from the choice of themes to the selection of artists and the overall event experience. This deep comprehension of the audience is what contributes to Thuishaven's reputation as one of the best festivals in the world, where creativity, music, art, community, and sustainability converge to create an unforgettable celebration of life."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default TargetGroup;
