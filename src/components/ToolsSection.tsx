"use client";

import { useState, type FormEvent } from "react";
import { formatCurrency } from "@/lib/format";

export function ToolsSection() {
  const [market, setMarket] = useState({
    tam: "$0.00",
    sam: "$0.00",
    som: "$0.00",
  });
  const [pricing, setPricing] = useState({
    tierLow: "$0.00 / mo",
    tierHigh: "$0.00 / mo",
    breakeven: "0 Units",
  });

  function calculateMarketMetrics(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const tamPop = parseFloat(
      (form.elements.namedItem("inputTamPop") as HTMLInputElement).value,
    ) || 0;
    const samPct = parseFloat(
      (form.elements.namedItem("inputSamPct") as HTMLInputElement).value,
    ) || 0;
    const somPct = parseFloat(
      (form.elements.namedItem("inputSomPct") as HTMLInputElement).value,
    ) || 0;
    const acvVal = parseFloat(
      (form.elements.namedItem("inputAcv") as HTMLInputElement).value,
    ) || 0;

    const tamVal = tamPop * acvVal;
    const computedSam = tamVal * (samPct / 100);
    const computedSom = computedSam * (somPct / 100);

    setMarket({
      tam: formatCurrency(tamVal),
      sam: formatCurrency(computedSam),
      som: formatCurrency(computedSom),
    });
  }

  function calculatePricingMetrics(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const painValue = parseFloat(
      (form.elements.namedItem("inputPainValue") as HTMLInputElement).value,
    ) || 0;
    const monthlyOpex = parseFloat(
      (form.elements.namedItem("inputOpex") as HTMLInputElement).value,
    ) || 0;

    const lowTierPrice = painValue * 0.1;
    const highTierPrice = painValue * 0.3;
    let unitsToClearBreakeven = 0;
    if (lowTierPrice > 0) {
      unitsToClearBreakeven = Math.ceil(monthlyOpex / lowTierPrice);
    }

    setPricing({
      tierLow: `${formatCurrency(lowTierPrice, 2)} / mo`,
      tierHigh: `${formatCurrency(highTierPrice, 2)} / mo`,
      breakeven: `${unitsToClearBreakeven} Account Units`,
    });
  }

  return (
    <section className="tools-section" id="tools">
      <div className="container">
        <div style={{ maxWidth: 700, marginBottom: "2rem" }}>
          <span className="hero-tagline">Integrated Operational Suite</span>
          <h2>Active Strategic Sandboxes</h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Input, analyze, and map real-world tactical calculations out of your
            business vision model frameworks live.
          </p>
        </div>

        <div className="tool-grid-layout">
          <div className="interactive-tool-card">
            <div className="tool-header-meta">
              <h3>Market Capacity Calculator (TAM/SAM/SOM)</h3>
              <p>
                Calculate realistic target penetration benchmarks out of your
                target segment.
              </p>
            </div>
            <form id="marketSizingCalcForm" onSubmit={calculateMarketMetrics}>
              <div className="form-element-group">
                <label>
                  Total Addressable Market (TAM Total Population Context Nodes)
                </label>
                <input
                  type="number"
                  name="inputTamPop"
                  id="inputTamPop"
                  placeholder="e.g., 1000000"
                  required
                />
              </div>
              <div className="form-element-group">
                <label>
                  Serviceable Addressable Market Ratio Benchmark Target (%)
                </label>
                <input
                  type="number"
                  name="inputSamPct"
                  id="inputSamPct"
                  placeholder="e.g., 15"
                  min={1}
                  max={100}
                  required
                />
              </div>
              <div className="form-element-group">
                <label>
                  Serviceable Obtainable Market Realist Year 1 Scale Capture (%)
                </label>
                <input
                  type="number"
                  name="inputSomPct"
                  id="inputSomPct"
                  placeholder="e.g., 5"
                  min={1}
                  max={100}
                  required
                />
              </div>
              <div className="form-element-group">
                <label>
                  Average Projected Contract Allocation Annual Contract Value
                  (USD)
                </label>
                <input
                  type="number"
                  name="inputAcv"
                  id="inputAcv"
                  placeholder="e.g., 500"
                  required
                />
              </div>
              <button type="submit" className="primary-action-btn">
                Run Market Analysis Run
              </button>
            </form>

            <div className="tool-calc-output">
              <div className="output-row-item">
                <span>TAM Financial Sizing Volume Baseline:</span>
                <span id="outTam">{market.tam}</span>
              </div>
              <div className="output-row-item">
                <span>SAM Segment Potential Capture Level:</span>
                <span id="outSam">{market.sam}</span>
              </div>
              <div className="output-row-item">
                <span>SOM Realistic Launch Objective Goal:</span>
                <span
                  id="outSom"
                  style={{
                    color: "var(--accent-secondary)",
                    fontWeight: 700,
                  }}
                >
                  {market.som}
                </span>
              </div>
            </div>
          </div>

          <div className="interactive-tool-card">
            <div className="tool-header-meta">
              <h3>Asymmetric Pricing Optimization Grid</h3>
              <p>
                Calculate unit parameters based on quantified customer pain
                value metrics.
              </p>
            </div>
            <form
              id="pricingStrategyMetricForm"
              onSubmit={calculatePricingMetrics}
            >
              <div className="form-element-group">
                <label>
                  Quantified Financial Scale of Customer Pain Value (Annualized
                  Value / USD)
                </label>
                <input
                  type="number"
                  name="inputPainValue"
                  id="inputPainValue"
                  placeholder="e.g., 2000"
                  required
                />
              </div>
              <div className="form-element-group">
                <label>Projected Target Monthly Fixed Operations Costs</label>
                <input
                  type="number"
                  name="inputOpex"
                  id="inputOpex"
                  placeholder="e.g., 1500"
                  required
                />
              </div>
              <button type="submit" className="primary-action-btn">
                Optimize Monetization Spread
              </button>
            </form>

            <div className="tool-calc-output">
              <div className="output-row-item">
                <span>Value Tier Target Base (10% Capture Scale):</span>
                <span id="tierLow">{pricing.tierLow}</span>
              </div>
              <div className="output-row-item">
                <span>Premium Acceleration Target (30% Optimal Scale):</span>
                <span id="tierHigh">{pricing.tierHigh}</span>
              </div>
              <div className="output-row-item">
                <span>Breakeven Threshold Volume Needed (At 10% Tier):</span>
                <span
                  id="breakevenUnits"
                  style={{
                    color: "var(--accent-success)",
                    fontWeight: 700,
                  }}
                >
                  {pricing.breakeven}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
