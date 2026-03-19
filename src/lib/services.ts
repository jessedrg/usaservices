export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  emergencyDescription: string
  icon: string
  image: string
  ogImage: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'electrician',
    name: 'Emergency Electrician',
    shortName: 'Electrician',
    description: 'Licensed emergency electricians available 24/7 for power outages, electrical fires, sparking outlets, tripped breakers, and all urgent electrical repairs.',
    emergencyDescription: 'Electrical emergencies can be life-threatening. Our licensed electricians respond within minutes to handle power outages, exposed wiring, burning smells from outlets, and electrical fires.',
    icon: 'Zap',
    image: '/images/electrician.jpg',
    ogImage: '/images/og-electrician.jpg',
    metaTitle: 'Emergency Electrician',
    metaDescription: '24/7 emergency electrician services. Fast response for power outages, electrical fires, sparking outlets & urgent repairs. Licensed & insured professionals.',
    keywords: ['emergency electrician', '24 hour electrician', 'electrical repair', 'power outage', 'electrician near me'],
    faqs: [
      { question: 'How fast can an emergency electrician arrive?', answer: 'Our emergency electricians typically arrive within 30-60 minutes of your call, depending on your location and current demand.' },
      { question: 'What qualifies as an electrical emergency?', answer: 'Electrical emergencies include power outages, sparking outlets, burning smells from wiring, exposed wires, electrical fires, and any situation posing immediate safety risks.' },
      { question: 'Are your electricians licensed and insured?', answer: 'Yes, all our electricians are fully licensed, bonded, and insured. They undergo rigorous background checks and continuous training.' },
      { question: 'Do you charge extra for after-hours service?', answer: 'Emergency rates may apply for after-hours, weekend, and holiday calls. We always provide upfront pricing before any work begins.' },
    ],
  },
  {
    slug: 'plumber',
    name: 'Emergency Plumber',
    shortName: 'Plumber',
    description: 'Emergency plumbing services available 24/7 for burst pipes, severe leaks, clogged drains, sewer backups, water heater failures, and all urgent plumbing issues.',
    emergencyDescription: 'Water damage can escalate in minutes. Our emergency plumbers respond rapidly to burst pipes, major leaks, sewer backups, and flooding to minimize damage to your property.',
    icon: 'Droplets',
    image: '/images/plumber.jpg',
    ogImage: '/images/og-plumber.jpg',
    metaTitle: 'Emergency Plumber',
    metaDescription: '24/7 emergency plumber services. Rapid response for burst pipes, severe leaks, clogged drains & sewer backups. Licensed professionals available now.',
    keywords: ['emergency plumber', '24 hour plumber', 'burst pipe repair', 'plumber near me', 'emergency plumbing'],
    faqs: [
      { question: 'What should I do if a pipe bursts?', answer: 'Immediately shut off your main water supply, then call us. Our emergency plumbers will arrive quickly to repair the burst pipe and help mitigate water damage.' },
      { question: 'Can you fix a clogged sewer line at night?', answer: 'Yes, our emergency plumbers are available 24/7, including nights, weekends, and holidays for all sewer line emergencies.' },
      { question: 'How much does emergency plumbing cost?', answer: 'Costs vary depending on the issue. We provide free estimates and upfront pricing before starting any work. No hidden fees.' },
      { question: 'Do you handle water heater emergencies?', answer: 'Absolutely. We handle leaking water heaters, no hot water situations, gas water heater issues, and emergency replacements.' },
    ],
  },
  {
    slug: 'hvac',
    name: 'Emergency HVAC Repair',
    shortName: 'HVAC',
    description: 'Emergency heating and cooling repair available 24/7. Fast response for broken furnaces, AC failures, no heat situations, refrigerant leaks, and all HVAC emergencies.',
    emergencyDescription: 'Extreme temperatures can be dangerous. Our HVAC technicians provide rapid emergency repairs for heating and cooling system failures to keep your family safe and comfortable.',
    icon: 'Thermometer',
    image: '/images/electrician.jpg',
    ogImage: '/images/og-electrician.jpg',
    metaTitle: 'Emergency HVAC Repair',
    metaDescription: '24/7 emergency HVAC repair services. Fast response for broken furnaces, AC failures & heating emergencies. Certified technicians available now.',
    keywords: ['emergency hvac', '24 hour hvac repair', 'furnace repair', 'ac repair emergency', 'hvac near me'],
    faqs: [
      { question: 'My furnace stopped working in winter. How fast can you help?', answer: 'We treat heating failures during cold weather as top priority emergencies. Our technicians typically arrive within 30-60 minutes.' },
      { question: 'Do you repair all HVAC brands?', answer: 'Yes, our certified technicians are trained to work on all major HVAC brands including Carrier, Trane, Lennox, Rheem, and more.' },
      { question: 'What does an emergency HVAC call cost?', answer: 'We provide upfront pricing after diagnosis. Emergency service fees may apply for after-hours calls, but there are never hidden charges.' },
      { question: 'Can you help with a gas furnace smell?', answer: 'If you smell gas, leave your home immediately and call 911 first, then call us. We handle gas furnace emergencies with the highest priority.' },
    ],
  },
  {
    slug: 'locksmith',
    name: 'Emergency Locksmith',
    shortName: 'Locksmith',
    description: '24/7 emergency locksmith services for lockouts, broken locks, lock changes, key replacement, and all urgent security needs for homes, businesses, and vehicles.',
    emergencyDescription: 'Locked out or security compromised? Our emergency locksmiths provide rapid response for residential, commercial, and automotive lockouts and lock emergencies.',
    icon: 'Lock',
    image: '/images/locksmith.jpg',
    ogImage: '/images/og-locksmith.jpg',
    metaTitle: 'Emergency Locksmith',
    metaDescription: '24/7 emergency locksmith services. Fast response for lockouts, broken locks & key replacement. Licensed professionals for homes, businesses & cars.',
    keywords: ['emergency locksmith', '24 hour locksmith', 'lockout service', 'locksmith near me', 'car lockout'],
    faqs: [
      { question: 'How fast can a locksmith arrive for a lockout?', answer: 'Our emergency locksmiths typically arrive within 15-30 minutes for lockout situations in most service areas.' },
      { question: 'Can you unlock my car without damaging it?', answer: 'Yes, our locksmiths use professional non-destructive entry tools to unlock vehicles without causing any damage.' },
      { question: 'Do you provide lock rekeying after a break-in?', answer: 'Yes, we offer emergency lock rekeying and replacement services to secure your property immediately after a break-in.' },
      { question: 'Can you make new keys on-site?', answer: 'Yes, our mobile locksmiths carry key-cutting equipment and can make new keys for most lock types on-site.' },
    ],
  },
  {
    slug: 'garage-door',
    name: 'Emergency Garage Door Repair',
    shortName: 'Garage Door',
    description: 'Emergency garage door repair available 24/7. Fast response for broken springs, stuck doors, off-track doors, opener failures, and all urgent garage door issues.',
    emergencyDescription: 'A malfunctioning garage door is both a security risk and safety hazard. Our technicians respond quickly to broken springs, jammed doors, and opener failures.',
    icon: 'DoorOpen',
    image: '/images/electrician.jpg',
    ogImage: '/images/og-electrician.jpg',
    metaTitle: 'Emergency Garage Door Repair',
    metaDescription: '24/7 emergency garage door repair. Fast response for broken springs, stuck doors & opener failures. Professional technicians available now.',
    keywords: ['emergency garage door repair', 'broken garage door spring', 'garage door stuck', 'garage door repair near me'],
    faqs: [
      { question: 'My garage door spring broke. Is it safe to use?', answer: 'No, do not attempt to operate a garage door with a broken spring. It is extremely dangerous. Call us for immediate repair.' },
      { question: 'Can you fix a garage door that came off its tracks?', answer: 'Yes, our technicians are experienced in safely realigning garage doors that have come off their tracks.' },
      { question: 'How long does a garage door spring replacement take?', answer: 'Most spring replacements take 1-2 hours. Our technicians carry common spring sizes and can usually complete the repair in one visit.' },
      { question: 'Do you repair garage door openers?', answer: 'Yes, we repair and replace all major brands of garage door openers including Chamberlain, LiftMaster, and Genie.' },
    ],
  },
  {
    slug: 'appliance-repair',
    name: 'Emergency Appliance Repair',
    shortName: 'Appliance Repair',
    description: 'Emergency appliance repair available 24/7. Fast service for broken refrigerators, washing machines, dryers, dishwashers, ovens, and all major appliance emergencies.',
    emergencyDescription: 'A broken refrigerator or flooding washing machine needs immediate attention. Our certified technicians provide rapid emergency appliance repair to prevent further damage.',
    icon: 'Refrigerator',
    image: '/images/plumber.jpg',
    ogImage: '/images/og-plumber.jpg',
    metaTitle: 'Emergency Appliance Repair',
    metaDescription: '24/7 emergency appliance repair services. Fast response for broken refrigerators, washers, dryers & more. Certified technicians available now.',
    keywords: ['emergency appliance repair', 'refrigerator repair', 'washer repair', 'appliance repair near me'],
    faqs: [
      { question: 'My refrigerator stopped cooling. How fast can you help?', answer: 'We prioritize refrigerator emergencies to prevent food spoilage. Our technicians typically respond within 1-2 hours.' },
      { question: 'Do you repair all appliance brands?', answer: 'Yes, our certified technicians service all major brands including Samsung, LG, Whirlpool, GE, Maytag, and more.' },
      { question: 'Is it worth repairing an old appliance?', answer: 'Our technicians will provide an honest assessment of whether repair or replacement is more cost-effective for your situation.' },
      { question: 'Can you help with a leaking washing machine?', answer: 'Yes, a leaking washer is an emergency. Shut off the water supply and call us for immediate repair to prevent water damage.' },
    ],
  },
  {
    slug: 'roofing',
    name: 'Emergency Roofing Repair',
    shortName: 'Roofing',
    description: 'Emergency roof repair available 24/7. Rapid response for storm damage, roof leaks, fallen trees, missing shingles, and all urgent roofing emergencies.',
    emergencyDescription: 'Roof damage leaves your home exposed to the elements. Our emergency roofers provide rapid tarping, leak repair, and storm damage restoration to protect your property.',
    icon: 'Home',
    image: '/images/electrician.jpg',
    ogImage: '/images/og-electrician.jpg',
    metaTitle: 'Emergency Roofing Repair',
    metaDescription: '24/7 emergency roofing repair. Fast response for storm damage, roof leaks & fallen trees. Licensed roofers available for immediate service.',
    keywords: ['emergency roof repair', 'roof leak repair', 'storm damage roof', 'emergency roofer near me'],
    faqs: [
      { question: 'Can you repair a roof during rain?', answer: 'Yes, our emergency teams can perform temporary tarping and waterproofing during active rain to stop leaks and prevent further interior damage.' },
      { question: 'What should I do after storm damage to my roof?', answer: 'Document the damage with photos, place containers under any leaks, and call us immediately. We will perform emergency repairs and can assist with insurance claims.' },
      { question: 'Do you work with insurance companies?', answer: 'Yes, we work directly with all major insurance companies and can help document damage and file claims for storm-related repairs.' },
      { question: 'How quickly can you stop a roof leak?', answer: 'Our emergency teams typically arrive within 1-2 hours and can perform temporary leak stops immediately upon arrival.' },
    ],
  },
  {
    slug: 'glass-repair',
    name: 'Emergency Glass & Window Repair',
    shortName: 'Glass Repair',
    description: 'Emergency glass and window repair available 24/7. Fast board-up and replacement for broken windows, shattered glass doors, storefront damage, and all glass emergencies.',
    emergencyDescription: 'Broken glass is a security risk and safety hazard. Our emergency glass technicians provide rapid board-up service and glass replacement to secure your property.',
    icon: 'Square',
    image: '/images/locksmith.jpg',
    ogImage: '/images/og-locksmith.jpg',
    metaTitle: 'Emergency Glass & Window Repair',
    metaDescription: '24/7 emergency glass repair & window replacement. Fast board-up service for broken windows & glass doors. Professional service available now.',
    keywords: ['emergency glass repair', 'broken window repair', 'emergency board up', 'glass replacement near me'],
    faqs: [
      { question: 'Can you board up a broken window at night?', answer: 'Yes, our emergency team provides 24/7 board-up services to secure your property immediately after glass breakage.' },
      { question: 'How quickly can you replace a broken window?', answer: 'Emergency board-up is same-day. Full glass replacement typically takes 1-3 business days depending on the glass type and size needed.' },
      { question: 'Do you handle storefront glass emergencies?', answer: 'Yes, we provide emergency commercial glass services including storefront board-up, glass replacement, and security glazing.' },
      { question: 'Can you help after a break-in?', answer: 'Absolutely. We provide emergency board-up and glass replacement after break-ins and can install upgraded security glass for better protection.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}
