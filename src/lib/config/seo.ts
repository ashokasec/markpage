import { app, team } from "./app";

export const seo = {
  title: `${app.name} - Minimal Online Markdown Editor`,
  description: `${app.name} is a clean, distraction-free markdown editor with side-by-side preview and local autosave. Perfect for writing, note-taking, or drafting blogs.`,
};

const idJsonObject = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: app.name,
  url: app.publicUrl,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "All",
  dateCreated: "2025-05-25",
  description: seo.description,
  offers: {
    "@type": "Offer",
    price: "0", // assuming it's free
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Person",
    name: team.founder.name,
    sameAs: [team.founder.social.x, team.founder.social.github],
  },
};

export const idJsonObjectHTML = { __html: JSON.stringify(idJsonObject) };
