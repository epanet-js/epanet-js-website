import { ArrowRight } from "lucide-react";

import { Button } from "@components/ui/landing/button";

export default function BottomCTA() {
  return (
    <section className="w-full py-8 md:py-16 bg-gray-800 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl leading-[36px] font-bold tracking-tight pb-6">
          A better future for water modeling.
        </h3>
        <p className="max-w-[600px] mx-auto pb-6 text-base leading-6 text-center">
          Simple, quick, and useful right out of the gate — designed to
          open-and-go.
        </p>

        <Button size="sm" variant="secondary" asChild>
          <a
            href="https://app.epanetjs.com"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-md font-medium text-sm leading-5 transition-colors bg-gray-100 text-gray-900 no-underline"
          >
            <span>Launch epanet-js now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
