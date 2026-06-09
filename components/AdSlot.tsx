"use client";

import { useEffect } from "react";

type AdSlotProps = {
  variant:
    | "top-banner"
    | "in-feed"
    | "sidebar"
    | "mid-quiz"
    | "pre-results"
    | "bottom-article";
  className?: string;
};

const labels = {
  "top-banner": "Top banner ad",
  "in-feed": "In-feed ad",
  sidebar: "Sidebar ad",
  "mid-quiz": "Mid-quiz ad",
  "pre-results": "Pre-results ad",
  "bottom-article": "Bottom article ad"
};

const effectiveCpmAd = {
  containerId: "container-3bf42fdcf6860b740537dea93d424c2b",
  scriptSrc:
    "https://pl29684633.effectivecpmnetwork.com/3bf42fdcf6860b740537dea93d424c2b/invoke.js"
};

export function AdSlot({ variant, className = "" }: AdSlotProps) {
  const isNetworkSlot = variant === "top-banner";

  useEffect(() => {
    if (!isNetworkSlot) {
      return;
    }

    const container = document.getElementById(effectiveCpmAd.containerId);

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = effectiveCpmAd.scriptSrc;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isNetworkSlot]);

  return (
    <aside className={`ad-slot ad-${variant} ${className}`} aria-label={labels[variant]}>
      {isNetworkSlot ? <div id={effectiveCpmAd.containerId} /> : <span>Advertisement</span>}
    </aside>
  );
}
