export type CheckpointId =
  | "chk-w1-1"
  | "chk-w1-2"
  | "chk-w1-3"
  | "chk-w2-1"
  | "chk-w2-2"
  | "chk-w2-3"
  | "chk-w3-1"
  | "chk-w3-2"
  | "chk-w3-3"
  | "chk-w4-1"
  | "chk-w4-2"
  | "chk-w4-3";

export type CheckpointState = Record<CheckpointId, boolean>;

const WEEK1_LABELS = {
  "chk-w1-1": "Money Beliefs Audit",
  "chk-w1-2": "Asset Infrastructure Set",
  "chk-w1-3": "Network Ideation Logs",
} as const;

const WEEK2_LABELS = {
  "chk-w2-1": "15 Customer Interviews",
  "chk-w2-2": "Pain Signal Isolation",
  "chk-w2-3": "Trigger Driver Blueprint",
} as const;

const WEEK3_LABELS = {
  "chk-w3-1": "Revenue Mapping",
  "chk-w3-2": "Unit Cost Viability",
  "chk-w3-3": "Canvas Synthesis",
} as const;

const WEEK4_LABELS = {
  "chk-w4-1": "90-Day Tactical Lock",
  "chk-w4-2": "Asset Deployment Plan",
  "chk-w4-3": "Alpha Launch Actions",
} as const;

export const CHECKPOINT_LABELS: Record<CheckpointId, string> = {
  ...WEEK1_LABELS,
  ...WEEK2_LABELS,
  ...WEEK3_LABELS,
  ...WEEK4_LABELS,
};

export const INITIAL_CHECKPOINTS: CheckpointState = {
  "chk-w1-1": false,
  "chk-w1-2": false,
  "chk-w1-3": false,
  "chk-w2-1": false,
  "chk-w2-2": false,
  "chk-w2-3": false,
  "chk-w3-1": false,
  "chk-w3-2": false,
  "chk-w3-3": false,
  "chk-w4-1": false,
  "chk-w4-2": false,
  "chk-w4-3": false,
};

function allChecked(tasksMap: Record<string, boolean>, ids: string[]): boolean {
  return ids.every((id) => Boolean(tasksMap[id]));
}

/** Mirrors the original verifyCheckpointsActivity logic (weeks 1–2 only). */
export function computeCheckpoints(
  tasksMap: Record<string, boolean>,
): CheckpointState {
  return {
    ...INITIAL_CHECKPOINTS,
    "chk-w1-1": allChecked(tasksMap, ["d1-t1", "d1-t3"]),
    "chk-w1-2": allChecked(tasksMap, ["d1-t5", "d3-t2"]),
    "chk-w1-3": allChecked(tasksMap, ["d1-t6", "d5-t2"]),
    "chk-w2-1": allChecked(tasksMap, ["d8-t2", "d9-t1", "d13-t1"]),
    "chk-w2-2": allChecked(tasksMap, ["d8-t3", "d14-t1"]),
    "chk-w2-3": allChecked(tasksMap, ["d10-t3", "d11-t3"]),
  };
}
