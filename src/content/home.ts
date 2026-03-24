import { profile } from "./profile";

export const heroMetrics = profile.hero.metrics;
export const heroSignals = profile.hero.signals;
export const servicePillars = profile.services.pillars;
export const proofCards = profile.proof.cards;
export const contractorBenefits = profile.plate.items;
export const workflowSteps = profile.workflow.steps;
export const audiences = profile.audience.items;
export const operatingPrinciples = profile.principles.items;
export const contactModes = [
  {
    label: "Email first",
    detail: profile.contactInfo.email
  },
  {
    label: "Response style",
    detail: "Direct and practical"
  },
  {
    label: "Phone",
    detail: "Shared after first contact"
  }
];
export const faqItems = profile.faq;
