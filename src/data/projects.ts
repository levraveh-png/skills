/**
 * Representative project entries. These use stock photography (see
 * /public/images/README.md) since no real completed-job photos were
 * available yet — replace `image`, `title`, and `description` with real
 * jobs as they're documented. Keep the `category` values aligned with the
 * services on /board-up and /glass-replacement.
 */
export const projects = [
  {
    image: "glass-hero",
    title: "Storefront glass replacement",
    category: "Storefronts",
    scope: "Commercial",
    description: "Full storefront glass pane replaced and resealed on a retail building.",
  },
  {
    image: "glass-interior-detail",
    title: "Glass window replacement",
    category: "Glass Replacement",
    scope: "Commercial",
    description: "Cracked glass replaced and matched to the existing frame system.",
  },
  {
    image: "frameless-shower",
    title: "Frameless shower enclosure",
    category: "Frameless Shower Glass",
    scope: "Residential",
    description: "Custom-measured frameless glass shower enclosure, installed on site.",
  },
  {
    image: "glass-detail",
    title: "Commercial glass facade detail",
    category: "Glass Replacement",
    scope: "Commercial",
    description: "Detail glass work on a commercial building exterior.",
  },
] as const;

export type Project = (typeof projects)[number];
