export const STORAGE_KEYS = {
  theme: "mastery_theme",
  tasks: "mastery_tasks_map",
  canvasPrefix: "mastery_canvas_",
} as const;

export type ThemeMode = "dark" | "light";

export const CANVAS_KEYS = [
  "kp",
  "ka",
  "kr",
  "vp",
  "cr",
  "ch",
  "cs",
  "cst",
  "rev",
] as const;

export type CanvasKey = (typeof CANVAS_KEYS)[number];

export type CanvasState = Record<CanvasKey, string>;

export const EMPTY_CANVAS: CanvasState = {
  kp: "",
  ka: "",
  kr: "",
  vp: "",
  cr: "",
  ch: "",
  cs: "",
  cst: "",
  rev: "",
};

export function readTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem(STORAGE_KEYS.theme);
  return saved === "light" ? "light" : "dark";
}

export function writeTheme(theme: ThemeMode): void {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

export function readTasksMap(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.tasks) || "{}") as Record<
      string,
      boolean
    >;
  } catch {
    return {};
  }
}

export function writeTasksMap(map: Record<string, boolean>): void {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(map));
}

export function readCanvas(): CanvasState {
  if (typeof window === "undefined") return { ...EMPTY_CANVAS };
  const canvas = { ...EMPTY_CANVAS };
  for (const key of CANVAS_KEYS) {
    canvas[key] = localStorage.getItem(`${STORAGE_KEYS.canvasPrefix}${key}`) || "";
  }
  return canvas;
}

export function writeCanvasField(key: CanvasKey, value: string): void {
  localStorage.setItem(`${STORAGE_KEYS.canvasPrefix}${key}`, value);
}
