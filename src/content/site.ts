import { profile } from "./profile";

export const site = {
  name: profile.business,
  title: "Olivebank LC | Charles Atkins",
  description: profile.summary,
  url: "https://olivebanklc.com",
  analytics: {
    gtmContainerId: "GTM-PL6ZTND4"
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ],
  contact: {
    email: profile.contactInfo.email
  }
};
