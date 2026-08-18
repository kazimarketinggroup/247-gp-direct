export type IconName =
  | "clock"
  | "shield"
  | "users"
  | "video"
  | "pill"
  | "globe"
  | "document"
  | "heart"
  | "phone"
  | "check"
  | "arrow-right"
  | "chevron-down"
  | "plus"
  | "minus"
  | "check-circle"
  | "briefcase"
  | "user-check"
  | "clipboard"
  | "sparkles"
  | "shield-plus"
  | "compass";

const paths: Record<IconName, string> = {
  clock: "M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  shield: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM9 12l2 2 4-4",
  users:
    "M16 19v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 9a3 3 0 100-6 3 3 0 000 6zM22 19v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8",
  video: "M15 10l4.5-2.5v9L15 14M4 7h9a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z",
  pill: "M10.5 20.5a5 5 0 01-7-7l7-7a5 5 0 017 7l-7 7zM8 8l8 8",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z",
  document: "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zM14 3v5h5M9 13h6M9 17h4",
  heart:
    "M20.8 6.6a5 5 0 00-7.1 0L12 8.3l-1.7-1.7a5 5 0 00-7.1 7.1l1.7 1.7L12 22l7.1-6.6 1.7-1.7a5 5 0 000-7.1z",
  phone:
    "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z",
  check: "M20 6L9 17l-5-5",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "chevron-down": "M6 9l6 6 6-6",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  "check-circle": "M12 21a9 9 0 100-18 9 9 0 000 18zM8.5 12l2.5 2.5 4.5-5",
  briefcase:
    "M4 7h16a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1zM9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M12 12v3",
  "user-check":
    "M12 11a4 4 0 100-8 4 4 0 000 8zM4 21v-1a6 6 0 016-6h1M15.5 18.5l1.8 1.8 3.2-3.6",
  clipboard:
    "M9 4h6a1 1 0 011 1v1H8V5a1 1 0 011-1zM8 6H6a1 1 0 00-1 1v13a1 1 0 001 1h12a1 1 0 001-1V7a1 1 0 00-1-1h-2M9 13l2 2 4-4",
  sparkles:
    "M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4zM18.5 16l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z",
  "shield-plus":
    "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4zM12 9v6M9 12h6",
  compass: "M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5 5-2z",
};

export default function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
