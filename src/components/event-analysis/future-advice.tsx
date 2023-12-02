import React from "react";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const FutureAdvice = ({
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
    <div className="bg-secondary py-16">
      <div className="w-full text-center flex justify-center">
        <h1
          className="mb-8 w-fit font-black h-fit text-[50px] text-center text-text"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Future Advice
        </h1>
      </div>
      <NarrowParagraph
        textColor="primary"
        image="/images/future-1.png"
        text={
          <p>
            As a passionate student studying event experience, I have been
            closely following the journey of the Thuishaven Festival. This
            captivating music and cultural event has grown to become a highlight
            in the entertainment landscape. I&apos;d like to share some insights
            and suggestions that can contribute to the festival&apos;s ongoing
            success and development. While I may be a student, I hope that these
            ideas can help shape the future of the Thuishaven Festival.
          </p>
        }
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-future.png"
        backgroundColor="primary"
        textColor="primary"
        text={
          <div>
            <h3 className="font-black mb-2 mt-4">
              1. Foster Community Relations
            </h3>
            <p>
              Building a strong connection with the local community is not just
              good practice but can also lead to long-term success. Collaborate
              with local businesses and residents, and consider hosting
              community events to foster goodwill. This can help address
              concerns and create a supportive environment.
            </p>

            <h3 className="font-black mb-2 mt-4">2. An Inclusive Space</h3>
            <p>
              A core principle should be inclusivity. Implementing policies and
              practices that ensure everyone feels welcome, regardless of their
              background or abilities, is essential. Thuishaven can set an
              example of a festival that celebrates diversity.
            </p>

            <h3 className="font-black mb-2 mt-4">3. Effective Communication</h3>
            <p>
              Improving communication channels is vital for keeping
              festival-goers informed. Leveraging social media, email
              newsletters, and an informative website can provide real-time
              updates, share safety measures, and deliver important information.
            </p>

            <h3 className="font-black mb-2 mt-4">4. Artistic Innovation</h3>
            <p>
              Thuishaven&apos;s artistic installations and interactive
              experiences have always been memorable. Continuing to push the
              envelope with innovative and creative elements can further elevate
              the festival&apos;s appeal.
            </p>

            <h3 className="font-black mb-2 mt-4">
              5. Festival App for Enhanced Experience
            </h3>
            <p>
              The development of a dedicated festival app can enhance the
              festival-goer&apos;s experience by offering schedules, maps,
              real-time updates, and emergency information in one convenient
              location.
            </p>
          </div>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="primary"
        image="/images/future-2.png"
        text={
          <p>
            In Conclusion Thuishaven Festival has already made an indelible mark
            on the cultural and music scene. By considering these insights and
            embracing innovation, sustainability, and community engagement, the
            festival can continue to grow and thrive. It is the festival&apos;s
            dedication to creating unforgettable experiences that will ensure
            its enduring impact in the years to come. The future of Thuishaven
            Festival looks bright, and I am excited to see how it will continue
            to evolve and amaze its audience.
          </p>
        }
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
    </div>
  );
};

export default FutureAdvice;
