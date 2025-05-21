"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Mar 2023 — Present",
    currentPosition: "Front End Developer",
    place: "Aspentech",
    previousPositions: [""],
    description:
      "Building and maintaining a scalable component library at AspenTech using JavaScript, Stencil, and React. My role involves documenting components with Storybook, promoting adoption of the new design system across teams, collaborating closely with UX to create accessible and user-friendly components, ensuring quality through JEST testing and code reviews, and supporting development workflows with CI/CD tools like GitHub Actions, GitLab CI, and Jenkins. Additionally, I contribute to backend development by creating CRUD operations with Node.js, all within an Agile collaborative environment.",
    skills: [
      "Brand Identity",
      "UI/UX Development",
      "Design Systems",
      "Typescript",
      "Javascript",
      "Figma App development",
      "Jest",
      "Stencil",
      "JS Web Components",
    ],
  },
  {
    timeline: "Aug 2022 — Present",
    currentPosition: "Front End Developer",
    place: "3PLFreightSoftware",
    previousPositions: [""],
    description:
      "Built dynamic dashboards and data grids for trucking companies using Vue.js and AG Grid, enhancing data visualization and operational efficiency. Developed a comprehensive sales software solution for 3plFreightSoftware to streamline sales processes and improve client management.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Team Leadership",
      "Vue.js",
      "AG Grid",
      "Software Development",
      "Tailwind CSS",
    ],
  },
  {
    timeline: "Nov 2022 — Present",
    currentPosition: "",
    place: "Freelance",
    previousPositions: [""],
    description:
      "Started my journey by designing and developing websites for friends, family, and small businesses, building practical skills and hands-on experience in front-end development. This early work laid the foundation for my expertise in creating user-friendly, high-performance web applications while continuously learning new technologies and best practices.",
    skills: [
      "Typescript",
      "JavaScript",
      "CSS",
      "HTML",
      "React",
      "Next",
      "Wordpress",
      "Webflow",
      "UI/UX Design",
      "Planning",
      "GSAP",
    ],
  },
  {
    timeline: "Dec 2017 — Jan 2019",
    currentPosition: "Copywriter",
    place: "Bombay Advertising Agency, Mexico City, Mexico",
    previousPositions: [],
    description:
      "Wrote effective print, social media, radio, and television advertising for brands such as TANG, StrongBow, McCormick, Applebees, Pond's, British Council, Grupo Cuauhtémoc Moctezuma, Bohemia Beer, Amstel, Carta Blanca, Caliente Casinos, Coppel, and Telcel.",
    skills: [
      "Copywriting",
      "Advertising",
      "Social Media",
      "Brand Messaging",
      "Content Creation",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:alexander@meikopoulos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
