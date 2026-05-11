"use client";

import { useMemo, useState } from "react";

type ShareButtonsProps = {
  url: string;
  title: string;
  description?: string;
  resultMode?: boolean;
  stickyMobile?: boolean;
};

export function ShareButtons({
  url,
  title,
  description,
  resultMode = false,
  stickyMobile = false
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = useMemo(() => {
    const resolvedUrl =
      typeof window === "undefined" ? url : new URL(url, window.location.origin).toString();
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resolvedUrl)}`;
  }, [url]);

  async function copyLink() {
    const resolvedUrl =
      typeof window === "undefined" ? url : new URL(url, window.location.origin).toString();
    await navigator.clipboard.writeText(resolvedUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className={`share-buttons ${stickyMobile ? "sticky-share" : ""}`}>
      <a className="button facebook" href={shareUrl} target="_blank" rel="noreferrer">
        {resultMode ? "Share result on Facebook" : "Share quiz on Facebook"}
      </a>
      <button className="button secondary" type="button" onClick={copyLink}>
        {copied ? "Copied" : resultMode ? "Copy result link" : "Copy link"}
      </button>
      {description ? <p className="share-note">{title}: {description}</p> : null}
    </div>
  );
}
