import React from "react";
import Header from "../reusable/header";
import WideParagraph from "../reusable/wide-paragraph";
import NarrowParagraph from "../reusable/narrow-paragraph";

const FinanceAspects = ({
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
    <div className="py-16">
      <Header
        textEnter={textEnter}
        textLeave={textLeave}
        content="Finance Aspects"
      />
      <WideParagraph
        backgroundColor="secondary"
        textColor="accent"
        image="/images/wide-finance-1.png"
        text="In the intricate world of event production, financial sustainability stands as a linchpin for success. Thuishaven Festival, renowned for its innovative and diverse offerings, has masterfully constructed a multifaceted financial model that fuels its operations, ensuring that each festival is a memorable experience for attendees. This essay embarks on a profound analysis of the financial ecosystem of Thuishaven Festival, offering a glimpse into the financial intricacies of this cultural phenomenon."
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="accent"
        image="/images/finance-1.png"
        text={
          <div>
            <h3 className="mb-4 font-black">
              1. Ticket Sales - The Cornerstone of Revenue:
            </h3>
            <p>
              Primary Income Source: The most visible and fundamental source of
              revenue for Thuishaven Festival is ticket sales. Attendees secure
              their entry by purchasing tickets, with prices fluctuating based
              on factors like the date of purchase, artist lineups, and package
              amenities. Operational Backbone: The revenue accrued from ticket
              sales serves as the financial backbone of the festival, covering
              expenses such as artist fees, logistics, and event production
              costs. It is, without a doubt, the lifeline of the event.
            </p>
          </div>
        }
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="accent"
        image="/images/finance-2.png"
        text={
          <div>
            <h3 className="mb-4 font-black">
              2. Sponsorship Deals - Aligning Brands with the Festival:{" "}
            </h3>
            <p>
              Strategic Partnerships: Thuishaven Festival actively engages in
              sponsorship deals with a diverse array of brands and companies.
              These sponsors extend financial support to the festival in
              exchange for brand exposure, marketing opportunities, and a
              presence at the event. Reducing Operational Costs: Sponsorship
              deals often come with in-kind contributions, such as materials or
              services, which serve to diminish the festival&apos;s operational
              expenditures. These partnerships are symbiotic, offering mutual
              benefits.
            </p>
          </div>
        }
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="accent"
        image="/images/finance-3.png"
        text={
          <div>
            <h3 className="mb-4 font-black">
              3. Merchandise Sales - A Tangible Keepsake:
            </h3>
            <p>
              Souvenirs and Memorabilia: The festival offers a wide range of
              merchandise, from clothing to accessories, providing attendees
              with tangible souvenirs of their experience. Additional Income:
              The revenue generated from merchandise sales, when coupled with
              branding and marketing, can constitute a substantial source of
              income, adding a layer of financial stability to the festival.
            </p>
          </div>
        }
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="accent"
        image="/images/finance-4.png"
        text={
          <div>
            <h3 className="mb-4 font-black">
              4. Food and Beverage Sales - Culinary Delights for All:{" "}
            </h3>
            <p>
              Culinary Diversity: Food stalls, bars, and catering services
              provide a diverse array of culinary options, catering to the
              tastes of attendees. These sales generate a significant stream of
              revenue that is shared between the festival and the vendors,
              bolstering the festival&apos;s financial health.
            </p>
          </div>
        }
        textPosition="right"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <NarrowParagraph
        textColor="accent"
        image="/images/finance-5.png"
        text={
          <div>
            <h3 className="mb-4 font-black">
              5. Ancillary Services - Enhancing the Experience:{" "}
            </h3>
            <p>
              Convenience Services: Services like charging stations, lockers,
              and shuttle services enhance the attendee experience while
              generating additional income for the festival.
            </p>
          </div>
        }
        textPosition="left"
        imageEnter={imageEnter}
        imageLeave={imageLeave}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <div className="mt-10">
        <Header
          textEnter={textEnter}
          textLeave={textLeave}
          content="Heads of The Thuishaven Festival"
        />
        <WideParagraph
          backgroundColor="secondary"
          textColor="accent"
          image="/images/wide-finance-2.png"
          text="Thuishaven Festival, an iconic and innovative event that has captivated audiences in Amsterdam and beyond, is brought to life by a dedicated team of organizers and visionaries. Organized by a quartet of creative minds, namely Job Cederhout, Jordi van der Heij, Kasper Jorissen, and Ilian Klinkhamer, this dynamic team has curated an unforgettable festival experience that seamlessly weaves together music, art, and culture. With a shared passion for pushing the boundaries of what a festival can be, these individuals have been instrumental in creating an environment where attendees can escape into a world of creativity, exploration, and community. Their collective efforts have established the Thuishaven Festival as a cultural and musical phenomenon, one that continues to evolve and inspire with each passing event. (Thuishaven 2023)."
          imageEnter={imageEnter}
          imageLeave={imageLeave}
          textEnter={textEnter}
          textLeave={textLeave}
        />
      </div>
    </div>
  );
};

export default FinanceAspects;
