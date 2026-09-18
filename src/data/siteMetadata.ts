export interface SiteMetadata {
  title: string;
  author: string;
  tagline: string;
  description: string;
  url: string;
  location: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
    x: string;
  };
}

export const siteMetadata: SiteMetadata = {
  title: "Kanishk Roy — Digital Products & AI-Powered Systems",
  author: "Kanishk Roy",
  tagline: "Product thinking × AI × hands-on execution",
  description: "I build digital products & AI-powered systems. I take messy ideas, break them down, and turn them into working products, systems, and creative experiences.",
  url: "https://kanishkroy.com",
  location: "Kolkata, India",
  email: "kanishkroy2004@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/kanishk-roy-a19b16382/",
    github: "https://github.com/kanishkroy-X",
    x: "https://x.com/kanishkroy_",
  }
};
