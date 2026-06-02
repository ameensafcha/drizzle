'use client'

import React, { useState, useEffect } from 'react';

const CONTACT_CATS = [
  { key: "vendors",      label: "Vendors",       accent: "var(--honey)",      note: "ingredients & raw materials" },
  { key: "packaging",    label: "Packaging",     accent: "var(--green)",      note: "bottles, labels, boxes, caps" },
  { key: "distributors", label: "Distributors",  accent: "var(--yellow)",     note: "logistics & wholesale" },
  { key: "retailers",    label: "Retailers",     accent: "var(--red)",        note: "stockists & accounts" },
  { key: "important",    label: "Key Contacts",  accent: "var(--cream)",      note: "advisors & services" },
];

const CONTACT_STATUS = ["Lead", "Negotiating", "Active", "On Hold"];
const CONTACT_STATUS_STYLE: any = {
  "Lead":        { fg: "var(--honey)",    border: "var(--honey)" },
  "Negotiating": { fg: "var(--yellow)",   border: "var(--yellow)" },
  "Active":      { fg: "var(--green)",    border: "var(--green)" },
  "On Hold":     { fg: "var(--ink-mute)", border: "var(--line-strong)" },
};

const CONTACT_COLS = [
  { key: "company", label: "Company / Name", w: 190 },
  { key: "contact", label: "Contact",        w: 140 },
  { key: "phone",   label: "Phone",          w: 150 },
  { key: "email",   label: "Email",          w: 200 },
  { key: "city",    label: "City",           w: 110 },
  { key: "status",  label: "Status",         w: 124 },
  { key: "notes",   label: "Notes",          w: 230 },
];

function SheetCell({ value: initial, onChange, placeholder, align }: any) {
  const [draft, setDraft] = useState(initial ?? "");
  const [editing, setEditing] = useState(false);
  useEffect(() => { if (!editing) setDraft(initial ?? ""); }, [initial, editing]);
  const commit = () => { setEditing(false); if (draft !== initial) onChange(draft); };
  if (!editing) {
    return (
      <span onClick={() => setEditing(true)} className="sheet-cell-input" style={{ cursor: "text", textAlign: align || "left" }}>
        {initial || <span style={{ color: "var(--ink-mute)" }}>{placeholder || "—"}</span>}
      </span>
    );
  }
  return (
    <input
      type="text"
      className="sheet-cell-input"
      value={draft}
      placeholder={placeholder || "—"}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e: any) => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setDraft(initial ?? ""); setEditing(false); } }}
      autoFocus
      style={{ textAlign: align || "left" }}
    />
  );
}

export function ContactsSheet({ data, setData }: any) {
  const [cat, setCat] = useState("vendors");
  const rows = data[cat] || [];
  const catDef = CONTACT_CATS.find((c) => c.key === cat) || CONTACT_CATS[0];

  const updateCell = (i: number, key: string, val: any) => {
    const next = { ...data, [cat]: rows.map((r: any, idx: number) => idx === i ? { ...r, [key]: val } : r) };
    setData(next);
  };
  const cycleStatus = (i: number) => {
    const cur = CONTACT_STATUS.indexOf(rows[i].status);
    updateCell(i, "status", CONTACT_STATUS[(cur + 1) % CONTACT_STATUS.length]);
  };
  const addRow = () => {
    const blank = { company: "", contact: "", phone: "", email: "", city: "", status: "Lead", notes: "" };
    setData({ ...data, [cat]: [...rows, blank] });
  };
  const deleteRow = (i: number) => {
    setData({ ...data, [cat]: rows.filter((_: any, idx: number) => idx !== i) });
  };

  const totalAll = CONTACT_CATS.reduce((s, c) => s + (data[c.key] || []).length, 0);

  return (
    <>
      <div className="contact-cats">
        {CONTACT_CATS.map((c) => {
          const active = cat === c.key;
          const count = (data[c.key] || []).length;
          return (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              className="contact-cat-btn"
              style={{
                "--cat-accent": c.accent,
                background: active ? c.accent : "transparent",
                color: active ? "var(--on-accent)" : "var(--ink-dim)",
                borderColor: active ? "var(--shadow-key)" : "var(--line-strong)",
                boxShadow: active ? "2px 2px 0 0 var(--shadow-key)" : "none",
              } as any}
            >
              {c.label}
              <span className="contact-cat-count" style={{ color: active ? "var(--on-accent)" : "var(--ink-mute)", opacity: active ? 0.7 : 1 }}>{count}</span>
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 2px 10px", flexWrap: "wrap", gap: 8 }}>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {catDef.label} · <span style={{ color: catDef.accent }}>{rows.length}</span> rows · {catDef.note}
        </span>
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.06em" }}>
          {totalAll} contacts total
        </span>
      </div>

      <div className="sheet-scroll">
        <table className="sheet" style={{ "--cat-accent": catDef.accent } as any}>
          <thead>
            <tr>
              <th className="sheet-rownum">#</th>
              {CONTACT_COLS.map((col) => (
                <th key={col.key} style={{ minWidth: col.w }}>{col.label}</th>
              ))}
              <th className="sheet-actions"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={CONTACT_COLS.length + 2} style={{ textAlign: "center", padding: "28px 12px", color: "var(--ink-mute)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.08em" }}>
                  NO ROWS YET — TAP “+ ADD ROW” BELOW
                </td>
              </tr>
            ) : rows.map((r: any, i: number) => {
              const st = CONTACT_STATUS_STYLE[r.status] || CONTACT_STATUS_STYLE["Lead"];
              return (
                <tr key={i}>
                  <td className="sheet-rownum">{i + 1}</td>
                  {CONTACT_COLS.map((col) => {
                    if (col.key === "status") {
                      return (
                        <td key={col.key} style={{ textAlign: "center" }}>
                          <button
                            onClick={() => cycleStatus(i)}
                            className="mono sheet-status"
                            title="Click to cycle"
                            style={{ color: st.fg, borderColor: st.border }}
                          >{r.status}</button>
                        </td>
                      );
                    }
                    return (
                      <td key={col.key}>
                        <SheetCell
                          value={r[col.key]}
                          onChange={(v: any) => updateCell(i, col.key, v)}
                          placeholder={col.key === "company" ? "Company / name" : "—"}
                        />
                      </td>
                    );
                  })}
                  <td className="sheet-actions">
                    <button className="sheet-del" onClick={() => deleteRow(i)} title="Delete row">✕</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className="sheet-addrow" onClick={addRow}>+ Add row to {catDef.label}</button>
    </>
  );
}
