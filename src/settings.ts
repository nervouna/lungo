export interface FooterOptions {
  footer: boolean;
  nerdFonts: boolean;
}

export function readOptions(settings: unknown): FooterOptions {
  const value = settings && typeof settings === "object"
    ? (settings as Record<string, unknown>).lungo : undefined;
  const options = value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown> : {};
  return {
    footer: options.footer !== false,
    nerdFonts: options.nerdFonts === true,
  };
}
