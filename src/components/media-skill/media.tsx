import React from "react";
import WideParagraph from "../reusable/wide-paragraph";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";

const Media = ({
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
        content={"Media Skill: Learning & Development Goal"}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/media-1.png"
        text={
          <p>
            This assignment ensures that I can achieve my third learning goal
            Improving my Media Skills by creating a website and learning to
            code. Collaborating with my trainer on practical website development
            provides valuable hands-on experience while supplementing it with
            theoretical knowledge from guidebooks ensures a comprehensive
            learning experience.
          </p>
        }
        textColor="accent"
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/media-2.png"
        text={
          <p>
            Initially, my coach and I came to the conclusion that in order to
            complete the practical task, I should gain additional theoretical
            knowledge about programming and coding, so it was decided that I
            would read the book &quot;The Pragmatic Programmer: From Journeyman
            to Master.&quot; by Andrew Hunt and David Thomas.
          </p>
        }
        textColor="accent"
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="py-10 mix-blend-difference mt-10 bg-pattern-9 bg-opacity-40 flex justify-center items-center">
        <div className="bg-background p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
          <Header
            content={"About the Book"}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WideParagraph
            image="/images/wide-media-1.png"
            backgroundColor="primary"
            textColor="accent"
            text={
              <div>
                <h2 className="font-black mb-4">Short Description of Book</h2>
                <p>
                  Originally published in 1999, this perennial bestseller and
                  university coursebook has been a staple for programmers. With
                  a unique blend of practical advice and engaging anecdotes, it
                  has stood the test of time. The book played a role in
                  popularizing coding terms and expressions upon its release.
                </p>
                <h2 className="font-black mb-4">What did I learn?</h2>
                <p>
                  From &quot;The Pragmatic Programmer: From Journeyman to
                  Master&quot; by Andrew Hunt and David Thomas, I learned
                  invaluable insights into the core process of software
                  development, transcending the complexities of the modern
                  programming landscape. The book emphasizes the journey from a
                  requirement to the creation of maintainable code that not only
                  meets but delights users. The lessons range from personal
                  responsibility and career development to architectural
                  techniques for ensuring code flexibility and reusability. Key
                  takeaways include strategies to combat software decay,
                  avoiding redundant knowledge duplication, crafting flexible
                  and adaptable code, steering clear programming by coincidence,
                  fortifying code with contracts and exceptions, effective
                  testing methodologies, capturing real requirements, and the
                  art of delighting users. The book also imparts wisdom on team
                  building among pragmatic programmers and enhancing precision
                  through automation. Presented in self-contained sections with
                  entertaining anecdotes and thoughtful examples, &quot;The
                  Pragmatic Programmer&quot; serves as a guide through best
                  practices and potential pitfalls in various aspects of
                  software development, catering to both novice and experienced
                  programmers alike.
                </p>
              </div>
            }
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WideParagraph
            image="/images/wide-media-2.png"
            backgroundColor="primary"
            textColor="accent"
            text={
              <div>
                <h2 className="font-black mb-4">Reflection</h2>
                <p>
                  Reading The Pragmatic Programmer by Andrew Hunt and David
                  Thomas has greatly improved my media skills. Key takeaways
                  include a holistic approach to software development that
                  emphasizes user satisfaction and code maintainability. I
                  learned strategies for dealing with software corruption,
                  creating adaptable code, and the importance of intentional
                  coding. Practical tips cover code improvement, effective
                  testing, and user satisfaction. The book&apos;s structure,
                  with distinct sections and anecdotes, made learning
                  accessible. This reading not only deepened my coding
                  principles, but also shaped my overall approach to software
                  development, focusing on team building and precision through
                  automation. “The Pragmatic Programmer” was instrumental in
                  achieving my goal by providing a solid foundation for coding
                  and website development. After this task, having received
                  theoretical knowledge, I can begin the practical task of
                  creating a website with a trainer. I believe that reading the
                  book in the first stage was really useful since I began to
                  have theoretical knowledge and can now enrich this knowledge
                  through the practice of creating a website.
                </p>
              </div>
            }
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <WideParagraph
            image="/images/wide-media-3.png"
            backgroundColor="primary"
            textColor="accent"
            text={
              <div>
                <h2 className="font-black mb-4">
                  Developing Media Skills through Practical tasks
                </h2>
                <p>
                  The next step in my media skills development plan involves
                  creating a website with a coach. This practical assignment
                  will provide me with the opportunity to directly apply the
                  knowledge I acquired while reading &quot;The Pragmatic
                  Programmer: From Journeyman to Master&quot; by Andrew Hunt and
                  David Thomas. Creating a website will be an important
                  milestone where I will implement the concepts learned in the
                  book and enrich my web development experience. Working with a
                  trainer will provide me with a hands-on approach to learning
                  programming and web page design concepts. This assignment will
                  not only allow me to directly apply theoretical knowledge but
                  will also provide valuable collaboration experience in the
                  process of creating a functional and effective web resource.
                  This approach ensures that my skills not only improve but also
                  that they are directly applicable to real-life projects such
                  as my portfolio website.
                </p>
              </div>
            }
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <NarrowParagraph
            image="/images/media-3.png"
            text={
              <p>
                The process of developing a website was very challenging since
                it involved learning a lot during the process. However, thanks
                to good research skills and my mentor I was able to achieve this
                properly. I started by looking into different tech stack options
                to develop the website with and ended up using Nextjs, a
                framework that lets you create web applications with react. To
                start building the design concept I used Figma, since it is very
                intuitive.
              </p>
            }
            textColor="accent"
            textPosition="left"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <NarrowParagraph
            image="/images/media-4.png"
            text={
              <p>
                Once I achieved the correct design templates with the
                corresponding color schemes and the desired page layout I
                transitioned the figma design into code with its new developer
                mode, which made it very simple. To make the building experience
                faster I decided to divide the code into small components and
                into reusable ones when possible, so that plotting specific
                content in the website could be done in a single or a small
                amount of lines of code.
              </p>
            }
            textColor="accent"
            textPosition="right"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
          <NarrowParagraph
            image="/images/media-5.png"
            text={
              <p>
                To style the website I used Tailwind CSS, a language where I can
                specify the styles that I want inside my react files. I also
                added some animations and cursor effects to make it look unique
                and creative and also added some state management functionality
                to toggle menus and make carousels work. I as well managed to
                add video to the website and then finally put the site live with
                Vercel, a hosting service that is the creator of the Nex.js
                framework.
              </p>
            }
            textColor="accent"
            textPosition="left"
            imageEnter={imageEnter}
            imageLeave={imageLeave}
            textEnter={textEnter}
            textLeave={textLeave}
          />
        </div>
      </div>
      <div className="pt-16">
        <Header
          content="Reflection Analysis"
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
      <WideParagraph
        image="/images/wide-media-4.png"
        backgroundColor="accent"
        textColor="text"
        text={
          <p>
            At the very beginning, I set myself the task of improving my media
            skills by completing this task, I created a website completely coded
            on my own without using various platforms for creating websites, I
            also made a design for the website and read a book on programming,
            all this gave me invaluable work experience, I gained confidence
            theoretical knowledge in practice and the result seems to me to be
            very positive. I am satisfied with the work done and I can
            confidently say that I have fulfilled my SMART goal to improve media
            skills.
          </p>
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
          image="/images/wide-media-5.png"
          backgroundColor="primary"
          textColor="text"
          text={
            <div>
              I spent 76 hours completing all the tasks to achieve the goal,
              this includes programming the website, creating the design, and
              directly reading the book. It was a labor-intensive, complex
              process that of course took a lot of time.
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

export default Media;
