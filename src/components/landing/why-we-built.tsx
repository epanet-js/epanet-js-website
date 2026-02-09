import lbutler from "@assets/landing/lbutler.webp?url";
import spaya from "@assets/landing/spaya.webp?url";
import { Linkedin } from "lucide-react";

export default function WhyWeBuilt() {
  return (
    <section
      id="why-we-built-epanet-js"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="container mx-auto px-8 md:px-6 xl:px-24 relative">
        <div className="flex flex-col items-center md:gap-10 justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-12">
          <div className="space-y-2">
            <h2 className="pb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why we built epanet-js
            </h2>
          </div>

          {/* Cofounders Photos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="https://ca.linkedin.com/in/lukepbutler" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                <img
                  src={lbutler}
                  alt="Luke Butler - Co-founder"
                  className="w-36 h-36 md:w-44 md:h-44 mb-4 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
                />
                <div className="text-center space-y-1 text-base font-semibold">
                  <div className="flex items-center justify-center flex-row-reverse gap-1">
                    Luke Butler
                    <span className="sr-only">LinkedIn</span><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                  </div>
                  <p className="text-sm text-gray-600">Co-founder</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <a href="https://es.linkedin.com/in/sapagat" className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                <img
                  src={spaya}
                  alt="Sam - Co-founder"
                  className="w-36 h-36 md:w-44 md:h-44 mb-4 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
                />
                <div className="text-center space-y-1 text-base font-semibold">
                  <div className="flex items-center justify-center flex-row-reverse gap-1">
                    Sam Payá <span className="sr-only">LinkedIn</span><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                  </div>
                  <p className="text-sm text-gray-600">Co-founder</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 ">
          <p className="md:text-lg leading-relaxed">
            You may not know this, but for decades, the U.S. EPA has given the
            water industry an extraordinary gift: the free and open-source
            hydraulic modeling software EPANET. Odds are, if you've used any
            commercial hydraulic modeling software today, it was built on the
            EPANET engine.
          </p>
          <p className="md:text-lg leading-relaxed">
            The problem is, instead of giving back to their open-source roots
            like other industries do, big-name software vendors took EPANET's
            open code, built private tools on top of the engine, and then locked
            those improvements behind patents and proprietary licenses.
          </p>
          <p className="md:text-lg leading-relaxed">
            Some vendors even pressured the EPA to focus only on the engine —
            discouraging any effort to improve the interface or user experience
            for everyone else.
          </p>
          <p className="md:text-lg leading-relaxed">
            Those vendors now charge you exorbitant prices to use their software
            while EPANET lags behind — and utilities, engineers, and educators
            with smaller budgets suffer.
          </p>
          <p className="md:text-lg leading-relaxed">
            We think this is backwards — and we're on a mission to change it.
            We're focused on creating a better experience for the entire
            hydraulic modeling community.
          </p>
          <p className="md:text-lg leading-relaxed">
            That's why we built epanet-js under an FSL license — because we want
            to give you an affordable, easy-to-use water modeling option that
            creates a sustainable future for open-source EPANET development.
          </p>
          <p className="md:text-lg leading-relaxed">
            Support EPANET by using software that supports it back.
          </p>
        </div>
      </div>
    </section>
  );
}
