"use client";

import type { CanvasKey, CanvasState } from "@/lib/storage";

type CanvasSectionProps = {
  canvas: CanvasState;
  onCanvasChange: (key: CanvasKey, value: string) => void;
};

const CANVAS_NODES: {
  key: CanvasKey;
  className: string;
  title: string;
  desc: string;
  placeholder: string;
}[] = [
  {
    key: "kp",
    className: "canvas-node node-kp",
    title: "🤝 Key Partners",
    desc: "Who helps you execute operations effectively?",
    placeholder: "List key strategic partnerships...",
  },
  {
    key: "ka",
    className: "canvas-node node-ka",
    title: "⚡ Key Activities",
    desc: "Crucial daily actions required.",
    placeholder: "List mandatory workflows...",
  },
  {
    key: "kr",
    className: "canvas-node node-kr",
    title: "💡 Key Resources",
    desc: "Assets required to function.",
    placeholder: "List key tech, human, capital assets...",
  },
  {
    key: "vp",
    className: "canvas-node node-vp",
    title: "💎 Value Propositions",
    desc: "What core solution are you offering customers?",
    placeholder: "What distinct outcome do you guarantee?...",
  },
  {
    key: "cr",
    className: "canvas-node node-cr",
    title: "❤️ Customer Relationships",
    desc: "How do you interact and retain users?",
    placeholder: "Automation, direct support, or community?...",
  },
  {
    key: "ch",
    className: "canvas-node node-ch",
    title: "📣 Channels",
    desc: "How do you reach your market segments?",
    placeholder: "Inbound content, outbound cold sequences, ads?...",
  },
  {
    key: "cs",
    className: "canvas-node node-cs",
    title: "🎯 Customer Segments",
    desc: "Who explicitly has this specific acute pain?",
    placeholder: "Define the explicit persona niche node...",
  },
  {
    key: "cst",
    className: "canvas-node node-cst",
    title: "📉 Cost Structure",
    desc: "Major cost allocation units required to launch.",
    placeholder: "Opex, software subscriptions, contractor parameters...",
  },
  {
    key: "rev",
    className: "canvas-node node-rev",
    title: "📈 Revenue Streams",
    desc: "How does cashflow move into the asset balance sheet?",
    placeholder: "Recurring monthly tiers, usage pricing, contract configurations...",
  },
];

export function CanvasSection({ canvas, onCanvasChange }: CanvasSectionProps) {
  return (
    <section className="canvas-section">
      <div className="container">
        <div style={{ maxWidth: 700, marginBottom: "1rem" }}>
          <span className="hero-tagline">Day 19 Design Blueprint Workspace</span>
          <h2>The 1-Page Business Model Canvas</h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Construct, synthesize, and update tactical structure fields. Data
            automatically saves in localized state containers.
          </p>
        </div>

        <div className="canvas-grid-blueprint">
          {CANVAS_NODES.map((node) => (
            <div className={node.className} key={node.key}>
              <h4>{node.title}</h4>
              <p>{node.desc}</p>
              <textarea
                className="canvas-editable-space"
                id={`canvas_${node.key}`}
                placeholder={node.placeholder}
                value={canvas[node.key]}
                onChange={(e) => onCanvasChange(node.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
