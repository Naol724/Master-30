"use client";

import { useEffect, useRef } from "react";
import type { CurriculumDay } from "@/data/types";
import { resolveResourceLink } from "@/lib/resourceLinks";

type DayCardProps = {
  day: CurriculumDay;
  expanded: boolean;
  tasksMap: Record<string, boolean>;
  onToggleExpand: (dayNum: number) => void;
  onTaskChange: (taskId: string, dayNum: number, checked: boolean) => void;
};

export function DayCard({
  day,
  expanded,
  tasksMap,
  onToggleExpand,
  onTaskChange,
}: DayCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const checkedCount = day.tasks.filter(
    (_, idx) => tasksMap[`d${day.day}-t${idx}`],
  ).length;
  const total = day.tasks.length;
  const allDone = total > 0 && checkedCount === total;

  useEffect(() => {
    if (!expanded || !cardRef.current) return;
    const timer = window.setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 150);
    return () => window.clearTimeout(timer);
  }, [expanded]);

  return (
    <div
      ref={cardRef}
      className={`day-card${expanded ? " expanded" : ""}`}
      id={`day-card-${day.day}`}
    >
      <div
        className="day-summary-row"
        onClick={() => onToggleExpand(day.day)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggleExpand(day.day);
          }
        }}
      >
        <div className="day-badge">
          <label>Timeline</label>
          <span>{day.day}</span>
        </div>
        <div className="day-title-area">
          <h3>{day.title}</h3>
          <span className="theme-meta-pill">Focus Track: {day.theme}</span>
        </div>
        <div className="day-metrics-pills">
          <div className="meta-pill">⏱️ {day.time}</div>
          <div
            className="meta-pill"
            id={`day-ratio-${day.day}`}
            style={
              allDone
                ? {
                    borderColor: "var(--accent-success)",
                    color: "var(--accent-success)",
                  }
                : {
                    borderColor: "var(--border-color)",
                    color: "var(--text-secondary)",
                  }
            }
          >
            🎯 {checkedCount}/{total}
          </div>
        </div>
        <div className="arrow-toggle">▼</div>
      </div>

      <div className="day-details-pane">
        <div className="pane-contents">
          <div className="tasks-column">
            <h4 className="task-list-title">
              Core Milestone Deliverables Checklist
            </h4>
            <div className="task-group">
              {day.tasks.map((task, idx) => {
                const taskId = `d${day.day}-t${idx}`;
                return (
                  <label className="task-item" htmlFor={taskId} key={taskId}>
                    <div className="task-checkbox-wrapper">
                      <input
                        type="checkbox"
                        id={taskId}
                        data-day={day.day}
                        checked={Boolean(tasksMap[taskId])}
                        onChange={(e) =>
                          onTaskChange(taskId, day.day, e.target.checked)
                        }
                      />
                      <div className="checkbox-custom" />
                    </div>
                    <span className="task-label-text">{task}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="details-sidebar">
            <div className="sidebar-block">
              <h4>Strategic Guidance Vector</h4>
              <blockquote className="insight-quote">
                &quot;{day.insight}&quot;
              </blockquote>
            </div>
            <div className="sidebar-block">
              <h4>Referenced Assets Mapping</h4>
              <div className="resource-link-stack">
                {day.resources.map((res) => {
                  const { href } = resolveResourceLink(res);
                  if (href) {
                    return (
                      <a
                        key={res}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-btn"
                        style={{
                          background: "var(--accent-primary)",
                          color: "#fff",
                          borderColor: "var(--accent-secondary)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>📖 {res}</span>
                        <span>Read Online ➔</span>
                      </a>
                    );
                  }
                  return (
                    <div className="resource-btn" key={res}>
                      <span>📖 {res}</span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Access Asset
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sidebar-block">
              <h4>Guaranteed Target Outcomes</h4>
              <div>
                {day.outcomes.map((out) => (
                  <div className="outcome-item" key={out}>
                    {out}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
