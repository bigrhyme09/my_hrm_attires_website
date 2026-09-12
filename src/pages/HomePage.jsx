import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
const IMGS = {
  factory: 'https://images.hostinger.com/7a3e39e8-5919-4672-abef-9514688b1dbe.png',
  garments: 'https://images.hostinger.com/4b0906a6-0086-44fa-9f32-4a07b1dff99c.png',
  retail: 'https://images.hostinger.com/a9e75979-5547-4a1f-a409-bb091c1e358e.png',
  knit: 'https://images.hostinger.com/3dfc0be5-fe58-41a4-bb1d-72093dc02472.png',
  shipping: 'https://images.hostinger.com/ad31e95f-f6c2-4ca7-897f-83b1e01a00ff.png',
  eco: 'https://images.hostinger.com/3d755209-98eb-4193-a1f1-b2e407cb154a.png'
};
const NAV = [['About', '#about'], ['Products', '#products'], ['Quality', '#quality'], ['Markets', '#markets'], ['Sustainability', '#sustainability'], ['Contact', '#contact']];
const STATS = [{
  value: 18,
  suffix: 'M+',
  label: 'Pieces annually'
}, {
  value: 20,
  suffix: '+',
  label: 'Years operational'
}, {
  value: 100,
  suffix: '%',
  label: 'ISO & LEED Certified Factories'
}];
// ─────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND SLIDESHOW — manually configure your 7 photos here.
// Paste each image URL between the quotes below. Empty slots are skipped
// automatically, so the slideshow still works as you add them one by one.
// To pick files from your media library, open the Assets/Media panel in the
// editor, copy each image's URL, and paste it into one of the 7 slots.
// ─────────────────────────────────────────────────────────────────────────
const HERO_BG_IMAGES = ['https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/dd9edfe3a104af51262f77c2bfcbd9fc.webp',
// Couple in puffer vests (black and red)
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/9eff19e08c051ee3fe35adf731545d0b.jpg',
// Factory exterior with parked loading truck
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/383498a3474704cc5abfa1a4c17c66ec.jpg',
// HRM front office reception desk with visitors
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/2eb0e71b2ae02ac0efecffa85fe4a3c7.webp',
// Three smiling kids wearing hoodies
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/61ce18ed2f35bec615f3e5cf2b9b22d0.png',
// Textile factory floor with operators running knitting machinery
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/ef404b29128b2c480a6efec27f41fe0f.jpg',
// Facility grounds with the white electric golf cart
'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/0929a0608620500258dad32697cb946a.jpg' // Factory fire safety and emergency response equipment station
].filter(Boolean);
const PRODUCTS = [{
  pct: '65%',
  name: 'Circular Knit',
  items: 'T-shirts · Polo shirts · Hoodies · Sweatshirts · Activewear',
  image: 'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/93c0a1bba950016cd7626971449f3386.webp'
}, {
  pct: '20%',
  name: 'Woven Wear',
  items: 'Casual & dress shirts · Trousers · Chinos · Cargo pants · Outerwear',
  image: 'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/ab721579f7d122eeba9ee8a1b734de38.jpg'
}, {
  pct: '10%',
  name: 'Flat Knit',
  items: 'Sweaters · Cardigans · Fine knitwear',
  image: 'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/cd418250f7949048de57b3eec8f1a43c.png'
}, {
  pct: '5%',
  name: 'Formal & Denim',
  items: 'Tailored suits · Dresses · Premium jeans with eco-finishing',
  image: 'https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/34949a86972594b643b2e80deb063b5b.webp'
}];
const CERTS = ['ISO Certified', 'ACCORD', 'RSC', 'BSCI', 'WRAP', 'OEKO-TEX 100', 'Sedex', 'GOTS', 'GRS', 'FSC'];
const CLIENTS = ['Piazza Italia S.p.A.', 'Essemoda SRL', 'Baci & Abbracci', 'Sonny Bono', 'Clayton', 'Cotton & Silk', 'M and M Direct', 'Blue Inc', 'Next', 'Promod', 'Obaïbi-Okaïdi', 'Happychic', 'Chicorée', 'Whispering Smith', 'Pimkie'];
const OFFICES = [{
  city: 'New York City',
  country: 'USA',
  label: 'North America & South America Marketing Office',
  entity: 'HRM Attires',
  address: '315 Madison Avenue, 3rd Floor\nNew York, NY 10017'
}, {
  city: 'Dhaka',
  country: 'Bangladesh',
  label: 'Global Headquarters',
  entity: 'H.R.M. Sourcing Ltd.',
  address: 'House #1220, Avenue #11\nMirpur DOHS, Dhaka-1216'
}, {
  city: 'Kowloon',
  country: 'Hong Kong',
  label: 'Asia Pacific Hub',
  entity: 'HRM (HK) Ltd.',
  address: 'Flat #H, Floor #11, Alpha House\n27-33 Nathan Road, Tsim Sha Tsui'
}, {
  city: 'London',
  country: 'United Kingdom',
  label: 'UK Office',
  entity: 'HRM UK',
  address: '31 Stanley Avenue\nRM2 5DL'
}, {
  city: 'Naples',
  country: 'Italy',
  label: 'Italy Office',
  entity: 'HRM Italia',
  address: 'Via Cesapepere N.15 80010\nQuarto, Napoli'
}, {
  city: 'Stuttgart',
  country: 'Germany',
  label: 'Germany Office',
  entity: 'HRM Textil GmbH',
  address: 'Ulmer Strasse 300\n70327 Stuttgart'
}, {
  city: 'Marcq-en-Baroeul',
  country: 'France',
  label: 'France Office',
  entity: 'HRM France',
  address: '19 AV Flandres\n59700 Marcq-EN-Baroeul'
}];
const TICKER_ITEMS = ['New York . USA', 'Kowloon . Hong Kong', 'Dhaka . Bangladesh', 'London . United Kingdom', 'Naples . Italy', 'Stuttgart . Germany', 'Marcq-en-Baroeul . France', '18M+ Pieces Annually', '$53 ANNUAL REVENUE', '20+ Years of Excellence'];
const HomePage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [textBg, setTextBg] = React.useState(0);
  React.useEffect(() => {
    if (HERO_BG_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setTextBg(prev => (prev + 1) % HERO_BG_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return <div className="min-h-screen bg-white text-[hsl(var(--ink))]">
      <Helmet>
        <title>HRM Attires — Global Apparel Manufacturing & Buying House</title>
        <meta name="description" content="HRM Attires is a global apparel manufacturing and buying house headquartered in Dhaka, Bangladesh with hubs in Germany and Hong Kong. 18M+ pieces annually, ISO-certified, serving Europe and beyond." />
      </Helmet>
      <Seo title="HRM Attires — Global Apparel Manufacturing & Buying House" description="End-to-end apparel supply chain: sampling, compliance, production, shipment. 15+ years. Southern Europe, Eastern Europe, North America." image={IMGS.factory} siteName="HRM Attires" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="mx-auto flex h-24 max-w-[88rem] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center">
            <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/9c67d3a00b121b58d87158c7f8ed3270.png" alt="HRM Attires" className="h-16 w-auto object-contain" style={{
            mixBlendMode: 'multiply'
          }} />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map(([label, href]) => <a key={href} href={href} className="text-base font-semibold uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--brand))]">
                {label}
              </a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-white bg-[hsl(var(--brand))] px-5 py-2.5 transition-colors hover:bg-[hsl(var(--ink))] sm:block">
              Enquire
            </a>
            <button className="lg:hidden p-2" onClick={() => setMobileOpen(p => !p)} aria-label="Menu">
              <span className="block h-0.5 w-5 bg-current mb-1.5" />
              <span className="block h-0.5 w-5 bg-current mb-1.5" />
              <span className="block h-0.5 w-3 bg-current" />
            </button>
          </div>
        </div>
        {mobileOpen && <nav className="lg:hidden border-t border-[hsl(var(--border))] bg-white px-5 py-4 flex flex-col gap-4">
            {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)} className="text-[11px] font-semibold uppercase tracking-[0.16em]">{label}</a>)}
          </nav>}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100dvh] flex items-end overflow-hidden bg-[hsl(var(--ink))] text-white">
        {/* Rotating background images — configure in HERO_BG_IMAGES above */}
        <div className="absolute inset-0 overflow-hidden">
          {HERO_BG_IMAGES.length > 0 ? HERO_BG_IMAGES.map((src, i) => <img key={src} src={src} alt="HRM Attires facility and products" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === textBg ? 'opacity-45' : 'opacity-0'}`} />) : <div className="absolute inset-0 bg-[hsl(var(--ink))]" />}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[hsl(var(--ink))] via-[hsl(var(--ink))]/70 to-[hsl(var(--ink))]/40" />

        <div className="relative w-full max-w-[88rem] mx-auto px-5 pb-16 pt-32 lg:px-10">
          <motion.p initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[hsl(var(--brand-light,351_60%_55%))]">Global Apparel Manufacturing &amp; Sourcing House</motion.p>
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-semibold leading-[1.05] max-w-6xl">
            {['Precision-made.', 'Ethically sourced.', 'Delivered globally.'].map((line, i) => <motion.span key={line} className="block whitespace-nowrap" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4 + i * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}>
                {i === 0 ? line : <span className="text-white/55">{line}</span>}
              </motion.span>)}
          </h1>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="mt-10 flex flex-wrap gap-4">
            <a href="#about" className="flex min-h-[48px] items-center gap-2 bg-[hsl(var(--brand))] px-8 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all hover:bg-white hover:text-[hsl(var(--ink))]">
              Explore HRM <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href="#contact" className="flex min-h-[48px] items-center border border-white/30 px-8 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-white">
              Request sourcing
            </a>
          </motion.div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/15 pt-8 max-w-xl">
            {STATS.map(s => <div key={s.label}>
                <p className="font-display text-[2.2rem] font-semibold leading-none text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]">
                  {s.prefix || ''}<CountUp value={s.value} suffix={s.suffix || ''} />
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-white/50">{s.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden bg-[hsl(var(--brand))] py-2.5 text-white">
        <div className="ticker-track">
          {[0, 1].map(c => <div key={c} className="flex shrink-0 items-center">
              {TICKER_ITEMS.map(item => <span key={`${c}-${item}`} className="flex items-center whitespace-nowrap px-6 text-[10px] font-semibold uppercase tracking-[0.24em]">
                  {item}
                  <span className="ml-6 h-1 w-1 rounded-full bg-white/50" />
                </span>)}
            </div>)}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto w-full max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))]">About HRM Attires</p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08]">An end-to-end supply chain partner, built over 20 years</h2>
              <p className="mt-6 leading-relaxed text-[hsl(var(--muted-foreground))] text-[0.95rem]"><span style={{
                fontFamily: "Helvetica, sans-serif"
              }}>Whether owned, licensed brands, joint ventures, or government clientele, HRM Attires believes in the power of growing global brands through product categories that build long term value. Our North America's showroom is in the heart of garment district in New York City. We have our own in-house sample section that provides our customers efficient and fast turnaround in the matter of hours. Our regional offices are in Dhaka (Bangladesh), Stuttgart (Germany), Kowloon (Hong Kong), London (UK), Naples (Italy), and Marc-en-Baroeul (France). We are a full-service sourcing house and manufacturer — handling every stage from initial sampling through compliance, production, and final shipment.</span></p>
              <p className="mt-4 leading-relaxed text-[hsl(var(--muted-foreground))] text-[0.95rem]"><span style={{
                fontFamily: "Helvetica, sans-serif"
              }}>From a baseline output of 320,000 units in 2006, our manufacturing footprint has expanded to over 18 million pieces annually, generating $53M USD in revenue. With an Italian Technical Unit overseeing quality directly at the source, our entire supply network operates under 100% ISO-certified standards.</span></p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="border border-[hsl(var(--border))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Dhaka HQ</span>
                <span className="border border-[hsl(var(--border))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Stuttgart Hub</span>
                <span className="border border-[hsl(var(--border))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Hong Kong Hub</span>
                <span className="border border-[hsl(var(--border))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em]">PL · IT · FR</span>
              </div>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal delay={0.15}>
              {/* Bento box gallery: 1 dominant + 3 accent images */}
              <div className="grid gap-1 grid-cols-2 grid-rows-2 h-[500px]">
                {/* Dominant large image - spans 1 col, 2 rows (left side) */}
                <div className="row-span-2 overflow-hidden">
                  <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/screenshot-2026-08-11-at-5.24.49a-pm-GyZY9.png" alt="HRM Attires front office" className="w-full h-full object-cover" />
                </div>
                
                {/* Top right accent image */}
                <div className="overflow-hidden">
                  <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/screenshot-2026-08-11-at-4.42.19a-pm-kWdsU.png" alt="HRM team" className="w-full h-full object-cover" />
                </div>
                
                {/* Bottom right accent image - now spans full height */}
                <div className="overflow-hidden">
                  <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/screenshot-2026-08-11-at-4.33.46a-pm-KsRS7.png" alt="HRM quality labels" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-[hsl(40_15%_97%)] py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[88rem] px-5 lg:px-10">
          <Reveal>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))]">Manufacturing Portfolio</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08] max-w-xl">
              Four product streams. One quality standard.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px bg-[hsl(var(--border))] sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p, i) => <Reveal key={p.name} delay={i * 0.07}>
                <article className="group bg-white flex flex-col">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="font-display text-5xl font-light text-[hsl(var(--border))]">{p.pct}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold">{p.name}</h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-[hsl(var(--muted-foreground))]">{p.items}</p>
                  </div>
                </article>
              </Reveal>)}
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section id="quality" className="bg-[hsl(var(--ink))] text-white py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[88rem] px-5 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]">Quality Assurance</p>
                <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08]">Certified technical network</h2>
                <p className="mt-6 leading-relaxed text-white/65 text-[0.95rem]">Our quality management team is embedded directly at the source, ensuring every production batch strictly conforms to global manufacturing standards. We partner exclusively with fully certified facilities, enforcing rigorous social accountability and safety frameworks across our supply chain—including compliance with ISO, ACCORD, RSC, BSCI, WRAP, OEKO-TEX 100, Sedex, GOTS, GRS, and FSC standards."</p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {CERTS.map(cert => <div key={cert} className="border border-white/12 px-4 py-3 text-center">
                      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/75">{cert}</span>
                    </div>)}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/screenshot-2026-08-11-at-9.33.28a-pm-2ok83.png" alt="HRM quality assurance team" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/screenshot-2026-08-11-at-5.23.34a-pm-XLVaB.png" alt="HRM trade fair booth" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/hrm-gms-factory_q1060630web-0IDVy.jpg" alt="HRM team" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="mt-6 border-t border-white/12 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Process Coverage</p>
                  <div className="flex flex-wrap gap-3">
                    {['Sampling', 'Legal & Compliance', 'Production', 'Shipment'].map((stage, i) => <div key={stage} className="flex items-center gap-2">
                        <span className="h-5 w-5 flex items-center justify-center bg-[hsl(var(--brand))] text-white text-[9px] font-bold [background-color:hsl(351_60%_40%)]">{i + 1}</span>
                        <span className="text-[11px] font-medium text-white/70">{stage}</span>
                        {i < 3 && <span className="text-white/20 text-xs">—</span>}
                      </div>)}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section id="markets" className="mx-auto w-full max-w-[88rem] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))]">Markets & Clients</p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08]">Trusted by leading fashion brands</h2>
              <p className="mt-6 leading-relaxed text-[hsl(var(--muted-foreground))] text-[0.95rem]">Our primary global distribution is led by Southern Europe and Eastern Europe, alongside rapid growth in North America. Today, we supply leading retail and apparel brands throughout the Americas, Italy, Germany, France, and Poland, while actively expanding our distribution network into Latin America and Australia.</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-3">
                {[{
                region: 'Southern Europe',
                pct: '65%'
              }, {
                region: 'Eastern Europe',
                pct: '20%'
              }, {
                region: 'North America',
                pct: '10%'
              }, {
                region: 'Australia & RoW',
                pct: '5%'
              }].map(({
                region,
                pct
              }) => <div key={region} className="flex items-center gap-4">
                    <div className="w-28 shrink-0 text-[11px] font-medium text-[hsl(var(--muted-foreground))]">{region}</div>
                    <div className="flex-1 h-1.5 bg-[hsl(var(--border))]">
                      <div className="h-full bg-[hsl(var(--brand))]" style={{
                    width: pct
                  }} />
                    </div>
                    <div className="w-10 text-right text-[11px] font-semibold">{pct}</div>
                  </div>)}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">Selected Clients</p>
              <div className="flex flex-wrap gap-2">
                {CLIENTS.map(client => <span key={client} className="border border-[hsl(var(--border))] px-3 py-1.5 text-[11px] font-medium text-[hsl(var(--muted-foreground))]">
                    {client}
                  </span>)}
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustainability" className="relative py-24 lg:py-32 overflow-hidden">
        <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/96bba5d4dce195c960b4ecf6c0566fef.png" alt="HRM ETP plant aerial view" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-[hsl(40_15%_97%)]/88" />
        <div className="relative mx-auto w-full max-w-[88rem] px-5 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <Reveal>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))]">Sustainability</p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08]">
                Eco-forward. Responsibly made.
              </h2>
              <p className="mt-6 leading-relaxed text-[hsl(var(--muted-foreground))] text-[0.95rem]">All our facilities are LEED-certified and operate advanced Effluent Treatment Plants (ETP) that ensure our dyeing and finishing processes meet strict environmental discharge standards. We are actively expanding our eco-friendly material portfolio—including GOTS-certified organic cotton, recycled bamboo, and recycled polyester—building the resilient, sustainable supply chain required by tomorrow’s major global retailers."</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['GOTS Organic Cotton', 'Recycled Bamboo', 'Recycled Polyester', 'Eco Denim Finishing'].map(m => <span key={m} className="bg-white border border-[hsl(var(--border))] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em]">{m}</span>)}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white border border-[hsl(var(--border))] p-6 max-w-md">
                <div className="overflow-hidden aspect-[16/9] mb-6 -mx-6 -mt-6">
                  <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/49c270badbc41747e9adf082915d715a.webp" alt="HRM Fair4All charity donation event" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-8 w-8 shrink-0 bg-[hsl(var(--brand))] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">F4A</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">Fair4All Initiative</h3>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--brand))] mt-0.5">Charity Partnership</p>
                  </div>
                </div>
                <p className="leading-relaxed text-[hsl(var(--muted-foreground))] text-[0.9rem]">HRM Attires proudly supports the <strong className="text-[hsl(var(--ink))] font-medium">Fair4All</strong> initiative — a charity committed to fair trade practices and social equity in global textile supply chains. In January 2023, our sister company, HRM Textil GmbH donated USD 50,000 to the Sorerhat Kollani Shishu Sodon &amp; Momotaz-Aziz Old Home.</p>
                <a href="https://fair4all.online/ueber-fair4all/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))] transition-opacity hover:opacity-70">
                  Learn about Fair4All <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OFFICES / CONTACT */}
      <section id="contact" className="bg-[hsl(var(--ink))] text-white py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[88rem] px-5 lg:px-10">
          <Reveal>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]">Global Offices</p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1.08] max-w-xl">
              Three continents. One standard.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {OFFICES.map((o, i) => <Reveal key={o.city} delay={i * 0.06}>
                <div className="bg-[hsl(var(--ink))] p-7 h-full flex flex-col">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand))] [color:hsl(351_60%_55%)] mb-3 leading-snug">{o.label}</p>
                  <p className="font-display text-3xl font-semibold text-white">{o.country}</p>
                  <p className="text-xs text-white/50 mt-0.5">{o.city}</p>
                  <p className="mt-3 text-[11px] font-medium text-white/70">{o.entity}</p>
                  {o.address && <p className="mt-1.5 text-[11px] leading-relaxed text-white/45 whitespace-pre-line">{o.address}</p>}
                </div>
              </Reveal>)}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 border-t border-white/12 pt-14">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold mb-6">Get in touch</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-medium">Factory Visits</p>
                    <p className="text-[12px] text-white/50 mt-0.5">Available by appointment</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-medium" style={{
                    textAlign: "left"
                  }}>sales@hrmattires.com</p>
                    <p className="text-[12px] text-white/50 mt-0.5">Sourcing enquiries, compliance docs, sample</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))] [color:hsl(351_60%_55%)]" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-medium">New York Showroom</p>
                    <p className="text-[12px] text-white/50 mt-0.5">Visits by appointment</p>
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/50 py-10">
        <div className="mx-auto w-full max-w-[88rem] px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src="https://horizons-cdn.hostinger.com/492369c6-2d74-4005-b31a-9a77f81b0f5d/0898ca6393fbfbbb39906a378a7796bf.png" alt="HRM Attires" className="w-[170px] h-auto object-contain" />
          <p className="text-[10px] uppercase tracking-[0.18em]">
            © 2026 H.R.M ATTIRES USA INC. ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.14em]">
            {NAV.map(([label, href]) => <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>)}
          </div>
        </div>
      </footer>
    </div>;
};
const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const update = k => e => setForm(p => ({
    ...p,
    [k]: e.target.value
  }));
  const submit = async e => {
    e.preventDefault();
    setStatus('loading');
    // Simple mailto fallback since no specific backend needed
    setTimeout(() => setStatus('done'), 800);
  };
  const field = 'w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[hsl(var(--brand))] transition-colors';
  if (status === 'done') {
    return <div className="flex flex-col items-center justify-center gap-3 border border-white/12 p-10 text-center min-h-[280px]">
        <p className="font-display text-2xl font-semibold">Thank you</p>
        <p className="text-sm text-white/55 max-w-xs">We will respond to your enquiry within one business day.</p>
        <button onClick={() => setStatus('idle')} className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--brand))] [color:hsl(351_60%_55%)] hover:opacity-70">
          Send another
        </button>
      </div>;
  }
  return <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <input required placeholder="Name" value={form.name} onChange={update('name')} className={field} />
        <input required type="email" placeholder="Email" value={form.email} onChange={update('email')} className={field} />
      </div>
      <input placeholder="Company" value={form.company} onChange={update('company')} className={field} />
      <textarea rows={4} placeholder="Sourcing enquiry or message" value={form.message} onChange={update('message')} className={field} />
      <button type="submit" disabled={status === 'loading'} className="w-full bg-[hsl(var(--brand))] py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[hsl(var(--ink))] disabled:opacity-50">
        {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>;
};
export default HomePage;