'use client'

import React, { useState } from 'react';
import { Card, HoneyDrip, EditableText, AnimatedNumber, fmtSAR, fmtInt, STATUSES, STATUS_STYLE } from './Common';

const STAGES = ["Pre-launch", "Soft Launch", "Live", "Scaling"];

const STAGE_COLORS: any = {
  "Pre-launch":  { fg: "var(--on-dark-accent)", bg: "rgba(244,168,42,0.12)", border: "var(--honey)" },
  "Soft Launch": { fg: "var(--on-dark-accent)", bg: "rgba(232,185,64,0.14)", border: "var(--yellow)" },
  "Live":        { fg: "var(--on-accent)", bg: "var(--green)",          border: "var(--shadow-key)" },
  "Scaling":     { fg: "var(--on-accent)", bg: "var(--honey)",          border: "var(--shadow-key)" },
};

export function BrandHeader({ tagline, setTagline, stage, setStage, onReset, theme, setTheme }: any) {
  const [open, setOpen] = useState(false);
  const sc = STAGE_COLORS[stage] || STAGE_COLORS["Pre-launch"];

  return (
    <div className="card card-pad" style={{ marginBottom: 28, position: "relative", overflow: "visible" }}>
      <HoneyDrip side="tl" />
      <HoneyDrip side="tr" />
      <div className="brand-header-row" style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 380px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <div className="display" style={{ fontSize: "clamp(34px, 5vw, 52px)", color: "var(--honey)", lineHeight: 0.95 }}>
              DRIZZLE
            </div>
            <div className="display" style={{ fontSize: "clamp(20px, 3vw, 28px)", color: "var(--cream)", lineHeight: 0.95 }}>
              & SAUCE
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 15, color: "var(--ink-dim)", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-mute)" }}>Tagline</span>
            <EditableText
              value={tagline}
              onChange={setTagline}
              placeholder="Hot honey, reimagined."
              style={{ fontSize: 17, fontStyle: "italic", color: "var(--cream)" }}
            />
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
            <span>📍 Khobar, KSA</span>
            <span style={{ color: "var(--line-strong)" }}>•</span>
            <span>Launch: 2026</span>
            <span style={{ color: "var(--line-strong)" }}>•</span>
            <span>Founder's Cockpit</span>
          </div>
        </div>

        <div className="stage-cluster" style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
          <div style={{ position: "relative" }}>
            <div className="label-cap" style={{ marginBottom: 6, textAlign: "right" }}>Current Stage</div>
            <button
              onClick={() => setOpen(!open)}
              className="chip"
              style={{
                background: sc.bg,
                color: sc.fg,
                borderColor: sc.border,
                fontSize: 13,
                padding: "8px 14px 7px",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.05em",
              }}
            >
              ● {stage} <span style={{ marginLeft: 4, opacity: 0.7 }}>▾</span>
            </button>
            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                style={{
                  position: "absolute", right: 0, top: "100%", marginTop: 6,
                  background: "var(--surface-2)", border: "2px solid #000",
                  borderRadius: 10, boxShadow: "2px 2px 0 0 #000", padding: 6,
                  zIndex: 10, minWidth: 160,
                }}
              >
                {STAGES.map((s) => (
                  <div
                    key={s}
                    onClick={() => { setStage(s); setOpen(false); }}
                    style={{
                      padding: "8px 12px", borderRadius: 6, cursor: "pointer",
                      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: s === stage ? "var(--honey)" : "var(--ink-dim)",
                      background: s === stage ? "rgba(244,168,42,0.08)" : "transparent",
                    }}
                    onMouseEnter={(e: any) => e.currentTarget.style.background = "rgba(244,168,42,0.08)"}
                    onMouseLeave={(e: any) => e.currentTarget.style.background = s === stage ? "rgba(244,168,42,0.08)" : "transparent"}
                  >
                    {s === stage ? "●" : "○"} {s}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="btn ghost" onClick={onReset} title="Reset all values to defaults">
            ↺ Reset Defaults
          </button>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark" : "Switch to light"}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">{theme === "light" ? "☀" : "☾"}</span>
            </span>
            <span className="theme-toggle-label">{theme === "light" ? "LIGHT" : "DARK"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function KPI({ label, value, sub, tone = "default", accent }: any) {
  const toneMap: any = { default: "var(--cream)", green: "var(--green)", red: "var(--red)", yellow: "var(--yellow)", honey: "var(--honey)" };
  const toneColor = toneMap[tone] || toneMap.default;
  return (
    <div className="card card-pad" style={{ position: "relative", overflow: "visible", paddingTop: 18, paddingBottom: 18 }}>
      {accent ? <HoneyDrip side="tr" color={accent} /> : null}
      <div className="label-cap">{label}</div>
      <div style={{ marginTop: 8, color: toneColor }}>
        <span className="num-display" style={{ fontSize: "clamp(28px, 3.6vw, 38px)" }}>{value}</span>
      </div>
      {sub ? <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6, letterSpacing: "0.05em" }}>{sub}</div> : null}
    </div>
  );
}

export function KPIRow({ retail, cogs, margin, breakEven }: any) {
  const marginTone = margin >= 0.4 ? "green" : margin >= 0.25 ? "yellow" : "red";
  return (
    <div className="grid-4" style={{ marginBottom: 32 }}>
      <KPI
        label="Retail Price"
        value={<><AnimatedNumber value={retail} format={(n: any)=>fmtSAR(n,0)} /> <span style={{ fontSize: 16, opacity: 0.6 }}>SAR</span></>}
        sub="per bottle · 240ml"
        tone="honey"
        accent="var(--honey)"
      />
      <KPI
        label="Cost Per Bottle"
        value={<><AnimatedNumber value={cogs} format={(n: any)=>fmtSAR(n,2)} /> <span style={{ fontSize: 16, opacity: 0.6 }}>SAR</span></>}
        sub="all-in COGS"
      />
      <KPI
        label="Gross Margin"
        value={<AnimatedNumber value={margin * 100} format={(n: any)=>`${n.toFixed(1)}%`} />}
        sub={marginTone === "green" ? "healthy" : marginTone === "yellow" ? "watch closely" : "below floor"}
        tone={marginTone}
      />
      <KPI
        label="Break-Even"
        value={<><AnimatedNumber value={breakEven} format={(n: any)=>fmtInt(n)} /> <span style={{ fontSize: 16, opacity: 0.6 }}>bot</span></>}
        sub="bottles per month"
      />
    </div>
  );
}

export function ProductSnapshot() {
  const ingredients = ["Honey", "Habanero", "Jalapeño", "Red onion", "Garlic", "Zaatar", "ACV"];
  return (
    <Card title="Product Snapshot" right={<span className="chip" style={{ color: "var(--honey)" }}>HERO SKU</span>}>
      <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
        <div style={{
          width: 92, height: 130, flexShrink: 0,
          borderRadius: 10, border: "2px dashed var(--line-strong)",
          background: "repeating-linear-gradient(135deg, var(--surface-2) 0 6px, transparent 6px 12px)",
          display: "grid", placeItems: "center", textAlign: "center",
          padding: 8,
        }}>
          <div className="mono" style={{ fontSize: 9, color: "var(--ink-mute)", letterSpacing: "0.1em", lineHeight: 1.4 }}>
            BOTTLE<br/>SHOT<br/>240ML
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="display" style={{ fontSize: 22, color: "var(--cream)", lineHeight: 1 }}>HOT HONEY</div>
          <div className="mono" style={{ fontSize: 11, color: "var(--honey)", letterSpacing: "0.14em", marginTop: 4 }}>STRAINED · 240ML</div>
          <div style={{ marginTop: 10, fontSize: 13, color: "var(--ink-dim)", lineHeight: 1.5 }}>
            Mid-range, design-forward, mascot-driven. Targets young foodies 20–35 across Saudi Arabia.
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 16px", paddingTop: 14, borderTop: "1.5px dashed var(--line-strong)" }}>
        <div className="label-cap">Ingredients</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {ingredients.map((i) => (
            <span key={i} className="mono" style={{
              fontSize: 10.5, padding: "3px 8px", borderRadius: 999,
              background: "var(--surface-2)", border: "1px solid var(--line-strong)",
              color: "var(--ink-dim)", letterSpacing: "0.04em"
            }}>{i}</span>
          ))}
        </div>
        <div className="label-cap">Channel</div>
        <div style={{ fontSize: 13, color: "var(--cream)" }}>D2C online store <span style={{ color: "var(--ink-mute)" }}>(primary)</span></div>
        <div className="label-cap">Position</div>
        <div style={{ fontSize: 13, color: "var(--cream)" }}>Mid-range, design-forward</div>
      </div>
    </Card>
  );
}

export function Milestones({ milestones, setMilestones }: any) {
  const cycle = (i: number) => {
    const next = [...milestones];
    const cur = STATUSES.indexOf(next[i].status);
    next[i] = { ...next[i], status: STATUSES[(cur + 1) % STATUSES.length] };
    setMilestones(next);
  };
  const done = milestones.filter((m: any) => m.status === "Done").length;
  const inProg = milestones.filter((m: any) => m.status === "In Progress").length;
  const pct = done / milestones.length;

  return (
    <Card
      title="Milestones"
      right={
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
          <span style={{ color: "var(--green)" }}>{done}</span>
          <span> / {milestones.length} done</span>
        </span>
      }
    >
      <div style={{ marginBottom: 16 }}>
        <div style={{
          height: 14, background: "var(--bg-2)", border: "1.5px solid var(--line-strong)",
          borderRadius: 999, overflow: "hidden", position: "relative"
        }}>
          <div style={{
            width: `${pct * 100}%`, height: "100%",
            background: "var(--green)",
            transition: "width 400ms cubic-bezier(.34,1.56,.64,1)",
            borderRight: pct > 0 && pct < 1 ? "2px solid #000" : "none",
          }}/>
          {inProg > 0 && (
            <div style={{
              position: "absolute", top: 0, height: "100%",
              left: `${pct * 100}%`,
              width: `${(inProg / milestones.length) * 100}%`,
              background: "repeating-linear-gradient(45deg, var(--yellow) 0 6px, var(--honey-deep) 6px 12px)",
            }}/>
          )}
        </div>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)", marginTop: 6, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {(pct * 100).toFixed(0)}% complete · {inProg} in flight
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {milestones.map((m: any, i: number) => {
          const st = STATUS_STYLE[m.status];
          return (
            <li
              key={i}
              onClick={() => cycle(i)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 8px",
                cursor: "pointer",
                borderRadius: 8,
                transition: "background 150ms",
              }}
              onMouseEnter={(e: any) => e.currentTarget.style.background = "var(--surface-2)"}
              onMouseLeave={(e: any) => e.currentTarget.style.background = "transparent"}
              title="Click to cycle status"
            >
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                border: `2px solid ${m.status === "Done" ? "var(--shadow-key)" : st.dot}`,
                background: m.status === "Done" ? st.dot : "var(--bg-2)",
                display: "grid", placeItems: "center",
                fontSize: 11, color: m.status === "Done" ? "var(--shadow-key)" : st.fg,
                flexShrink: 0,
                transition: "all 200ms cubic-bezier(.34,1.56,.64,1)",
              }}>
                {m.status === "Done" ? "✓" : m.status === "In Progress" ? "◐" : ""}
              </div>
              <span style={{
                flex: 1,
                fontSize: 13.5,
                color: m.status === "Done" ? "var(--ink-mute)" : "var(--cream)",
                textDecorationLine: m.status === "Done" ? "line-through" : "none",
                textDecorationColor: "var(--green)",
                transition: "color 200ms",
              }}>{m.label}</span>
              <span className="mono" style={{
                fontSize: 9.5, letterSpacing: "0.12em", textTransform: "uppercase",
                color: st.fg, padding: "2px 7px", borderRadius: 999,
                border: `1px solid ${st.dot}`,
                whiteSpace: "nowrap",
              }}>{m.status}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
