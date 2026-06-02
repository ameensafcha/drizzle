'use client'

import React, { useState } from 'react';
import { Card, NumInput, AnimatedNumber, fmtSAR, fmtInt, HoneyDrip, Stat } from './Common';

// ---- Cost editor (ingredients / packaging) ----
export function CostEditor({ title, rows, setRows, accent }: any) {
  const subtotal = rows.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const setVal = (i: number, v: any) => {
    const next = [...rows];
    next[i] = { ...next[i], val: v };
    setRows(next);
  };
  return (
    <Card title={title} accent={accent} right={
      <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
        per bottle
      </span>
    }>
      <table className="cost-table">
        <tbody>
          {rows.map((r: any, i: number) => (
            <tr key={r.name}>
              <td className="name">{r.name}</td>
              <td className="note">{r.note || ""}</td>
              <td className="val">
                <NumInput value={r.val} onChange={(v: any) => setVal(i, v)} step={0.05} />
              </td>
            </tr>
          ))}
          <tr className="subtotal">
            <td colSpan={2}>SUBTOTAL</td>
            <td className="val mono">
              <AnimatedNumber value={subtotal} format={(n: any)=>fmtSAR(n,2)} /> <span style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.05em", marginLeft: 4 }}>SAR</span>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

// ---- Other Variable Costs ----
export function VariableCosts({ variable, setVariable, retailPrice }: any) {
  const processingFee = retailPrice * (variable.processingPct / 100);
  return (
    <Card title="Other Variable Costs" right={<span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>per bottle</span>}>
      <table className="cost-table">
        <tbody>
          <tr>
            <td className="name">Labor per bottle</td>
            <td className="note">production time</td>
            <td className="val"><NumInput value={variable.labor} onChange={(v: any)=>setVariable({...variable, labor:v})} step={0.25} /></td>
          </tr>
          <tr>
            <td className="name">Shipping to customer</td>
            <td className="note">smsa / aramex</td>
            <td className="val"><NumInput value={variable.shipping} onChange={(v: any)=>setVariable({...variable, shipping:v})} step={0.5} /></td>
          </tr>
          <tr>
            <td className="name">Payment processing</td>
            <td className="note">
              <AnimatedNumber value={processingFee} format={(n: any)=>fmtSAR(n,2)} /> SAR @ retail
            </td>
            <td className="val"><NumInput value={variable.processingPct} onChange={(v: any)=>setVariable({...variable, processingPct:v})} step={0.1} suffix="%" decimals={2} /></td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

// ---- Pricing & Margin (HERO CARD) ----
export function PricingMargin({
  retailPrice, setRetailPrice,
  ingredients, packaging, variable,
  absorbShipping, setAbsorbShipping,
}: any) {
  const ingTotal = ingredients.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const pkgTotal = packaging.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const labor = variable.labor || 0;
  const shipping = variable.shipping || 0;
  const procPct = (variable.processingPct || 0) / 100;

  const baseCOGS = ingTotal + pkgTotal + labor;
  const procFee = retailPrice * procPct;
  const cogsWithShip = absorbShipping ? baseCOGS + shipping : baseCOGS;
  const profit = retailPrice - cogsWithShip - procFee;
  const margin = retailPrice > 0 ? profit / retailPrice : 0;

  const marginTone = margin >= 0.4 ? "green" : margin >= 0.25 ? "yellow" : "red";
  const toneColor = ({ green: "var(--green)", yellow: "var(--yellow)", red: "var(--red)" } as any)[marginTone];
  const toneLabel = ({ green: "HEALTHY", yellow: "WATCH", red: "BELOW FLOOR" } as any)[marginTone];

  return (
    <div className="card card-pad" style={{
      background: `linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)`,
      border: `2px solid ${toneColor}`,
      position: "relative", overflow: "visible",
    }}>
      <HoneyDrip side="tr" color={toneColor} />

      <div className="card-head" style={{ borderBottomColor: "var(--line-strong)" }}>
        <div className="card-title">Pricing & Margin</div>
        <span className="chip mono" style={{ color: toneColor, fontSize: 10 }}>● {toneLabel}</span>
      </div>

      {/* Retail price input — the big lever */}
      <div style={{
        background: "var(--bg-2)",
        border: "1.5px dashed var(--line-strong)",
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 18,
      }}>
        <div className="label-cap" style={{ marginBottom: 6 }}>Retail Price ✏ the big lever</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <NumInput value={retailPrice} onChange={setRetailPrice} step={1} decimals={0} />
          </div>
          <div className="display" style={{ fontSize: 32, color: "var(--honey)" }}>
            <AnimatedNumber value={retailPrice} format={(n: any)=>fmtSAR(n,0)} />
            <span style={{ fontSize: 14, color: "var(--ink-dim)", marginLeft: 6, letterSpacing: "0.1em" }}>SAR</span>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px 14px", marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: 13 }}>
        <div style={{ color: "var(--ink-dim)" }}>Retail price</div>
        <div style={{ color: "var(--cream)", textAlign: "right" }}>
          + <AnimatedNumber value={retailPrice} format={(n: any)=>fmtSAR(n,2)} />
        </div>

        <div style={{ color: "var(--ink-dim)" }}>Total COGS<span style={{ color: "var(--ink-mute)", fontSize: 10, marginLeft: 6 }}>ing+pkg+labor{absorbShipping ? "+ship" : ""}</span></div>
        <div style={{ color: "var(--red)", textAlign: "right" }}>
          − <AnimatedNumber value={cogsWithShip} format={(n: any)=>fmtSAR(n,2)} />
        </div>

        <div style={{ color: "var(--ink-dim)" }}>Processing fee <span style={{ color: "var(--ink-mute)", fontSize: 10, marginLeft: 6 }}>{variable.processingPct}%</span></div>
        <div style={{ color: "var(--red)", textAlign: "right" }}>
          − <AnimatedNumber value={procFee} format={(n: any)=>fmtSAR(n,2)} />
        </div>

        <div style={{ gridColumn: "1 / -1", height: 1, background: "var(--line-strong)", margin: "4px 0" }} />

        <div className="display" style={{ fontSize: 14, color: "var(--cream)" }}>Gross profit</div>
        <div className="display" style={{ fontSize: 24, color: toneColor, textAlign: "right" }}>
          <AnimatedNumber value={profit} format={(n: any)=>fmtSAR(n,2)} />
        </div>
      </div>

      {/* Margin bar */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <span className="label-cap">Gross Margin</span>
          <span className="display" style={{ fontSize: 28, color: toneColor }}>
            <AnimatedNumber value={Math.max(0, Math.min(100, margin * 100))} format={(n: any)=>n.toFixed(1) + "%"} />
          </span>
        </div>
        <div style={{ height: 12, background: "var(--bg-2)", border: "1.5px solid var(--line-strong)", borderRadius: 999, overflow: "hidden", position: "relative" }}>
          {/* Threshold markers */}
          <div style={{ position: "absolute", left: "25%", top: 0, height: "100%", width: 1, background: "var(--line-strong)" }} />
          <div style={{ position: "absolute", left: "40%", top: 0, height: "100%", width: 1, background: "var(--line-strong)" }} />
          <div style={{
            height: "100%", width: `${Math.max(0, Math.min(100, margin * 100))}%`,
            background: toneColor,
            transition: "width 400ms cubic-bezier(.34,1.56,.64,1)",
          }} />
        </div>
        <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 6, display: "flex", justifyContent: "space-between", letterSpacing: "0.08em" }}>
          <span style={{ color: "var(--red)" }}>● &lt;25% danger</span>
          <span style={{ color: "var(--yellow)" }}>● 25–40% watch</span>
          <span style={{ color: "var(--green)" }}>● 40%+ healthy</span>
        </div>
      </div>

      {/* Absorb shipping toggle */}
      <div
        className={"checkbox " + (absorbShipping ? "checked" : "")}
        onClick={() => setAbsorbShipping(!absorbShipping)}
        style={{ padding: "10px 12px", background: "var(--bg-2)", borderRadius: 10, border: "1.5px solid var(--line-strong)" }}
      >
        <div className="box">{absorbShipping ? "✓" : ""}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>Absorb Shipping ({fmtSAR(shipping,2)} SAR)</div>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: 0, textTransform: "none", marginTop: 2 }}>
            {absorbShipping ? "Free shipping — cost lands on us." : "Customer pays shipping separately."}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Break-Even ----
const FIXED_BREAKDOWN = [
  { label: "Social media ads",   val: 2000 },
  { label: "Influencer / PR",    val: 1500 },
  { label: "Platform fees",      val: 200  },
  { label: "Miscellaneous",      val: 500  },
];

export function BreakEven({ fixedCosts, setFixedCosts, retailPrice, ingredients, packaging, variable }: any) {
  const [expanded, setExpanded] = useState(false);
  const ingTotal = ingredients.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const pkgTotal = packaging.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const cogs = ingTotal + pkgTotal + variable.labor;
  const procFee = retailPrice * (variable.processingPct / 100);
  const contribution = retailPrice - cogs - procFee;
  const breakEvenUnits = contribution > 0 ? Math.ceil(fixedCosts / contribution) : NaN;
  const breakEvenRev = !isNaN(breakEvenUnits) ? breakEvenUnits * retailPrice : NaN;

  return (
    <Card title="Break-Even">
      <div style={{
        background: "var(--bg-2)",
        border: "1.5px dashed var(--line-strong)",
        borderRadius: 12, padding: "12px 14px",
        marginBottom: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div className="label-cap">Monthly Fixed Costs</div>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none", border: "none", color: "var(--honey)",
              fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
              cursor: "pointer", textTransform: "uppercase",
            }}
          >{expanded ? "▴ hide" : "▾ breakdown"}</button>
        </div>
        <NumInput value={fixedCosts} onChange={setFixedCosts} step={50} decimals={0} />
        {expanded && (
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
            {FIXED_BREAKDOWN.map((b) => (
              <div key={b.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", fontSize: 12 }}>
                <span style={{ color: "var(--ink-dim)" }}>{b.label}</span>
                <span className="mono" style={{ color: "var(--ink-dim)" }}>{fmtSAR(b.val, 0)} SAR</span>
              </div>
            ))}
            <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 8, letterSpacing: "0.04em" }}>
              Total of defaults: {fmtSAR(FIXED_BREAKDOWN.reduce((s,b)=>s+b.val,0), 0)} SAR · adjust the input above to your actuals.
            </div>
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px 14px", fontFamily: "var(--font-mono)", fontSize: 13 }}>
        <div style={{ color: "var(--ink-dim)" }}>Contribution / bottle</div>
        <div style={{ color: "var(--cream)", textAlign: "right" }}>
          <AnimatedNumber value={contribution} format={(n: any)=>fmtSAR(n,2)} /> SAR
        </div>
      </div>

      <div style={{
        marginTop: 14,
        background: "rgba(244,168,42,0.06)",
        border: "2px solid var(--honey)",
        borderRadius: 12,
        padding: "16px 18px",
        position: "relative",
      }}>
        <div className="label-cap" style={{ color: "var(--honey)" }}>Break-Even</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
          <span className="display" style={{ fontSize: 38, color: "var(--cream)" }}>
            <AnimatedNumber value={breakEvenUnits || 0} format={(n: any)=>fmtInt(n)} />
          </span>
          <span className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>bottles / month</span>
        </div>
        <div className="mono" style={{ fontSize: 12, color: "var(--ink-dim)", marginTop: 8, letterSpacing: "0.04em" }}>
          ≈ <AnimatedNumber value={breakEvenRev || 0} format={(n: any)=>fmtSAR(n,0)} /> SAR revenue/mo
        </div>
        <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 6, letterSpacing: "0.04em" }}>
          ⌈ {fmtSAR(fixedCosts,0)} ÷ {fmtSAR(contribution,2)} ⌉ — the floor we must clear each month.
        </div>
      </div>
    </Card>
  );
}

// ---- Monthly Projection ----
export function MonthlyProjection({ units, setUnits, retailPrice, ingredients, packaging, variable, absorbShipping, fixedCosts }: any) {
  const ingTotal = ingredients.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const pkgTotal = packaging.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
  const labor = variable.labor || 0;
  const shipping = absorbShipping ? variable.shipping : 0;
  const procPct = (variable.processingPct || 0) / 100;

  const cogsPerBottle = ingTotal + pkgTotal + labor + shipping;
  const procPerBottle = retailPrice * procPct;
  const revenue = units * retailPrice;
  const totalCOGS = units * cogsPerBottle;
  const totalProc = units * procPerBottle;
  const grossProfit = revenue - totalCOGS - totalProc;
  const netProfit = grossProfit - fixedCosts;
  const annual = netProfit * 12;

  const breakEvenUnits = (retailPrice - cogsPerBottle - procPerBottle) > 0
    ? Math.ceil(fixedCosts / (retailPrice - cogsPerBottle - procPerBottle))
    : null;

  // Chart bar lengths — normalize against revenue
  const maxVal = Math.max(revenue, 1);
  const bars = [
    { label: "Revenue",      val: revenue,                 color: "var(--honey)" },
    { label: "COGS",         val: totalCOGS,               color: "var(--red)" },
    { label: "Processing",   val: totalProc,               color: "var(--red-deep)" },
    { label: "Fixed costs",  val: fixedCosts,              color: "var(--line-strong)" },
    { label: "Net profit",   val: Math.max(0, netProfit),  color: netProfit >= 0 ? "var(--green)" : "var(--red)" },
  ];

  return (
    <Card title="Monthly Projection" right={
      <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
        {fmtInt(units)} bottles / mo
      </span>
    }>
      {/* Slider */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "baseline" }}>
          <span className="label-cap">Volume Slider</span>
          <span className="display" style={{ fontSize: 28, color: "var(--honey)" }}>
            <AnimatedNumber value={units} format={(n: any)=>fmtInt(n)} />
            <span style={{ fontSize: 11, color: "var(--ink-mute)", marginLeft: 8, letterSpacing: "0.1em" }}>BOT/MO</span>
          </span>
        </div>
        <input
          type="range"
          min={10} max={500} step={5}
          value={units}
          onChange={(e) => setUnits(parseInt(e.target.value, 10))}
        />
        <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--ink-mute)", marginTop: 6, letterSpacing: "0.08em" }}>
          <span>10</span>
          {breakEvenUnits && breakEvenUnits >= 10 && breakEvenUnits <= 500 ? (
            <span style={{ color: "var(--honey)" }}>↑ break-even: {fmtInt(breakEvenUnits)}</span>
          ) : <span>•</span>}
          <span>500</span>
        </div>
      </div>

      {/* Numbers grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        <Stat label="Revenue"   value={revenue}    color="var(--honey)" />
        <Stat label="COGS"      value={totalCOGS}  color="var(--ink-dim)" />
        <Stat label="Gross Profit" value={grossProfit} color={grossProfit >= 0 ? "var(--cream)" : "var(--red)"} />
        <Stat label="Net Profit"   value={netProfit}   color={netProfit >= 0 ? "var(--green)" : "var(--red)"} big />
      </div>

      {/* Bar chart */}
      <div style={{ paddingTop: 14, borderTop: "1.5px dashed var(--line-strong)" }}>
        <div className="label-cap" style={{ marginBottom: 10 }}>Cash Waterfall</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {bars.map((b) => (
            <div key={b.label} className="waterfall-row" style={{ display: "grid", gridTemplateColumns: "110px 1fr 90px", alignItems: "center", gap: 10 }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-dim)", letterSpacing: "0.06em" }}>{b.label}</span>
              <div style={{ height: 16, background: "var(--bg-2)", borderRadius: 4, border: "1px solid var(--line)", overflow: "hidden" }}>
                <div style={{
                  width: `${Math.min(100, (b.val / maxVal) * 100)}%`,
                  height: "100%",
                  background: b.color,
                  transition: "width 400ms cubic-bezier(.34,1.56,.64,1)",
                }}/>
              </div>
              <span className="mono" style={{ fontSize: 11, color: "var(--cream)", textAlign: "right" }}>
                {fmtSAR(b.val, 0)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Annual */}
      <div style={{
        marginTop: 18, padding: "14px 16px",
        background: netProfit >= 0 ? "rgba(143,183,85,0.08)" : "rgba(226,99,68,0.08)",
        border: `2px solid ${netProfit >= 0 ? "var(--green)" : "var(--red)"}`,
        borderRadius: 12,
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }}>
        <div>
          <div className="label-cap">Annual Projection (×12)</div>
          <div className="display" style={{ fontSize: 28, color: netProfit >= 0 ? "var(--green)" : "var(--red)", marginTop: 2 }}>
            <AnimatedNumber value={annual} format={(n: any)=>fmtSAR(n,0)} />
            <span style={{ fontSize: 14, color: "var(--ink-dim)", marginLeft: 6, letterSpacing: "0.1em" }}>SAR</span>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.08em", textAlign: "right" }}>
          {netProfit >= 0 ? "📈 profitable at this volume" : "📉 below break-even"}<br/>
          @ {fmtInt(units)} bot/mo · {fmtSAR(retailPrice, 0)} SAR retail
        </div>
      </div>
    </Card>
  );
}


