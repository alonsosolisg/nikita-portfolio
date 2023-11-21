import React from "react";

const MianBanner = () => {
  return (
    <div className="w-full font-avenir h-fit py-10 justify-center items-center gap-[71px] inline-flex">
      <div className="flex-col justify-center items-start gap-[15px] inline-flex">
        <div className="w-full font-black h-fit text-text text-[64px]">
          Hello, I&apos;m Nikita
        </div>
        <div className="w-[642px] text-text text-[32px] font-normal">
          And I&apos;m a Creative Business Student from Inholland with
          experience in Event Planning
        </div>
      </div>
      <div className="w-[501px] h-[512px] relative">
        <div className="w-[477px] h-[468px] left-[24px] top-[44px] absolute bg-red-400 rounded-[21px]" />
        <img
          className="w-[465px] h-[466px] object-cover left-0 top-0 absolute rounded-[21px]"
          src="/images/main_banner_pic.png"
        />
      </div>
    </div>
  );
};

export default MianBanner;
