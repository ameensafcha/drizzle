import { useMemo, useEffect } from 'react';
import { usePersistentState } from './usePersistentState';

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
  const [tagline,        setTagline,        l1] = usePersistentState("tagline", "Hot honey, reimagined.");
  const [stage,          setStage,          l2] = usePersistentState("stage", "Pre-launch");
  const [ingredients,    setIngredients,    l3] = usePersistentState("ingredients", DEFAULT_INGREDIENTS);
  const [packaging,      setPackaging,      l4] = usePersistentState("packaging", DEFAULT_PACKAGING);
  const [variable,       setVariable,       l5] = usePersistentState("variable", DEFAULT_VARIABLE);
  const [retailPrice,    setRetailPrice,    l6] = usePersistentState("retailPrice", 0);
  const [absorbShipping, setAbsorbShipping, l7] = usePersistentState("absorbShipping", false);
  const [fixedCosts,     setFixedCosts,     l8] = usePersistentState("fixedCosts", 0);
  const [unitsPerMonth,  setUnitsPerMonth,  l9] = usePersistentState("unitsPerMonth", 0);
  const [milestones,     setMilestones,     l10] = usePersistentState("milestones", DEFAULT_MILESTONES);
  const [formulation,    setFormulation,    l11] = usePersistentState("formulation", DEFAULT_FORMULATION);
  const [designFiles,    setDesignFiles,    l12] = usePersistentState("designFiles", DEFAULT_DESIGN_FILES);
  const [social,         setSocial,         l13] = usePersistentState("social", DEFAULT_SOCIAL);
  const [sauces,         setSauces,         l14] = usePersistentState("sauces", DEFAULT_SAUCES);
  const [contacts,       setContacts,       l15] = usePersistentState("contacts", DEFAULT_CONTACTS);
  const [theme,          setTheme,          l16] = usePersistentState("theme", "dark");

  const isLoaded = l1 && l2 && l3 && l4 && l5 && l6 && l7 && l8 && l9 && l10 && l11 && l12 && l13 && l14 && l15 && l16;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const reset = () => {
    if (!window.confirm("Hard Reset: This will clear ALL dashboard data. Are you sure?")) return;
    setTagline("Hot honey, reimagined.");
    setStage("Pre-launch");
    setMilestones(DEFAULT_MILESTONES.map(m => ({ ...m, status: "Not Started" })));
    setRetailPrice(0);
    setFixedCosts(0);
    setUnitsPerMonth(0);
    setAbsorbShipping(false);
    setIngredients(DEFAULT_INGREDIENTS);
    setPackaging(DEFAULT_PACKAGING);
    setVariable(DEFAULT_VARIABLE);
    setFormulation(DEFAULT_FORMULATION);
    setSocial(DEFAULT_SOCIAL);
    setDesignFiles(DEFAULT_DESIGN_FILES);
    setSauces(DEFAULT_SAUCES);
    setContacts({ vendors: [], packaging: [], distributors: [], retailers: [], important: [] });
  };

  const econ = useMemo(() => {
    const ing = ingredients.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
    const pkg = packaging.reduce((s: number, r: any) => s + (parseFloat(r.val) || 0), 0);
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
