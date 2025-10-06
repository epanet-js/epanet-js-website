export default function WhyWeBuilt() {
  return (
    <section
      id="why-we-built-epanet-js"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"></div>
      <div className="container px-8 md:px-6 xl:px-24 relative">
        <div className="flex flex-col items-center md:gap-10 justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-12">
          <div className="space-y-2">
            <h2 className="pb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why we built epanet-js
            </h2>
          </div>

          {/* Cofounders Photos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-4">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={"/assets/landing/lbutler.webp"}
                alt="Luke Butler - Co-founder"
                className="w-36 h-36 md:w-44 md:h-44 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
              />
              <div className="text-center space-y-1">
                <p className="text-base font-semibold text-gray-800">
                  Luke Butler
                </p>
                <p className="text-sm text-gray-600">Co-founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                src={"/assets/landing/spaya.webp"}
                alt="Sam - Co-founder"
                className="w-36 h-36 md:w-44 md:h-44 rounded-xl object-cover border-2 border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
              />
              <div className="text-center space-y-1">
                <p className="text-base font-semibold text-gray-800">
                  Sam Payá
                </p>
                <p className="text-sm text-gray-600">Co-founder</p>
              </div>
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
