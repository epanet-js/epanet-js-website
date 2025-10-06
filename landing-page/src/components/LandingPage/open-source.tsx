export default function OpenSource() {
  return (
    <section
      id="features"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(216,180,254,0.08),transparent_50%)]"></div>
      <div className="container px-4 md:px-6 xl:px-24 relative">
        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h2 className="text-2xl font-bold">
                EPANET deserves better — and so do you.
              </h2>
              <p className="">
                EPANET was a gift to the industry — free, open-source water
                modeling for all. But commercial vendors built on it, locked
                away improvements, and left the community behind.
              </p>
              <p className="">
                epanet-js is our answer: a faster, simpler, affordable water
                modeling tool that protects your privacy and sustains the
                open-source future of water modeling.
              </p>
              <p className="">
                We’re proud to be part of the next chapter — and we’re just
                getting started.
              </p>
            </div>

            <div className={`flex items-center justify-center `}>
              <div className="h-[350px] max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                <img
                  src={
                    "/assets/landing/Seal_of_the_United_States_Environmental_Protection_Agency.svg"
                  }
                  className="object-contain w-full h-full"
                  alt="EPA logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:pt-24">
            <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
              <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
                <div className="max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                  <img
                    src={"/assets/landing/github-open-source.webp"}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                    alt="Source code of epanet-js on GitHub"
                  />
                </div>
              </div>

              <div className="space-y-4 lg:pl-8">
                <h2 className="text-2xl font-bold">
                  When you support epanet-js, you support EPANET.
                </h2>
                <p className="">
                  When you purchase more features in epanet-js, you’re investing
                  in the future of open-source EPANET development.
                </p>
                <p className="">
                  Our open-source model balances innovation and accessibility:
                </p>
                <ul className=" space-y-2 [&>li]:before:content-['✓'] [&>li]:before:mr-2 ">
                  <li>
                    Public{" "}
                    <a
                      href="https://github.com/epanet-js/epanet-js"
                      className="underline hover:text-gray-500"
                    >
                      source code
                    </a>{" "}
                    from day one.
                  </li>
                  <li>
                    Fully open source (MIT) after two years under our{" "}
                    <a
                      href="https://fsl.software/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500"
                    >
                      Functional Source License (FSL)
                    </a>
                    .
                  </li>
                </ul>
                <p className="">
                  Anyone can build on our code. The two-year commercial-use
                  delay gives us the incentive to keep pushing forward — and
                  that fuels progress for everyone.
                </p>

                <p className="">
                  That means when you support us, you support more affordable
                  hydraulic modeling software for the entire community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
