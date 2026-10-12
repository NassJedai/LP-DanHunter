import { features, faqs } from '../data/content'

// English copy. Shared sections read from here, so this must stay identical to
// the main (€100 assessment) page's wording. `visit` is the /visit page only.
export const en = {
  lang: 'en',

  strip: [
    'Trained & mentored coaches',
    'Health & longevity approach',
    'Real coaching, not an anonymous membership',
    'A structured, measured method',
  ],

  heroVideoTitle: 'Performance & Health Assessment — DH Tervuren',

  equipment: {
    eyebrow: 'Inside the studio',
    title: 'A real space. Real equipment.',
    lead: 'The best equipment to reach your specific goals — a dedicated performance studio built for coached, structured training, not a row of machines you fight over at peak hour.',
    points: [
      'The best equipment, matched to your specific goals',
      'Room to move and be coached properly — not a crowded commercial gym',
    ],
    videoTitle: 'Inside the DH studio — equipment tour',
  },

  diff: {
    eyebrow: 'What makes DH different',
    title: "You don't join a gym. You enter a system.",
    lead: 'At DH, every decision is deliberate — from your first assessment to every adjustment of your program.',
    features,
    wideTitle: 'Health at the heart of performance',
    // [before, emphasised word, after]
    wideBody: [
      "Where others look only at your muscles, we understand what's happening inside: energy, recovery, hormones, inflammation. A performance ",
      'and',
      ' health approach — built to last, not to burn you out in six weeks.',
    ],
  },

  testimonials: {
    eyebrow: 'What our Tervuren members say',
    title: 'Real results. And a real community.',
    rating: 'from 97 Google reviews · Dan Hunter, Tervuren',
    videoTitle: 'Member testimonial — DH Tervuren',
  },

  results: {
    eyebrow: 'Real transformations',
    title: 'Results you can see.',
    lead: 'Real members, real progress — shared with their permission. Not the point of the assessment, but proof the system works.',
    alt: (name) => `${name} — before and after transformation at DH Tervuren`,
  },

  faq: { title: 'The questions we get asked.', items: faqs },

  footer: {
    tagline: 'Personal training, performance & health. We start with you, then build the right strategy around you.',
    hoursTitle: 'Opening hours',
    weekdays: 'Monday – Friday: 06:00 – 21:00',
    weekend: 'Saturday & Sunday: 06:30 – 15:00',
    city: '3080 Tervuren, Belgium',
    rights: 'DH — Do It For You · Performance & Health Assessment, Tervuren. All rights reserved.',
  },

  visit: {
    whatsappMessage: "Hi DH! I'd like to book a visit of the studio in Tervuren.",
    cta: {
      label: 'Book your visit',
      short: 'Book a visit',
      mobile: 'Book your visit',
      topbarMeta: 'Studio visit · Tervuren',
    },
    badge: 'Studio visits · Tervuren · Open 7 days',
    titleA: "Don't take our word for it.",
    titleB: 'Come and see.',
    lede: 'Visit DH in Tervuren. Walk the training floor, see the equipment and talk to a coach about what you want to achieve.',
    ledeStrong: "Interested? Send us a message on WhatsApp and we'll set up your visit.",
    ctaNote: "One message · we'll find a time that suits you",
    trust: [
      { stars: true, label: '5.0 on Google' },
      { value: '97', label: '5-star reviews · Tervuren' },
      { value: '7 days', label: 'Tervuren · 06:00–21:00' },
    ],
    cardKicker: 'Your studio visit',
    cardTitle: 'What to expect',
    includes: [
      'A tour of the training floor and equipment',
      'Meet the coaches behind the DH method',
      'Talk through your goals with a coach',
      'See how we build a plan around you',
    ],
    address: 'Brusselsesteenweg 15B · 3080 Tervuren',
    stepsEyebrow: 'How to book a visit',
    stepsTitle: "Three steps. That's it.",
    steps: [
      { title: 'Send us a message', body: 'Tap the WhatsApp button and say hello. No form to fill in.' },
      { title: 'Pick a time', body: 'We’ll reply and find a slot that fits your week — mornings, evenings or weekends.' },
      {
        title: 'Come and visit',
        body: 'See the space, meet the team and talk through your goals at Brusselsesteenweg 15B, Tervuren.',
      },
    ],
    finalA: 'Come and see it ',
    finalB: 'for yourself.',
    finalBody:
      "Real coaching, a real space and a method built around you. Send us a message on WhatsApp and we'll set up your visit.",
    finalMicro: 'Brusselsesteenweg 15B · Tervuren · Open 7 days',
    faqEyebrow: 'FAQ — Studio visit',
    faqs: [
      {
        q: 'How do I book a visit?',
        a: 'Tap any WhatsApp button on this page and send us a message. We’ll reply and find a time that suits you.',
        defaultOpen: true,
      },
      {
        q: 'Where is the studio, and when is it open?',
        a: 'Brusselsesteenweg 15B, 3080 Tervuren. Open Monday to Friday from 06:00 to 21:00, and Saturday & Sunday from 06:30 to 15:00.',
      },
      {
        q: 'What if I haven’t trained in a long time?',
        a: 'That’s exactly the right moment. We start from where you are today, without judgement, and build a progression suited to your level and your pace.',
      },
      {
        q: 'Do I have to follow a strict diet?',
        a: 'No. We work on realistic, sustainable habits — not punishing diets. The whole point is that it fits into your real life.',
      },
    ],
  },
}
