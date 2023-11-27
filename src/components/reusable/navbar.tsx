import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = ({
  hoverEnter,
  hoverLeave,
  mousePosition,
}: {
  hoverEnter?: () => void;
  hoverLeave?: () => void;
  mousePosition?: { x: number; y: number };
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full font-avenir p-12 h-fit justify-center items-center inline-flex">
      <div
        onClick={() => {
          router.push({
            pathname: `/personal-development`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/personal-development" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        DEVELOPMENT PLAN
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/event-analysis`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/event-analysis" ? "underline" : ""
        }`}
      >
        EVENT
        <br />
        ANALYSIS
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/expert-interview`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/expert-interview" ? "underline" : ""
        }`}
      >
        EXPERT
        <br />
        INTERVIEW
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/personal-branding`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/personal-branding" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        BRANDING
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/time-management`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/time-management" ? "underline" : ""
        }`}
      >
        TIME
        <br />
        MANAGEMENT
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/business-management`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/business-management" ? "underline" : ""
        }`}
      >
        BUSINESS
        <br />
        MANAGEMENT
      </div>
      <div
        onClick={() => {
          router.push({
            pathname: `/media-skills`,
            query: mousePosition,
          });
        }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
        className={`hover:scale-105 hover:underline cursor-none grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/media-skills" ? "underline" : ""
        }`}
      >
        MEDIA
        <br />
        SKILLS
      </div>
    </div>
  );
};

export default Navbar;
