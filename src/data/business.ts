/**
 * ============================================================================
 * CENTRAL BUSINESS CONFIGURATION
 * ============================================================================
 * This is the ONLY place company information should live. Every page,
 * component, and structured-data block reads from this file.
 *
 * Values below are real, as provided by the business owner from their
 * Google Business listing, except where marked PLACEHOLDER — those still
 * need a real value before launch. Nothing else in the codebase needs to
 * change once they're filled in.
 * ============================================================================
 */

export const business = {
  name: "AMPM Glass and Board Up",
  shortName: "AMPM Glass & Board Up",
  tagline: "24-hour glass repair and board-up service for Los Angeles.",
  category: "Glass repair service",

  // PLACEHOLDER — no live website was listed on the Google Business
  // profile. Replace once the site has a real domain. Used for canonical
  // URLs, Open Graph tags, and structured data.
  siteUrl: "https://www.ampmglassandboardup.com",

  // REAL — from the business's Google Business listing.
  phone: {
    display: "(818) 403-8032",
    href: "tel:+18184038032",
  },

  // PLACEHOLDER — not listed on the Google Business profile.
  email: "info@ampmglassandboardup.com",

  // REAL — from the business's Google Business listing.
  address: {
    street: "12953 Sherman Way, Unit A",
    city: "North Hollywood",
    state: "CA",
    zip: "91605",
    full: "12953 Sherman Way, Unit A, North Hollywood, CA 91605",
  },

  // REAL — listed as "Open 24 hours" on Google. The business also asks
  // customers to call ahead rather than walking in, since jobs are
  // dispatched to the job site rather than handled at a storefront.
  hours: {
    note: "Open 24 hours, every day",
    callAhead: true,
  },

  // REAL — Google Business listing shows a 5.0 rating. Exact review count
  // is not asserted here since it wasn't confirmed precisely; update the
  // copy in Reviews.tsx / Home if a specific count should be shown.
  rating: {
    value: 5.0,
    source: "Google",
  },

  // PLACEHOLDER — no license number was provided. Do not display a
  // "licensed & insured" claim anywhere until this is confirmed and filled
  // in; leaving it as REPLACE-0000 keeps that claim from rendering.
  license: {
    number: "REPLACE-0000",
    insured: false,
  },

  social: {
    // PLACEHOLDER — profiles exist per the Google Business listing
    // ("Facebook", "Instagram") but no URLs were given. Add the real
    // profile URLs here; entries left blank are hidden in the footer.
    facebook: "",
    instagram: "",
  },

  // REAL — "Los Angeles and nearby areas" per the Google Business listing.
  // The city list below fills in specific San Fernando Valley
  // communities near the North Hollywood address for local-SEO copy —
  // PLACEHOLDER until the owner confirms the exact list they want to
  // advertise service in.
  serviceArea: {
    region: "Los Angeles and nearby areas",
    cities: [
      "North Hollywood",
      "Burbank",
      "Studio City",
      "Sherman Oaks",
      "Van Nuys",
      "Glendale",
    ],
  },

  // Real operational facts only — each line should be true before it
  // ships. Nothing here claims licensing/insurance since that hasn't been
  // confirmed (see `license` above).
  trustSignals: [
    {
      label: "5.0 rating on Google",
      detail: "Rated 5.0 stars by customers across Los Angeles.",
    },
    {
      label: "Open 24 hours",
      detail: "After-hours and emergency board-up dispatched any time, day or night.",
    },
    {
      label: "Locally based in North Hollywood",
      detail: "Serving Los Angeles and the surrounding San Fernando Valley.",
    },
    {
      label: "We call ahead",
      detail: "You'll get a call before we arrive on site — no surprise visits.",
    },
  ],

  // Real services offered, per the business's own Google Business listing
  // description: "We provide after hours board up services for vandalized
  // storefronts, glass replacements, Frameless shower and storefront
  // installation."
  services: {
    boardUp: "Board-Up Services (24/7)",
    glassReplacement: "Glass Replacement",
    storefronts: "Storefronts",
    framelessShower: "Frameless Shower Glass",
  },

  formEndpoint: "",
} as const;

export type Business = typeof business;
