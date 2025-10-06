import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full mt-[-6rem] 2xlplus:mt-[-7rem] pt-[8rem] pb-16 sm:pt-[9rem] sm:pb-20 md:pt-[10rem] md:pb-24 lg:pt-[11rem] lg:pb-44 xl:pt-[11rem] xl:pb-44 2xlplus:pt-[12rem] 2xlplus:pb-48 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
      <div className="container px-4 max-w-[76.25rem] 2xlplus:max-w-[84rem]">
        <div className="grid gap-10 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_600px] xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <p className=" md:text-xl font-bold mx-auto lg:mx-0">epanet-js</p>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-5xl/none">
                The EPANET you know — but modern, enhanced, and{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  entirely in your browser.
                </span>
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                No installs. No forced cloud storage. Just fast, local-first
                water modeling — powered by the engine you already trust.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="https://app.epanetjs.com">
                  Launch epanet-js. No login needed.
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Container sets the size and aspect ratio */}
            {/* REMOVED overflow-hidden from this div's classes */}
            <div className="hero_demoscreen relative w-full  sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px] rounded-xl shadow-2xl bg-[#e8e8e8] browser-mockup with-url">
              <video
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
                crossOrigin="anonymous"
                className="shadow-xl shadow-gray-400/20 rounded-md bg-blue-100 w-full h-full object-cover" // Keep sizing
                preload="auto"
                poster="/assets/landing/video-poster.webp"
                width="1440"
                height="1130"
              >
                {/* Sources remain the same */}
                <source
                  src="/assets/landing/epanetjs_demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
