import React from "react";
import WideParagraph from "../reusable/wide-paragraph";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import LocalVideoPlayer from "../reusable/video-player";
import { useRouter } from "next/router";
const Branding = ({
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
  const { basePath } = useRouter();

  const handleDownload = (imgUrl: string) => {
    const imageUrl = `${basePath + "/images/" + imgUrl}.png`;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        const blobUrl = URL.createObjectURL(blob);
        link.href = blobUrl;
        link.download = `${imgUrl}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };
  return (
    <div>
      <div className="pt-16">
        <Header
          content={"Personal Branding: Learning Goal"}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
      <NarrowParagraph
        image="/images/pr-goal.png"
        text={
          <p>
            <span className="font-black">
              I want to present myself as a Specialist.
            </span>{" "}
            The Personal Branding task is designed to help me accomplish my
            initial learning objective, which is to master the art of presenting
            myself as a producer. By creating a positive persona and a
            compelling PR video, I can effectively showcase my skills as a
            producer and specialist in general. These materials will serve as
            valuable assets for job applications, allowing potential employers
            to gain a deeper understanding of who I am. Through this approach, I
            aim to stand out from other candidates in labor market.
          </p>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="mt-16">
        <Header
          content={"PR-Video"}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
      <LocalVideoPlayer height={400} width={1200} src="prvid" />
      <WideParagraph
        image="/images/wide-pr-goal.png"
        backgroundColor="accent"
        textColor="accent"
        text={
          <p>
            In today&apos;s landscape, personal branding has become ubiquitous,
            with individuals increasingly showcasing the face behind their
            ventures. This trend is particularly pronounced among
            service-oriented entrepreneurs, as it has evolved into a primary
            method of marketing and branding. The power of video in providing an
            intimate understanding of individuals is unparalleled, making it an
            ideal medium for personal branding. Me as a professional, the task
            at hand involves skillfully crafting a creative representation of
            oneself through video for acquisition purposes. I undertook the
            challenge of creating a PR video that serves as a snapshot of my
            identity. In this concise video, I share insights into who I am,
            what sets me apart, my hobbies, areas of expertise, testimonials
            from others, and articulate my aspirations. The aim is to present a
            compelling and unique narrative that not only introduces me but also
            serves as a powerful tool for professional engagement and
            networking.
          </p>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="py-10 bg-pattern-5 bg-opacity-40 flex justify-center items-center">
        <div className="bg-secondary p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
          <h1
            className="mb-6 w-full font-black h-fit text-[50px] text-center text-background"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Logo & Personal Branding
          </h1>
          <NarrowParagraph
            image="/images/branding-1.png"
            text={
              <p>
                <span className="font-black">
                  Why logo is important for Personal Branding?
                </span>{" "}
                In the realm of personal branding, a logo becomes a powerful
                emblem encapsulating the essence of one&apos;s individual
                identity. Serving as a visual touchstone, a thoughtfully crafted
                logo imparts a sense of professionalism and meticulous personal
                branding. It acts as a consistent thread woven through various
                platforms, from social media profiles to personal websites,
                contributing to a cohesive and memorable representation. In the
                competitive landscape of personal branding, a distinctive logo
                becomes a vital tool for differentiation, ensuring that one
                stands out in a sea of individuals.
              </p>
            }
            textColor="background"
            textPosition="left"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <NarrowParagraph
            image="/images/branding-2.png"
            text={
              <p>
                <span className="font-black">
                  Why I create exactly this Logo and what the meaning of the
                  Logo?
                </span>
                I crafted my logo using the platform Canva, emphasizing my
                unique selling proposition (USP) rooted in authenticity and
                expertise. By consistently being true to myself and showcasing
                my skills, I chose to feature my initials in the design (N.EE).
                With a target audience encompassing companies in the event
                industry, my aim is to convey a message of professionalism and
                quality. Additionally, the incorporation of different colors in
                the logo symbolizes the celebration of diversity, adding an
                extra layer of meaning to my personal brand.
              </p>
            }
            textColor="background"
            textPosition="right"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WideParagraph
            image="/images/wide-branding-1.png"
            backgroundColor="text"
            textColor="background"
            text={
              <div>
                <h2 className="font-black mb-4">
                  Goals for my Personal Branding
                </h2>
                <p>
                  At the outset of this learning journey, I identified three key
                  learning objectives. The initial goal, centered around
                  Personal Branding, emerged as a strategic choice considering
                  my ongoing challenge with time management. The Personal
                  Branding assignment served as a pivotal means to not only
                  comprehend the art of presenting oneself as a specialist but
                  also to strategically address my time management shortcomings.
                  Navigating through this learning path, I actively engaged in
                  two distinct assignments aimed at honing my personal branding
                  skills. These endeavors, undertaken against the backdrop of my
                  time management challenges, represent intentional steps toward
                  presenting myself as a specialist with commendable time
                  management abilities. Each assignment has been a valuable
                  exploration, fostering not only the discovery and articulation
                  of my unique strengths but also a conscious effort to address
                  and improve my time management skills. Embracing this dual
                  focus has been instrumental in shaping a positive and
                  enthusiastic outlook, reinforcing my belief that refining my
                  personal brand can indeed position me as a specialist equipped
                  with strong time management capabilities.
                </p>
              </div>
            }
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WideParagraph
            image="/images/wide-branding-2.png"
            backgroundColor="primary"
            textColor="background"
            text={
              <div>
                <h2 className="font-black mb-4">
                  Process of Developing My Persona
                </h2>
                <p>
                  The choice of Art-Deco Brown Gold for my persona holds
                  deliberate significance, reflecting a thoughtful consideration
                  of both aesthetic and symbolic elements. Art-Deco,
                  characterized by its bold geometric shapes and luxurious
                  detailing, resonates with my aim to present a persona that
                  exudes sophistication and a timeless aesthetic. The blend of
                  brown and gold colors within the Art-Deco style signifies a
                  fusion of warmth, stability, and opulence. Brown, as a color,
                  evokes a sense of reliability and groundedness, aligning with
                  my goal to project professionalism and a steadfast persona.
                  This earthy tone suggests a connection to the tangible and
                  practical, reinforcing the idea that my personal brand is
                  rooted in reliability and practicality. On the other hand, the
                  incorporation of gold introduces an element of luxury and
                  prestige. Gold is often associated with success, achievement,
                  and high value. By integrating this color into my persona, I
                  aim to convey a sense of accomplishment and excellence, adding
                  a touch of glamour to my professional image. In essence, the
                  choice of Art-Deco Brown Gold for my persona serves as a
                  visual representation of my desired qualities—sophistication,
                  reliability, and a touch of opulence. This color scheme
                  becomes a symbolic expression of the values and
                  characteristics I wish to communicate through my personal
                  brand.
                </p>
              </div>
            }
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <NarrowParagraph
            image="/images/branding-3.png"
            text={
              <div>
                <h2 className="font-black mb-4">Process of Developing My CV</h2>
                <p>
                  I chose to create a simple and straightforward CV for my
                  portfolio because it allows me to communicate my professional
                  identity in a way that&apos;s clear and impactful. I believe
                  that a concise resume is crucial in ensuring that potential
                  employers or collaborators can quickly understand my key
                  qualifications, experiences, and skills. In a competitive
                  environment, simplicity enhances the readability of my CV,
                  making it more likely to catch the attention of recruiters who
                  often have limited time to review each application. I see
                  simplicity as a demonstration of my professionalism and
                  organizational skills, indicating to others that I can
                  communicate complex information in a concise manner.
                  Ultimately, a straightforward CV in my portfolio serves as a
                  tool to showcase my strengths and make a memorable impression
                  on those evaluating my qualifications.
                </p>
              </div>
            }
            textColor="background"
            textPosition="left"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />

          <div className="flex w-full justify-center gap-16 items-center pb-20 pt-10">
            <button
              onClick={() => handleDownload("nikita_eesmaa_persona")}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="bg-primary text-2xl font-bold cursor-none px-4 py-2 rounded-2xl text-background hover:scale-110"
            >
              DOWNLOAD PERSONA
            </button>
            <button
              onClick={() => handleDownload("nikita_eesmaa_cv")}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="bg-primary text-2xl font-bold cursor-none px-4 py-2 rounded-2xl text-background hover:scale-110"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="pt-16">
          <h1
            className="mb-6 w-full font-black h-fit text-[50px] text-center text-text"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Reflection Analysis
          </h1>
        </div>
        <WideParagraph
          image="/images/wide-brand-reflection-1.png"
          backgroundColor="accent"
          textColor="text"
          text={
            <p>
              Embarking on the Personal Branding assignment has been a
              transformative journey, aligning with my overarching goal of
              mastering the art of presenting myself as a specialist. The
              creation of a positive persona, a captivating PR video, and a
              thoughtful logo were pivotal in shaping a comprehensive
              representation of my professional identity. The PR video, a
              dynamic snapshot of my personality, skills, and aspirations,
              stands as a powerful tool for professional engagement and
              networking in a landscape where personal branding is paramount.
              The significance of a carefully crafted logo in personal branding
              cannot be overstated. Acting as a visual touchstone, my logo, with
              its emphasis on authenticity and expertise, becomes a consistent
              thread woven through various platforms. It serves as a symbol of
              professionalism and quality, contributing to a cohesive and
              memorable representation in the competitive arena of personal
              branding. The intentional use of colors in the logo not only adds
              visual appeal but also conveys a message of celebrating diversity,
              further enriching the layers of meaning within my personal brand.
              The development of my persona was a meticulous process, with the
              choice of Art-Deco Brown Gold holding deliberate significance.
              This color scheme, characterized by sophistication, reliability,
              and a touch of opulence, visually represents the values and
              characteristics I aspire to communicate through my personal brand.
              The goals set for my personal branding, particularly addressing
              time management challenges, were strategically aligned with the
              assignments undertaken. Each step in this process was not just
              about showcasing my skills but also a conscious effort to improve
              and project a positive and enthusiastic outlook. The decision to
              create a simple and straightforward CV for my portfolio was rooted
              in the understanding that clarity and conciseness are essential in
              a competitive job market. It reflects my professionalism and
              organizational skills, demonstrating the ability to communicate
              complex information succinctly. In essence, this CV serves as a
              key tool to stand out and leave a lasting impression on potential
              employers, aligning seamlessly with my broader objective of
              positioning myself as a specialist. As I reflect on this personal
              branding journey, I am confident that these carefully curated
              elements will not only enhance my professional image but also set
              me apart in the pursuit of my career goals.
            </p>
          }
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <div className="pt-10">
          <h1
            className="pb-6 w-full font-black h-fit text-[50px] text-center text-text"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Time Registration
          </h1>
        </div>
        <WideParagraph
          image="/images/wide-brand-reflection-3.png"
          backgroundColor="primary"
          textColor="text"
          text={
            <div>
              In total, I spent 35 hours. This duration was dedicated to
              creating a PR video and a persona. Additionally, I designed a logo
              entirely by hand without the use of any computer programs, solely
              relying on my Mac and drawing manually. The video also consumed a
              significant amount of time as I endeavored to produce it in the
              most professional manner possible. Furthermore, I believe the
              persona was crafted in a professional and stylish manner,
              requiring a substantial amount of time to draw and refine in an
              artistic style and in the end CV.
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

export default Branding;
