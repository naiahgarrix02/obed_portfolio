export type Services = {
  title: string;
  description: string;
  icon: string;
};

export type Projects = {
  id: string;
  title: string;
  url: string;
  img: string;
};

export type TechStack = {
  name: string;
  icon: string;
};

export const services: Services[] = [
  {
    title: "APPLICATION DEVELOPMENT",
    description:
      "I transform your ideas into engaging mobile apps with a keen focus on user experience",
    icon: "/app_dev.svg",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "I bring your creative visions to life with beautiful designs that leave a lasting impression",
    icon: "/ui_ux.svg",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "I make websites that bring your unique ideas to life with beautiful interfaces",
    icon: "/web_dev.svg",
  },
];

export const projects: Projects[] = [
  {
    id: "1",
    title: "Kairos Kharis Concepts",
    url: "kairoskharis.com",
    img: "/kkc.jpg",
  },
  {
    id: "2",
    title: "Grange Associates",
    url: "grangeassociates.com.au",
    img: "/grange.jpg",
  },
  {
    id: "3",
    title: "Mercy Care",
    url: "mercycaredisability.com.au",
    img: "/mercy_care.jpg",
  },
  {
    id: "4",
    title: "Brainwave AfricaTech",
    url: "brainwaveafricatech.com",
    img: "/brainwave.jpg",
  },
];

export const techStack: TechStack[] = [
  {
    name: "JavaScript",
    icon: "/javascript.svg",
  },
  {
    name: "React",
    icon: "/react.svg",
  },
  {
    name: "Next JS",
    icon: "/nextjs.svg",
  },
  {
    name: "Flutter",
    icon: "/flutter.svg",
  },
  {
    name: "Figma",
    icon: "/figma.svg",
  },
];