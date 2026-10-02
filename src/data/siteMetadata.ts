export interface SiteMetadata {
  title: string;
  author: string;
  tagline: string;
  description: string;
  url: string;
  location: string;
  email: string;
  gmailComposeUrl: string;
  social: {
    linkedin: string;
    github: string;
    x: string;
    youtube: string;
  };
}

export const siteMetadata: SiteMetadata = {
  title: "Kanishk Roy — AI Content & Creative Production",
  author: "Kanishk Roy",
  tagline: "AI CONTENT / CREATIVE PRODUCTION",
  description: "AI-powered commercials, UGC & visual experiences. Combining creative direction with practical production systems and product thinking.",
  url: "https://kanishkroy.com",
  location: "Kolkata, India",
  email: "kanishkroy2004@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=kanishkroy2004@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/kanishk-roy-a19b16382/",
    github: "https://github.com/kanishkroy-X",
    x: "https://x.com/kanishkroy_",
    youtube: "https://www.youtube.com/@Yokigaming_",
  }
};

