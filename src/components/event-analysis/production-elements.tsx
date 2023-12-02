import React from "react";
import Header from "../reusable/header";
import NarrowParagraph from "../reusable/narrow-paragraph";
import WideParagraph from "../reusable/wide-paragraph";

const ProductionElements = ({
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
    <div className="bg-pattern-4 py-10 bg-opacity-40 flex justify-center items-center">
      <div className="bg-background p-12 rounded-xl w-fit h-fit flex justify-center flex-col items-center">
        <Header
          content={"Production Elements"}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <div className="w-full text-start">
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="mb-3 w-fit underline font-black h-fit text-[30px] text-start text-secondary"
          >
            Program of The Festival
          </h2>
        </div>
        <NarrowParagraph
          image="/images/prod-1.png"
          textColor="primary"
          textPosition="right"
          text="The Thuishaven Festival program is a meticulously crafted masterpiece, overseen by a team of dedicated programmers. With its diverse and multifaceted lineup, the festival reflects the collaborative efforts of these visionary individuals: Job Cederhout, Jordi van der Heij, Kasper Jorissen, and Ilian Klinkhamer. Each programmer brings their own expertise and genre specialization to the table, ensuring that the festival appeals to a broad spectrum of musical tastes. Their programming choices are not merely a result of industry connections, but rather an intricate dance of musical knowledge and personal preferences.
          (Thuishaven 2023)"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-1.png"
          backgroundColor="primary"
          textColor="accent"
          text="Intriguingly, the process of creating the Thuishaven Festival program is a few months endeavor. The programming team meticulously curates the artist roster well in advance, engaging in extensive communication and negotiation with artists and their representatives. It's a delicate balance of securing fan favorites, discovering hidden gems, and aligning with the festival's artistic vision. The journey doesn't end with the booking process, as the programmers and bookers remain actively involved during the festival itself. They're keen observers, tracking how the audience responds to each performance and experience. This hands-on approach helps them gauge which artists may be reinvited for future editions, all while maintaining a strong connection between the festival and its performers."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/prod-2.png"
          textColor="primary"
          textPosition="left"
          text="Thuishaven Festival thrives on surprise and discovery, and its programmers are at the forefront of this mission. The festival's reputation for pushing boundaries and exploring the fringes of music and art is a testament to the dedication of these individuals. The result is a multifaceted and dynamic program that resonates with attendees and keeps them coming back year after year, ready to embark on a new and exciting journey of musical and artistic exploration."
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
            Decorations
          </h2>
        </div>
        <WideParagraph
          image="/images/wide-prod-2.png"
          backgroundColor="secondary"
          textColor="accent"
          text="At Thuishaven Festival, the organization of decor is a complex and vital component of the overall production. The festival's aesthetic and ambiance are shaped by a dedicated team of production professionals who meticulously plan and execute the visual elements, creating a transformative experience for festivalgoers. The process begins months in advance, with a collaborative effort involving production designers, artists, and craftsmen who work in unison to conceptualize and execute the festival's decorative themes. These themes are not mere afterthoughts but rather integral to the festival's identity, reflecting the artistic vision that guides the event's overall design
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/prod-3.png"
          textColor="primary"
          textPosition="right"
          text="Production teams oversee the sourcing of materials, creation of installations, and coordination of logistics to ensure that the decor aligns seamlessly with the festival's theme. They meticulously plan every detail, from the choice of colors and materials to the placement of installations, to evoke a sense of wonder and immersion."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-3.png"
          backgroundColor="accent"
          textColor="accent"
          text="As the festival unfolds, the production teams remain actively engaged, monitoring the decor's condition, making real-time adjustments, and troubleshooting any issues that may arise. This hands-on approach ensures that the visual elements contribute to the festival's overall atmosphere and enhance the attendee experience. The production elements related to decor organization at Thuishaven Festival exemplify the commitment to pushing creative boundaries and delivering a sensory experience that captivates the audience. Each production team member plays a vital role in curating an environment that invites festivalgoers to explore, discover, and become part of an artistic and visual journey that sets Thuishaven apart as a festival with a unique and immersive character. Months in advance, these teams collaborate to conceptualize decor themes that not only reflect artistic vision but also adhere to stringent safety standards. The safety experts play a crucial role in ensuring that all decor elements are fire-resistant and pose no risk to attendees.
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-4.png"
          backgroundColor="text"
          textColor="accent"
          text="Materials are carefully sourced, taking into account fire safety and other potential hazards. Flame-retardant materials are a common choice, providing both aesthetic appeal and protection. Additionally, production teams are trained to handle fire safety measures, including the placement of fire extinguishers and fire exits to guarantee the well-being of attendees.

          As the festival unfolds, the production teams remain vigilant, monitoring the condition of decor installations to mitigate any safety concerns in real-time. Their expertise in fire safety ensures that the festival maintains a secure environment while still delivering a visually immersive experience.
          
          The production elements related to decor organization at Thuishaven Festival epitomize the commitment to not only pushing creative boundaries but also to doing so responsibly. Each production team member's role is integral in creating a visually enchanting and safe environment, inviting festivalgoers to explore, discover, and become part of an artistic and secure journey that characterizes Thuishaven as a festival with a unique and immersive character.
          
          "
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
            Logistics
          </h2>
        </div>
        <NarrowParagraph
          image="/images/prod-4.png"
          textColor="primary"
          textPosition="left"
          text="Thuishaven Festival Logistics: Crafting an Immersive Experience

          Thuishaven Festival is renowned for its captivating and immersive experience, but behind the scenes, a well-orchestrated logistical ballet ensures that everything runs like clockwork. From site preparation to artist arrivals, safety measures, and the comfort of festivalgoers, logistics is the backbone of the event's success.
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-5.png"
          backgroundColor="primary"
          textColor="accent"
          text="Site Setup and Organization: The festival's expansive site, which includes multiple stages, art installations, food vendors, and relaxation areas, demands meticulous planning and execution. The logistics team coordinates the setup of infrastructure, including stages, lighting, sound systems, and decorative elements, all while adhering to a carefully measured grid system. This systematic approach not only facilitates efficient event management but also ensures quick emergency response capabilities, enhancing the safety of attendees.

          Transportation and Supply Chain: The festival's production demands a constant influx of equipment, materials, and supplies. Coordinating a network of transport vehicles is essential to keep the event well-stocked. The logistics team manages a complex supply chain that includes the delivery of vital components, such as sound equipment, power generators, food and beverage supplies, and decor materials. Timing is crucial to ensure that every element is in place when needed.
          
          Artist Arrivals and Backstage Logistics: Beyond the stage, Thuishaven's logistics extend to artist arrivals and backstage operations. This entails meticulous scheduling, travel coordination, and ensuring that artists have everything they need for their performances. It's a crucial aspect of the festival's reputation for seamless and memorable artist experiences.
          
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-6.png"
          backgroundColor="secondary"
          textColor="accent"
          text="Safety and Emergency Response: The logistics team plays a vital role in ensuring the safety and well-being of attendees. They work in tandem with emergency services to implement safety measures, including fire prevention and medical response plans. The grid system used for site organization doubles as a reference point for emergency response, allowing for rapid assistance in the case of unforeseen incidents.

          Restroom Facilities and Waste Management: Providing festivalgoers with clean and accessible restroom facilities is a logistical challenge that Thuishaven takes seriously. Additionally, waste management is a key focus, with recycling stations and responsible waste disposal practices in place. The logistics team ensures that restroom facilities are maintained, and waste bins are regularly emptied to uphold a clean and eco-conscious environment.
          
          Post-Festival Cleanup and Restoration: Once the festival reaches its conclusion, logistics extend to the efficient post-festival cleanup and site restoration. The removal of waste, temporary structures, and decor elements is carried out meticulously. The goal is to leave the site in its original state, reflecting Thuishaven's commitment to responsible event management and environmental stewardship.
          
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/prod-5.png"
          textColor="primary"
          textPosition="right"
          text="In essence, Thuishaven Festival's logistics are an intricate tapestry of planning, execution, and problem-solving that underpin the event's success. It's a testament to the dedicated professionals who work behind the scenes, ensuring that attendees can lose themselves in the music, art, and culture while feeling safe, comfortable, and in awe of the festival's immersive experience."
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
            Food Zone
          </h2>
        </div>
        <WideParagraph
          image="/images/wide-prod-7.png"
          backgroundColor="accent"
          textColor="accent"
          text="Thuishaven Festival's production team plays a pivotal role in the organization's food zone. They meticulously curate the festival's food and beverage offerings, ensuring that they not only meet high-quality standards but also perfectly complement the festival's unique atmosphere. With a focus on surprise, quality, and diversity, the festival's culinary experience is designed to delight and cater to a wide spectrum of tastes and preferences.

          Furthermore, sustainability is not just a concept; it's ingrained in the festival's ethos. The production team collaborates closely with catering providers to minimize waste and reduce the festival's environmental footprint. By implementing eco-friendly practices such as the use of reusable containers and environmentally conscious packaging, Thuishaven Festival ensures that its culinary journey is not only diverse and delightful but also respectful of the planet. In every aspect, Thuishaven's commitment to pioneering sustainable and diverse culinary delights enhances the overall festival experience. (Thuishaven 2022).
          
          "
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
            Safety
          </h2>
        </div>
        <NarrowParagraph
          image="/images/prod-6.png"
          textColor="primary"
          textPosition="left"
          text="The foundation of any successful safety strategy begins with meticulous site inspections and comprehensive planning. Before the festival kicks off, production teams must assess the festival venue's layout, infrastructure, and potential hazards. This process is crucial to identify and mitigate potential risks. Detailed site plans, emergency exit routes, medical aid locations, and staff and security zones are carefully established to facilitate a swift and organized response to emergencies."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-8.png"
          backgroundColor="text"
          textColor="accent"
          text="A well-structured emergency response plan is the backbone of safety measures at Thuishaven Festival. This plan outlines the procedures for managing a range of incidents, from medical emergencies to unexpected natural disasters. Moreover, communication protocols must be in place to ensure rapid and effective responses. Radio systems, mobile communication devices, and a central command post help coordinate responses among different teams.
          Security is a cornerstone of ensuring the safety of both festival-goers and staff. A trained and adequately sized security team is essential to manage crowd control, monitor festival grounds, and respond to security threats. Security personnel undergo specific training to identify potential risks and manage security breaches or unruly behavior while maintaining a respectful and non-confrontational approach. Adequate medical supplies and a clear protocol for handling medical emergencies, including drug-related incidents, are essential components of festival safety.
          Fire safety cannot be overlooked, particularly when festivals include pyrotechnics or open flames. Properly maintained fire extinguishers and trained personnel are essential for addressing fire-related emergencies. Clear evacuation plans for fire incidents and designated assembly points for festival-goers are crucial elements of fire safety protocols.
          Monitoring alcohol consumption and substance abuse is a significant concern. Security personnel are well-versed in handling intoxicated or unruly individuals with sensitivity and professionalism. 
          "
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-9.png"
          backgroundColor="primary"
          textColor="accent"
          text="Awareness campaigns about the risks of substance abuse and guidelines for responsible consumption contribute to a safer festival environment.
          Every staff member  is a crucial piece of the safety puzzle. Thorough training and clear instructions regarding their roles and responsibilities are vital. Pre-event briefings ensure that everyone involved understands the safety protocols and can execute their tasks with confidence. 
          After the festival concludes, a post-event debriefing is conducted to review safety measures and identify areas for improvement. The lessons learned from each festival are documented and applied to enhance safety measures at future events.
          Safety at Thuishaven Festival is a shared responsibility that encompasses the efforts of the production team, security personnel, medical staff, and attendees. By diligently planning and implementing these safety measures from the production side, Thuishaven Festival  create a secure environment that allows festival-goers to fully enjoy the music, culture, and art while having peace of mind that their safety is a top priority. The continuous commitment to enhancing safety measures ensures that the festival remains a positive and unforgettable experience for all.
          
          "
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
            Permits
          </h2>
        </div>
        <NarrowParagraph
          image="/images/prod-7.png"
          textColor="primary"
          textPosition="right"
          text="Organizing a music festival as grand and captivating as Thuishaven requires meticulous planning, attention to detail, and compliance with a multitude of regulations. Among the essential aspects of event management is the acquisition of various permits, which are not only necessary to ensure the festival's legality but also to guarantee the safety and well-being of all participants. In this essay, we delve into the permits required for Thuishaven Festival, shedding light on the critical roles they play in the event's success. According to The Dutch Laws Thuishaven Organisers have these permits:"
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <WideParagraph
          image="/images/wide-prod-10.png"
          backgroundColor="primary"
          textColor="accent"
          text={
            <div>
              <p>
                One of the cornerstones of organizing a festival like Thuishaven
                is securing an events permit from the municipality. This permit
                is imperative for large events held in publicly accessible
                places. It serves as the legal gateway that authorizes the
                festival to take place. The events permit application
                encompasses several key components:
              </p>
              <h3 className="font-black mb-2 mt-4">Noise Levels:</h3>
              <p>
                Noise Levels: Festival organizers must provide details about
                expected noise levels, particularly crucial for mitigating
                disturbances to nearby residents and businesses.
              </p>

              <h3 className="font-black mb-2 mt-4">
                Stalls and Fairground Attractions:
              </h3>
              <p>
                Stalls and Fairground Attractions: Information on the placement
                of stalls and fairground attractions must be included, ensuring
                that these activities adhere to safety regulations.
              </p>

              <h3 className="font-black mb-2 mt-4">
                Conditions to Limit Disturbances:
              </h3>
              <p>
                Conditions to Limit Disturbances: The permit also establishes
                conditions to minimize nuisances, such as defining permitted
                noise levels and event start/end times.
              </p>

              <h3 className="font-black mb-2 mt-4">Safety Measures:</h3>
              <p>
                Safety Measures: Safety measures, including crowd control and
                medical services, are considered to ensure the well-being of the
                public.
              </p>

              <h3 className="font-black mb-2 mt-4">
                Accessibility for Emergency Services:
              </h3>
              <p>
                Accessibility for Emergency Services: Accessibility for
                emergency services is a paramount concern, and this is addressed
                within the permit.
              </p>

              <h3 className="font-black mb-2 mt-4">Site Cleaning:</h3>
              <p>
                Site Cleaning: The permit may stipulate requirements for the
                post-event cleaning of the festival site. It is crucial to note
                that the permit holder, in this case, the festival organizers,
                assumes the responsibility for the safety and security of both
                participants and visitors.
              </p>

              <h3 className="font-black mb-2 mt-4">Environmental Permit:</h3>
              <p>
                Given the potential environmental impact of an event like the
                Thuishaven Festival, an environmental permit may be required.
                This permit not only ensures compliance with environmental
                regulations but also tailors specific conditions for noise and
                environmental aspects. For instance, it can limit the maximum
                number of decibels to minimize sound pollution, an essential
                consideration for an event renowned for its music and
                performances.
              </p>

              <h3 className="font-black mb-2 mt-4">Zoning Plan Compliance:</h3>
              <p>
                Every festival organizer must carefully consider whether the
                event aligns with the zoning plan of the chosen location. In
                cases where the zoning plan does not permit events, organizers
                may need to apply for an &quot;Environmental permit for the
                activity in conflict.&quot; This allows them to deviate from the
                plan, ensuring the event can take place. Depending on the nature
                of the festival, it may also require an environmental permit for
                the Environment Activity, which comes with tailored regulations
                concerning noise and environmental aspects.
              </p>

              <h3 className="font-black mb-2 mt-4">
                Permission for Temporary Structures:
              </h3>
              <p>
                The erection of temporary structures, such as tents, stages,
                positions, and stands, necessitates permission from the
                municipality. Typically, this permission is coupled with the
                events permit. The safety of these structures is ensured through
                inspections by the fire brigade, guaranteeing that
                festival-goers can enjoy the event without risks associated with
                structural failures.
              </p>

              <h3 className="font-black mb-2 mt-4">Alcohol Permits:</h3>
              <p>
                For those festivals where alcoholic beverages are offered, the
                acquisition of two permits is mandatory: a tap permit and a
                permit for selling spirits. These permits regulate the legal
                serving and sale of alcohol during the event, contributing to a
                responsible and safe festival atmosphere.
              </p>
            </div>
          }
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
        <NarrowParagraph
          image="/images/prod-8.png"
          textColor="primary"
          textPosition="left"
          text="The process of organizing an event as expansive and engaging as Thuishaven Festival necessitates a comprehensive understanding of the various permits required. These permits serve not only as legal prerequisites but as safeguards for the safety and enjoyment of all participants. They provide a framework for noise control, environmental compliance, structural safety, responsible alcohol service, fireworks safety, and environmental protection. The successful acquisition and adherence to these permits ultimately lead to a festival that is not only legally sound but also memorable, safe, and environmentally responsible. Thuishaven Festival's ability to navigate the permits landscape is key to its continued success and positive impact on both the music industry and the community it serves."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default ProductionElements;
