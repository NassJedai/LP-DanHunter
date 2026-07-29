// Centralised copy so sections stay declarative and easy to edit.

// Booking destination for every "Book" / €100 CTA (trainin.app scheduling widget).
export const BOOKING_URL =
  'https://danhunter.trainin.app/widget/schedule?listing=LQBG2O&location=N8N3W'

// Client testimonial video, hosted on Cloudinary.
// The f_auto,q_auto,w_720 transformation transcodes the 97 MB master down to
// ~8.5 MB and serves the best format per browser. Keep it — linking the raw
// upload would ship 97 MB to every visitor.
export const TESTIMONIAL_VIDEO_URL =
  'https://res.cloudinary.com/dluvilfsx/video/upload/f_auto,q_auto,w_720/v1784275704/4_caption_1_hwn3sl.mp4'

// Free guide PDF, hosted on Google Drive.
// Must stay shared as "Anyone with the link" or visitors hit a request-access wall.
// For a forced download instead of the Drive viewer, swap for:
// https://drive.google.com/uc?export=download&id=1G5Fqx6alqYZHVCdqpmlAHPVYvGdt7DsK
export const EBOOK_URL =
  'https://drive.google.com/file/d/1G5Fqx6alqYZHVCdqpmlAHPVYvGdt7DsK/view?usp=drive_link'

export const features = [
  {
    icon: 'users',
    title: 'We start with you',
    body: 'Goals, lifestyle, stress, sleep, energy, nutrition, physical level. Not an off-the-shelf program.',
  },
  {
    icon: 'activity',
    title: 'A real strategy',
    body: 'A periodised plan, clear priorities, adjustments as you evolve. No improvising.',
  },
  {
    icon: 'medal',
    title: 'Coaches who are mentored',
    body: 'Internal training, standards, a coaching-level system. Real thinking behind every client.',
  },
  {
    icon: 'badgeCheck',
    title: 'Quality control',
    body: 'Exercises, progression, adaptation to your pain, recovery and constraints. Nothing left to chance.',
  },
  {
    icon: 'shield',
    title: 'Whole-person support',
    body: 'Training, nutrition, sleep, energy, recovery, habits. A body that’s stronger and built to last.',
  },
  {
    icon: 'chart',
    title: 'Progress you can measure',
    body: 'We don’t coach blind. We read your body’s signals and track what’s actually improving.',
  },
]

export const steps = [
  {
    num: '01',
    when: 'Before · at home (15–20 min)',
    title: 'The pre-assessment',
    body: 'You complete a full online questionnaire: goals, lifestyle, stress, sleep, energy, eating habits, history and training level. Think of it as a full "health MOT" of where you are.',
  },
  {
    num: '02',
    when: 'During · in-studio with your coach',
    title: 'The analysis',
    body: 'Body-composition analysis, an in-depth conversation about your answers, and an assessment of your movement and capacity. We read your strengths, weaknesses and priorities.',
  },
  {
    num: '03',
    when: 'After · what you walk away with',
    title: 'Your starting point',
    body: 'A clear picture of where you are, what’s really blocking you, concrete priorities and our recommendation for moving forward. Not a workout — a real plan.',
  },
]

export const testimonials = [
  {
    initial: 'A',
    name: "Ale'",
    meta: 'Local Guide · Google review',
    quote:
      '"I came to Dan Hunter’s Training Center dealing with long-lasting injuries, no energy, and honestly very little discipline. I always had an excuse not to do sports — no time, too tired, work, life, you name it."',
  },
  {
    initial: 'K',
    name: 'Kelly Sedgman',
    meta: 'Google review',
    quote:
      '"I had never managed to stick to a gym program until finding DH. This is the most inclusive, friendly and supportive gym you will find. I am now physically and mentally stronger than I have ever been."',
  },
  {
    initial: 'G',
    name: 'Gert R',
    meta: 'Google review',
    quote:
      '"I’ve been a member for about 6 months and I’m still blown away by the results I’m achieving. This place is so much more than a regular gym — it’s a real transformation center. The progress you make here is unmatched."',
  },
  {
    initial: 'V',
    name: 'Véronique Van De Kerckhove',
    meta: 'Google review',
    quote:
      '"I started training with Coach Tristan and it has been an incredible experience from day one. The center takes a true 360-degree approach — focusing not only on training, but also on nutrition and daily habits."',
  },
  {
    initial: 'C',
    name: 'Charlotte',
    meta: 'Google review',
    quote:
      '"As someone who doesn’t usually enjoy working out, this gym has completely changed my mind. The trainers make every session something I genuinely look forward to. 10/10, would definitely recommend."',
  },
  {
    initial: 'T',
    name: 'Teodora Ioan',
    meta: 'Local Guide · Google review',
    quote:
      '"Amazing team of coaches who will go with you all the way to your objectives! I’ve been training for 7 months and I can see how my body transformed — I’ve lost body fat and gained muscle and definition."',
  },
]

export const faqs = [
  {
    q: 'Is the assessment a workout?',
    a: 'No. It’s a real starting point: we analyse your situation, understand what’s blocking you, and give you clear priorities. The training comes after, inside a properly structured method.',
    defaultOpen: true,
  },
  {
    q: 'Why €100 and not free?',
    a: 'Because it’s a genuine, in-depth analysis with a coach who takes the time to understand you — not a sales demo. You leave with a clear picture and concrete priorities, whether you continue with us or not.',
  },
  {
    q: 'What if I haven’t trained in a long time?',
    a: 'That’s exactly the right moment. We start from where you are today, without judgement, and build a progression suited to your level and your pace.',
  },
  {
    q: 'Do I have to follow a strict diet?',
    a: 'No. We work on realistic, sustainable habits — not punishing diets. The whole point is that it fits into your real life.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'It depends on your starting point — which is exactly what the assessment defines. With a structured method, we aim for concrete progress within the first few weeks, and above all progress that lasts.',
  },
  {
    q: 'How do I book?',
    a: 'Click any “Book my assessment” button to reserve and pay for your €100 session in a few seconds. We run a limited number of assessments each week to protect the quality — so it’s worth booking while there’s still space.',
  },
]

export const includes = [
  { b: 'A full online pre-assessment', rest: '— goals, lifestyle, sleep, stress, energy, nutrition and history.' },
  { b: 'InBody body-composition analysis', rest: '— a precise baseline, not a guess.' },
  {
    b: 'A movement & structural-balance screen',
    rest: '— we spot your limitations, pain points and imbalances.',
  },
  { b: 'An in-depth conversation', rest: 'with a trained coach — 60 minutes just for you.' },
  { b: 'Your priorities + our recommendation', rest: '— a clear, actionable starting plan.' },
]
