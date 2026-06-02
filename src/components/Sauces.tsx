'use client'

import React, { useState } from 'react';

const SAUCE_STATUS = ["Concept", "In R&D", "Tested", "Approved", "Shelved"];
const SAUCE_STATUS_STYLE: any = {
  "Concept":   { fg: "var(--ink-mute)", bg: "transparent",              border: "var(--line-strong)" },
  "In R&D":    { fg: "var(--yellow)",   bg: "rgba(232,185,64,0.08)",    border: "var(--yellow)" },
  "Tested":    { fg: "var(--honey)",    bg: "rgba(244,168,42,0.08)",    border: "var(--honey)" },
  "Approved":  { fg: "var(--on-accent)",         bg: "var(--green)",             border: "var(--shadow-key)" },
  "Shelved":   { fg: "var(--red)",      bg: "rgba(226,99,68,0.06)",     border: "var(--red)" },
};

function SauceCard({ s, idx, onUpdate }: any) {
  const st = SAUCE_STATUS_STYLE[s.status] || SAUCE_STATUS_STYLE["Concept"];

  const setStatus = () => {
    const cur = SAUCE_STATUS.indexOf(s.status);
    onUpdate(idx, { ...s, status: SAUCE_STATUS[(cur + 1) % SAUCE_STATUS.length] });
  };
  const setHeat  = (h: number) => onUpdate(idx, { ...s, heat: h });
  const setScore = (v: number) => onUpdate(idx, { ...s, score: v });

  return (
    <div className="card card-pad" style={{ position: "relative", overflow: "visible", borderColor: s.status === "Shelved" ? "var(--line)" : "var(--line-strong)", opacity: s.status === "Shelved" ? 0.7 : 1 }}>
      <div style={{ position: "absolute", left: -2, right: -2, top: -2, height: 5, background: s.color, borderRadius: "16px 16px 0 0", border: "2px solid #000", borderBottom: "none" }}/>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div className="display" style={{ fontSize: 18, color: "var(--cream)", lineHeight: 1.1 }}>{s.name}</div>
        <button onClick={setStatus} className="mono" title="Click to cycle status" style={{ fontSize: 9.5, letterSpacing: "0.12em", textTransform: "uppercase", color: st.fg, background: st.bg, border: `1.5px solid ${st.border}`, padding: "3px 8px 2px", borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>{s.status}</button>
      </div>
      <div style={{ fontSize: 12.5, color: "var(--ink-dim)", fontStyle: "italic", marginBottom: 12, lineHeight: 1.4 }}>{s.tagline}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
        {s.profile.map((p: string) => (
          <span key={p} className="mono" style={{ fontSize: 10, padding: "2px 7px", borderRadius: 999, background: "var(--surface-2)", border: "1px solid var(--line-strong)", color: "var(--ink-dim)", letterSpacing: "0.04em" }}>{p}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        <div>
          <div className="label-cap" style={{ marginBottom: 5 }}>Heat</div>
          <div className="heat-dots">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className={"heat-dot " + (n <= s.heat ? "on" : "")} onClick={() => setHeat(n === s.heat ? n - 1 : n)} title={`${n} / 5`} />
            ))}
          </div>
        </div>
        <div>
          <div className="label-cap" style={{ marginBottom: 5 }}>Score</div>
          <div className="star-rating">
            {[1,2,3,4,5].map((n) => (
              <span key={n} className={"star " + (n <= s.score ? "on" : "")} onClick={() => setScore(n === s.score ? n - 1 : n)} style={{ cursor: "pointer", fontSize: 16 }}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 12, borderTop: "1px dashed var(--line)", fontSize: 12, color: "var(--ink-dim)", lineHeight: 1.45 }}>{s.notes}</div>
      <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", marginTop: 8, letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
        <span>est. launch · {s.eta}</span>
      </div>
    </div>
  );
}

export function SauceLab({ sauces, setSauces }: any) {
  const [filter, setFilter] = useState("All");

  const updateSauce = (idx: number, next: any) => {
    const arr = [...sauces];
    arr[idx] = next;
    setSauces(arr);
  };

  const counts = SAUCE_STATUS.reduce((acc: any, s: string) => {
    acc[s] = sauces.filter((x: any) => x.status === s).length; return acc;
  }, { All: sauces.length });

  const filtered = filter === "All" ? sauces : sauces.filter((s: any) => s.status === filter);
  const order: any = { "Approved": 0, "Tested": 1, "In R&D": 2, "Concept": 3, "Shelved": 4 };
  const sorted = [...filtered].sort((a: any, b: any) => order[a.status] - order[b.status]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18, padding: "10px 12px", background: "var(--bg-2)", borderRadius: 12, border: "1.5px dashed var(--line-strong)" }}>
        <span className="label-cap" style={{ alignSelf: "center", marginRight: 6 }}>Filter</span>
        {["All", ...SAUCE_STATUS].map((s) => {
          const active = filter === s;
          const st = s === "All" ? null : SAUCE_STATUS_STYLE[s];
          return (
            <button key={s} onClick={() => setFilter(s)} className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 10px 4px", borderRadius: 999, background: active ? (st ? st.bg : "var(--honey)") : "transparent", border: `1.5px solid ${active ? (st ? st.border : "var(--shadow-key)") : "var(--line-strong)"}`, color: active ? (st ? st.fg : "var(--shadow-key)") : "var(--ink-dim)", cursor: "pointer" }}>
              {s} <span style={{ opacity: 0.6, marginLeft: 4 }}>{counts[s]}</span>
            </button>
          );
        })}
      </div>

      <div style={{ background: "var(--bg-2)", border: "1.5px dashed var(--line-strong)", borderRadius: 10, padding: "10px 14px", marginBottom: 18, fontSize: 12.5, color: "var(--ink-dim)", lineHeight: 1.5 }}>
        <span className="mono" style={{ color: "var(--honey)", fontSize: 10.5, letterSpacing: "0.1em" }}>🍯 LAB NOTES</span> &nbsp;
        SKUs queued after hot honey ships. Heat = chili dots (0–5), Score = personal conviction.
        Tap status pill, heat dots, or stars to update.
      </div>

      {sorted.length === 0 ? (
        <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--ink-mute)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em" }}>NOTHING IN THIS BUCKET YET.</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {sorted.map((s: any) => {
            const realIdx = sauces.indexOf(s);
            return <SauceCard key={s.name} s={s} idx={realIdx} onUpdate={updateSauce} />;
          })}
        </div>
      )}

      <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1.5px dashed var(--line-strong)", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span><span style={{ color: "var(--green)" }}>{counts["Approved"]}</span> approved · <span style={{ color: "var(--honey)" }}>{counts["Tested"]}</span> tested · <span style={{ color: "var(--yellow)" }}>{counts["In R&D"]}</span> in r&d</span>
        <span>avg score · {(sauces.reduce((s: number, x: any) => s + x.score, 0) / sauces.length).toFixed(1)} ★</span>
      </div>
    </>
  );
}
