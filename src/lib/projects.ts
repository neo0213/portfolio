export type Project = {
  slug: string;
  title: string;
  blurb: string;
  summary: string[];
  tags: string[];
  href: string;
  accent: string;
  role?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "esl-video",
    title: "ESL Video",
    blurb:
      "An English-learning site with listening quizzes and Chattybots for AI speaking practice, with content for every level from beginner to advanced.",
    summary: [
      "ESL Video is an English-learning platform built around short-form video and interactive listening quizzes. It serves learners from beginner through advanced, with leveled content libraries and progress tracking.",
      "I built the Chattybots feature — AI-powered conversation partners that let learners practice speaking in realistic scenarios with instant feedback.",
    ],
    tags: ["PHP", "Video", "Educational"],
    href: "https://eslvideo.com",
    accent: "from-violet-500/30 to-fuchsia-500/10",
    role: "Full-stack developer",
  },
  {
    slug: "neo-english-app",
    title: "Neo English App",
    blurb:
      "The companion mobile app for ESL Video. Take quizzes, practice speaking with Chattybots, and track your progress on the go.",
    summary: [
      "Neo English is the mobile companion to ESL Video. Learners can take quizzes, practice speaking with Chattybots, and track progress across devices.",
      "Built with Expo and React Native so the same codebase ships to iOS and Android.",
    ],
    tags: ["Expo", "React Native", "AI", "Mobile"],
    href: "#",
    accent: "from-cyan-500/30 to-sky-500/10",
    role: "Mobile developer",
  },
  {
    slug: "pcm-infosystems",
    title: "PCM Infosystems",
    blurb:
      "Private internal software built for PCM Infosystems to manage their scholarship programs, from applications to disbursement tracking.",
    summary: [
      "An internal platform for PCM Infosystems that manages scholarship programs end-to-end: application intake, review workflows, awarding, and disbursement tracking.",
      "Spring Boot backend with a React Native mobile client used by field staff.",
    ],
    tags: ["React Native", "Internal Tool"],
    href: "https://pcm-infosystems.up.railway.app/",
    accent: "from-emerald-500/30 to-teal-500/10",
    role: "Full-stack developer",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
