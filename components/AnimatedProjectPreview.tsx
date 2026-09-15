"use client";

import Image from "next/image";
import { useState } from "react";

export function AnimatedProjectPreview({
  image,
  title,
  url,
  liveBadge,
  compact = false,
  displayUrl,
  imageMode = "scroll",
  imageAlt,
  flush = false,
  variant = "default",
}: {
  image: string;
  title: string;
  url: string;
  liveBadge: string;
  compact?: boolean;
  displayUrl?: string;
  imageMode?: "scroll" | "cover";
  imageAlt?: string;
  flush?: boolean;
  variant?: "default" | "card";
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const isCard = variant === "card";

  return (
    <a
      aria-label={title}
      className={`group block overflow-hidden bg-white ${
        flush ? "" : "rounded-lg border border-[rgba(8,46,99,0.14)]"
      }`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        className={`flex items-center justify-between border-b border-[rgba(8,46,99,0.1)] bg-[#F7F7F5] ${
          isCard ? "h-8 px-3" : "h-10 px-4"
        }`}
      >
        <div className="flex gap-1.5">
          <span className={`${isCard ? "h-2 w-2" : "h-2.5 w-2.5"} rounded-full bg-[#C99B3C]`} />
          <span
            className={`${isCard ? "h-2 w-2" : "h-2.5 w-2.5"} rounded-full bg-[rgba(8,46,99,0.25)]`}
          />
          <span
            className={`${isCard ? "h-2 w-2" : "h-2.5 w-2.5"} rounded-full bg-[rgba(8,46,99,0.16)]`}
          />
        </div>
        <span className="max-w-[52%] truncate text-[11px] font-medium text-[#0B2340]/55">
          {displayUrl ?? "metall-invest-zeta.vercel.app"}
        </span>
      </div>
      <div
        className={`relative overflow-hidden bg-[#071B33] ${
          isCard
            ? "aspect-[16/9] lg:h-[165px]"
            : `${compact ? "aspect-[16/10]" : "aspect-[4/3]"} sm:aspect-[16/10] lg:aspect-auto ${
                compact ? "lg:h-[370px]" : "lg:h-[430px]"
              }`
        }`}
      >
        <span
          className={`absolute z-10 rounded border border-[#C99B3C]/25 bg-[#F7F7F5]/90 font-bold uppercase text-[#071B33] ${
            isCard
              ? "right-2 top-2 px-1.5 py-0.5 text-[8px] tracking-[0.06em] sm:right-2.5 sm:top-2.5 sm:px-2 sm:text-[9px] sm:tracking-[0.08em]"
              : "right-2 top-2 px-2 py-0.5 text-[8px] tracking-[0.08em] sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px] sm:tracking-[0.12em]"
          }`}
        >
          {liveBadge}
        </span>
        {imageFailed ? (
          <div className="flex h-full flex-col justify-between bg-[#F7F7F5] p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99B3C]">
                Preview
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#071B33]">{title}</h3>
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded bg-[rgba(8,46,99,0.16)]" />
              <div className="h-3 w-1/2 rounded bg-[rgba(8,46,99,0.12)]" />
              <div className="mt-6 h-24 rounded-md border border-[rgba(8,46,99,0.12)] bg-white" />
            </div>
          </div>
        ) : (
          <Image
            alt={imageAlt ?? `${title} website preview`}
            className={
              imageMode === "cover"
                ? "h-full w-full object-cover object-left-top transition-transform duration-200 group-hover:scale-[1.015]"
                : `h-auto w-full transition-transform duration-[7000ms] ease-in-out max-lg:transition-none max-lg:group-hover:translate-y-0 ${
                    compact
                      ? "motion-safe:group-hover:-translate-y-[calc(100%-370px)]"
                      : "motion-safe:group-hover:-translate-y-[calc(100%-430px)]"
                  }`
            }
            height={2200}
            loading={isCard ? "eager" : "lazy"}
            onError={() => setImageFailed(true)}
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={image}
            width={1440}
          />
        )}
      </div>
    </a>
  );
}
