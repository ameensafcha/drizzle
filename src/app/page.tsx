'use client'

import React, { useState, useEffect } from 'react';
import { useDashboardState, DEFAULT_MILESTONES } from '@/hooks/useDashboardState';
import { BrandHeader, KPIRow, ProductSnapshot, Milestones } from '@/components/Overview';
import { SectionTile, Modal, AnimatedNumber, fmtInt } from '@/components/Common';
import { CostEditor, VariableCosts, PricingMargin, BreakEven, MonthlyProjection } from '@/components/Economics';
import { Formulation, DesignFiles, SocialMedia } from '@/components/Pillars';
import { SauceLab } from '@/components/Sauces';
import { ContactsSheet } from '@/components/Contacts';

function TileSkeleton() {
  return (
    <div className="skeleton skeleton-tile" style={{ width: '100%' }}></div>
  );
}

function KPISkeleton() {
  return (
    <div className="grid-4" style={{ marginBottom: 32 }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="skeleton" style={{ height: 100, borderRadius: 'var(--radius)', border: '2px solid var(--line)' }}></div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const s = useDashboardState();
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Merge any new default milestones into existing saved state
  useEffect(() => {
    if (!s.milestones || s.milestones.length === 0) return;
    const existing = new Set(s.milestones.map((m: any) => m.label));
    const missing = DEFAULT_MILESTONES.filter((d: any) => !existing.has(d.label));
    if (missing.length > 0) s.setMilestones([...s.milestones, ...missing]);
  }, []);

  // ---- Derived values for tile previews ----
  const milestonesDone = s.milestones.filter((m: any) => m.status === "Done").length;
  const milestonePct = milestonePctCalc(s.milestones);

  const complianceDone = s.formulation.compliance.filter((c: any) => c.status === "Done").length;
  const compliancePct = s.formulation.compliance.length > 0 ? complianceDone / s.formulation.compliance.length : 0;

  const designAll = Object.values(s.designFiles).flat() as any[];
  const designFinal = designAll.filter((a: any) => a.status === "Final").length;
  const designPct = designAll.length > 0 ? designFinal / designAll.length : 0;

  const totalFollowers = s.social.channels.reduce((sum: number, c: any) => sum + c.followers, 0);
  const totalPosts = s.social.channels.reduce((sum: number, c: any) => sum + c.posts, 0);

  const saucesActive = s.sauces.filter((x: any) => ["In R&D", "Tested", "Approved"].includes(x.status)).length;
  const saucesApproved = s.sauces.filter((x: any) => x.status === "Approved").length;

  const contactsTotal = Object.values(s.contacts).reduce((sum: number, arr: any) => sum + arr.length, 0);
  const contactsActive = (Object.values(s.contacts).flat() as any[]).filter((c: any) => c.status === "Active").length;

  function milestonePctCalc(ms: any[]) {
    if (!ms || ms.length === 0) return 0;
    return ms.filter(m => m.status === "Done").length / ms.length;
  }

  // ---- Section definitions (The 7 original cockpit sections) ----
  const sections: any[] = [
    {
      key: "overview",
      num: "01",
      title: "Brand & Milestones",
      accent: "var(--honey)",
      kicker: "snapshot · launch checklist",
      tile: {
        blurb: "Hot honey · 240ml · D2C · Khobar 2026",
        kpi: <AnimatedNumber value={milestonePct * 100} format={(n: any) => `${n.toFixed(0)}%`} />,
        kpiUnit: "of milestones done",
        meta: `${milestonesDone} of ${s.milestones.length} complete`,
        miniBar: milestonePct,
      },
      content: (
        <div className="grid-2">
          <ProductSnapshot />
          <Milestones milestones={s.milestones} setMilestones={s.setMilestones} />
        </div>
      ),
    },
    {
      key: "economics",
      num: "02",
      title: "Unit Economics",
      accent: s.econ.margin >= 0.4 ? "var(--green)" : s.econ.margin >= 0.25 ? "var(--yellow)" : "var(--red)",
      kicker: "plug in · watch margins move",
      tile: {
        blurb: "Ingredients, packaging, pricing, break-even.",
        kpi: <AnimatedNumber value={s.econ.margin * 100} format={(n: any) => `${n.toFixed(1)}%`} />,
        kpiUnit: "gross margin",
        meta: `break-even · ${isNaN(s.econ.breakEven) ? "—" : s.econ.breakEven + " bot/mo"}`,
        miniBar: Math.max(0, Math.min(1, s.econ.margin)),
      },
      content: (
        <>
          <div className="grid-2" style={{ marginBottom: 20 }}>
            <CostEditor title="Ingredients" rows={s.ingredients} setRows={s.setIngredients} accent="var(--honey)" />
            <CostEditor title="Packaging" rows={s.packaging} setRows={s.setPackaging} accent="var(--green)" />
          </div>
          <div className="grid-2" style={{ marginBottom: 20 }}>
            <VariableCosts variable={s.variable} setVariable={s.setVariable} retailPrice={s.retailPrice} />
            <PricingMargin
              retailPrice={s.retailPrice} setRetailPrice={s.setRetailPrice}
              ingredients={s.ingredients} packaging={s.packaging} variable={s.variable}
              absorbShipping={s.absorbShipping} setAbsorbShipping={s.setAbsorbShipping}
            />
          </div>
          <div className="grid-2">
            <BreakEven fixedCosts={s.fixedCosts} setFixedCosts={s.setFixedCosts} retailPrice={s.retailPrice} ingredients={s.ingredients} packaging={s.packaging} variable={s.variable} />
            <MonthlyProjection units={s.unitsPerMonth} setUnits={s.setUnitsPerMonth} retailPrice={s.retailPrice} ingredients={s.ingredients} packaging={s.packaging} variable={s.variable} absorbShipping={s.absorbShipping} fixedCosts={s.fixedCosts} />
          </div>
        </>
      ),
    },
    {
      key: "formulation",
      num: "03",
      title: "Formulation",
      accent: "var(--red)",
      kicker: "recipe · safety · sfda",
      tile: {
        blurb: "Recipe spec sheet, iteration log, SFDA compliance.",
        kpi: s.formulation.version,
        kpiUnit: "current recipe",
        meta: `${complianceDone} of ${s.formulation.compliance.length} safety items done`,
        miniBar: compliancePct,
      },
      content: <Formulation data={s.formulation} setData={s.setFormulation} />,
    },
    {
      key: "design",
      num: "04",
      title: "Design Files",
      accent: "var(--cream)",
      kicker: "identity · mascot · packaging · web · photo",
      tile: {
        blurb: "Asset tracker across 5 disciplines.",
        kpi: <AnimatedNumber value={designFinal} format={(n: any) => fmtInt(n)} />,
        kpiUnit: `of ${designAll.length} final`,
        meta: `${designAll.filter((a: any) => a.status === "In Review").length} in review`,
        miniBar: designPct,
      },
      content: <DesignFiles files={s.designFiles} setFiles={s.setDesignFiles} />,
    },
    {
      key: "social",
      num: "05",
      title: "Social Media",
      accent: "var(--green)",
      kicker: "channels · pillars · calendar · influencers",
      tile: {
        blurb: "4 channels · content pillars · calendar · pipeline.",
        kpi: <AnimatedNumber value={totalFollowers} format={(n: any) => fmtInt(n)} />,
        kpiUnit: "total followers",
        meta: `${totalPosts} posts/mo · ${s.social.influencers.filter((i: any) => i.status === "Done").length} influencers signed`,
        miniBar: Math.min(1, totalFollowers / (s.social.channels.reduce((sum: number, c: any) => sum + c.target, 0) || 1)),
      },
      content: <SocialMedia data={s.social} setData={s.setSocial} />,
    },
    {
      key: "sauces",
      num: "06",
      title: "Sauce Lab",
      accent: "var(--honey-deep)",
      kicker: "r&d pipeline · future skus",
      tile: {
        blurb: "Next sauces queued after hot honey ships.",
        kpi: <AnimatedNumber value={s.sauces.length} format={(n: any) => fmtInt(n)} />,
        kpiUnit: "ideas tracked",
        meta: `${saucesApproved} approved · ${saucesActive} in pipeline`,
        miniBar: s.sauces.length > 0 ? saucesActive / s.sauces.length : 0,
      },
      content: <SauceLab sauces={s.sauces} setSauces={s.setSauces} />,
    },
    {
      key: "contacts",
      num: "07",
      title: "Contacts",
      accent: "var(--yellow)",
      kicker: "vendors · packaging · distributors · retailers · key contacts",
      tile: {
        blurb: "Editable rolodex — suppliers, stockists & advisors.",
        kpi: <AnimatedNumber value={contactsTotal} format={(n: any) => fmtInt(n)} />,
        kpiUnit: "contacts",
        meta: `${contactsActive} active relationships`,
        miniBar: contactsTotal > 0 ? contactsActive / contactsTotal : 0,
      },
      content: <ContactsSheet data={s.contacts} setData={s.setContacts} />,
    },
  ];

  const active = sections.find((sec) => sec.key === openSection);

  return (
    <main>
      {!s.isLoaded && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 4, zIndex: 3000, background: 'var(--bg-2)' }}>
          <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
        </div>
      )}

      <BrandHeader
        tagline={s.tagline} setTagline={s.setTagline}
        stage={s.stage} setStage={s.setStage}
        onReset={s.reset}
        theme={s.theme} setTheme={s.setTheme}
      />

      {!s.isLoaded ? <KPISkeleton /> : (
        <KPIRow
          retail={s.retailPrice}
          cogs={s.econ.cogs}
          margin={s.econ.margin}
          breakEven={s.econ.breakEven}
        />
      )}

      <div className="display" style={{ fontSize: 22, color: "var(--cream)", margin: "20px 4px 4px" }}>FOUNDER'S COCKPIT</div>

      <div className="tile-grid">
        {!s.isLoaded ? (
          Array.from({ length: 7 }).map((_, i) => <TileSkeleton key={i} />)
        ) : (
          sections.map((sec) => (
            <SectionTile
              key={sec.key}
              num={sec.num}
              title={sec.title}
              accent={sec.accent}
              blurb={sec.tile.blurb}
              kpi={sec.tile.kpi}
              kpiUnit={sec.tile.kpiUnit}
              meta={sec.tile.meta}
              miniBar={sec.tile.miniBar}
              onClick={() => setOpenSection(sec.key)}
            />
          ))
        )}
      </div>

      {active && (
        <Modal
          open={true}
          onClose={() => setOpenSection(null)}
          num={active.num}
          title={active.title}
          kicker={active.kicker}
          accent={active.accent}
        >
          {active.content}
        </Modal>
      )}

      <footer style={{ marginTop: 56, paddingTop: 24, borderTop: "1.5px dashed var(--line-strong)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        <span>Drizzle & Sauce · founder's cockpit · {new Date().getFullYear()}</span>
        <span style={{ color: s.isLoaded ? 'var(--green)' : 'var(--yellow)' }}>
          {s.isLoaded ? '● neon connected' : '○ syncing...'}
        </span>
      </footer>
    </main>
  );
}
