import React from "react";

const Footer = ({
  textEnter,
  textLeave,
}: {
  textEnter: () => void;
  textLeave: () => void;
}) => {
  return (
    <div className="w-full h-fit py-2 px-10 ">
      <ul className="flex justify-evenly gap-4 text-text">
        <li>NAME: Nikita Eesmaa</li>
        <li>Student ID: 720981</li>
        <li>ROLE: PRODUCER</li>
        <li>EDUCATION: CREATIVE BUSINESS</li>
        <li>COACH: FERDINAND BOONEKAMP</li>
        <li>CLASS: DILMVTEVEX3ENG</li>
        <li>EMAIL: 720981@student.inholland.nl</li>
        <li>SUBMISSION DATE: 04.12.2023</li>
      </ul>
    </div>
  );
};

export default Footer;
