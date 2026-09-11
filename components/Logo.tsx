"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export function Logo({ compact = false }: { compact?: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#082E63]">
        TALUP
      </span>
    );
  }

  return (
    <Image
      alt={siteConfig.brandName}
      className={compact ? "h-7 w-auto object-contain" : "h-9 w-auto object-contain"}
      height={compact ? 28 : 36}
      onError={() => setFailed(true)}
      priority
      src="/talup-logo.png"
      width={compact ? 92 : 118}
    />
  );
}
