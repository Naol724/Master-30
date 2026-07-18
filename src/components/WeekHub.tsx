"use client";

import { WEEKS } from "@/data/weeks";

type WeekHubProps = {
  activeWeek: number;
  onSwitchWeek: (week: number) => void;
};

export function WeekHub({ activeWeek, onSwitchWeek }: WeekHubProps) {
  return (
    <section className="hub-section">
      <div className="container">
        <div className="hub-tabs">
          {WEEKS.map((week) => (
            <div
              key={week.week}
              className={`hub-tab${activeWeek === week.week ? " active" : ""}`}
              onClick={() => onSwitchWeek(week.week)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSwitchWeek(week.week);
                }
              }}
            >
              <span className="hub-tab-num">{week.numLabel}</span>
              <span className="hub-tab-title">{week.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
