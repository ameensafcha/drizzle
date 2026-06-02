'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Card, NumInput, AnimatedNumber, fmtInt, STATUS_STYLE, STATUSES } from './Common';

// ============================================================
// 1. FORMULATION
// ============================================================
export function Formulation({ data, setData }: any) {
  const setSpec = (key: string, val: any) => setData({ ...data, specs: { ...data.specs, [key]: { ...data.specs[key], val } } });
  const cycleCompliance = (i: number) => {
    const next = [...data.compliance];
    const cur = STATUSES.indexOf(next[i].status);
    next[i] = { ...next[i], status: STATUSES[(cur + 1) % STATUSES.length] };
    setData({ ...data, compliance: next });
  };

  const done = data.compliance.filter((c: any) => c.status === "Done").length;

  return (
    <div className="grid-2" style={{ gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", marginBottom: 20 }}>
      <Card
        title="Recipe Spec"
        right={
          <span className="chip" style={{ color: "var(--honey)", background: "rgba(244,168,42,0.08)" }}>
            {data.version} · {data.versionDate}
          </span>
        }
        accent="var(--honey)"
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 18 }}>
          {Object.entries(data.specs).map(([key, s]: [string, any]) => (
            <div key={key} style={{ background: "var(--bg-2)", border: "1.5px solid var(--line)", borderRadius: 10, padding: "10px 12px" }}>
              <div className="label-cap" style={{ fontSize: 9.5 }}>{s.label}</div>
              <div style={{ marginTop: 4 }}>
                <NumInput value={s.val} onChange={(v: any) => setSpec(key, v)} suffix={s.unit} step={s.unit === "SHU" ? 100 : 0.1} decimals={s.unit === "SHU" || s.unit === "cP" || s.unit === "mo" || s.unit === "°Bx" ? 0 : 2} />
              </div>
              <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-mute)", marginTop: 4, letterSpacing: "0.04em" }}>{s.note}</div>
            </div>
          ))}
        </div>

        <div className="label-cap" style={{ marginBottom: 10 }}>Iteration Log</div>
        <div style={{ position: "relative", paddingLeft: 18 }}>
          <div style={{ position: "absolute", left: 6, top: 6, bottom: 6, width: 2, background: "var(--line-strong)" }} />
          {data.iterations.map((it: any, i: number) => {
            const isCurrent = it.v === data.version;
            return (
              <div key={i} style={{ position: "relative", paddingBottom: 14 }}>
                <div style={{
                  position: "absolute", left: -18, top: 4,
                  width: 14, height: 14, borderRadius: "50%",
                  background: isCurrent ? "var(--honey)" : "var(--bg-2)",
                  border: `2px solid ${isCurrent ? "var(--shadow-key)" : "var(--line-strong)"}`,
                  boxShadow: isCurrent ? "2px 2px 0 0 #000" : "none",
                }}/>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                  <span className="display" style={{ fontSize: 14, color: isCurrent ? "var(--honey)" : "var(--cream)" }}>{it.v}</span>
                  <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.04em" }}>{it.date}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--ink-dim)", marginTop: 2 }}>{it.change}</div>
                <div className="mono" style={{ fontSize: 10.5, color: isCurrent ? "var(--honey)" : "var(--ink-mute)", marginTop: 3, letterSpacing: "0.04em" }}>
                  → {it.outcome}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card
        title="Food Safety & SFDA"
        right={
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
            <span style={{ color: "var(--green)" }}>{done}</span> / {data.compliance.length}
          </span>
        }
      >
        <div style={{ background: "var(--bg-2)", border: "1.5px dashed var(--line-strong)", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 12.5, color: "var(--ink-dim)", lineHeight: 1.5 }}>
          <span className="mono" style={{ color: "var(--honey)", fontSize: 10.5, letterSpacing: "0.1em" }}>⚠ KSA REGULATORY</span><br/>
          SFDA approval is the long pole. Lab work, allergen statements and bilingual labels all gate launch. Start every item early.
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
          {data.compliance.map((c: any, i: number) => {
            const st = STATUS_STYLE[c.status];
            return (
              <li
                key={i}
                onClick={() => cycleCompliance(i)}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 8px", cursor: "pointer", borderRadius: 8, transition: "background 150ms" }}
                onMouseEnter={(e: any) => e.currentTarget.style.background = "var(--surface-2)"}
                onMouseLeave={(e: any) => e.currentTarget.style.background = "transparent"}
                title="Click to cycle status"
              >
                <div style={{
                  width: 20, height: 20, borderRadius: 5,
                  border: `2px solid ${c.status === "Done" ? "var(--shadow-key)" : st.dot}`,
                  background: c.status === "Done" ? st.dot : "var(--bg-2)",
                  display: "grid", placeItems: "center",
                  fontSize: 11, color: c.status === "Done" ? "var(--shadow-key)" : st.fg,
                  flexShrink: 0,
                }}>
                  {c.status === "Done" ? "✓" : c.status === "In Progress" ? "·" : ""}
                </div>
                <span style={{ flex: 1, fontSize: 13, color: c.status === "Done" ? "var(--ink-mute)" : "var(--cream)", textDecoration: c.status === "Done" ? "line-through" : "none" }}>
                  {c.label}
                </span>
                <span className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: st.fg, padding: "2px 6px", borderRadius: 999, border: `1px solid ${st.dot}`, whiteSpace: "nowrap" }}>{c.status}</span>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}

// ============================================================
// 2. DESIGN FILES
// ============================================================
const DESIGN_STATUS = ["Not Started", "Draft", "In Review", "Final"];
const DESIGN_STATUS_STYLE: any = {
  "Not Started": { fg: "var(--ink-mute)",  bg: "transparent",                border: "var(--line-strong)" },
  "Draft":       { fg: "var(--yellow)",    bg: "rgba(232,185,64,0.08)",      border: "var(--yellow)" },
  "In Review":   { fg: "var(--honey)",     bg: "rgba(244,168,42,0.08)",      border: "var(--honey)" },
  "Final":       { fg: "var(--on-accent)",          bg: "var(--green)",               border: "var(--shadow-key)" },
};

export function DesignFiles({ files, setFiles }: any) {
  const cycleStatus = (cat: string, idx: number) => {
    const next = { ...files };
    const arr = [...next[cat]];
    const cur = DESIGN_STATUS.indexOf(arr[idx].status);
    arr[idx] = { ...arr[idx], status: DESIGN_STATUS[(cur + 1) % DESIGN_STATUS.length] };
    next[cat] = arr;
    setFiles(next);
  };

  const all = Object.values(files).flat() as any[];
  const totals = DESIGN_STATUS.map((s) => ({
    status: s, count: all.filter((a: any) => a.status === s).length,
  }));

  const categoryAccent: any = { Identity: "var(--honey)", Mascot: "var(--green)", Packaging: "var(--yellow)", Web: "var(--cream)", Photo: "var(--red)" };

  return (
    <Card
      title="Design Files"
      right={
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {totals.map((t) => {
            const st = DESIGN_STATUS_STYLE[t.status];
            return (
              <span key={t.status} className="mono" style={{ fontSize: 10, letterSpacing: "0.08em", color: st.fg }}>
                {t.count} {t.status.split(" ")[0].toLowerCase()}
              </span>
            );
          })}
        </div>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {Object.entries(files).map(([cat, items]: [string, any]) => (
          <div key={cat}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: categoryAccent[cat], border: "1.5px solid #000" }}/>
              <span className="display" style={{ fontSize: 13, color: "var(--cream)", letterSpacing: "0.04em" }}>{cat.toUpperCase()}</span>
              <div style={{ flex: 1, height: 1, background: "var(--line)" }}/>
              <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.08em" }}>
                {items.filter((i: any) => i.status === "Final").length}/{items.length} final
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {items.map((f: any, i: number) => {
                const st = DESIGN_STATUS_STYLE[f.status];
                return (
                  <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 14, alignItems: "center", padding: "8px 10px", borderRadius: 6, background: i % 2 === 0 ? "transparent" : "rgba(255,241,214,0.015)" }}>
                    <span style={{ fontSize: 13, color: "var(--cream)", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</span>
                    <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{f.owner}</span>
                    <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-dim)", letterSpacing: "0.04em", whiteSpace: "nowrap", minWidth: 36, textAlign: "right" }}>{f.version}</span>
                    <button onClick={() => cycleStatus(cat, i)} title="Click to cycle status" className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: st.fg, background: st.bg, border: `1.5px solid ${st.border}`, padding: "3px 8px 2px", borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap", minWidth: 86 }}>{f.status}</button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ============================================================
// 3. SOCIAL MEDIA
// ============================================================
function CellInput({ value: initial, onChange, placeholder, style }: any) {
  const [draft, setDraft] = useState(initial ?? "");
  const [editing, setEditing] = useState(false);
  useEffect(() => { if (!editing) setDraft(initial ?? ""); }, [initial, editing]);
  const commit = () => { setEditing(false); if (draft !== initial) onChange(draft); };
  return editing ? (
    <input type="text" value={draft} placeholder={placeholder || ""}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e: any) => { if (e.key === "Enter" || e.key === "Escape") commit(); }}
      autoFocus
      style={{ fontFamily: "var(--font-mono)", fontSize: 12, background: "transparent", border: "none", color: "inherit", outline: "none", width: "100%", padding: "2px 0", ...style }}
    />
  ) : (
    <span onClick={() => setEditing(true)}
      style={{ cursor: "text", borderBottom: "1px dashed var(--line)", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--cream)", width: "100%", display: "inline-block", padding: "2px 0", ...style }}
    >{initial || <span style={{ color: "var(--ink-mute)" }}>{placeholder}</span>}</span>
  );
}
function DatePicker({ value, onChange }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fmt = (d: string) => {
    if (!d) return "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) try { return new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" }); } catch { return d; }
    return d;
  };
  const parsed = value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(value + "T00:00:00") : new Date();
  const [year, month] = [parsed.getFullYear(), parsed.getMonth()];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDow = new Date(year, month, 1).getDay();
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  useEffect(() => {
    if (!open) return;
    const close = (e: any) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  const pick = (day: number) => {
    onChange(new Date(Date.UTC(year, month, day)).toISOString().slice(0, 10));
    setOpen(false);
  };
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <span onClick={() => setOpen(!open)} style={{ cursor: "pointer", borderBottom: "1px dashed var(--line)", fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--honey)", width: 60, display: "inline-block", padding: "2px 0" }}>
        {fmt(value) || <span style={{ color: "var(--ink-mute)" }}>May 28</span>}
      </span>
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 100, background: "var(--surface-2)", border: "2px solid var(--line-strong)", borderRadius: 10, padding: 8, width: 200, boxShadow: "4px 6px 0 0 var(--shadow-key)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--cream)" }}>{MONTHS[month]} {year}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, textAlign: "center" }}>
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <span key={d} className="mono" style={{ fontSize: 9, color: "var(--ink-mute)", padding: "2px 0" }}>{d}</span>)}
            {Array.from({ length: firstDow }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
              <span key={day} onClick={() => pick(day)} className="mono" style={{ fontSize: 11, color: "var(--cream)", padding: "3px 0", borderRadius: 4, cursor: "pointer", textAlign: "center" }}
                onMouseEnter={(e: any) => e.currentTarget.style.background = "var(--line)"}
                onMouseLeave={(e: any) => e.currentTarget.style.background = "transparent"}
              >{day}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
function PlatformSelect({ value, onChange }: any) {
  const [editing, setEditing] = useState(false);
  const PLATFORMS = ["Instagram","TikTok","Snapchat","X","YouTube","Facebook","LinkedIn"];
  return editing ? (
    <select value={value || ""} onChange={(e) => { onChange(e.target.value); setEditing(false); }} onBlur={() => setEditing(false)} autoFocus
      style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-mute)", background: "var(--surface-2)", border: "1px solid var(--line-strong)", borderRadius: 6, padding: "2px 4px", outline: "none", width: 80, textTransform: "uppercase" }}>
      <option value="" disabled>platform</option>
      {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
    </select>
  ) : (
    <span onClick={() => setEditing(true)} style={{ cursor: "text", borderBottom: "1px dashed var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-mute)", width: 70, display: "inline-block", padding: "2px 0", textTransform: "uppercase" }}>
      {value || <span style={{ color: "var(--ink-mute)" }}>platform</span>}
    </span>
  );
}

export function SocialMedia({ data, setData }: any) {
  const cycleCalendar = (i: number) => {
    const next = [...data.calendar];
    const arr = ["Not Started", "In Progress", "Scheduled", "Posted"];
    const cur = arr.indexOf(next[i].status);
    next[i] = { ...next[i], status: arr[(cur + 1) % arr.length] };
    setData({ ...data, calendar: next });
  };
  const cycleInfluencer = (i: number) => {
    const next = [...data.influencers];
    const cur = STATUSES.indexOf(next[i].status);
    next[i] = { ...next[i], status: STATUSES[(cur + 1) % STATUSES.length] };
    setData({ ...data, influencers: next });
  };
  const setFollowers = (i: number, v: any) => {
    const next = [...data.channels];
    next[i] = { ...next[i], followers: v };
    setData({ ...data, channels: next });
  };

  const updateCalendarEntry = (i: number, key: string, val: any) => {
    const next = [...data.calendar];
    next[i] = { ...next[i], [key]: val };
    setData({ ...data, calendar: next });
  };
  const addCalendarEntry = () => {
    const blank = { date: "", platform: "", title: "", status: "Not Started" };
    setData({ ...data, calendar: [...data.calendar, blank] });
  };
  const deleteCalendarEntry = (i: number) => {
    setData({ ...data, calendar: data.calendar.filter((_: any, idx: number) => idx !== i) });
  };
  const updateInfluencerEntry = (i: number, key: string, val: any) => {
    const next = [...data.influencers];
    next[i] = { ...next[i], [key]: val };
    setData({ ...data, influencers: next });
  };
  const addInfluencerEntry = () => {
    const blank = { name: "", followers: "", status: "Not Started", deal: "" };
    setData({ ...data, influencers: [...data.influencers, blank] });
  };
  const deleteInfluencerEntry = (i: number) => {
    setData({ ...data, influencers: data.influencers.filter((_: any, idx: number) => idx !== i) });
  };

  const CAL_STATUS: any = {
    "Not Started":  { fg: "var(--ink-mute)", border: "var(--line-strong)" },
    "In Progress":  { fg: "var(--yellow)",   border: "var(--yellow)" },
    "Scheduled":    { fg: "var(--honey)",    border: "var(--honey)" },
    "Posted":       { fg: "var(--green)",    border: "var(--green)" },
  };

  return (
    <>
      <div className="grid-4" style={{ marginBottom: 20 }}>
        {data.channels.map((ch: any, i: number) => {
          const pct = Math.min(100, (ch.followers / ch.target) * 100);
          return (
            <div key={i} className="card card-pad" style={{ padding: "16px 16px 14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="display" style={{ fontSize: 14, color: ch.color }}>{ch.platform.toUpperCase()}</span>
                <span className="mono" style={{ fontSize: 9, letterSpacing: "0.1em", color: ch.status === "Active" ? "var(--green)" : ch.status === "Dormant" ? "var(--red)" : "var(--yellow)" }}>● {ch.status}</span>
              </div>
              <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)", marginTop: 2, letterSpacing: "0.04em" }}>{ch.handle}</div>
              <div style={{ marginTop: 12 }}>
                <div className="num-display" style={{ fontSize: 26, color: "var(--cream)" }}>
                  <AnimatedNumber value={ch.followers} format={(n: any)=>fmtInt(n)} />
                </div>
                <div className="mono" style={{ fontSize: 9.5, color: "var(--ink-mute)", letterSpacing: "0.08em", marginTop: 2 }}>followers · target {fmtInt(ch.target)}</div>
              </div>
              <div style={{ marginTop: 10, height: 6, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden", border: "1px solid var(--line)" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: ch.color, transition: "width 300ms ease-out" }}/>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-dim)", letterSpacing: "0.04em" }}>
                <span>{ch.posts} posts/mo</span>
                <span style={{ color: ch.engagement >= 5 ? "var(--green)" : "var(--ink-dim)" }}>{ch.engagement.toFixed(1)}% eng</span>
              </div>
              <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px dashed var(--line)" }}>
                <NumInput value={ch.followers} onChange={(v: any)=>setFollowers(i, v)} step={10} decimals={0} suffix="" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)", gap: 20, marginBottom: 20 }}>
        <Card title="Content Pillars" right={<span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>monthly mix</span>}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {data.pillars.map((p: any, i: number) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <span className="display" style={{ fontSize: 14, color: "var(--cream)" }}>{p.name}</span>
                  <span className="mono" style={{ fontSize: 13, color: p.color, letterSpacing: "0.04em" }}>{p.pct}%</span>
                </div>
                <div style={{ height: 8, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden", border: "1px solid var(--line)" }}>
                  <div style={{ width: `${p.pct * 2}%`, height: "100%", background: p.color, maxWidth: "100%" }}/>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-dim)", marginTop: 6, lineHeight: 1.4 }}>{p.note}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Content Calendar" right={<span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>next 2 weeks</span>}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {data.calendar.length === 0 ? (
              <div style={{ padding: "20px 12px", textAlign: "center", color: "var(--ink-mute)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em" }}>NO ENTRIES YET</div>
            ) : data.calendar.map((c: any, i: number) => {
              const st = CAL_STATUS[c.status];
              return (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "auto auto 1fr auto auto", gap: 10, alignItems: "center", padding: "10px 8px", borderRadius: 6, background: i % 2 === 0 ? "transparent" : "rgba(255,241,214,0.015)" }}>
                  <DatePicker value={c.date} onChange={(v: any) => updateCalendarEntry(i, "date", v)} />
                  <PlatformSelect value={c.platform} onChange={(v: any) => updateCalendarEntry(i, "platform", v)} />
                  <CellInput value={c.title} onChange={(v: any) => updateCalendarEntry(i, "title", v)} placeholder="description" style={{ fontSize: 13, color: "var(--cream)" }} />
                  <button onClick={() => cycleCalendar(i)} title="Click to cycle" className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: st.fg, background: "transparent", border: `1.5px solid ${st.border}`, padding: "3px 8px 2px", borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap", minWidth: 92 }}>{c.status}</button>
                  <button onClick={() => deleteCalendarEntry(i)} className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", border: "1px solid var(--line-strong)", borderRadius: 6, width: 22, height: 22, display: "grid", placeItems: "center", cursor: "pointer" }}>✕</button>
                </div>
              );
            })}
          </div>
          <button onClick={addCalendarEntry} className="mono" style={{ width: "100%", marginTop: 10, padding: "9px", border: "1.5px dashed var(--line-strong)", borderRadius: 10, color: "var(--ink-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", background: "transparent" }}>+ Add calendar entry</button>
        </Card>
      </div>

      <Card title="Influencer Pipeline" right={
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
          {data.influencers.filter((i: any) => i.status === "Done").length} signed · {data.influencers.length} in pipeline
        </span>
      }>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {data.influencers.length === 0 ? (
            <div style={{ padding: "20px 12px", textAlign: "center", color: "var(--ink-mute)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em" }}>NO INFLUENCERS YET</div>
          ) : data.influencers.map((inf: any, i: number) => {
            const st = STATUS_STYLE[inf.status];
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 0.6fr 1.4fr auto auto", gap: 12, alignItems: "center", padding: "9px 10px", borderRadius: 6, background: i % 2 === 0 ? "transparent" : "rgba(255,241,214,0.015)" }}>
                <CellInput value={inf.name} onChange={(v: any) => updateInfluencerEntry(i, "name", v)} placeholder="name" style={{ fontSize: 13.5, color: "var(--cream)" }} />
                <CellInput value={inf.followers} onChange={(v: any) => updateInfluencerEntry(i, "followers", v)} placeholder="followers" style={{ fontSize: 11, color: "var(--ink-dim)" }} />
                <CellInput value={inf.deal} onChange={(v: any) => updateInfluencerEntry(i, "deal", v)} placeholder="deal" style={{ fontSize: 11.5, color: "var(--ink-mute)" }} />
                <button onClick={() => cycleInfluencer(i)} title="Click to cycle" className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: st.fg, background: "transparent", border: `1.5px solid ${st.dot}`, padding: "3px 8px 2px", borderRadius: 999, cursor: "pointer", whiteSpace: "nowrap", minWidth: 92 }}>{inf.status}</button>
                <button onClick={() => deleteInfluencerEntry(i)} className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", border: "1px solid var(--line-strong)", borderRadius: 6, width: 22, height: 22, display: "grid", placeItems: "center", cursor: "pointer" }}>✕</button>
              </div>
            );
          })}
        </div>
        <button onClick={addInfluencerEntry} className="mono" style={{ width: "100%", marginTop: 10, padding: "9px", border: "1.5px dashed var(--line-strong)", borderRadius: 10, color: "var(--ink-dim)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", background: "transparent" }}>+ Add influencer</button>
      </Card>
    </>
  );
}
