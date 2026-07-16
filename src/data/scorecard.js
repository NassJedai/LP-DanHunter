// Performance & Health Scorecard — questions, scoring bands and category copy.

export const QUESTIONS = [
  { c: 'Energy', t: 'I wake up feeling rested and genuinely energised.' },
  { c: 'Energy', t: 'My energy stays stable through the day — no afternoon crash.' },
  { c: 'Sleep', t: 'I fall asleep easily and sleep through most nights.' },
  { c: 'Sleep', t: 'I get 7+ hours of quality sleep on a normal week.' },
  { c: 'Recovery', t: 'I recover well between sessions, without lingering soreness or fatigue.' },
  { c: 'Recovery', t: 'I rarely feel run-down, niggly, or on the edge of injury.' },
  { c: 'Training', t: 'My training follows a clear, progressive plan — not random workouts.' },
  { c: 'Training', t: "I'm consistently getting stronger or fitter, not stuck at a plateau." },
  { c: 'Nutrition', t: "My nutrition supports my goals — I'm not running on willpower alone." },
  { c: 'Nutrition', t: 'My body composition is roughly where I want it, and stable.' },
  { c: 'Stress & drive', t: "I manage stress well and it doesn't derail my training or eating." },
  { c: 'Stress & drive', t: 'I feel clear and motivated about how to reach my goals.' },
]

export const OPTIONS = [
  ['Never', 0],
  ['Rarely', 1],
  ['Sometimes', 2],
  ['Often', 3],
  ['Always', 4],
]

export const CATEGORY_ORDER = ['Energy', 'Sleep', 'Recovery', 'Training', 'Nutrition', 'Stress & drive']

export const CATEGORY_INFO = {
  Energy:
    "Low energy is usually the first signal that something upstream — sleep, blood sugar, stress or recovery — is off. It's the most fixable, and the fastest to feel.",
  Sleep:
    "Sleep is where adaptation actually happens. Without it, training and nutrition both underperform. It's often the single highest-leverage change.",
  Recovery:
    'If recovery is lagging, more training won’t help — it digs the hole deeper. The fix is smarter programming and supporting the body between sessions.',
  Training:
    'Random effort plateaus fast. A periodised, progressive plan built around you is what turns work into steady, measurable progress.',
  Nutrition:
    "Relying on willpower isn't a strategy. Realistic, structured nutrition — matched to your body and life — is what makes results hold.",
  'Stress & drive':
    'Chronic stress quietly blocks fat loss, recovery and sleep. Managing it, plus a clear plan, removes the friction between you and your goal.',
}

export const BANDS = [
  {
    min: 0,
    t: 'Running on empty',
    d: "Your body is sending clear signals. You're not lacking discipline — you're missing a system. The good news: this is exactly where the biggest, fastest gains are.",
  },
  {
    min: 41,
    t: 'Getting by',
    d: "You're putting in the work but leaving results on the table. A few targeted changes to the right areas would change your trajectory.",
  },
  {
    min: 61,
    t: 'Building momentum',
    d: "Solid foundation. You're doing a lot right — now it's about sharpening the weak links to unlock the next level.",
  },
  {
    min: 81,
    t: 'Dialled in',
    d: "Strong across the board. At this level it's the last few percent that matter — and that's exactly what a proper assessment finds.",
  },
]

// Each category is scored by 2 questions × max 4 points.
export const CATEGORY_MAX = 8
