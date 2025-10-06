import epanetLogo from "../../assets/epanetjs.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const apiKey = "ziRMXOpWNfww8zDIv0IYmA";
    const formId = "7704375";

    const data = {
      api_key: apiKey,
      email: email,
    };

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setMessage({
          text: "Success! Please check your email to confirm your subscription.",
          type: "success",
        });
        setEmail(""); // Clear the form
      } else {
        const errorData = await response.json();
        setMessage({
          text: `An error occurred: ${
            errorData.message || "Please try again later."
          }`,
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "An error occurred. Please try again later.",
        type: "error",
      });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-gray-950 text-primary-foreground">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Logo and Newsletter */}
          <div className="lg:col-span-4 space-y-6 lg:pr-12">
            {/* Logo */}
            <a href="/" className="block flex items-center space-x-3">
              <img
                src={epanetLogo}
                alt="epanet-js logo"
                className="h-8 w-auto"
                height={32}
                width={32}
              />
              <span className="text-3xl font-bold text-white">epanet-js</span>
            </a>
            {/* Newsletter Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tighter text-white">
                  Stay in the loop
                </h3>
                <p className="text-sm text-gray-300">
                  Subscribe to our newsletter to receive updates, tips, and news
                  about epanet-js and water network modeling.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              {/* Success/Error Message */}
              {message && (
                <div
                  className={`text-sm p-3 rounded-md ${
                    message.type === "success"
                      ? "bg-green-900/20 border border-green-500/30 text-green-300"
                      : "bg-red-900/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:pl-12">
            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Community</h3>

              <nav className="flex flex-col space-y-3">
                <a
                  href="https://help.epanetjs.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="https://roadmap.epanetjs.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Roadmap
                </a>
                <a
                  href="https://github.com/epanet-js/epanet-js"
                  rel="noopener"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://epanetjs.com/blog/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <nav className="flex flex-col space-y-3">
                <a
                  href="#why-we-built-epanet-js"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="mailto:support@epanetjs.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="https://epanetjs.com/terms-conditions/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="https://epanetjs.com/privacy-policy/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://epanetjs.com/cookies-policy/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cookies Policy
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/epanet-js/epanet-js"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-400">
              © 2025 Iterating Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
