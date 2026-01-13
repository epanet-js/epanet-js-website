const QuoteIcon = () => (
  <svg
    className="w-6 h-6 md:w-7 md:h-7 text-gray-400 mb-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 14"
  >
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
  </svg>
);

export default function TestimonialsAlt() {
  const quote =
    "As someone responsible for critical infrastructure, I appreciate how epanet-js combines powerful simulation capabilities with ease of use. The fact that it's open source gives me confidence in its longevity and continuous improvement. It's become an essential tool for our planning department.";
  const author = "David Martinez";
  const title = "Infrastructure Director, Clearwater Utilities";

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="container px-6 md:px-8 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <QuoteIcon />

          <blockquote className="mb-6 md:mb-8">
            <p className="text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed text-gray-600">
              {quote}
            </p>
          </blockquote>

          <footer className="text-center">
            <div className="text-base md:text-lg font-semibold text-gray-700">
              {author}
            </div>
            <div className="text-sm md:text-base text-gray-500">{title}</div>
          </footer>
        </div>
      </div>
    </section>
  );
}
