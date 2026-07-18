"use client";

import { curriculumData } from "@/data/curriculum";
import { WEEKS } from "@/data/weeks";
import {
  CHECKPOINT_LABELS,
  type CheckpointState,
} from "@/lib/checkpoints";
import { DayCard } from "./DayCard";

type RoadmapProps = {
  activeWeek: number;
  expandedDay: number | null;
  tasksMap: Record<string, boolean>;
  checkpoints: CheckpointState;
  onToggleExpand: (dayNum: number) => void;
  onTaskChange: (taskId: string, dayNum: number, checked: boolean) => void;
};

export function Roadmap({
  activeWeek,
  expandedDay,
  tasksMap,
  checkpoints,
  onToggleExpand,
  onTaskChange,
}: RoadmapProps) {
  return (
    <main className="container roadmap-container" id="roadmap">
      {WEEKS.map((week) => (
        <div
          key={week.week}
          id={`week${week.week}-pane`}
          className={`week-wrapper${activeWeek === week.week ? " active-week" : ""}`}
        >
          <div className="week-header-block">
            <h2>{week.header}</h2>
            <p>{week.goal}</p>
          </div>

          <div className="checkpoint-banner">
            <div className="checkpoint-info">
              <h4>{week.checkpointTitle}</h4>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                }}
              >
                {week.checkpointDesc}
              </p>
            </div>
            <div className="checkpoint-grid">
              {week.checkpointIds.map((id) => {
                const verified = checkpoints[id];
                const label = CHECKPOINT_LABELS[id];
                return (
                  <span
                    key={id}
                    className={`checkpoint-pill${verified ? " verified" : ""}`}
                    id={id}
                  >
                    {verified ? `✓ ${label}` : label}
                  </span>
                );
              })}
            </div>
          </div>

          <div id={`week${week.week}-days-anchor`}>
            {curriculumData
              .filter((day) => day.week === week.week)
              .map((day) => (
                <DayCard
                  key={day.day}
                  day={day}
                  expanded={expandedDay === day.day}
                  tasksMap={tasksMap}
                  onToggleExpand={onToggleExpand}
                  onTaskChange={onTaskChange}
                />
              ))}
          </div>
        </div>
      ))}
    </main>
  );
}
