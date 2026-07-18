"use client";

import { startTransition, useEffect, useMemo, useState } from "react";
import { curriculumData } from "@/data/curriculum";
import { computeCheckpoints } from "@/lib/checkpoints";
import {
  EMPTY_CANVAS,
  readCanvas,
  readTasksMap,
  readTheme,
  writeCanvasField,
  writeTasksMap,
  writeTheme,
  type CanvasKey,
  type CanvasState,
  type ThemeMode,
} from "@/lib/storage";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { WeekHub } from "./WeekHub";
import { Roadmap } from "./Roadmap";
import { ToolsSection } from "./ToolsSection";
import { CanvasSection } from "./CanvasSection";
import { VaultSection } from "./VaultSection";
import { Footer } from "./Footer";

const TOTAL_TASKS = curriculumData.reduce(
  (sum, day) => sum + day.tasks.length,
  0,
);

export function MasteryApp() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [themeReady, setThemeReady] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWeek, setActiveWeek] = useState(1);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [tasksMap, setTasksMap] = useState<Record<string, boolean>>({});
  const [canvas, setCanvas] = useState<CanvasState>(EMPTY_CANVAS);

  useEffect(() => {
    const savedTheme = readTheme();
    const savedTasks = readTasksMap();
    const savedCanvas = readCanvas();
    document.documentElement.setAttribute("data-theme", savedTheme);

    startTransition(() => {
      setTheme(savedTheme);
      setTasksMap(savedTasks);
      setCanvas(savedCanvas);
      setThemeReady(true);
    });
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.setAttribute("data-theme", theme);
    writeTheme(theme);
  }, [theme, themeReady]);

  const progress = useMemo(() => {
    if (TOTAL_TASKS === 0) return 0;
    const checked = curriculumData.reduce((sum, day) => {
      return (
        sum +
        day.tasks.filter((_, idx) => tasksMap[`d${day.day}-t${idx}`]).length
      );
    }, 0);
    return Math.round((checked / TOTAL_TASKS) * 100);
  }, [tasksMap]);

  const checkpoints = useMemo(
    () => computeCheckpoints(tasksMap),
    [tasksMap],
  );

  function handleToggleTheme() {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  function handleSwitchWeek(week: number) {
    setActiveWeek(week);
    const roadmap = document.getElementById("roadmap");
    if (roadmap) {
      window.scrollTo({
        top: roadmap.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }

  function handleToggleExpand(dayNum: number) {
    setExpandedDay((curr) => (curr === dayNum ? null : dayNum));
  }

  function handleTaskChange(taskId: string, _dayNum: number, checked: boolean) {
    setTasksMap((prev) => {
      const next = { ...prev, [taskId]: checked };
      writeTasksMap(next);
      return next;
    });
  }

  function handleCanvasChange(key: CanvasKey, value: string) {
    setCanvas((prev) => {
      const next = { ...prev, [key]: value };
      writeCanvasField(key, value);
      return next;
    });
  }

  return (
    <>
      <Navbar
        progress={progress}
        mobileMenuOpen={mobileMenuOpen}
        onToggleTheme={handleToggleTheme}
        onToggleMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMenu={() => setMobileMenuOpen(false)}
      />
      <Hero progress={progress} />
      <WeekHub activeWeek={activeWeek} onSwitchWeek={handleSwitchWeek} />
      <Roadmap
        activeWeek={activeWeek}
        expandedDay={expandedDay}
        tasksMap={tasksMap}
        checkpoints={checkpoints}
        onToggleExpand={handleToggleExpand}
        onTaskChange={handleTaskChange}
      />
      <ToolsSection />
      <CanvasSection canvas={canvas} onCanvasChange={handleCanvasChange} />
      <VaultSection />
      <Footer />
    </>
  );
}
