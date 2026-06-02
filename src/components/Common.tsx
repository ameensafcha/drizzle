'use client'

import React, { useState, useEffect, useRef } from 'react';

// ---- Formatting ----
export const fmtSAR = (n: number | null, decimals = 2) => {
  if (n == null || isNaN(n)) return "—";
  const v = Number(n);
  if (Math.abs(v) >= 10000) return v.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};
export const fmtInt = (n: number | null) => (n == null || isNaN(n) ? "—" : Math.round(n).toLocaleString("en-US"));
export const fmtPct = (n: number | null) => (n == null || isNaN(n) ? "—" : `${(n * 100).toFixed(1)}%`);

// ---- Honey drip SVG (corner accent) ----
export function HoneyDrip({ side = "tl", color }: { side?: string, color?: string }) {
  const c = color || "var(--honey)";
  const positions: any = {
    tl: { top: -8, left: 18, rot: 0 },
    tr: { top: -8, right: 24, rot: 0 },
    bl: { bottom: -10, left: 24, rot: 180 },
    br: { bottom: -10, right: 18, rot: 180 },
  }[side] || {};
  return (
    <svg
      className="honey-drip"
      width="38" height="22" viewBox="0 0 38 22"
      style={{ ...positions, transform: `rotate(${positions.rot || 0}deg)`, position: 'absolute' }}
      aria-hidden="true"
    >
      <path d="M0,0 L38,0 L38,4 Q30,5 28,10 Q26,16 24,8 Q22,4 18,12 Q15,20 12,10 Q9,4 6,8 Q3,4 0,4 Z"
        fill={c} stroke="var(--shadow-key)" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="13" cy="18" r="2" fill={c} stroke="var(--shadow-key)" strokeWidth="1" />
    </svg>
  );
}

// ---- Section header ----
export function SectionHead({ num, title, kicker }: { num: string, title: string, kicker?: string }) {
  return (
    <div className="section-head">
      <div className="num">{num}</div>
      <div className="title">{title}</div>
      <div className="sub"></div>
      {kicker ? <div className="kicker">{kicker}</div> : null}
    </div>
  );
}

// ---- Card ----
export function Card({ title, right, children, accent, style, className }: any) {
  return (
    <div className={"card card-pad " + (className || "")} style={style}>
      {accent ? <HoneyDrip side="tr" color={accent} /> : null}
      {(title || right) && (
        <div className="card-head">
          <div className="card-title">{title}</div>
          {right || null}
        </div>
      )}
      {children}
    </div>
  );
}

// ---- Inline editable number input with SAR suffix ----
export function NumInput({ value, onChange, step = 0.01, min = 0, max, suffix = "SAR", placeholder, decimals = 2 }: any) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(value));

  useEffect(() => {
    if (!editing) setDraft(value == null ? "" : String(value));
  }, [value, editing]);

  const commit = () => {
    setEditing(false);
    const parsed = parseFloat(draft);
    if (isNaN(parsed)) { setDraft(String(value)); return; }
    const clamped = Math.max(min, max != null ? Math.min(max, parsed) : parsed);
    onChange(clamped);
  };

  return (
    <div className="num-input">
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        value={editing ? draft : (value == null ? "" : (typeof value === "number" ? parseFloat(value.toFixed(decimals)).toString() : value))}
        placeholder={placeholder}
        onChange={(e) => { setEditing(true); setDraft(e.target.value); }}
        onFocus={() => { setEditing(true); setDraft(value == null ? "" : String(value)); }}
        onBlur={commit}
        onKeyDown={(e: any) => { if (e.key === "Enter") e.target.blur(); }}
      />
      {suffix ? <span className="suffix">{suffix}</span> : null}
    </div>
  );
}

// ---- Inline editable text ----
export function EditableText({ value, onChange, placeholder, className, style }: any) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { if (!editing) setDraft(value); }, [value, editing]);
  useEffect(() => { if (editing && ref.current) { ref.current.focus(); ref.current.select(); } }, [editing]);

  if (editing) {
    return (
      <input
        ref={ref}
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => { setEditing(false); onChange(draft); }}
        onKeyDown={(e) => { if (e.key === "Enter") (e.target as any).blur(); if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
        className={className}
        style={style}
      />
    );
  }
  return (
    <span
      className={className}
      style={{ ...style, cursor: "text", borderBottom: "1.5px dashed var(--line-strong)" }}
      onClick={() => setEditing(true)}
      title="Click to edit"
    >
      {value || <span style={{ color: "var(--ink-mute)" }}>{placeholder}</span>}
    </span>
  );
}

// ---- Animated number (subtle tick) ----
export function AnimatedNumber({ value, format, className, style }: any) {
  const [shown, setShown] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current === value) return;
    const from = prev.current;
    const to = value;
    const dur = 380;
    const start = performance.now();
    let raf: number;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step); else { setShown(to); prev.current = to; }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return <span className={className} style={style}>{format ? format(shown) : shown}</span>;
}

// ---- Constants ----
export const STATUSES = ["Not Started", "In Progress", "Done"];
export const STATUS_STYLE: any = {
  "Not Started": { dot: "var(--line-strong)", fg: "var(--ink-mute)", label: "○" },
  "In Progress": { dot: "var(--yellow)",      fg: "var(--yellow)",   label: "◐" },
  "Done":        { dot: "var(--green)",       fg: "var(--green)",    label: "●" },
};

// ---- Modal ----
export function Modal({ open, onClose, num, title, kicker, accent, children }: any) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: any) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ "--modal-accent": accent || "var(--honey)" } as any}
      >
        <div className="modal-head">
          <div className="modal-num">{num}</div>
          <div className="modal-title">{title}</div>
          {kicker ? <div className="modal-kicker">{kicker}</div> : null}
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

// ---- Toast ----
let toastTimeout: any = null;
let toastEl: HTMLElement | null = null;

export function toast(msg: string) {
  if (!toastEl) return;
  clearTimeout(toastTimeout);
  const inner = toastEl.querySelector('.toast-inner');
  if (inner) inner.textContent = msg;
  toastEl.style.opacity = '1';
  toastEl.style.transform = 'translateY(0)';
  toastTimeout = setTimeout(() => {
    toastEl!.style.opacity = '0';
    toastEl!.style.transform = 'translateY(8px)';
  }, 2000);
}

export function ToastContainer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { toastEl = ref.current; }, []);
  return (
    <div ref={ref} className="toast-inner" style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateY(8px)', translate: '-50%',
      background: 'var(--surface-2)', border: '2px solid var(--honey)', borderRadius: 12,
      padding: '10px 20px', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--cream)',
      letterSpacing: '0.08em', textTransform: 'uppercase', zIndex: 9999,
      opacity: 0, transition: 'opacity 240ms ease, transform 240ms cubic-bezier(.34,1.56,.64,1)',
      pointerEvents: 'none', whiteSpace: 'nowrap',
    }}>✦ saved</div>
  );
}

export function SavingOverlay() {
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    const handler = (e: any) => setSaving(e.detail);
    window.addEventListener('ds-saving', handler);
    return () => window.removeEventListener('ds-saving', handler);
  }, []);
  if (!saving) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      backgroundColor: 'rgba(14,12,9,0.5)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 16,
    }}>
      <div className="display" style={{ fontSize: 32, color: 'var(--honey)' }}>✦</div>
      <div className="mono" style={{ fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream)' }}>Saving...</div>
    </div>
  );
}

export function PWAInstallButton() {
  const [deferred, setDeferred] = useState<any>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }
    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setDeferred(null);
    });
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const install = async () => {
    if (!deferred) return;
    deferred.prompt();
    const result = await deferred.userChoice;
    if (result.outcome === 'accepted') {
      setInstalled(true);
      setDeferred(null);
    }
  };

  if (installed) return null;
  if (!deferred) return null;

  return (
    <button
      onClick={install}
      className="mono"
      style={{
        fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--honey)", textDecoration: "none",
        border: "1.5px solid var(--honey)", borderRadius: 999, padding: "5px 12px 4px",
        background: "transparent", cursor: "pointer",
      }}
    >⬇ Install app</button>
  );
}

export function Stat({ label, value, color, big }: any) {
  return (
    <div style={{
      background: "var(--bg-2)",
      border: "1.5px solid var(--line)",
      borderRadius: 10,
      padding: "10px 12px",
    }}>
      <div className="label-cap" style={{ fontSize: 9.5 }}>{label}</div>
      <div className="display" style={{ fontSize: big ? 22 : 18, color, marginTop: 4 }}>
        <AnimatedNumber value={value} format={(n: any)=>fmtSAR(n, 0)} />
        <span style={{ fontSize: 10, color: "var(--ink-mute)", marginLeft: 4, letterSpacing: "0.1em" }}>SAR</span>
      </div>
    </div>
  );
}

// ---- Section Tile (clickable card on the cockpit dashboard) ----
export function SectionTile({ num, title, accent, kpi, kpiUnit, meta, miniBar, onClick, blurb }: any) {
  return (
    <button
      type="button"
      className="section-tile"
      style={{ "--tile-accent": accent || "var(--honey)" } as any}
      onClick={onClick}
    >
      <div className="tile-num">§ {num}</div>
      <div className="tile-title">{title}</div>
      {blurb ? <div style={{ fontSize: 12.5, color: "var(--ink-dim)", marginBottom: 12, lineHeight: 1.45, marginTop: -8 }}>{blurb}</div> : null}
      {kpi != null ? (
        <div className="tile-kpi">
          <span className="tile-kpi-val">{kpi}</span>
          {kpiUnit ? <span className="tile-kpi-unit">{kpiUnit}</span> : null}
        </div>
      ) : null}
      {miniBar != null ? (
        <div className="mini-bar"><div style={{ width: `${Math.max(0, Math.min(100, miniBar * 100))}%` }} /></div>
      ) : null}
      <div className="tile-meta">
        <span>{meta}</span>
        <span className="tile-arrow">→</span>
      </div>
    </button>
  );
}
