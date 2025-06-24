import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col lg:block w-full items-center">
      <div className="flex w-full justify-center lg:justify-end">
        <Image
          src="/images/mockup.png"
          alt="Fametonic app mockup"
          width={666}
          height={679}
          className="w-full h-auto max-w-sm lg:max-w-[666px]"
        />
      </div>

      <div
        className="
      w-full space-y-2 sm:space-y-4 p-2 
      sm:absolute sm:top-1/2 sm:left-6 sm:-translate-y-1/2 
      sm:w-[516px] sm:p-0
    "
      >
        <div className="space-y-4">
          <h2 className="text-2xl text-center sm:text-left sm:text-4xl font-['urbanist'] font-bold leading-8  sm:leading-tight">
            Want to Turn Social Media Into a Profitable Career? <br />
            <span className="text-cyan-400 [text-shadow:0_0_8px_#FC004E]">
              Discover your way to success with Fametonic:
            </span>
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-4 pt-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 sm:mt-0 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Start growing your influence right away—no waiting required!
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 sm:mt-0 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 sm:mt-0 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Use a Personal AI Worker to boost your content
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 sm:mt-0 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Learn from expert-led courses designed for aspiring influencers
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8 pt-3 sm:pt-4">
          <div className="flex flex-col w-full sm:w-1/2 space-y-3 mt-6 sm:mt-0 order-2 sm:order-1">
            <button className="bg-[#FC004E] cursor-pointer text-white px-8 py-3 font-figtree font-bold text-xl leading-none rounded-xl shadow-[2px_2px_10px_#22d3ee] transition-all">
              GET STARTED
            </button>
            <p className="text-xs text-center text-gray-300">
              1-minute quiz for personalized Insights
            </p>
          </div>

          <div className="text-[#ABABAB] space-y-1 text-center sm:text-left order-1 sm:order-2">
            <p className="text-xs">
              By clicking "Get Started" you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="mt-3 text-[10px]">
              Fametonic 2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
