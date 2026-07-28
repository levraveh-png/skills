import { useState } from "react";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { PageIntro } from "@/components/PageIntro";
import { Picture } from "@/components/Picture";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectLightbox } from "@/components/ProjectLightbox";
import { EstimateCta } from "@/components/EstimateCta";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Seo
        title="Projects"
        description="A look at the kind of glass replacement, storefront, board-up, and frameless shower work AMPM Glass and Board Up handles."
        path="/projects"
        jsonLd={breadcrumbSchema([{ name: "Projects", path: "/projects" }])}
      />

      <PageIntro
        eyebrow="Projects"
        title="The work, in a few photos."
        breadcrumbs={[{ name: "Projects", path: "/projects" }]}
      >
        Photos below are representative of our services while we put
        together a gallery of real completed jobs — check back as it grows.
      </PageIntro>

      <div className="container py-24 sm:py-32">
        <RevealGroup
          as="div"
          stagger={0.1}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        >
          {projects.map((project, i) => (
            <RevealItem
              as="button"
              variant="scale"
              key={project.title}
              onClick={() => setActiveIndex(i)}
              className={
                "group relative block overflow-hidden bg-stone-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 " +
                (i === 0
                  ? "aspect-[4/5] sm:col-span-2 sm:row-span-2 sm:aspect-auto"
                  : "aspect-[4/5]")
              }
            >
              <Picture
                name={project.image}
                alt={project.description}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-copper-300">
                  {project.category}
                </p>
                <p className="mt-1 font-display text-lg text-stone-50">
                  {project.title}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <ProjectLightbox
        projects={projects}
        index={activeIndex}
        onIndexChange={setActiveIndex}
      />

      <EstimateCta />
    </>
  );
}
