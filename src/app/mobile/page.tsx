'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useDashboardState, DEFAULT_MILESTONES } from '@/hooks/useDashboardState';
import { ProductSnapshot, Milestones } from '@/components/Overview';
import { AnimatedNumber, fmtSAR, fmtInt } from '@/components/Common';
import { CostEditor, VariableCosts, PricingMargin, BreakEven, MonthlyProjection } from '@/components/Economics';
import { Formulation, DesignFiles, SocialMedia } from '@/components/Pillars';
import { SauceLab } from '@/components/Sauces';
import { ContactsSheet } from '@/components/Contacts';

const TabIcons: any = {
  home: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7" /><path d="M5 10v9h14v-9" />
    </svg>
  ),
  money: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="3" /><circle cx="17" cy="17" r="3" /><path d="M19 5L5 19" />
    </svg>
  ),
  build: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" /><path d="M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3" /><path d="M7.5 14h9" />
    </svg>
  ),
  grow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l5-5 4 4 8-9" /><path d="M21 7v5h-5" />
    </svg>
  ),
  lab: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z" />
    </svg>
  ),
  contacts: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 8h-1M4 12h-1M4 16h-1" /><circle cx="12" cy="10" r="2.2" /><path d="M8.5 16c0-2 1.6-3 3.5-3s3.5 1 3.5 3" />
    </svg>
  ),
};

const TABS = [
  { key: "home",  label: "Home",  icon: TabIcons.home },
  { key: "money", label: "Money", icon: TabIcons.money },
  { key: "build", label: "Build", icon: TabIcons.build },
  { key: "grow",  label: "Grow",  icon: TabIcons.grow },
  { key: "lab",   label: "Lab",   icon: TabIcons.lab },
  { key: "contacts", label: "Contacts", icon: TabIcons.contacts },
];

function MiniKPI({ label, value, unit, tone }: any) {
  const colorMap: any = { honey: "var(--honey)", green: "var(--green)", yellow: "var(--yellow)", red: "var(--red)", default: "var(--cream)" };
  const color = colorMap[tone] || colorMap.default;
  return (
    <div className="card" style={{ padding: "13px 14px 12px" }}>
      <div className="label-cap" style={{ fontSize: 9 }}>{label}</div>
      <div className="num-display" style={{ fontSize: 25, color, marginTop: 5, lineHeight: 1 }}>
        {value}{unit ? <span style={{ fontSize: 11, color: "var(--ink-mute)", marginLeft: 4, letterSpacing: "0.08em" }}>{unit}</span> : null}
      </div>
    </div>
  );
}

const PHONE_STAGES = ["Pre-launch", "Soft Launch", "Live", "Scaling"];
function StageBadge({ stage, setStage }: any) {
  const [open, setOpen] = useState(false);
  const colors: any = { "Pre-launch": "var(--honey)", "Soft Launch": "var(--yellow)", "Live": "var(--green)", "Scaling": "var(--honey)" };
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)} className="mono" style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--surface)", border: `2px solid ${colors[stage]}`, borderRadius: 999, padding: "6px 12px 5px", cursor: "pointer", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cream)", fontWeight: 600 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: colors[stage] }} />
        {stage} <span style={{ opacity: 0.6 }}>▾</span>
      </button>
      {open && (
        <div onMouseLeave={() => setOpen(false)} style={{ position: "absolute", right: 0, top: "100%", marginTop: 6, background: "var(--surface-2)", border: "2px solid var(--shadow-key)", borderRadius: 12, boxShadow: "3px 3px 0 0 var(--shadow-key)", padding: 6, zIndex: 90, minWidth: 150 }}>
          {PHONE_STAGES.map((s) => (
            <div key={s} onClick={() => { setStage(s); setOpen(false); }} className="mono" style={{ padding: "9px 12px", borderRadius: 8, cursor: "pointer", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: s === stage ? "var(--honey)" : "var(--ink-dim)", background: s === stage ? "var(--honey-glow)" : "transparent" }}>{s === stage ? "●" : "○"} {s}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function Screen({ title, sub, children }: any) {
  return (
    <div className="app-screen">
      <div className="app-screen-title">{title}</div>
      {sub ? <div className="app-screen-sub">{sub}</div> : null}
      {children}
    </div>
  );
}

export default function PhoneApp() {
  const d = useDashboardState();
  const [tab, setTab] = useState("home");
  const [buildSeg, setBuildSeg] = useState("recipe");
  const bodyRef = useRef<HTMLDivElement>(null);

  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    const check = () => setFullscreen(window.innerWidth < 520 || window.matchMedia("(display-mode: standalone)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Phone app fullscreen styles — hide html/body overflow so only app-body scrolls
  useEffect(() => {
    const prevHtml = { overflow: document.documentElement.style.overflow, height: document.documentElement.style.height };
    const prevBody = { overflow: document.body.style.overflow, height: document.body.style.height };
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    return () => {
      document.documentElement.style.overflow = prevHtml.overflow;
      document.documentElement.style.height = prevHtml.height;
      document.body.style.overflow = prevBody.overflow;
      document.body.style.height = prevBody.height;
    };
  }, []);

  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = 0; }, [tab, buildSeg]);

  // Merge any new default milestones into existing saved state
  useEffect(() => {
    if (!d.milestones || d.milestones.length === 0) return;
    const existing = new Set(d.milestones.map((m: any) => m.label));
    const missing = DEFAULT_MILESTONES.filter((dflt: any) => !existing.has(dflt.label));
    if (missing.length > 0) d.setMilestones([...d.milestones, ...missing]);
  }, []);

  const marginTone = d.econ.margin >= 0.4 ? "green" : d.econ.margin >= 0.25 ? "yellow" : "red";

  const screenMeta: any = {
    home:  { name: "Overview" },
    money: { name: "Unit Economics" },
    build: { name: "Recipe & Design" },
    grow:  { name: "Social Media" },
    lab:   { name: "Sauce Lab" },
    contacts: { name: "Contacts" },
  }[tab] || { name: "" };

  const screens: any = {
    home: (
      <Screen title="Founder's Cockpit" sub={`${d.stage} · Khobar 2026`}>
        <div className="kpi-strip">
          <MiniKPI label="Retail Price" tone="honey" value={<AnimatedNumber value={d.retailPrice} format={(n:any)=>fmtSAR(n,0)} />} unit="SAR" />
          <MiniKPI label="Cost / Bottle" value={<AnimatedNumber value={d.econ.cogs} format={(n:any)=>fmtSAR(n,2)} />} unit="SAR" />
          <MiniKPI label="Gross Margin" tone={marginTone} value={<AnimatedNumber value={d.econ.margin*100} format={(n:any)=>n.toFixed(1)+"%"} />} />
          <MiniKPI label="Break-Even" value={<AnimatedNumber value={d.econ.breakEven} format={(n:any)=>fmtInt(n)} />} unit="bot" />
        </div>
        <ProductSnapshot />
        <div style={{ height: 16 }} />
        <Milestones milestones={d.milestones} setMilestones={d.setMilestones} />
      </Screen>
    ),
    money: (
      <Screen title="Unit Economics" sub="plug in · watch margins move">
        <CostEditor title="Ingredients" rows={d.ingredients} setRows={d.setIngredients} accent="var(--honey)" />
        <div style={{ height: 14 }} />
        <CostEditor title="Packaging" rows={d.packaging} setRows={d.setPackaging} accent="var(--green)" />
        <div style={{ height: 14 }} />
        <VariableCosts variable={d.variable} setVariable={d.setVariable} retailPrice={d.retailPrice} />
        <div style={{ height: 14 }} />
        <PricingMargin retailPrice={d.retailPrice} setRetailPrice={d.setRetailPrice} ingredients={d.ingredients} packaging={d.packaging} variable={d.variable} absorbShipping={d.absorbShipping} setAbsorbShipping={d.setAbsorbShipping} />
        <div style={{ height: 14 }} />
        <BreakEven fixedCosts={d.fixedCosts} setFixedCosts={d.setFixedCosts} retailPrice={d.retailPrice} ingredients={d.ingredients} packaging={d.packaging} variable={d.variable} />
        <div style={{ height: 14 }} />
        <MonthlyProjection units={d.unitsPerMonth} setUnits={d.setUnitsPerMonth} retailPrice={d.retailPrice} ingredients={d.ingredients} packaging={d.packaging} variable={d.variable} absorbShipping={d.absorbShipping} fixedCosts={d.fixedCosts} />
      </Screen>
    ),
    build: (
      <Screen title="Build" sub="recipe · safety · design assets">
        <div className="segmented">
          <button className={buildSeg === "recipe" ? "active" : ""} onClick={() => setBuildSeg("recipe")}>Recipe</button>
          <button className={buildSeg === "design" ? "active" : ""} onClick={() => setBuildSeg("design")}>Design</button>
        </div>
        {buildSeg === "recipe" ? <Formulation data={d.formulation} setData={d.setFormulation} /> : <DesignFiles files={d.designFiles} setFiles={d.setDesignFiles} />}
      </Screen>
    ),
    grow: (
      <Screen title="Social Media" sub="channels · pillars · calendar · pipeline">
        <SocialMedia data={d.social} setData={d.setSocial} />
      </Screen>
    ),
    lab: (
      <Screen title="Sauce Lab" sub="r&d pipeline · future skus">
        <SauceLab sauces={d.sauces} setSauces={d.setSauces} />
      </Screen>
    ),
    contacts: (
      <Screen title="Contacts" sub="vendors · packaging · distributors · retailers">
        <ContactsSheet data={d.contacts} setData={d.setContacts} />
      </Screen>
    ),
  };

  return (
    <div className={"app-root " + (fullscreen ? "app-fullscreen" : "")}>
      <div className="app-stage">
        <div className="device">
          {!fullscreen && <div className="island" />}
          <div className="device-screen phone-app">
            {!d.isLoaded && (
              <div style={{ position: 'absolute', top: 54, left: 0, right: 0, height: 3, zIndex: 100, background: 'var(--bg-2)' }}>
                <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
              </div>
            )}
            <div className="app-header">
              <div>
                <div className="wordmark">DRIZZLE <span className="amp">&amp; SAUCE</span></div>
                <div className="screen-name">{screenMeta.name}</div>
              </div>
              <div className="app-header-actions">
                <StageBadge stage={d.stage} setStage={d.setStage} />
                <button className="app-iconbtn" onClick={() => d.setTheme(d.theme === "light" ? "dark" : "light")} title="Toggle theme">{d.theme === "light" ? "☀" : "☾"}</button>
              </div>
            </div>

            <div className="app-body" ref={bodyRef}>
              {!d.isLoaded ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                   <div className="skeleton" style={{ height: 100, borderRadius: 16 }}></div>
                   <div className="skeleton" style={{ height: 200, borderRadius: 16 }}></div>
                   <div className="skeleton" style={{ height: 150, borderRadius: 16 }}></div>
                </div>
              ) : (
                <>
                  {React.cloneElement(screens[tab], { key: tab })}
                  <div style={{ height: 8 }} />
                  <button onClick={d.reset} className="mono" style={{ width: "100%", marginTop: 12, padding: "11px", background: "transparent", border: "1.5px dashed var(--line-strong)", borderRadius: 12, color: "var(--ink-mute)", cursor: "pointer", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>↺ Reset all data to defaults</button>
                  <div style={{ textAlign: "center", marginTop: 10 }}>
                    <a href="/" className="mono" style={{ fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)", textDecoration: "none" }}>🖥 Open desktop dashboard →</a>
                  </div>
                </>
              )}
            </div>

            <div className="tab-bar">
              {TABS.map((t: any) => (
                <button key={t.key} className={"tab-item " + (tab === t.key ? "active" : "")} onClick={() => setTab(t.key)}>
                  <span className="tab-ico">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
