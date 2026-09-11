"use client";

import { AnimatedProjectPreview } from "@/components/AnimatedProjectPreview";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getPrimaryContactLink } from "@/config/siteConfig";
import { projects } from "@/data/projects";
import type { Locale, Translation } from "@/lib/types";

export function Projects({ locale, t }: { locale: Locale; t: Translation }) {
  const contactUrl = getPrimaryContactLink(t.whatsappMessage);
  const detailItems = (project: (typeof projects)[number]) => [
    { label: t.projects.detailLabels.goal, value: project.details[locale].goal },
    { label: t.projects.detailLabels.solution, value: project.details[locale].solution },
    { label: t.projects.detailLabels.result, value: project.details[locale].result },
  ];

  return (
    <section className="bg-[#F7F7F5] py-11 sm:py-14" id="projects">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>{t.projects.label}</SectionLabel>
        <SectionTitle>{t.projects.heading}</SectionTitle>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[#0B2340]/68">
          {t.projects.subtitle}
        </p>
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className="flex h-full flex-col overflow-hidden rounded-lg border border-[rgba(8,46,99,0.14)] bg-white transition duration-200 hover:-translate-y-[3px] hover:border-[rgba(201,155,60,0.45)]"
              key={project.id}
            >
              <AnimatedProjectPreview
                displayUrl={project.displayUrl}
                flush
                image={project.image}
                imageMode="cover"
                liveBadge={t.projects.liveBadge}
                title={project.title}
                url={project.url}
                variant="card"
              />
              <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C99B3C]">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold leading-tight text-[#071B33] sm:mt-2">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-[#0B2340]/72 sm:mt-2 sm:leading-6">
                  {project.description[locale]}
                </p>

                <div className="mt-3 grid gap-1.5 sm:mt-3.5 sm:grid-cols-3 sm:gap-2">
                  {detailItems(project).map((detail) => (
                    <div
                      className="rounded-md border border-[rgba(8,46,99,0.1)] bg-[#F7F7F5]/55 p-2 sm:p-2.5"
                      key={detail.label}
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#C99B3C]">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-xs font-medium leading-4 text-[#0B2340]/76">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 sm:mt-3.5">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded border border-[rgba(8,46,99,0.16)] bg-transparent px-2.5 py-1 text-xs font-semibold text-[#082E63]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center sm:gap-3">
                  <Button
                    className="min-h-10 w-full border-[#C99B3C]/45 px-4 text-[#071B33] hover:bg-[#C99B3C] hover:text-white sm:w-auto"
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="secondary"
                  >
                    {t.projects.viewProject}
                  </Button>
                  {contactUrl ? (
                    <Button
                      className="min-h-10 w-full px-4 sm:w-auto"
                      href={contactUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant="whatsapp"
                    >
                      <span className="inline-flex items-center gap-2">
                        <WhatsAppIcon className="h-4 w-4" />
                        {t.projects.similarProject}
                      </span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
