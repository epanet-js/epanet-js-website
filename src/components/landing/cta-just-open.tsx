import { ArrowRight } from "lucide-react";

import { Button } from "@components/ui/landing/button";

export default function CTAJustOpen() {
  return (
    <section
      id="newsletter"
      className="w-full px-8 py-32 md:py-32 lg:py-40 relative overflow-hidden bg-gray-800"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_140%,rgba(147,197,253,0.1),transparent_47%),radial-gradient(circle_at_80%_141%,rgba(216,180,254,0.15),transparent_54%)]"></div>
      <div className="flex flex-col items-center justify-center space-y-3 text-center">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
            Just open your browser and model.
          </h3>
          <p className="max-w-[600px] mx-auto text-gray-200 md:text-xl/relaxed">
            No install. No login. No cloud required.
          </p>
        </div>
        <Button
          size="lg"
          variant="secondary"
          className="bg-gray-100 text-gray-900 hover:bg-gray-200"
          asChild
        >
          <a href="https://app.epanetjs.com">
            Launch epanet-js now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="container px-4 md:px-6 relative"></div>
    </section>
  );
}
