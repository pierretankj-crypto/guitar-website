/**
 * ============================================================================
 *  OsRocks website content
 * ============================================================================
 *
 *  This is the ONLY file you need to edit to change the words, prices, FAQ,
 *  bio, contact details and legal pages on the site.
 *
 *  - Anything in [SQUARE BRACKETS] is a placeholder that still needs filling in.
 *  - Lines marked "TODO" are values you should double-check before going live.
 *  - Run `npm run placeholders` to list everything that is still left to do.
 *
 *  Tips:
 *  - Keep the quotes around text. If your text contains a double quote ("),
 *    write it as \" or use curly quotes instead.
 *  - Prices are plain numbers (no $ sign). They are used everywhere on the
 *    site, including the FAQ and Terms, so you only change them once here.
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// Business & contact details
// ---------------------------------------------------------------------------

export const business = {
  name: "OsRocks",
  tagline: "Learn the song you love, the right way.",
  url: "https://osrocks.com",
  /** Registered business name and UEN, shown on the Privacy and Terms pages. */
  legalName: "[LEGAL BUSINESS NAME]",
  uen: "[UEN]",
  area: "Hougang",
  country: "Singapore",
  nearestMrt: "Hougang MRT",
};

export const teacher = {
  name: "[TEACHER NAME]",
};

export const contact = {
  /** WhatsApp number with country code, e.g. "+65 9123 4567". */
  whatsapp: "[WHATSAPP NUMBER]",
  /** Message pre-filled when someone taps a WhatsApp button. */
  whatsappMessage: "Hi OsRocks! I'd like to ask about guitar lessons.",
  /** PayNow mobile number or UEN that students pay to, e.g. "+65 9123 4567". */
  paynow: "[PAYNOW NUMBER]",
  /** e.g. "hello@osrocks.com" */
  email: "[EMAIL ADDRESS]",
  /** Full profile URLs, e.g. "https://www.instagram.com/osrocks". */
  instagram: "[INSTAGRAM URL]",
  tiktok: "[TIKTOK URL]",
};

export const booking = {
  /**
   * Your Cal.com event link for the Song Assessment.
   * Either form works: "osrocks/song-assessment" or
   * "https://cal.com/osrocks/song-assessment".
   */
  calLink: "[CAL.COM LINK]",
};

// ---------------------------------------------------------------------------
// Prices & policies (used in the packages section, FAQ and Terms)
// ---------------------------------------------------------------------------

export const pricing = {
  /** Song Assessment price in SGD. */
  assessmentFee: 30,
  lessonMinutes: 60,
};

export type SongPackage = {
  id: string;
  tier: string;
  name: string;
  /** Approximate number of lessons in the package. */
  lessons: number;
  /** "From" price in SGD. */
  priceFrom: number;
  description: string;
  /** Example songs, just to give people an idea. Edit freely. */
  examples: string[];
};

export const packages: SongPackage[] = [
  {
    id: "riff",
    tier: "Tier 1",
    name: "Riff songs",
    lessons: 3,
    priceFrom: 135, // TODO: confirm price
    description:
      "Famous riffs and intros. A quick, satisfying first win that gets you hooked.",
    examples: ["Seven Nation Army", "Smoke on the Water", "Iron Man"],
  },
  {
    id: "full",
    tier: "Tier 2",
    name: "Full songs",
    lessons: 6,
    priceFrom: 265, // TODO: confirm price
    description:
      "Play a whole song from start to finish: chords, strumming, riffs and changes.",
    examples: ["Wonderwall", "Knockin' on Heaven's Door", "Basket Case"],
  },
  {
    id: "lead",
    tier: "Tier 3",
    name: "Lead and solo songs",
    lessons: 10,
    priceFrom: 430, // TODO: confirm price
    description:
      "Lead lines and guitar solos, with the bends, slides and techniques to nail them.",
    examples: ["Sweet Child O' Mine", "Hotel California", "Comfortably Numb"],
  },
];

export const policies = {
  minAge: 8,
  /** Students under this age have a parent stay for the first lesson. */
  parentStaysUnderAge: 12,
  /** Free reschedule if you tell us at least this many hours before. */
  rescheduleNoticeHours: 24,
  /** A package expires after (lessons × this number) weeks. */
  packageExpiryMultiplier: 2,
};

const fee = `$${pricing.assessmentFee}`;

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seo = {
  title: "OsRocks | Guitar Lessons in Hougang | Learn the Song You Love",
  description:
    "1-to-1 electric guitar lessons near Hougang MRT, Singapore. Pick the song you love and learn it step by step, with a teacher who corrects your mistakes as you play. Beginners and kids 8+ welcome.",
};

// ---------------------------------------------------------------------------
// Images
// Replace the files in /public/images with real photos. Keep the same file
// names and roughly the same shape (width ÷ height), or update the numbers
// below to match your new photo.
// ---------------------------------------------------------------------------

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const images = {
  hero: {
    src: "/images/hero-teacher.jpg",
    width: 1200,
    height: 1500,
    alt: `${teacher.name} playing an electric guitar in the OsRocks home studio`,
  },
  teacher: {
    src: "/images/teacher-portrait.jpg",
    width: 1200,
    height: 1500,
    alt: `Portrait of ${teacher.name}, guitar teacher at OsRocks, holding an electric guitar`,
  },
  studio: {
    src: "/images/studio.jpg",
    width: 1600,
    height: 1000,
    alt: "The OsRocks home studio, with electric guitars, an amp and cables ready to play",
  },
} satisfies Record<string, SiteImage>;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Packages", href: "/#packages" },
  { label: "Teacher", href: "/#teacher" },
  { label: "Location", href: "/#location" },
  { label: "FAQ", href: "/#faq" },
];

// ---------------------------------------------------------------------------
// Page sections (in the order they appear)
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "1-to-1 electric guitar lessons in Hougang",
  title: business.tagline,
  /** Part of the title shown in orange with an underline (leave "" for none). */
  titleHighlight: "the right way.",
  intro:
    "Pick the song you want to play, and your teacher teaches it to you step by step, correcting your mistakes as you play.",
  primaryCta: `Book your Song Assessment (${fee})`,
  secondaryCta: "How it works",
  ctaNote: `${pricing.lessonMinutes}-min 1-to-1 lesson. You'll learn the first part of your song.`,
  highlights: ["Complete beginners welcome", "Ages 8 and up", "Guitar & amp provided"],
  /** Small card on the hero photo. */
  badge: { title: "Your song, your pace", text: "Rock, metal, pop and blues" },
};

export const problem = {
  eyebrow: "Why so many beginners give up",
  title: "Videos can show you a song. They can't tell you what you're doing wrong.",
  intro:
    "Most beginners want to play real songs, not boring exercises. But learning from YouTube alone is confusing, and nobody is there to tell you what you're doing wrong.",
  points: [
    {
      title: "Boring exercises first",
      text: "Scales and drills with no song in sight. Motivation fades long before the fun part starts.",
    },
    {
      title: "Nobody watching you play",
      text: "A video can't see your hands. Small mistakes go unnoticed and turn into habits that are hard to unlearn.",
    },
    {
      title: "Too many videos, no plan",
      text: "Ten tutorials, ten different ways to play it. You never know what to practise next, or if you're doing it right.",
    },
  ],
  solution: {
    title: "The OsRocks way",
    text: "You pick the song you love. Your teacher teaches it to you step by step, and corrects your mistakes as you play. Real music from your very first lesson, learned the right way.",
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  title: "From “I wish I could play that” to playing it",
  intro: "Four simple steps, and you're playing part of your song from the very first lesson.",
  steps: [
    {
      title: "Book your Song Assessment",
      text: `Book a ${pricing.lessonMinutes}-min Song Assessment (${fee}) and tell us the song you want to learn.`,
    },
    {
      title: "Play your first part",
      text: "Play for us (or start from zero) and learn the first part of your song in that same lesson.",
    },
    {
      title: "Get your song plan",
      text: "We tell you how many lessons your song will take and quote you a song package.",
    },
    {
      title: "Learn it, week by week",
      text: "Weekly lessons at a fixed time, plus practice-video feedback on WhatsApp between lessons.",
    },
  ],
};

export const packagesSection = {
  eyebrow: "Song packages",
  title: "Pay for the song, not the term",
  intro: "Every song is different, so packages are based on what your song needs.",
  includesTitle: "Every package includes",
  includes: [
    `${pricing.lessonMinutes}-min 1-to-1 lessons`,
    "A simplified arrangement made for your level",
    "1 practice-video review per week on WhatsApp",
  ],
  note: `Your exact package is confirmed after your assessment. The ${fee} assessment fee is credited to your package if you sign up the same day.`,
  cta: `Book your Song Assessment (${fee})`,
};

export const teacherSection = {
  eyebrow: "Meet your teacher",
  title: `Hi, I'm ${teacher.name}`,
  /** One paragraph per item. */
  bio: [
    "[BIO: paragraph 1. Who you are, how long you've been playing and teaching, and what got you into guitar.]",
    "[BIO: paragraph 2. How you teach: patient, song-first, and why you started OsRocks.]",
  ],
  stylesTitle: "Styles I teach",
  styles: ["Rock", "Metal", "Pop", "Blues"],
  levels: "Teaches all levels, from complete beginner",
};

export type Testimonial = {
  quote: string;
  name: string;
  /** e.g. "Age 14 · learned Wonderwall" or "Parent of Ethan, 9" */
  detail: string;
  /**
   * Optional short video clip. Two options:
   *   { kind: "file", src: "/videos/ethan.mp4", poster: "/images/ethan-poster.jpg" }
   *     (put the files in /public/videos and /public/images; vertical 9:16 works best)
   *   { kind: "youtube", id: "dQw4w9WgXcQ" }
   *     (a YouTube video or Short; use the ID from the end of the link)
   */
  video?:
    | { kind: "file"; src: string; poster: string; captions?: string }
    | { kind: "youtube"; id: string };
};

export const testimonialsSection: {
  eyebrow: string;
  title: string;
  items: Testimonial[];
} = {
  eyebrow: "Student stories",
  title: "Real songs, real progress",
  items: [
    {
      quote:
        "[TESTIMONIAL 1: one or two sentences from a student about the song they learned and how the lessons felt.]",
      name: "[STUDENT NAME]",
      detail: "[DETAIL, e.g. Age 14 · learned Smells Like Teen Spirit]",
    },
    {
      quote:
        "[TESTIMONIAL 2: a parent's view, e.g. how their child looks forward to lessons and practises at home.]",
      name: "[PARENT NAME]",
      detail: "[DETAIL, e.g. Parent of a 9-year-old student]",
    },
    {
      quote:
        "[TESTIMONIAL 3: an adult beginner who always wanted to play, and finally can.]",
      name: "[STUDENT NAME]",
      detail: "[DETAIL, e.g. Adult beginner · learned Wonderwall]",
    },
  ],
};

export const locationSection = {
  eyebrow: "Location",
  title: `Home studio near ${business.nearestMrt}`,
  text: "Lessons happen in a quiet, comfortable home studio near Hougang MRT on the North East Line. The exact address is sent after booking.",
  addressNote: "Exact address sent after booking",
  gearTitle: "No gear? No problem.",
  gearText:
    "A guitar, amp and cables are provided, so you don't need your own gear to start. Just bring yourself and the song you love.",
  gear: ["Electric guitar", "Amp", "Cables"],
};

export type Faq = { question: string; answer: string };

export const faqSection: { eyebrow: string; title: string; items: Faq[] } = {
  eyebrow: "FAQ",
  title: "Questions parents and students ask",
  items: [
    {
      question: "Do I need my own guitar?",
      answer:
        "No. We provide a guitar, amp and cables at the studio, so you can start without buying any gear.",
    },
    {
      question: "What age do you teach?",
      answer: `Students aged ${policies.minAge} and up. For students under ${policies.parentStaysUnderAge}, a parent stays for the first lesson.`,
    },
    {
      question: "I've never played before. Is that okay?",
      answer:
        "Yes! Complete beginners are very welcome. We start from zero and teach you everything you need for your song.",
    },
    {
      question: "What if my song is too hard?",
      answer:
        "We'll do a simplified version made for your level, or build up to the full version step by step.",
    },
    {
      question: "How long until I can play my song?",
      answer:
        "It depends on the song and how much you practise. We give you an estimate after your Song Assessment.",
    },
    {
      question: "How do I pay?",
      answer:
        "By PayNow, before the lesson. Song packages are paid in full before the first lesson of the package.",
    },
    {
      question: "What is your cancellation policy?",
      answer: `You can reschedule for free up to ${policies.rescheduleNoticeHours} hours before your lesson. Inside ${policies.rescheduleNoticeHours} hours, the lesson is counted as used. If we cancel, you get a free make-up lesson.`,
    },
    {
      question: "Can I get a refund?",
      answer: `There are no refunds for unused lessons once a package has started, except for medical reasons with a doctor's note. Packages expire after ${policies.packageExpiryMultiplier}× their length in weeks (for example, a 3-lesson package expires after ${3 * policies.packageExpiryMultiplier} weeks).`,
    },
  ],
};

export const bookingSection = {
  eyebrow: "Book now",
  title: "Book your Song Assessment",
  intro: `${pricing.lessonMinutes} minutes, 1-to-1, ${fee}. Pick a time that suits you and tell us the song you want to learn.`,
  paymentNote: `After booking, PayNow ${fee} to ${contact.paynow} to confirm your slot.`,
  steps: ["Pick a time below", `PayNow ${fee} to confirm`, "Get the studio address"],
  fallbackText: "Calendar not loading?",
  fallbackLink: "Open the booking page",
  questionsText: "Questions first? Chat with us on WhatsApp.",
};

export const footer = {
  blurb: "1-to-1 electric guitar lessons near Hougang MRT, Singapore.",
  whatsappCta: "Chat on WhatsApp",
};

// ---------------------------------------------------------------------------
// Legal pages
// PLACEHOLDER TEXT: have these reviewed before going live. Each section has a
// heading and a list of blocks. A block is a paragraph (text) or a bullet
// list (an array of text).
// ---------------------------------------------------------------------------

export type LegalSection = { heading: string; body: (string | string[])[] };

export type LegalPage = {
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const operator = `${business.name} is operated by ${business.legalName} (UEN ${business.uen}), Singapore`;

export const privacyPolicy: LegalPage = {
  title: "Privacy Policy",
  description: `How ${business.name} collects, uses and protects your personal data under Singapore's PDPA.`,
  lastUpdated: "[LAST UPDATED DATE]",
  intro: `${operator} ("${business.name}", "we", "us"). We respect your privacy and handle personal data in line with Singapore's Personal Data Protection Act 2012 (PDPA). This policy explains what we collect, why, and the choices you have.`,
  sections: [
    {
      heading: "1. Personal data we collect",
      body: [
        "We only collect what we need to run your lessons:",
        [
          "Contact details: name, phone or WhatsApp number and email address.",
          "Booking details: the times you book and anything you tell us in the booking form, such as the song you want to learn.",
          "For students under 18: the student's name and age, and the parent or guardian's contact details.",
          "Lesson information: your progress notes and the practice videos you send us on WhatsApp.",
          "Payment information: PayNow payment confirmations (name, amount and reference). We never see or store your bank login or card details.",
        ],
      ],
    },
    {
      heading: "2. How we use your data",
      body: [
        [
          "To schedule, confirm, reschedule and deliver your lessons.",
          "To send you the studio address after you book.",
          "To give feedback on your practice videos.",
          "To confirm payments and keep basic business records.",
          "To reply to your questions.",
        ],
        "We will not send you marketing messages unless you have agreed to receive them, and we respect the Do Not Call (DNC) Registry.",
      ],
    },
    {
      heading: "3. Consent",
      body: [
        "By booking a lesson or contacting us, you consent to us collecting and using your personal data for the purposes above. If the student is under 18, a parent or guardian should make the booking and gives consent on the student's behalf.",
        "We will ask for separate written consent before using any photo, video or testimonial of a student on our website or social media. For students under 18, we ask the parent or guardian.",
      ],
    },
    {
      heading: "4. Third-party services",
      body: [
        "We use trusted services to run the business. They process your data on our behalf and may store it outside Singapore, with protection comparable to the PDPA:",
        [
          "Cal.com, for online booking.",
          "WhatsApp (Meta), for messages and practice-video feedback.",
          "Your bank's PayNow service, for payments.",
          "Vercel, which hosts this website.",
        ],
        "We do not sell or rent your personal data to anyone.",
      ],
    },
    {
      heading: "5. Cookies",
      body: [
        "This website does not use advertising or tracking cookies. The embedded Cal.com booking calendar may set cookies it needs to work. See Cal.com's privacy policy for details.",
      ],
    },
    {
      heading: "6. How long we keep your data",
      body: [
        "We keep your data only as long as we need it for the purposes above or as required by law (for example, financial records). Practice videos are deleted from our devices once feedback has been given, unless you ask us to keep them. When data is no longer needed, we delete it securely.",
      ],
    },
    {
      heading: "7. Protecting your data",
      body: [
        "We take reasonable security steps to protect your data, such as password-protected devices and accounts with two-factor authentication. If a data breach happens that is likely to cause you significant harm, we will notify you and the PDPC as required by law.",
      ],
    },
    {
      heading: "8. Your rights",
      body: [
        "You can ask to see the personal data we hold about you, ask us to correct it, or withdraw your consent at any time. If you withdraw consent, we may not be able to continue providing lessons. We will respond within 30 days.",
      ],
    },
    {
      heading: "9. Contact our Data Protection Officer",
      body: [
        `For any privacy questions or requests, contact our Data Protection Officer, [DPO NAME], at ${contact.email}.`,
      ],
    },
    {
      heading: "10. Changes to this policy",
      body: [
        "We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.",
      ],
    },
  ],
};

export const termsOfService: LegalPage = {
  title: "Terms of Service",
  description: `The terms for booking and taking guitar lessons with ${business.name}.`,
  lastUpdated: "[LAST UPDATED DATE]",
  intro: `${operator} ("${business.name}", "we", "us"). These terms apply when you book a Song Assessment or song package with us. By booking, you agree to these terms. If the student is under 18, the parent or guardian who books agrees to them on the student's behalf.`,
  sections: [
    {
      heading: "1. Lessons",
      body: [
        `All lessons are 1-to-1, ${pricing.lessonMinutes} minutes long, and take place at our home studio near ${business.nearestMrt}. The exact address is shared only after you book. Please keep it private.`,
        "A guitar, amp and cables are provided for use during lessons. Please treat the equipment with care. We may ask you to cover the cost of damage caused on purpose or through carelessness.",
      ],
    },
    {
      heading: "2. Song Assessment",
      body: [
        `The Song Assessment costs ${fee}. Your slot is confirmed once we receive your PayNow payment. If you sign up for a song package on the same day as your assessment, the ${fee} is credited to the package.`,
      ],
    },
    {
      heading: "3. Song packages and payment",
      body: [
        "After your assessment, we recommend a song package and confirm its number of lessons and price. Prices on the website are starting prices.",
        "All payments are made by PayNow before the lesson. Packages are paid in full before the first lesson of the package.",
        "Lessons are held weekly at a fixed time agreed with you.",
      ],
    },
    {
      heading: "4. Rescheduling and cancellations",
      body: [
        [
          `You can reschedule for free if you tell us at least ${policies.rescheduleNoticeHours} hours before your lesson.`,
          `If you cancel or reschedule less than ${policies.rescheduleNoticeHours} hours before, or don't show up, the lesson is counted as used.`,
          "If you arrive late, the lesson still ends at the scheduled time.",
          "If we need to cancel, you get a free make-up lesson.",
        ],
      ],
    },
    {
      heading: "5. Refunds and package expiry",
      body: [
        "There are no refunds for unused lessons once a package has started, except for medical reasons supported by a doctor's note.",
        `Each package expires after ${policies.packageExpiryMultiplier}× its length in weeks, counted from the first lesson. For example, a 3-lesson package expires ${3 * policies.packageExpiryMultiplier} weeks after the first lesson. Lessons not used by then are forfeited.`,
      ],
    },
    {
      heading: "6. Young students",
      body: [
        `We teach students aged ${policies.minAge} and up. For students under ${policies.parentStaysUnderAge}, a parent or guardian must stay for the first lesson. Parents and guardians are responsible for their child before and after lessons.`,
      ],
    },
    {
      heading: "7. Practice-video feedback",
      body: [
        "Each package includes one practice-video review per week on WhatsApp while the package is active. Feedback is usually given within a few days.",
      ],
    },
    {
      heading: "8. Photos and videos",
      body: [
        "We will never post photos or videos of students without separate written consent (from a parent or guardian for students under 18). You can withdraw that consent at any time.",
      ],
    },
    {
      heading: "9. Health and safety",
      body: [
        "Please let us know about any health condition or injury that may affect your playing. Playing guitar is generally low-risk, but you take part at your own risk to the extent allowed by law.",
      ],
    },
    {
      heading: "10. Liability",
      body: [
        "To the extent allowed by law, our total liability to you is limited to the amount you paid for the package concerned. Nothing in these terms limits liability that cannot be limited under Singapore law.",
      ],
    },
    {
      heading: "11. Changes and governing law",
      body: [
        "We may update these terms from time to time. Changes will not affect packages already paid for. These terms are governed by the laws of Singapore.",
        `Questions? Contact us at ${contact.email} or on WhatsApp at ${contact.whatsapp}.`,
      ],
    },
  ],
};
