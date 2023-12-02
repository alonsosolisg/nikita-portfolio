import React from "react";
const gradientStyle = {
  backgroundImage: `linear-gradient(to right, rgba(62, 95, 180, 1), rgba(119, 98, 154, 1), rgba(162, 101, 134, 1), rgba(216, 104, 109, 1), rgba(241, 105, 97, 1), rgba(242, 92, 104, 0.95), rgba(243, 80, 111, 0.9), rgba(245, 65, 119, 0.83), rgba(247, 36, 135, 0.71))`,
  backgroundSize: "200% 200%",
  animation: "gradientAnimation 10s ease infinite",
};
const Header = ({
  textEnter,
  textLeave,
  content,
}: {
  textEnter: () => void;
  textLeave: () => void;
  content: JSX.Element | string;
}) => {
  return (
    <h1
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        ...gradientStyle,
      }}
      className="mb-8 w-full font-black h-fit text-[50px] text-center custom-gradient"
    >
      {content}
    </h1>
  );
};

export default Header;
