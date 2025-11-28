// src/lib/utils/cn.ts

/**
 * Простой helper для склейки className.
 * Используем так:
 * cn("base", condition && "modifier")
 * -> "base modifier"
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
