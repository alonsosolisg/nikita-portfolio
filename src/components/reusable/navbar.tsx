import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full font-avenir p-12 h-fit justify-center items-center inline-flex">
      <Link
        href="/personal-development"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/personal-development" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        DEVELOPMENT
      </Link>
      <Link
        href="/event-analysis"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/event-analysis" ? "underline" : ""
        }`}
      >
        EVENT
        <br />
        ANALYSIS
      </Link>
      <Link
        href="/expert-interview"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/expert-interview" ? "underline" : ""
        }`}
      >
        EXPERT
        <br />
        INTERVIEW
      </Link>
      <Link
        href="/personal-branding"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/personal-branding" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        BRANDING
      </Link>
      <Link
        href="/time-management"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/time-management" ? "underline" : ""
        }`}
      >
        TIME
        <br />
        MANAGEMENT
      </Link>
      <Link
        href="/business-management"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/business-management" ? "underline" : ""
        }`}
      >
        BUSINESS
        <br />
        MANAGEMENT
      </Link>
      <Link
        href="/media-skills"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-text text-2xl font-normal ${
          pathname === "/media-skills" ? "underline" : ""
        }`}
      >
        MEDIA
        <br />
        SKILLS
      </Link>
    </div>
  );
};

export default Navbar;
