export function isBlank(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim().length === 0;
}

export function isNotBlank(str: string | null | undefined): boolean {
  return !isBlank(str);
}

export function trimToEmpty(str: string | null | undefined): string {
  return str === null || str === undefined ? "" : str.trim();
}
