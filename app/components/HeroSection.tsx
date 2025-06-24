import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8 lg:block w-full px-4 py-8">
      <div className="flex w-full justify-center md:order-2 lg:justify-end">
        <Image
          src="/images/mockup.png"
          alt="Fametonic app mockup"
          width={666}
          height={679}
          className="w-full h-auto max-w-sm sm:max-w-md md:max-w-full lg:max-w-[666px]"
          priority
        />
      </div>

      <div
        className="
          w-full space-y-4 pt-8 md:order-1 md:pt-0 
          lg:absolute lg:top-1/2 lg:left-6 lg:-translate-y-1/2 
          lg:w-[516px]
        "
      >
        <div className="space-y-4">
          <h2 className="text-2xl text-center md:text-left lg:text-4xl font-['urbanist'] font-extrabold leading-tight">
            Want to Turn Social Media Into a Profitable Career? <br />
            <span className="text-cyan-400 [text-shadow:0_0_8px_#FC004E]">
              Discover your way to success with Fametonic:
            </span>
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Start growing your influence right away—no waiting required!
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Create viral TikToks and Reels step by step with easy-to-follow
              lessons
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Use a Personal AI Worker to boost your content
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 flex-shrink-0">✨</span>
            <p className="font-figtree font-semibold text-base leading-snug">
              Learn from expert-led courses designed for aspiring influencers
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8 pt-4">
          <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 mt-6 sm:mt-0 space-y-3 order-2 sm:order-1">
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
