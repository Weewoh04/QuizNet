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

export function AdSlot({ variant, className = "" }: AdSlotProps) {
  return (
    <aside className={`ad-slot ad-${variant} ${className}`} aria-label={labels[variant]}>
      {/* Connect Google AdSense, Mediavine, Raptive, Ezoic, or another ad network here. */}
      <span>Advertisement</span>
    </aside>
  );
}
