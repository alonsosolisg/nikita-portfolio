import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full font-avenir p-12 h-fit justify-center items-center inline-flex">
      <Link
        href="/"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        DEVELOPMENT
      </Link>
      <Link
        href="/event-analysis"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/event-analysis" ? "underline" : ""
        }`}
      >
        EVENT
        <br />
        ANALYSIS
      </Link>
      <Link
        href="/expert-interview"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/expert-interview" ? "underline" : ""
        }`}
      >
        EXPERT
        <br />
        INTERVIEW
      </Link>
      <Link
        href="/personal-branding"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/personal-branding" ? "underline" : ""
        }`}
      >
        PERSONAL
        <br />
        BRANDING
      </Link>
      <Link
        href="/work-field-orientation"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/work-field-orientation" ? "underline" : ""
        }`}
      >
        WORK FIELD
        <br />
        ORIENTATION
      </Link>
      <Link
        href="/theory-and-practice"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/theory-and-practice" ? "underline" : ""
        }`}
      >
        THEORY &<br />
        PRACTICE
      </Link>
      <Link
        href="/event-staging"
        className={`hover:scale-105 hover:underline cursor-pointer grow shrink basis-0 h-fit text-center text-black text-2xl font-normal ${
          pathname === "/event-staging" ? "underline" : ""
        }`}
      >
        EVENT
        <br />
        STAGING
      </Link>
    </div>
  );
};

export default Navbar;