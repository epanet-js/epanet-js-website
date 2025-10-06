import React, { useState } from "react";
import epanetLogo from "../../assets/epanetjs.svg"; // Make sure this path is correct

// --- TypeScript Definitions ---
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

// --- Icon Components ---
const HamburgerIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CloseIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- Main Header Component ---
export default function HeaderNew() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define links for reusability
  const navLinks = [
    { href: ".", text: "Home", originalClasses: "hidden sm:block" },
    //{ href: "introduction/", text: "Learn More", originalClasses: "" },
    { href: "api/", text: "Toolkit", originalClasses: "hidden sm:block" },
    { href: "blog/", text: "Blog", originalClasses: "" },
  ];

  return (
    <>
      {/* Wrapper that scales font size, which drives all em-based sizing */}
      <div className="flex flex-wrap lg:block text-[100%] 2xlplus:text-[110%]">
        {/* === Part 1: Nav bar with Icon/Hamburger and app name === */}
        <nav className="relative z-40 h-[3em] w-1/2 lg:w-full text-gray-600">
          <div className="flex items-center h-full max-w-[76.25em] w-full mx-auto px-[0.25em]">
            {/* Container for Logo OR Hamburger */}
            <div className="relative m-[0.25em] p-[0.5em] w-[2.5em] h-[2.5em] z-[1]">
              {/* Original Logo - Hidden below sm */}
              <a
                href="."
                title="epanet-js"
                aria-label="epanet-js"
                className="hidden sm:block cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-70"
              >
                <img
                  src={epanetLogo}
                  className="logo react w-full h-full"
                  alt="epanet-js logo"
                />
              </a>
              {/* Hamburger Button - Shown only below sm */}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="block sm:hidden items-center justify-center w-full h-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label="Open main menu"
              >
                <span className="sr-only">Open main menu</span>
                <HamburgerIcon className="block h-6 w-6" />
              </button>
            </div>
            {/* App Name Title */}
            <div
              className="mr-[0.25em] flex-grow text-[1.125em] h-[1.5em] leading-[1.5em]"
              data-md-component="header-title"
            >
              <div className="h-full relative w-full">
                <div className="absolute max-w-full whitespace-nowrap flex transition-transform duration-[400ms] ease-[cubic-bezier(0.1,0.7,0.1,1)] opacity-100">
                  <span className="truncate">epanet-js</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* === Part 2: Nav bar with links === */}
        <header className="z-30 w-1/2 lg:w-full">
          <div className="mx-auto max-w-[76.25em] text-gray-600">
            {/* Link List - Hidden below sm, flex from sm up to lg, then default justify-start from lg */}
            <ul className="hidden sm:flex justify-end lg:justify-start list-none overflow-auto whitespace-nowrap pl-[0.25em] no-scrollbar">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={`h-[3em] px-[0.75em] ${link.originalClasses}`}
                >
                  <a
                    href={link.href}
                    className="flex text-[0.875em] mt-[1em] opacity-70 hover:opacity-95 outline-offset-[0.25em] outline-blue-500"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>{" "}
      {/* End original Wrapper */}
      {/* === Mobile Menu Overlay (Conditionally Rendered) === */}
      {/* Added transition for smooth fade in/out */}
      <div
        className={`fixed inset-0 z-40 bg-[#0000008a] sm:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none" // Control opacity and interaction
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      ></div>
      {/* === Mobile Menu Drawer (Always in DOM below sm, Animated via Transform) === */}
      <div
        id="mobile-menu"
        // Always present below sm breakpoint
        // Base styles + transition classes
        // Conditional class for position based on isMobileMenuOpen
        className={`fixed top-0 left-0 z-50 flex flex-col w-[15.125rem] max-w-sm h-screen overflow-y-auto bg-white shadow-lg sm:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full" // This handles the slide animation
        }`}
        aria-modal="true"
        role="dialog"
        // Removed inline style for visibility - rely on transform to hide
      >
        {/* Header Section (Colored) */}
        <div className="bg-[hsla(209,23%,48%,1)] p-4 pt-6 relative shadow-md">
          <div className="flex flex-col items-center text-center">
            <img
              src={epanetLogo}
              className="h-[3.5em] w-[3.5em] mb-2"
              alt="epanet-js logo"
            />
            <span className="font-semibold text-xl text-white">epanet-js</span>
          </div>
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="absolute top-2 right-2 inline-flex items-center justify-center p-2 text-gray-100 hover:text-white hover:bg-[hsla(209,23%,40%,1)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md"
            aria-label="Close main menu"
          >
            <span className="sr-only">Close main menu</span>
            <CloseIcon className="block h-6 w-6" />
          </button>
        </div>

        {/* Links Section (White) */}
        <div className="flex-grow p-0">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              // Add border between items
              <li
                key={"mobile-" + link.href}
                className="border-b border-gray-200 last:border-b-0"
              >
                <a
                  href={link.href}
                  className="block w-full py-4 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
