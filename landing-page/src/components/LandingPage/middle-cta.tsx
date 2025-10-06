import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

export default function NewsletterCTA() {
  return (
    <section
      id="newsletter"
      className="w-full px-8 py-32 md:py-32 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_140%,rgba(147,197,253,0.3),transparent_47%),radial-gradient(circle_at_80%_141%,rgba(216,180,254,0.35),transparent_54%)]"></div>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Model water networks instantly.
          </h3>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed">
            No setup or downloads — just instant access right in your browser.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          asChild
        >
          <a href="https://app.epanetjs.com">
            Start modeling now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="container px-4 md:px-6 relative"></div>
    </section>
  );
}
