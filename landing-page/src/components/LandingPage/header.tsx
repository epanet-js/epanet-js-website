import { ChevronRight } from "lucide-react";

import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-md"></div>
            <span className="inline-block font-bold">epanet-js</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#features"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" className="hidden sm:flex">
            Documentation
          </Button>
          <Button>
            Try epanet-js
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
