export default function Features() {
  return (
    <section
      id="features"
      className="w-full pt-16 pb-8 md:pt-24 lg:pt-32 lg:pb-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,197,253,0.1),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(216,180,254,0.08),transparent_50%)]"></div>
      <div className="container px-4 md:px-6 xl:px-24 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-0">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              epanet-js gives you full control with a local-first, browser-based
              EPANET experience
            </h3>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-lg/relaxed xl:text-xl/relaxed">
              Model quickly and securely with local-first file-saving and a
              faster, smoother interface — all on top of the trusted EPANET
              engine.
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h4 className="text-2xl font-bold">Your data, your control</h4>
              <p className="">
                epanet-js works directly with files on your local computer and
                is cloud-optional. By default, your projects are run and saved
                locally — giving you full control, security, and privacy.
              </p>

              <p className="">Choose the cloud only if and when you need it.</p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:ml-8">
                <video
                  className="object-contain w-full h-auto max-h-[600px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={"/assets/landing/landing-page - drag and drop.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
              <div className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:mr-8">
                <video
                  className="object-contain w-full h-auto max-h-[600px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={"/assets/landing/landing-page - drawing network.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="space-y-4 lg:pl-8">
              <h4 className="text-2xl font-bold">
                The EPANET you know, enhanced
              </h4>
              <p className="">
                epanet-js keeps the core functionality you’re familiar with but
                adds a smoother, faster experience with modern touches like
                undo/redo, automatic elevations, quick drawing of elements, and
                basemaps like satellite view.
              </p>
              <p className="">
                Import your network or build from scratch with intuitive tools
                that make it easy to update, draw, connect, and edit.{" "}
              </p>
              <p className="">
                Everything you need to work quicker — without having to learn a
                new tool.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="space-y-4 lg:pr-8">
              <h4 className="text-2xl font-bold">
                Built for working, not troubleshooting
              </h4>
              <ul className=" space-y-2 [&>li]:before:content-['✓'] [&>li]:before:mr-2 ">
                <li>
                  <strong>Draw visually.</strong> Click to add nodes, pipes, and
                  reservoirs — with auto-junctions and auto-elevations.
                </li>
                <li>
                  <strong>Run simulations instantly.</strong> Shift+Enter, and
                  you’re done.
                </li>
                <li>
                  <strong>See results fast.</strong> View pressures, flow paths,
                  and velocity at a glance — all color-coded.
                </li>
                <li>
                  <strong>Make mistakes without starting over.</strong>{" "}
                  Undo/redo is finally here!
                </li>
                <li>
                  <strong>Use satellite map overlays.</strong> Sketch and
                  analyze your networks against a real-world layout.
                </li>
                <li>
                  <strong>EPANET file compatible.</strong> Compatible with .inp
                  files — no conversion required.
                </li>
                <li>
                  <strong>Works on Mac, Linux and Windows.</strong> Use any
                  modern browser. No virtual machines. No installs.
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="overflow-hidden rounded-xl border shadow-lg w-full max-w-[600px] lg:max-w-none lg:w-[120%] lg:ml-8">
                <video
                  className="object-contain w-full h-auto max-h-[600px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src={"/assets/landing/landing-page - map settings.mp4"}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-24">
          <div className="grid items-center gap-8 lg:gap-0 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:justify-start order-last lg:order-first">
              <div className="max-w-[700px] lg:max-w-none lg:w-[120%] lg:mr-0">
                <img
                  src={"/assets/landing/study-area.webp"}
                  alt="Water network study area"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-4 lg:pl-8">
              <h4 className="text-2xl font-bold">Who epanet-js is for:</h4>

              <p>
                <strong>Utilities & consultants</strong> <br />
                Build fast, run local. Everything you need to just get the job
                done, none of the feature bloat.
              </p>
              <p>
                <strong>Educators & professors</strong> <br />
                Teach new modelers the concepts without fighting software. Watch
                students draw real networks and run sims in minutes — not hours.
              </p>
              <p>
                <strong>Students & new engineers</strong> <br />
                Focus on learning, not software quirks. Undo/redo,
                auto-elevation, visual overlays — built to help you learn water
                modeling quickly.
              </p>
            </div>
          </div>
        </div>

        {/*
        <div className="space-y-24 md:space-y-28 lg:space-y-32 py-8 md:py-10">
          {featuresData.map((feature) => (
            <FeatureItem
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
