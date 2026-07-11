// The marks below are neutral placeholders: real customer/partner logos are
// supplied by the site owner. Drop the SVGs into src/assets/ and replace the
// entries in `logos`; never add a company that hasn't approved its use.
const logos = [
  {
    name: "Placeholder logo 1",
    mark: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto" aria-hidden="true">
        <circle cx="18" cy="18" r="12" fill="currentColor" />
        <rect x="40" y="12" width="72" height="12" rx="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Placeholder logo 2",
    mark: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto" aria-hidden="true">
        <path d="M18 6l12 24H6z" fill="currentColor" />
        <rect x="40" y="12" width="64" height="12" rx="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Placeholder logo 3",
    mark: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto" aria-hidden="true">
        <rect x="7" y="7" width="22" height="22" rx="4" fill="currentColor" />
        <rect x="40" y="12" width="76" height="12" rx="6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Placeholder logo 4",
    mark: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto" aria-hidden="true">
        <circle cx="12" cy="18" r="8" fill="currentColor" />
        <circle cx="26" cy="18" r="8" fill="currentColor" fillOpacity="0.6" />
        <rect x="44" y="12" width="68" height="12" rx="6" fill="currentColor" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-white py-10 md:py-12">
      <div className="max-w-screen-xl mx-auto px-5">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
          Trusted by teams across the water industry
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-gray-300">
          {logos.map((logo) => (
            <div key={logo.name} title={logo.name}>
              {logo.mark}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
