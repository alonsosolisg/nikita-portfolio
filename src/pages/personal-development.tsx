import GradientBanner from "@/components/personal-development/gradient-banner";
import IntroductionCarousel from "@/components/personal-development/introduction-carousel";
import WhatToAchieve from "@/components/personal-development/what-to-achieve";
import WhyChose from "@/components/personal-development/why-chose";
import Blob from "@/components/reusable/blob";
import Navbar from "@/components/reusable/navbar";
import Link from "next/link";
import React from "react";

const PersonalDevelopment = () => {
  return (
    <main className="font-avenir">
      <Navbar />
      <IntroductionCarousel />
      <GradientBanner />
      <WhatToAchieve />
      <WhyChose />
      <Blob right={false} text="HOME" url="" />
      <Blob right={true} text="REFLECTION" url="reflection" />
    </main>
  );
};

export default PersonalDevelopment;
