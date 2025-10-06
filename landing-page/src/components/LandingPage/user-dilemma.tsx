export default function UserDilemma() {
  // Dummy image sources (replace with your actual screenshots)

  return (
    <section
      id="epanet-dilemma"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-100"></div>
      <div className="container px-4 md:px-32 xl:px-48 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center ">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The EPANET user's dilemma
            </h2>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4 max-w-[600px] mx-auto lg:mx-0">
              <ul className=" list-disc pl-5 space-y-2">
                <li>
                  Classic EPANET is powerful — but{" "}
                  <strong>clunky and outdated</strong>. Workarounds become your
                  workflow — slow and cumbersome.
                </li>
                <li>
                  Big-name platforms look polished, but they're{" "}
                  <strong>overpriced and bloated with features</strong> you
                  don't need to analyze your network quickly.
                </li>
                <li>
                  Modern browser-based tools exist — but they{" "}
                  <strong>force your data into the cloud</strong>, raising
                  privacy and compliance concerns. Plus, they offer little for
                  those doing long-term planning and analysis.
                </li>
              </ul>

              <div className="">
                <p className="max-w-[600px]     mx-auto lg:mx-0 italic">
                  You shouldn't have to choose between speed, security, and
                  affordability just to understand your water networks.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center order-last lg:order-first">
              <div className="relative h-[360px] flex items-center justify-center w-full max-w-[500px]">
                {/* Old EPANET card */}
                <div
                  className="absolute left-8 top-4 w-[272px] h-[312px] rounded-md   shadow-lg bg-white overflow-hidden z-10 -rotate-6  transform-gpu  flex flex-col items-center justify-center"
                  style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
                >
                  <img
                    src={"/assets/landing/EPANET.gif"}
                    alt="Old EPANET UI"
                    className="object-cover w-full h-full opacity-90"
                  />
                </div>
                {/* Complex App card */}
                <div
                  className="absolute right-8 top-4 w-[272px] h-[312px] rounded-md  shadow-lg bg-white overflow-hidden z-8 rotate-6 transform-gpu flex flex-col items-center justify-center"
                  style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.13)" }}
                >
                  <img
                    src={"/assets/landing/Complex.webp"}
                    alt="Complex Modeling App"
                    className="object-cover w-full h-full opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
