import { useState, useMemo, useEffect, useReducer, useRef } from 'react';
import { getAllStore, getStore, setStore } from '@/app/actions';
import { toast } from '@/components/Common';
import { useRealtime } from './useRealtime';

type Action = { type: 'INIT'; payload: Record<string, any> } | { type: 'SET'; key: string; value: any };

function reducer(state: Record<string, any>, action: Action) {
  switch (action.type) {
    case 'INIT': return { ...state, ...action.payload };
    case 'SET':  return { ...state, [action.key]: action.value };
    default:     return state;
  }
}

export const DEFAULT_INGREDIENTS = [
  { name: "Honey (300g)",           val: 0, note: "~80% of ingredient cost" },
  { name: "Habanero peppers (10)",  val: 0, note: "primary heat" },
  { name: "Jalapeño peppers (2)",   val: 0, note: "secondary heat" },
  { name: "Red onion (½ medium)",   val: 0, note: "savory depth" },
  { name: "Garlic (2 cloves)",      val: 0, note: "" },
  { name: "Dried oregano / zaatar", val: 0, note: "1 tsp" },
  { name: "Apple cider vinegar",    val: 0, note: "1 tsp" },
];

export const DEFAULT_PACKAGING = [
  { name: "Glass bottle (240ml)",   val: 0, note: "moq ~1000 pcs" },
  { name: "Cap / lid",              val: 0, note: "" },
  { name: "Label (waterproof)",     val: 0, note: "custom rubberhose art" },
  { name: "Outer box / sleeve",     val: 0, note: "branded unboxing" },
  { name: "Brochure insert",        val: 0, note: "sauce teasers" },
  { name: "Seal / tamper band",     val: 0, note: "food safety" },
];

export const DEFAULT_VARIABLE = { labor: 0, shipping: 0, processingPct: 0 };

export const DEFAULT_MILESTONES = [
  { label: "Formulation validated by food scientist", status: "Done" },
  { label: "Business registration (CR) complete",     status: "Done" },
  { label: "Recipe locked at v1.0",                   status: "In Progress" },
  { label: "Shelf-life test (12 mo) complete",        status: "Not Started" },
  { label: "SFDA application submitted",              status: "In Progress" },
  { label: "Brand identity & packaging finalized",    status: "In Progress" },
  { label: "Mascot character sheet finalized",        status: "In Progress" },
  { label: "Product photography shoot complete",      status: "Not Started" },
  { label: "Mascot suit manufactured",                status: "Not Started" },
  { label: "Website / online store live",             status: "Not Started" },
  { label: "Instagram & TikTok launched",             status: "Done" },
  { label: "First teaser campaign published",         status: "Not Started" },
  { label: "5 influencers signed for launch",         status: "In Progress" },
  { label: "First production batch complete",         status: "Not Started" },
  { label: "Soft launch (beta testers)",              status: "Not Started" },
  { label: "Official launch",                         status: "Not Started" },
  { label: "First 100 orders",                        status: "Not Started" },
];

export const DEFAULT_FORMULATION = {
  version: "",
  versionDate: "",
  notes: "",
  specs: {
    heat:      { val: 0, unit: "SHU",   label: "Heat",       note: "scoville · target 10–14k" },
    ph:        { val: 0, unit: "",      label: "pH",         note: "shelf-stable < 4.2" },
    brix:      { val: 0, unit: "°Bx",   label: "Brix",       note: "sugar density" },
    viscosity: { val: 0, unit: "cP",    label: "Viscosity",  note: "thicker than maple" },
    shelf:     { val: 0, unit: "mo",    label: "Shelf Life", note: "target unopened" },
  },
  iterations: [],
  compliance: [
    { label: "Lab pH + Aw analysis",               status: "Not Started" },
    { label: "Microbiological challenge test",     status: "Not Started" },
    { label: "Allergen statement reviewed",        status: "Not Started" },
    { label: "Nutrition panel calculated (per 15g)", status: "Not Started" },
    { label: "Arabic + English label copy approved", status: "Not Started" },
    { label: "SFDA product registration filed",    status: "Not Started" },
    { label: "Shelf-life accelerated test (12mo)", status: "Not Started" },
    { label: "Co-packer facility audit",           status: "Not Started" },
  ],
};

export const DEFAULT_DESIGN_FILES = {
  Identity: [
    { name: "Wordmark (primary)",       owner: "studio",       version: "—", status: "Not Started" },
    { name: "Mark / monogram",          owner: "studio",       version: "—", status: "Not Started" },
    { name: "Brand guidelines (PDF)",   owner: "studio",       version: "—", status: "Not Started" },
    { name: "Color & type system",      owner: "studio",       version: "—", status: "Not Started" },
  ],
  Mascot: [
    { name: "Bee character sheet",      owner: "illustrator",  version: "—", status: "Not Started" },
    { name: "Expression sheet (12 poses)", owner: "illustrator", version: "—", status: "Not Started" },
    { name: "Hero pose illustration",   owner: "illustrator",  version: "—", status: "Not Started" },
    { name: "Mascot suit prototype ref", owner: "fabricator",  version: "—", status: "Not Started" },
  ],
  Packaging: [
    { name: "Bottle label (front)",     owner: "studio",       version: "—", status: "Not Started" },
    { name: "Bottle label (back, EN/AR)", owner: "studio",     version: "—", status: "Not Started" },
    { name: "Outer sleeve artwork",     owner: "studio",       version: "—", status: "Not Started" },
    { name: "Brochure insert",          owner: "studio",       version: "—", status: "Not Started" },
    { name: "Shipper box stamp",        owner: "studio",       version: "—", status: "Not Started" },
  ],
  Web: [
    { name: "Homepage mockup",          owner: "designer",     version: "—", status: "Not Started" },
    { name: "Product page mockup",      owner: "designer",     version: "—", status: "Not Started" },
    { name: "Checkout flow",            owner: "designer",     version: "—", status: "Not Started" },
    { name: "Mobile screens",           owner: "designer",     version: "—", status: "Not Started" },
  ],
  Photo: [
    { name: "Product hero shots",       owner: "photographer", version: "—", status: "Not Started" },
    { name: "Lifestyle / pairing shots", owner: "photographer", version: "—", status: "Not Started" },
    { name: "Mascot in-suit shoot",     owner: "photographer", version: "—", status: "Not Started" },
  ],
};

export const DEFAULT_SOCIAL = {
  channels: [
    { handle: "@drizzleandsauce", platform: "Instagram", followers: 0, target: 10000, posts: 0, engagement: 0, status: "Dormant", color: "var(--honey)" },
    { handle: "@drizzleandsauce", platform: "TikTok",    followers: 0, target: 25000, posts: 0, engagement: 0, status: "Dormant", color: "var(--green)" },
    { handle: "drizzleandsauce",  platform: "Snapchat",  followers: 0, target: 5000,  posts: 0, engagement: 0, status: "Dormant", color: "var(--yellow)" },
    { handle: "@drizzleandsauce", platform: "X",         followers: 0, target: 2000,  posts: 0, engagement: 0, status: "Dormant", color: "var(--ink-mute)" },
  ],
  pillars: [
    { name: "Mascot Lore",     pct: 0, note: "rubberhose shorts, character moments, world-building",  color: "var(--honey)" },
    { name: "Heat Tests",      pct: 0, note: "founder + locals trying the sauce, reaction reels",     color: "var(--red)" },
    { name: "Pairings & Recipes", pct: 0, note: "food creators using sauce on bites — UGC bait",      color: "var(--green)" },
    { name: "Behind the Hive", pct: 0, note: "factory floor, formulation diary, sourcing trips",      color: "var(--yellow)" },
  ],
  calendar: [],
  influencers: [],
};

export const DEFAULT_SAUCES = [
  { name: "Smoked Sidr", tagline: "mesquite-smoked sidr honey, low heat", heat: 0, score: 0, notes: "BBQ + cheese pairings. Pitches to grill culture.", profile: ["smoky", "dark", "rich"], status: "Concept", eta: "Q4 2026", color: "var(--honey)" },
  { name: "Sumac Drip", tagline: "sumac, lemon zest, fennel honey", heat: 0, score: 0, notes: "Bright + tart. Pairs with grilled fish and labneh.", profile: ["bright", "tart", "citrus"], status: "Concept", eta: "Q1 2027", color: "var(--red)" },
  { name: "Black Lime Bite", tagline: "omani black lime, dried hibiscus, medium heat", heat: 0, score: 0, notes: "Loomi-forward funk. Could be a sleeper hit.", profile: ["sour", "funky", "floral"], status: "Concept", eta: "Q2 2027", color: "var(--yellow)" },
  { name: "Cardamom Glaze", tagline: "green cardamom + rose, dessert-leaning", heat: 0, score: 0, notes: "Drizzle on baklava, ice cream, gahwa pairings.", profile: ["floral", "warm", "dessert"], status: "Concept", eta: "Q3 2027", color: "var(--cream)" },
  { name: "Tabil Burn", tagline: "tunisian tabil + carolina reaper, extreme heat", heat: 0, score: 0, notes: "Limited 'fire' edition. Reaches the spice-fiend tribe.", profile: ["fiery", "earthy", "cumin"], status: "Concept", eta: "Q2 2027", color: "var(--red)" },
  { name: "Date Molasses Drizzle", tagline: "sticky dibs + aleppo pepper, mid heat", heat: 0, score: 0, notes: "Heritage flavor — local-first storytelling angle.", profile: ["sticky", "deep", "fruity"], status: "Concept", eta: "Q4 2026", color: "var(--honey-deep)" },
  { name: "Saffron Sting", tagline: "premium saffron honey + ghost pepper", heat: 0, score: 0, notes: "Hero SKU at 2x price. Gift-box anchor.", profile: ["luxe", "floral", "fiery"], status: "Concept", eta: "Q4 2027", color: "var(--honey)" },
  { name: "Coffee Honey", tagline: "saudi qahwa infusion + ancho", heat: 0, score: 0, notes: "Cafe collab opportunity. Cold brew drizzle.", profile: ["roasted", "bitter", "complex"], status: "Concept", eta: "Q1 2028", color: "var(--cream)" },
  { name: "Green Heat", tagline: "coriander, mint, jalapeño, lime honey", heat: 0, score: 0, notes: "Fresh + summery. Could power a seasonal drop.", profile: ["herbal", "fresh", "zesty"], status: "Concept", eta: "—", color: "var(--green)" },
];

export const DEFAULT_CONTACTS = {
  vendors: [], packaging: [], distributors: [], retailers: [], important: [],
};

export function useDashboardState() {
  const ALL_DEFAULTS: Record<string, any> = {
    tagline: "Hot honey, reimagined.",
    stage: "Pre-launch",
    ingredients: DEFAULT_INGREDIENTS,
    packaging: DEFAULT_PACKAGING,
    variable: DEFAULT_VARIABLE,
    retailPrice: 0,
    absorbShipping: false,
    fixedCosts: 0,
    unitsPerMonth: 0,
    milestones: DEFAULT_MILESTONES,
    formulation: DEFAULT_FORMULATION,
    designFiles: DEFAULT_DESIGN_FILES,
    social: DEFAULT_SOCIAL,
    sauces: DEFAULT_SAUCES,
    contacts: DEFAULT_CONTACTS,
  };

  const [state, dispatch] = useReducer(reducer, ALL_DEFAULTS);
  const [loaded, setLoaded] = useState(false);
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Single batch fetch — 1 request replaces 15
  useEffect(() => {
    getAllStore().then(data => {
      if (data && Object.keys(data).length > 0) {
        dispatch({ type: 'INIT', payload: data });
      }
      setLoaded(true);
    });
  }, []);

  // Per-key debounced sync
  const setter = (key: string, value: any) => {
    dispatch({ type: 'SET', key, value });
    if (timers.current[key]) clearTimeout(timers.current[key]);
    timers.current[key] = setTimeout(async () => {
      window.dispatchEvent(new CustomEvent('ds-saving', { detail: true }));
      const res = await setStore(key, value);
      window.dispatchEvent(new CustomEvent('ds-saving', { detail: false }));
      if (res.success) toast('✦ saved');
    }, 800);
  };

  // Realtime — single wildcard handles all keys
  useRealtime('*', (updatedKey) => {
    getStore(updatedKey).then(stored => {
      if (stored !== null) dispatch({ type: 'SET', key: updatedKey, value: stored });
    });
  });

  // Cleanup timers
  useEffect(() => {
    return () => { for (const k in timers.current) clearTimeout(timers.current[k]); };
  }, []);

  // Individual setters (same API as before)
  const setTagline = (v: any) => setter("tagline", v);
  const setStage = (v: any) => setter("stage", v);
  const setIngredients = (v: any) => setter("ingredients", v);
  const setPackaging = (v: any) => setter("packaging", v);
  const setVariable = (v: any) => setter("variable", v);
  const setRetailPrice = (v: any) => setter("retailPrice", v);
  const setAbsorbShipping = (v: any) => setter("absorbShipping", v);
  const setFixedCosts = (v: any) => setter("fixedCosts", v);
  const setUnitsPerMonth = (v: any) => setter("unitsPerMonth", v);
  const setMilestones = (v: any) => setter("milestones", v);
  const setFormulation = (v: any) => setter("formulation", v);
  const setDesignFiles = (v: any) => setter("designFiles", v);
  const setSocial = (v: any) => setter("social", v);
  const setSauces = (v: any) => setter("sauces", v);
  const setContacts = (v: any) => setter("contacts", v);

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('ds.theme') || 'dark';
  });

  const isLoaded = loaded;

  useEffect(() => {
    localStorage.setItem('ds.theme', theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const reset = () => {
    if (!window.confirm("Hard Reset: This will clear ALL dashboard data. Are you sure?")) return;
    setter("tagline", "Hot honey, reimagined.");
    setter("stage", "Pre-launch");
    setter("milestones", DEFAULT_MILESTONES.map((m: any) => ({ ...m, status: "Not Started" })));
    setter("retailPrice", 0);
    setter("fixedCosts", 0);
    setter("unitsPerMonth", 0);
    setter("absorbShipping", false);
    setter("ingredients", DEFAULT_INGREDIENTS);
    setter("packaging", DEFAULT_PACKAGING);
    setter("variable", DEFAULT_VARIABLE);
    setter("formulation", DEFAULT_FORMULATION);
    setter("social", DEFAULT_SOCIAL);
    setter("designFiles", DEFAULT_DESIGN_FILES);
    setter("sauces", DEFAULT_SAUCES);
    setter("contacts", { vendors: [], packaging: [], distributors: [], retailers: [], important: [] });
  };

  const {
    tagline, stage, ingredients, packaging, variable,
    retailPrice, absorbShipping, fixedCosts, unitsPerMonth,
    milestones, formulation, designFiles, social, sauces, contacts,
  } = state;

  const econ = useMemo(() => {
    const ing = (ingredients as any[]).reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
    const pkg = (packaging as any[]).reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
    const cogs = ing + pkg + (variable?.labor || 0) + (absorbShipping ? (variable?.shipping || 0) : 0);
    const proc = retailPrice * ((variable?.processingPct || 0) / 100);
    const profit = retailPrice - cogs - proc;
    const margin = retailPrice > 0 ? profit / retailPrice : 0;
    const breakEven = profit > 0 ? Math.ceil(fixedCosts / profit) : NaN;
    return { cogs, margin, breakEven, profit, ing, pkg };
  }, [ingredients, packaging, variable, retailPrice, absorbShipping, fixedCosts]);

  return {
    tagline, setTagline, stage, setStage,
    ingredients, setIngredients, packaging, setPackaging,
    variable, setVariable, retailPrice, setRetailPrice,
    absorbShipping, setAbsorbShipping, fixedCosts, setFixedCosts,
    unitsPerMonth, setUnitsPerMonth, milestones, setMilestones,
    formulation, setFormulation, designFiles, setDesignFiles,
    social, setSocial, sauces, setSauces, theme, setTheme,
    contacts, setContacts,
    reset, econ, isLoaded
  };
}
