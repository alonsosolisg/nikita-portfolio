import React from "react";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";
import Header from "../reusable/header";

const Interview = ({
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
  const interviewData = [
    {
      question:
        "Can you share your journey and how you became involved in event organization, particularly in the equestrian world?",
      response:
        "Denis Tells: 'I started working in Endurance sport many years ago, around 20 years ago. I was before an official and technical delegate and judge, and then I became an official member of the organizing committee in Estonia. In 2018, we started trying to organize the World Championship. It took an overall 5 years to get approved by FEI to get a license to organize Youth World Championship. This is my journey.'",
    },
    {
      question:
        "What were your key responsibilities in organizing the recent FEI Equestrian Championship that concluded in August?",
      response:
        "Denis Says: 'The Organizing Committee Members each member has a key responsibility, so my part was Production Management of the Event and in the End Execution also I was responsible for logistics, finance, and marketing aspects as well.'",
    },
    {
      question:
        "How did you approach the initial planning stages of the recent championship?",
      response:
        "Danis explains his approach: 'For my own part work is overall Planning Event Management so I create visual outlines aspect of organizing (Planning) for that I’m using such a program tool such as “Master Task” and “Mind Master” Tools to prepare to organize Championship, in 2022 when we got news that we going to host world Championship we start making a Long-Term Plan each of the month in details for example what is our value and etc, all this and then we start planning logistics, financing, and Execution plans to give this Event Life, so in generally it takes about one year of preparation, during this year we made Test Event in August 2022 to make sure that all requirements meet.'",
    },
    {
      question:
        "What were the most significant challenges you encountered during the production of the recent championship, and how did you overcome them?",
      response:
        "Jelena says: 'For my team, I think the most difficult part was to get approval by FEI to organize kind of this Event, it was difficult and hard work but now I can happily say that we made it.'\n\nDenis Says: 'The World Championship it’s a big and very difficult event, the most difficult part was finding the sponsors and budget in general we were in negation with the Estonian Government to get some Cultural funds all this was the hardest part for us but the main thing that we didn’t stop and we try to overcome this challenges and in the end we succeed.'",
    },
    {
      question:
        "Could you describe the essential elements that made the recent FEI Equestrian Championship a success?",
      response:
        "Denis says: 'In general, I think that the success of our event was mainly due to the fact that we took care of every small detail thoroughly, thereby giving our visitors and guests with others the opportunity to show the invaluable experience of holding such events in a small country like Estonia, all this gave an unforgettable experience for the audience and so for the participants, plus, as you know, this is the first championship of this kind in the countries of northern Europe, so this all definitely gives a great emotional return from both the guests and our team that we cannot fall on our face in the dirt.'",
    },
    {
      question:
        "How did you manage and coordinate different aspects of the recent championship, such as logistics, marketing, and participant coordination?",
      response:
        "Denis says: 'Yes, of course, logistics is one of the important parts of the event, especially in this kind of event, since the transportation of horses and people is very difficult, especially in the case of horses, they were transported by special companies on airplanes and ultimately, they arrived at Tallinn Airport. For Marketing, we used an interactive marketing strategy by creating mini-games to attract people, we also gave away prizes, which attracted a lot of attention from people who had never even been interested in equestrian sports before, I think that in this case, using this strategy helped us attract more public attention to this event, as well as sponsors in general, To coordinate the participants of the event, we adhered to the strict rules of the Equestrian Federation as well as the rule of precise planning, that is, minute execution, thereby ensuring that each event took place exactly on schedule.'",
    },
    {
      question:
        "Can you provide insights into how you handled budgeting and financial aspects for the championship that concluded in August?",
      response:
        "Denis: 'In general, for the organization of the event, our team already had an allocated budget for the events, and we submitted what potential expenses await us, of course, we also received funding from the Government of the Republic of Estonia. As you probably know, the Estonian government always finances events that raise the image of the country as well as in general, if we look at other championships, this is a common practice when the state finances sports championships, so our budget consisted of 80% of our money as organizations and the remaining 20% of the percentage we received funding from the state.'",
    },
    {
      question:
        "What strategies did you employ to ensure a smooth and engaging experience for both competitors and spectators during the recent championship?",
      response:
        "Jelena: 'For this purpose, we created a special program for the event; we invited a DJ, dancers, light music, and a professional show.'",
    },
    {
      question:
        "How did you maintain a balance between creativity and logistics when conceptualizing and executing the recent event?",
      response:
        "Denis: 'In this case, we proceeded from practical elements; first of all, our task is to hold the championship and this is a game and a high priority is given to it, so, in this case, we gave priority to logistics and clear planning.'",
    },
    {
      question:
        "What role did technology play in the production of the recent championship, and were there any notable innovations or advancements you implemented?",
      response:
        "Denis: 'It seems to me that in this case no special innovations are required; however, we used an innovative method to reduce risks to nature.'",
    },
    {
      question:
        "How important was sustainability and eco-friendliness in the recent FEI Equestrian Championship, and what measures did you take to address these concerns?",
      response:
        "Denis Says: 'Yes, of course, we were aware of preserving the environment, that is, from the logistics part, we used different garbage cans for sorting waste, also according to the program, all teams planted trees at the opening ceremony, that is, each team that took part in the events planted trees in the name of nature, but Also, to leave your hearts and your thoughts in Estonia, that is, our activities adhere to sustainable development.'",
    },
    {
      question:
        "Could you share your approach to selecting and working with sponsors and partners for the championship that concluded in August?",
      response:
        "Denis says, 'We proceeded from the fundamentals that this event is very significant and when choosing sponsors we proceeded from the rules of reliability and also only to promote value for society.'",
    },
    {
      question:
        "What kind of team and resources were involved in executing the championship that concluded in August?",
      response:
        "Denis Says: 'We used in most cases volunteers who were happy to help in organizing the event, that is, I’m not afraid to say this word, but volunteers played a key role in organizing the event. We had about 130 volunteers who worked as event stewards and ensured order.'",
    },
    {
      question:
        "How did you ensure the safety and well-being of both horses and riders during the recent championship?",
      response:
        "Denis: 'During the event, all workers were trained in first aid, all precautions were used at the event, ambulances were present in case of emergency, and for the health of the horses, we adhered to the strict rules of the Equestrian Sports Federation, that is, all Horses were checked by doctors, all tests were carried out to make sure whether horse participate in competitions.'",
    },
    {
      question:
        "Can you share an example of a particularly challenging or rewarding moment in your career as an event producer, perhaps from a recent event?",
      response:
        "'I think that for me this event was very important for my career; I was the organizer of the international championship, that is, I was very pleased.'",
    },
    {
      question:
        "What advice would you give to aspiring event producers who aim to succeed in the equestrian world or other event domains, drawing from your recent experience?",
      response:
        "'To become a successful organizer, you need to have a big amount of knowledge you need to watch closely all good and bad aspects of the event and observe another event to understand how it works and then start from a smaller event and then in the end a bigger event the main thing you need to learn from mistakes.'",
    },
    {
      question:
        "How do you envision the future of equestrian events, and what changes or innovations do you anticipate, especially after the successful conclusion of the recent championship?",
      response:
        "'I think that sporting events will develop, the concept will change, but the sport will remain popular.'",
    },
    {
      question:
        "What role do feedback and post-event evaluation play in refining and improving future events, including those based on lessons learned from the recent championship?",
      response:
        "'We used feedback from the participants, we also ordered a separate questionnaire from a secondary company, after which we conducted an extensive analysis of the event to identify potential errors.'",
    },
    {
      question:
        "Can you share some details about your personal and professional philosophy when it comes to event management, and how it applied to the recent event?",
      response:
        "Denis Says: 'I think my philosophy is that working in this profession I want to truly give my clients an unforgettable experience of the event, my main values are reliability and stability in this sense of these words - this is my motto.'",
    },
    {
      question:
        "How do you ensure that the Padise Equestrian Center aligns with the broader goals and values of the equestrian community, especially after hosting a notable championship?",
      response:
        "Denis: 'I think the greatest impact that we made for the Equestrian community is that we promote Estonia as a good country to organize even a big event and show that size and numbers don't matter.'",
    },
    {
      question:
        "In your experience, what qualities and skills are most essential for a successful producer in the event management field, as demonstrated during the recent championship?",
      response:
        "'First of all, when organizing any events, you need to love these processes, you also need to have all the necessary knowledge so that you have the opportunity to really organize events, just as a person you must have such qualities as creativity, the ability to adapt to unexpected situations and, of course, have good punctuality.'",
    },
    {
      question:
        "Looking forward, what are your goals and aspirations for upcoming events, and how do you plan to build upon the success of the recent FEI Equestrian Championship that concluded in August?",
      response:
        "'Our goal for the future is to create sports festivals next year, we will continue to plan new sports events and hope that in the future we will be able to host these events again.'",
    },
  ];
  return (
    <div className="py-20">
      <Header
        content={"Learning Goal & Preparation"}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        image="/images/mandatory-5.png"
        text={
          <p>
            Engaging in an interview with an industry expert aligns perfectly
            with my aspiration to excel in my career and attain my goal of
            expanding my Knowledge in the Event Industry. My objective is to
            acquire the skills and knowledge necessary to showcase myself with
            confidence and competence in the realm of event management.
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
            To prepare thoroughly for the upcoming interview, I embarked on a
            comprehensive journey of research and analysis. I began by immersing
            myself in a variety of interviews, carefully dissecting their
            dynamics to unearth the underlying principles of successful personal
            interviews. What became evident to me is that the ultimate objective
            of a personal interview is to unearth the driving force behind an
            individual, as this reveals their core essence. To achieve this,
            active listening and astute questioning are paramount. I also
            recognized the importance of approaching the interview with an open
            mind and the willingness to explore all avenues, even if it means
            broaching sensitive or challenging subjects. Moreover, I grasped the
            significance of creating an authentic and engaging conversation
            during the interview. Establishing a genuine connection with the
            interviewee and delving into their personal story allows for a more
            meaningful exchange of information. To set the stage for the
            interview, I understood the importance of sharing a concise
            introduction about myself, the purpose of the interview, my
            objectives, and the focus of the conversation. This clarity ensures
            that both the interviewer and interviewee are aligned in their
            expectations. In cases where I may be interviewing well-known
            individuals, I realized the need to be original and stand out. To
            achieve this, extensive research into the interviewee's background
            and identifying intriguing aspects for discussion is crucial.
            Furthermore, I acknowledged that people may become reserved or wary
            during interviews, and I learned the value of initiating the
            conversation in a friendly and non-intrusive manner, akin to a
            conversation with a friend. This approach puts the interviewee at
            ease, fostering a more open and fruitful exchange of information.
            Additionally, reliability is paramount in interviews. It's crucial
            to establish the circumstances surrounding the interview, such as
            ensuring a quiet location for minimal disruptions and maintaining a
            conducive interview posture. To maintain the integrity of the
            interview, open-ended questions are over leading ones, and it's
            important to embrace occasional pauses to allow the interviewee to
            share information at their own pace. In essence, my preparation has
            been focused on equipping myself with the knowledge and skills
            necessary to conduct a successful and insightful interview.
          </p>
        }
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <WideParagraph
        image="/images/wide-prod-1.png"
        backgroundColor="primary"
        textColor="text"
        text={
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Interview Details</h3>
              <ul className="list-disc pl-4">
                <li>
                  <span className="font-bold">Interviewer name:</span> Jelena
                  Sbitneva, Denis Chirkovskiy
                </li>
                <li>
                  <span className="font-bold">Interview method:</span> online
                  via Zoom
                </li>
                <li>
                  <span className="font-bold">Respondent name:</span> Nikita
                  Eesmaa
                </li>
                <li>
                  <span className="font-bold">Date:</span> November 15, 2023
                </li>
                <li>
                  <span className="font-bold">Interview start time:</span> 18:00
                </li>
                <li>
                  <span className="font-bold">Interview end time:</span> 18:33
                </li>
                <li>
                  <span className="font-bold">Residence:</span> Tallinn,
                  Republic of Estonia
                </li>
                <li>
                  <span className="font-bold">Age:</span> 36 and 45
                </li>
                <li>
                  <span className="font-bold">Purpose of the interview:</span>{" "}
                  Get more knowledge about the role of the Producer in creating
                  and maintaining Events
                </li>
                <li>
                  <span className="font-bold">Interview duration:</span> 32
                  minutes
                </li>
                <li>
                  <span className="font-bold">Recording of the interview:</span>{" "}
                  via Zoom Recording System
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Interview Questions</h3>

              <ol className="list-decimal pl-6">
                <li className="mb-4">
                  <p className="font-bold">
                    Can you share your journey and how you became involved in
                    event organization, particularly in the equestrian world?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What were your key responsibilities in organizing the recent
                    FEI Equestrian Championship that concluded in August?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How did you approach the initial planning stages of the
                    recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What were the most significant challenges you encountered
                    during the production of the recent championship, and how
                    did you overcome them?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Could you describe the essential elements that made the
                    recent FEI Equestrian Championship a success?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How did you manage and coordinate different aspects of the
                    recent championship, such as logistics, marketing, and
                    participant coordination?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Can you provide insights into how you handled budgeting and
                    financial aspects for the championship that concluded in
                    August?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What strategies did you employ to ensure a smooth and
                    engaging experience for both competitors and spectators
                    during the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How did you maintain a balance between creativity and
                    logistics when conceptualizing and executing the recent
                    event?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What role did technology play in the production of the
                    recent championship, and were there any notable innovations
                    or advancements you implemented?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How important was sustainability and eco-friendliness in the
                    recent FEI Equestrian Championship, and what measures did
                    you take to address these concerns?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Could you share your approach to selecting and working with
                    sponsors and partners for the championship that concluded in
                    August?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Can you provide insights into the marketing and promotional
                    strategies you used to attract participants and spectators
                    to the recent event?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What kind of team and resources were involved in executing
                    the championship that concluded in August?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How did you ensure the safety and well-being of both horses
                    and riders during the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What measures did you take to make the event inclusive and
                    enjoyable for attendees of all ages and backgrounds during
                    the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Can you share an example of a particularly challenging or
                    rewarding moment in your career as an event producer,
                    perhaps from the recent event?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How do you stay up-to-date with industry trends and
                    innovations in event management, and did any of these play a
                    role in the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What advice would you give to aspiring event producers who
                    aim to succeed in the equestrian world or other event
                    domains, drawing from your recent experience?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How do you envision the future of equestrian events, and
                    what changes or innovations do you anticipate, especially
                    after the successful conclusion of the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    What role does feedback and post-event evaluation play in
                    refining and improving future events, including those based
                    on lessons learned from the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Can you share some details about your personal and
                    professional philosophy when it comes to event management,
                    and how it applied to the recent event?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    How do you ensure that the Padise Equestrian Center aligns
                    with the broader goals and values of the equestrian
                    community, especially after hosting a notable championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    In your experience, what qualities and skills are most
                    essential for a successful producer in the event management
                    field, as demonstrated during the recent championship?
                  </p>
                </li>

                <li className="mb-4">
                  <p className="font-bold">
                    Looking forward, what are your goals and aspirations for
                    upcoming events, and how do you plan to build upon the
                    success of the recent FEI Equestrian Championship that
                    concluded in August?
                  </p>
                </li>
              </ol>
            </div>
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
          <p>
            Who is Jelena Sbitneva?: Owner of Padise Equestrian Centre & Estonia
            Equestrian Club, organizer of the FEI Endurance World Championship
            for Young Horses 2023 (Padise, Estonia), founder of the global
            social project Sportunio.org, Every year she organizes the National
            Equestrian Championships, takes part in all processes of organizing
            events from producing to conceptual solutions, she is also a Dollar
            Millionaire and the main idol of equestrian sports in Estonia.
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
        image="/images/mandatory-5.png"
        text={
          <p>
            Who is Denis Chirkovskiy?: Denis is a Producer of the FEI Endurance
            World Championship for Young Horses 2023, Working in close contact
            with Jelena Sbitneva one of the oldest members of the team in Padise
            Equestrian Centre, Denis is a real Expert in Logistics, Marketing,
            and Event Execution, having a lot of experience in organizing Events
            in different domains.
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
        image="/images/mandatory-5.png"
        text={
          <p>
            Location of Jelena Sbitneva and Denis: Lives directly in Tallinn,
            Estonia during the preparation for the championships and during the
            process of organizing events, and lives permanently in Dubai where
            she and he directly negotiate with sponsors and potentially
            interested parties.
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
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Interview Questions</h3>
              {interviewData.map((item, index) => (
                <div key={index} className={index % 2 === 0 ? "odd" : "even"}>
                  <p className="font-bold">{item.question}</p>
                  <p className="ml-4">{item.response}</p>
                </div>
              ))}
            </div>
          </div>
        }
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
          <p>
            Embarking on the journey of researching and analyzing the role of a
            producer in event development through an expert interview proved to
            be a transformative experience for my personal development. The
            insights gained from the interview with Denis Chirkovskiy and Jelena
            Sbitneva provided a deep understanding of the intricacies involved
            in organizing a significant event, particularly in the equestrian
            world. One of the key takeaways from the interview was the emphasis
            on the importance of active listening and astute questioning in
            conducting successful personal interviews. This, I realized, is
            crucial not only for extracting meaningful information but also for
            establishing a genuine connection with the interviewee. The ability
            to approach interviews with an open mind and explore sensitive or
            challenging subjects was highlighted, showcasing the need for
            flexibility and adaptability in such roles. The relevance of
            thorough preparation was evident in Denis and Jelena's approach to
            organizing the FEI Equestrian Championship. The meticulous planning,
            which began a year in advance, involved creating visual outlines and
            utilizing tools like "Master Task" and "Mind Master" for effective
            event management. This highlighted the importance of a structured
            approach and the need for long-term planning to ensure the success
            of a large-scale event. The interview shed light on the challenges
            faced during the production of the championship, such as gaining
            approval from the FEI and securing sponsors. Denis and Jelena's
            determination to overcome these challenges showcased resilience and
            highlighted the significance of perseverance in the face of
            obstacles. Furthermore, the interview provided insights into the
            multifaceted nature of a producer's role, involving aspects like
            logistics, finance, marketing, and participant coordination. Denis's
            emphasis on the importance of volunteers in executing the event
            underscored the collaborative and team-oriented nature of event
            management. The integration of technology and innovation in event
            production was touched upon, with Denis mentioning the use of
            interactive marketing strategies and an innovative method to reduce
            environmental impact. This highlighted the role of technology in
            enhancing the overall experience of both competitors and spectators.
            Sustainability and eco-friendliness emerged as crucial
            considerations in the recent FEI Equestrian Championship. Denis's
            explanation of waste sorting measures and tree planting initiatives
            demonstrated a commitment to responsible event management and
            sustainable development. The interview provided valuable advice for
            aspiring event producers, emphasizing the need for continuous
            learning, attention to detail, and the ability to learn from
            mistakes. Denis's personal philosophy of providing clients with an
            unforgettable experience underscored the customer-centric approach
            essential in event management. In conclusion, the expert interview
            not only deepened my understanding of the producer's role in event
            development but also provided practical insights and valuable
            lessons applicable to personal and professional growth. The
            experience reinforced the importance of adaptability, meticulous
            planning, and a customer-centric approach in the dynamic field of
            event management.
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
          image="/images/wide-reflection-event-2.png"
          backgroundColor="primary"
          textColor="text"
          text={
            <div>
              I calculated the hours for my expert interview. In the end total
              amount of hours I spent in total 34 hours this includes all steps
              of the assignment looking for Production and Interview Materials
              and in the end Interview Execution.
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

export default Interview;
