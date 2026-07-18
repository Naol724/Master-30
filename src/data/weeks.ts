import type { CheckpointId } from "@/lib/checkpoints";

export type WeekMeta = {
  week: 1 | 2 | 3 | 4;
  numLabel: string;
  title: string;
  header: string;
  goal: string;
  checkpointTitle: string;
  checkpointDesc: string;
  checkpointIds: [CheckpointId, CheckpointId, CheckpointId];
};

export const WEEKS: WeekMeta[] = [
  {
    week: 1,
    numLabel: "Week 01",
    title: "Foundations & Mindset",
    header: "Week 1: Mindset, Assets & Structural Vision",
    goal: "Goal: Reprogram financial behavior assumptions, analyze wealth generation loops, and confirm systemic targets.",
    checkpointTitle: "Week 1 Target Milestones Verification Checkpoint",
    checkpointDesc:
      "Deconstruct limiting programming, audit net assets, and define venture execution guidelines.",
    checkpointIds: ["chk-w1-1", "chk-w1-2", "chk-w1-3"],
  },
  {
    week: 2,
    numLabel: "Week 02",
    title: "Customer Psychology",
    header: "Week 2: Customer Discovery & Persuasion Frameworks",
    goal: "Goal: Conduct practical unbiased field research, find market pain points, and map buy motivations.",
    checkpointTitle: "Week 2 Target Milestones Verification Checkpoint",
    checkpointDesc:
      "Isolate verified customer friction parameters without injecting baseline pitch confirmation bias.",
    checkpointIds: ["chk-w2-1", "chk-w2-2", "chk-w2-3"],
  },
  {
    week: 3,
    numLabel: "Week 03",
    title: "Monetization Architecture",
    header: "Week 3: Business Models & Monetization Architecture",
    goal: "Goal: Build modern product ecosystems, map economic unit flows, and determine value optimization models.",
    checkpointTitle: "Week 3 Target Milestones Verification Checkpoint",
    checkpointDesc:
      "Synthesize cashflow economics mapping, cost allocations, and core pricing strategy.",
    checkpointIds: ["chk-w3-1", "chk-w3-2", "chk-w3-3"],
  },
  {
    week: 4,
    numLabel: "Week 04",
    title: "Execution & Strategy",
    header: "Week 4: Execution & Your Personal Wealth Plan",
    goal: "Goal: Transition structured frameworks into localized tactical sprints and lock in long-term legacy timelines.",
    checkpointTitle: "Week 4 Target Milestones Verification Checkpoint",
    checkpointDesc:
      "Deploy structural alpha iteration steps to establish active transactional momentum.",
    checkpointIds: ["chk-w4-1", "chk-w4-2", "chk-w4-3"],
  },
];
