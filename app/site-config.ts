export const CONTACT = {
  email: "iarjunganesh@gmail.com",
  github: "https://github.com/iarjunganesh",
  linkedin: "https://linkedin.com/in/iarjunganesh",
  discord: "https://discord.com/users/1468742414851248301",
  cv: "/Arjun-Ganesh-CV.pdf",
  cvDocx: "/Arjun-Ganesh-CV.docx",
} as const;

/**
 * First day of Arjun's career, confirmed by him directly — the CV only records
 * the month (08/2012), so this is the corroborating source for the day. The
 * years-shipping counter rolls over on this anniversary, in Europe/Stockholm.
 */
export const CAREER_START_DATE = "2012-08-30";

export const PRIMARY_NAV = [
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
] as const;
