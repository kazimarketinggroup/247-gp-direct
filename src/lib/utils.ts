/**
 * Joins class names, dropping any falsy values.
 * Keeps conditional Tailwind classes readable in JSX.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
