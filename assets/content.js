/**
 * DYSOLVE CAMPAIGN — CONTENT MANAGEMENT FILE
 * ─────────────────────────────────────────────
 * Edit this file to update all page content.
 * After editing, replace this file on your server.
 * All HTML pages read from this object at load time.
 *
 * LAST UPDATED: 2026-03-03
 */

const DYSOLVE = {

  /* ── GLOBAL ── */
  global: {
    siteName:    "Dysolve AI",
    siteUrl:     "https://dysolve.ai",
    price:       "$99",
    pricePeriod: "/mo per child",
    tagline:     "Dissolving Dyslexia",
    navCTA:      "Start for $99/mo",
    copyright:   "© 2026 Dysolve AI · dysolve.ai · Dissolving Dyslexia",
    stats: [
      { n: "33%",   l: "more reading gains" },
      { n: "30+",   l: "years field research" },
      { n: "1B+",   l: "media impressions" },
      { n: "$99",   l: "per child per month" }
    ],
    mediaLogos: ["NBC","CBS","Forbes","BBC","NPR"],
    features: [
      "Full AI language processing evaluation",
      "Individualized daily training sessions",
      "Real-time generation — no two sessions alike",
      "Parent progress dashboard",
      "100% reimbursable via ESA in AZ & FL"
    ],
    guarantee: "Cancel anytime. No contracts. Fully reimbursable via Arizona ESA and Florida Step Up scholarships.",
    faq: [
      {
        q: "What does my child actually do?",
        a: "Your child plays word games online. Every game is uniquely generated for their processing profile — no two children have the exact same experience. Each session responds in real time to your child's needs. To them it is all fun. Behind the screen, Dysolve AI is evaluating, training and retraining their language processing continuously."
      },
      {
        q: "How is this different from tutoring or phonics?",
        a: "Tutoring and phonics programs teach skills to a brain that is not yet prepared to receive them. Dysolve corrects the underlying language processing first. It is the prerequisite — not another layer on top of what you are already doing."
      },
      {
        q: "What results should I expect?",
        a: "Early users saw 1 to 2 years of reading growth within a few months. Dysolve users gained 33% more reading skill than any comparable group. Results depend on consistency and your child's individual profile."
      },
      {
        q: "Can my ESA scholarship pay for it?",
        a: "Yes. Dysolve is accepted under Arizona ESA and Florida Step Up For Students scholarships. $99/mo per child — 100% reimbursable. $0 out-of-pocket to your family. Visit dysolve.ai to check your eligibility."
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. No contracts, no commitments. Cancel anytime from your account dashboard. We believe results should speak for themselves."
      }
    ]
  },

  /* ── PARENTS / IDEA ADVOCATES ── */
  parents: {
    pageTitle:    "Dysolve AI — For Parents & IDEA Advocates",
    segment:      "For Parents & IDEA Advocates",
    videoFolder:  "https://drive.google.com/drive/u/2/folders/1Jgl0sFXnJj74yJ8BTDnri9vPzID8CWO3",
    videoFolderId:"1Jgl0sFXnJj74yJ8BTDnri9vPzID8CWO3",
    heroHeadline: "Your child has dyslexia. There is a real solution.",
    heroItalic:   "There is a real solution.",
    heroSub:      "Did you know your child can be evaluated for dyslexia by playing word games online? To your child it looks like fun. Behind the screen, Dysolve AI is evaluating and retraining their language processing in real time.",
    heroCTA:      "Get to the root of the problem →",
    heroNote:     "$99/mo per child · Subscribe at www.dysolve.ai",
    accentColor:  "#10A9AB",
    howTitle:     "Four steps. One resolution.",
    howSub:       "Traditional programs teach skills to a brain that cannot yet process language. Dysolve corrects the processing foundation first — then skills finally take root.",
    steps: [
      { n:"1", title:"Your child plays",     body:"Individualized word games online. To your child it looks like fun. Deep AI evaluation happens with every tap." },
      { n:"2", title:"AI maps the gaps",     body:"Dysolve pinpoints the exact language processing barriers invisible to any human specialist. Not a guess — a blueprint." },
      { n:"3", title:"Real-time training",   body:"No two children have the same experience. Every session is generated in real time, responding to your child's unique progress." },
      { n:"4", title:"Reading resolves",     body:"Early users gained 33% more reading skill than any comparable group — with 1 to 2 years of growth in a few months." }
    ],
    versusTitle:  "Most programs help your child cope. Dysolve resolves.",
    versusBadTitle:"Other programs",
    versusBadHead:"Teaching skills to an unready brain",
    versusBadItems:["Skills-based. More repetition, same result.","One-size-fits-all. No real individualization.","Manages symptoms. Never resolves the source.","Limited gains. Rarely reaches grade-level."],
    versusGoodTitle:"Dysolve AI",
    versusGoodHead:"Correcting language processing first",
    versusGoodItems:["AI corrects the underlying language processing.","Every session uniquely generated in real time.","Resolves the source — not just the symptom.","1–2 years of reading growth in a few months."],
    ctaHeadline:  "Your child has dyslexia. There is a real solution.",
    ctaBody:      "The only AI intervention with rigorous evidence of positive effect on reading. 30+ years of field research. As reported by NBC, CBS, Forbes, BBC and NPR.",
    ctaButton:    "Subscribe now for $99/mo at www.dysolve.ai →",
    ctaNote:      "$99/mo per child · Cancel anytime · 100% reimbursable via ESA in AZ & FL"
  },

  /* ── THERAPISTS ── */
  therapists: {
    pageTitle:    "Dysolve AI — For Therapists & Specialists",
    segment:      "Therapists & Specialists",
    videoFolder:  "https://drive.google.com/drive/folders/1haCjoh_pCgcQA6gfsU_BsESwjLLPH3Gu?usp=sharing",
    videoFolderId:"1haCjoh_pCgcQA6gfsU_BsESwjLLPH3Gu",
    heroHeadline: "You've assessed dyslexia. Have you seen the exact source?",
    heroItalic:   "Have you seen the exact source?",
    heroSub:      "You identify the symptoms. Dysolve identifies the source. Together: your clinical insight plus AI precision that no human specialist has the bandwidth to deliver alone. Add resolution to your practice.",
    heroCTA:      "Resolve more. Subscribe at dysolve.ai →",
    heroNote:     "$99/mo per student · Access individualized training today",
    accentColor:  "#6A4E9E",
    howTitle:     "The data your assessments describe. Now localized by AI.",
    howSub:       "Dysolve does not replace your expertise. It gives your expertise the architectural data it has always been missing.",
    steps: [
      { n:"1", title:"You assess",      body:"Your clinical expertise identifies symptoms and describes the processing profile. That is where most tools stop." },
      { n:"2", title:"Dysolve maps",    body:"AI pinpoints the exact processing bottlenecks your assessments can describe but not localize. The human gap — now closed." },
      { n:"3", title:"AI trains daily", body:"Each child plays games uniquely generated for their profile. No two sessions alike. Retraining in real time every day." },
      { n:"4", title:"You scale",       body:"Help more children resolve dyslexia without adding hours or staff. Starting at $99/mo per student." }
    ],
    versusTitle:   "No human specialist has this bandwidth. Now your practice does.",
    versusBadTitle:"Assessment alone",
    versusBadHead: "Describes gaps. Cannot localize them.",
    versusBadItems:["Identifies symptoms — not the exact source.","Bandwidth limits how many you can serve.","Intervention stays at skill-building level."],
    versusGoodTitle:"Dysolve + Your Practice",
    versusGoodHead:"Localizes the source. Trains continuously.",
    versusGoodItems:["AI maps the exact processing bottleneck.","Daily sessions — no extra scheduling.","Early users saw 1–2 years of growth in months."],
    stats: [
      { n:"1–2 yrs", l:"reading growth in months" },
      { n:"90–100%", l:"processing gap resolution" },
      { n:"$0",      l:"extra staff hours needed" },
      { n:"$99",     l:"per student per month" }
    ],
    priceBadge:   "For Practitioners",
    pricePeriod:  "/mo per student",
    features: [
      "Full AI language processing evaluation per student",
      "Daily individualized training sessions",
      "Practitioner dashboard with progress data",
      "No extra staff or scheduling required",
      "Reimbursable via ESA in AZ & FL"
    ],
    guarantee:    "Cancel anytime. No contracts. Fully reimbursable via ESA for eligible students.",
    ctaHeadline:  "Resolving the language processing underlying dyslexia.",
    ctaBody:      "Dysolve is an AI-powered intervention. Early users saw 1 to 2 years of reading growth within a few months. Add resolution to your practice today.",
    ctaButton:    "Resolve more. Subscribe at www.dysolve.ai →",
    ctaNote:      "$99/mo per student · Cancel anytime · Reimbursable via ESA in AZ & FL"
  },

  /* ── OG SWITCHERS ── */
  ogSwitchers: {
    pageTitle:    "Dysolve AI — For OG Switchers",
    segment:      "OG Switchers",
    videoFolder:  "https://drive.google.com/drive/u/2/folders/1-F5wrFlNwocWs_rGiXT0vMtKwTgXWNl9",
    videoFolderId:"1-F5wrFlNwocWs_rGiXT0vMtKwTgXWNl9",
    heroHeadline: "Tired of phonics that won't stick? Stop repeating. Start resolving.",
    heroItalic:   "Stop repeating. Start resolving.",
    heroSub:      "Why work on skills when the brain cannot process language yet? Prime the brain first. Dysolve corrects the underlying language processing. Then every lesson you have already given finally takes root.",
    heroCTA:      "Stop repeating. Start resolving. →",
    heroNote:     "$99/mo per child · Prime the brain first · dysolve.ai",
    accentColor:  "#1E2235",
    howTitle:     "The skills didn't fail your child. The foundation wasn't ready.",
    howSub:       "Dysolve is not another program to add to the pile. It is the prerequisite — the preparation that makes all other learning possible.",
    steps: [
      { n:"1", title:"The problem",       body:"OG and phonics teach skills to a brain not yet prepared to receive them. More repetition will not change that." },
      { n:"2", title:"The prerequisite",  body:"Dysolve corrects the underlying language processing first. Not another layer — the actual foundation your child needs." },
      { n:"3", title:"Real-time training",body:"Your child plays word games uniquely generated for their processing profile. Every session adapts as they improve." },
      { n:"4", title:"Skills take root",  body:"Early users saw 1 to 2 years of reading growth in months. Dysolve first, then OG — the fastest path to grade-level reading." }
    ],
    versusTitle:   "Dysolve first. Then OG. The fastest path to grade-level reading.",
    versusBadTitle:"OG or phonics alone",
    versusBadHead: "Skills without a processing foundation",
    versusBadItems:["Limited gains. Rarely reaches grade-level.","Repetition without resolving the source.","Coping — not correcting what matters."],
    versusGoodTitle:"Dysolve first, then OG",
    versusGoodHead:"Foundation first. Fastest catch-up.",
    versusGoodItems:["Dysolve corrects the underlying processing.","Skills you already taught finally take root.","1 to 2 years of reading growth in months."],
    priceBadge:   "The prerequisite",
    features: [
      "Full AI language processing evaluation",
      "Individualized daily training sessions",
      "Works alongside OG — as the prerequisite",
      "Real-time generation — uniquely theirs each day",
      "100% reimbursable via ESA in AZ & FL"
    ],
    guarantee:    "Cancel anytime. No contracts. Reimbursable in Arizona and Florida.",
    ctaHeadline:  "Stop repeating. Start resolving.",
    ctaBody:      "AI-powered. Individualized. Precise. 33% greater reading gains than any comparable group. Dysolve first, then OG — the fastest path to grade-level reading.",
    ctaButton:    "Subscribe now at www.dysolve.ai →",
    ctaNote:      "$99/mo per student · Reimbursable in AZ & FL · Cancel anytime"
  },

  /* ── VOUCHER FAMILIES ── */
  voucherFamilies: {
    pageTitle:    "Dysolve AI — For Voucher Families (AZ & FL)",
    segment:      "Voucher Families · AZ & FL",
    videoFolder:  "https://drive.google.com/drive/folders/1JhWCc55HvtBj2UaY_qQKSCRsP4i2NMRE?usp=sharing",
    videoFolderId:"1JhWCc55HvtBj2UaY_qQKSCRsP4i2NMRE",
    heroHeadline: "Your scholarship pays for it. $0 out-of-pocket.",
    heroItalic:   "$0 out-of-pocket.",
    heroSub:      "Did you know your Arizona or Florida education scholarship can pay for Dysolve? $99/mo. 100% reimbursable via ESA and Step Up scholarships. The most effective dyslexia intervention — finally accessible to every family.",
    heroCTA:      "Check your eligibility at dysolve.ai →",
    heroNote:     "$99/mo · 100% Reimbursable · $0 Out-of-Pocket to You",
    accentColor:  "#6A4E9E",
    howTitle:     "Four steps to $0 out-of-pocket dyslexia resolution.",
    howSub:       "Your state education scholarship was created for exactly this intervention.",
    steps: [
      { n:"1", title:"Check eligibility", body:"Visit dysolve.ai and confirm your Arizona ESA or Florida Step Up scholarship covers Dysolve. Most do — at 100%." },
      { n:"2", title:"Subscribe",         body:"Subscribe at $99/mo. Submit your ESA reimbursement request. Pay $0 out-of-pocket. Your scholarship covers it entirely." },
      { n:"3", title:"Your child plays",  body:"Individualized word games generated in real time. Deep AI language processing correction behind every session." },
      { n:"4", title:"Resolution",        body:"Early users saw 1 to 2 years of reading growth within a few months. Dysolve corrects the underlying language processing behind dyslexia." }
    ],
    versusTitle:   "The best dyslexia intervention should not depend on income.",
    versusBadTitle:"Without a scholarship",
    versusBadHead: "High-cost, limited access",
    versusBadItems:["Specialists — $150+ per session.","Tutoring — adds up fast with limited results.","School programs — one size fits all."],
    versusGoodTitle:"Dysolve + Your Scholarship",
    versusGoodHead:"Gold standard. $0 out-of-pocket.",
    versusGoodItems:["$99/mo — 100% reimbursed via ESA & Step Up.","AI-powered. Individualized. Daily training.","The only program with rigorous evidence of positive effect on reading."],
    stats: [
      { n:"$0",    l:"out-of-pocket for AZ & FL families" },
      { n:"100%",  l:"reimbursable via ESA & Step Up" },
      { n:"30+",   l:"years of field research" },
      { n:"$99",   l:"per month — fully reimbursed" }
    ],
    priceBadge:  "Scholarship Accepted",
    priceDisplay:"$0",
    priceSub:    "$99/mo billed · 100% reimbursed via AZ ESA or FL Step Up",
    features: [
      "Full AI language processing evaluation",
      "Individualized daily training sessions",
      "Real-time generation — uniquely yours each day",
      "Accepted: Arizona ESA & Florida Step Up",
      "Cancel anytime. No contracts."
    ],
    guarantee:   "Your scholarship was created for interventions like this. Use it to access the gold standard of dyslexia resolution.",
    ctaHeadline: "Excellence in learning should not depend on income.",
    ctaBody:     "$99/mo. 100% reimbursable via Arizona ESA and Florida Step Up. The most effective dyslexia intervention — finally accessible to every family.",
    ctaButton:   "Use your scholarship and subscribe now →",
    ctaNote:     "$99/mo · 100% Reimbursable · $0 Out-of-Pocket to You"
  },

  /* ── REMARKETING (GENERAL — ALL SEGMENTS) ── */
  remarketing: {
    pageTitle:    "Dysolve AI — The Real Answer to Dyslexia",
    segment:      "Dyslexia has a real answer",
    videoFolder:  "https://drive.google.com/drive/folders/1zK39l54e3GHnHFIz2p9dFP5NqmhuwOOQ?usp=sharing",
    videoFolderId:"1zK39l54e3GHnHFIz2p9dFP5NqmhuwOOQ",
    heroHeadline: "Dyslexia has a real answer. Not a workaround.",
    heroItalic:   "Not a workaround.",
    heroSub:      "Reading programs, tutoring, and phonics teach skills to a brain that cannot yet process language. Dysolve AI corrects the underlying language processing — then skills take root. This is the difference between coping and resolving.",
    heroCTA:      "Discover Dysolve — Subscribe at dysolve.ai →",
    heroNote:     "$99/mo per child · Cancel anytime · 100% reimbursable via ESA in AZ & FL",
    accentColor:  "#10A9AB",
    howTitle:     "Why Dysolve works when everything else hasn't.",
    howSub:       "Dyslexia is a language processing problem. Every intervention that teaches skills is teaching to a brain not yet able to receive them. Dysolve corrects the foundation first.",
    steps: [
      { n:"1", title:"The real problem",    body:"Dyslexia is not a reading problem. It is a language processing problem. Teaching reading skills to an unready brain will always produce limited results." },
      { n:"2", title:"AI finds the source", body:"Dysolve evaluates your child's exact language processing profile through individualized word games. The source — not just the symptoms." },
      { n:"3", title:"Correction begins",   body:"Every session is uniquely generated in real time. No two children have the same experience. The AI retrains the processing that reading depends on." },
      { n:"4", title:"Skills take root",    body:"Once language processing is corrected, the skills you have worked so hard on finally stick. Early users saw 1 to 2 years of reading growth in a few months." }
    ],
    versusTitle:   "Coping vs. resolving. This is the difference.",
    versusBadTitle:"What you may have tried",
    versusBadHead: "Skills without a foundation",
    versusBadItems:["Reading programs. More repetition, same outcome.","Tutoring. Manages the problem. Does not resolve it.","Phonics. Teaching to a brain not prepared to receive it."],
    versusGoodTitle:"Dysolve AI",
    versusGoodHead:"Correcting the source. Not the symptom.",
    versusGoodItems:["AI corrects the underlying language processing.","1–2 years of reading growth in a few months.","30+ years of field research. Rigorous evidence. Real results."],
    stats: [
      { n:"33%",   l:"more reading skill gains than any group" },
      { n:"1–2 yrs",l:"of growth in a few months" },
      { n:"1B+",   l:"media impressions" },
      { n:"$99",   l:"per month — reimbursable AZ & FL" }
    ],
    priceBadge:  "The resolution",
    features: [
      "Full AI language processing evaluation",
      "Individualized daily training sessions",
      "Real-time generation — no two sessions alike",
      "Parent or practitioner progress dashboard",
      "100% reimbursable via ESA in AZ & FL"
    ],
    guarantee:   "Cancel anytime. No contracts. Reimbursable via Arizona ESA and Florida Step Up scholarships.",
    ctaHeadline: "Dyslexia has a real answer. Dysolve is it.",
    ctaBody:     "The only AI intervention with rigorous evidence of positive effect on reading. As reported by NBC, CBS, Forbes, BBC and NPR. 30+ years of field research. The answer you have been looking for.",
    ctaButton:   "Subscribe now at www.dysolve.ai →",
    ctaNote:     "$99/mo per child · Cancel anytime · 100% reimbursable via ESA in AZ & FL"
  }
};
