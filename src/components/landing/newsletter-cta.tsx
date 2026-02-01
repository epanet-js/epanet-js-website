import { Button } from "@components/ui/landing/button";

import { Input } from "@components/ui/landing/input";

export default function MiddleCTA() {
  return (
    <section className="w-full py-24 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Stay in the loop
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Subscribe to our newsletter to receive updates, tips, and news
              about epanet-js and water network modeling.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <form className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                required
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Subscribe
            </Button>
          </form>
          <p className="mt-2 text-xs text-center text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
