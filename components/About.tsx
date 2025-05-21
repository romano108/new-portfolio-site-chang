"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Hey guys, my name is Andoni Romano, and I'm a front-end developer with
          three years of professional experience. I love building components,
          applications—you name it. I enjoy every step of the process.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I'm also passionate about music, chess, books, and traveling. I
          specialize in building high-performance, accessible, and user-friendly
          interfaces using JavaScript, TypeScript, React, Vue, Next.js, Web
          Components, Stencil, amongst others. Currently, I'm learning more
          backend development, libraries like GSAP, and AI agents.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          I thrive in collaborative environments, working closely with UI/UX
          designers and cross-functional teams in Agile settings to deliver
          seamless user experiences through clean, efficient code.
        </p>
      </div>
    </section>
  );
}
