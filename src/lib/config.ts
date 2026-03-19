export const SITE_PHONE = '(217) 634-7135'
export const SITE_PHONE_RAW = '2176347135'
export const SITE_PHONE_HREF = 'tel:+12176347135'

/**
 * BATCH RELEASE CONTROL
 * =====================
 * Add state slugs here to enable them for static generation.
 * States NOT in this list will still have their data available,
 * but pages won't be statically generated (they'll 404).
 *
 * To release a new batch of states:
 * 1. Add the state slug(s) to the array below
 * 2. Run `pnpm build` to regenerate pages
 *
 * All state slugs are lowercase, hyphenated versions of the state name.
 * e.g. "new-york", "north-carolina", "district-of-columbia"
 */
export const ENABLED_STATES: string[] = [
  // Batch 1 — Launch
  'california',
  'new-york',
  'florida',

  // Batch 2 — Uncomment when ready
  // 'texas',
  // 'illinois',
  // 'pennsylvania',
  // 'ohio',
  // 'georgia',

  // Batch 3 — Uncomment when ready
  // 'north-carolina',
  // 'michigan',
  // 'new-jersey',
  // 'virginia',
  // 'washington',

  // Batch 4 — Uncomment when ready
  // 'arizona',
  // 'massachusetts',
  // 'tennessee',
  // 'indiana',
  // 'maryland',
  // 'missouri',
  // 'wisconsin',
  // 'colorado',
  // 'minnesota',

  // Batch 5 — Uncomment when ready
  // 'south-carolina',
  // 'alabama',
  // 'louisiana',
  // 'kentucky',
  // 'oregon',
  // 'oklahoma',
  // 'connecticut',
  // 'utah',
  // 'iowa',
  // 'nevada',

  // Batch 6 — Uncomment when ready
  // 'arkansas',
  // 'mississippi',
  // 'kansas',
  // 'new-mexico',
  // 'nebraska',
  // 'idaho',
  // 'west-virginia',
  // 'hawaii',
  // 'new-hampshire',
  // 'maine',

  // Batch 7 — Uncomment when ready
  // 'montana',
  // 'rhode-island',
  // 'delaware',
  // 'south-dakota',
  // 'north-dakota',
  // 'alaska',
  // 'district-of-columbia',
  // 'vermont',
  // 'wyoming',
]
