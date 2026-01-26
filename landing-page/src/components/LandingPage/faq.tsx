import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FrequentlyAskedQuestons() {
  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.07),transparent_50%),radial-gradient(circle_at_20%_70%,rgba(216,180,254,0.06),transparent_40%)]"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently asked questions
            </h3>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about epanet-js.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl pt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is epanet-js?</AccordionTrigger>
              <AccordionContent>
                epanet-js is a modern, web-based water network modeling tool
                based on the EPANET engine. It allows you to build, simulate,
                and analyze water distribution networks directly in your browser
                without installing any software.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is my data secure with epanet-js?
              </AccordionTrigger>
              <AccordionContent>
                Yes! epanet-js uses a local-first approach, meaning your project
                data is saved directly to your computer, not to our servers.
                This ensures your sensitive network data remains private and
                under your control.{" "}
                <a
                  href="https://help.epanetjs.com/Understanding-the-local-first-approach-2a1e18c9f0f681d881d0c0f0b24ff032"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  Learn more about the Local-First Approach.
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do I need to create an account to use epanet-js?
              </AccordionTrigger>
              <AccordionContent>
                No, you can start using epanet-js immediately without creating
                an account or logging in. Simply visit our website and launch
                the application to begin modeling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I import existing EPANET files?
              </AccordionTrigger>
              <AccordionContent>
                Yes, epanet-js supports importing .inp files from desktop
                EPANET. You can seamlessly transition your existing projects to
                our web-based platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Does epanet-js work on Mac?</AccordionTrigger>
              <AccordionContent>
                Yes! epanet-js works on all modern browsers including Chrome,
                Firefox, Safari, and Edge. Since it runs in a web browser,
                epanet-js works great on macOS, Windows, and Linux. This makes
                it a great option if you've had trouble installing traditional
                EPANET on a Mac. For the best experience, we recommend using the
                latest version of your preferred browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is epanet-js open source?</AccordionTrigger>
              <AccordionContent>
                Yes, our source code is public from day one, but there’s a
                two-year delay from the time we release a new version to when it
                becomes fully open source. This is how we drive sustainable
                open-source development for epanet-js, and, by extension,
                EPANET. You can{" "}
                <a
                  href="#why-we-built-epanet-js"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  learn more about why we’re doing this
                </a>{" "}
                and{" "}
                <a
                  href="https://fsl.software/"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-600 hover:text-gray-950 underline font-medium"
                >
                  how the FSL license works here.
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                How do I get support if I have questions?
              </AccordionTrigger>
              <AccordionContent>
                We offer different support options depending on your plan. Free
                users can access our community forums and documentation, while
                paid users receive priority email support. Educational users
                have access to specialized resources for classroom use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
