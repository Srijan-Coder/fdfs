/**
 * FLAWLESS DANCE & FITNESS STUDIO
 * Single Source of Truth for all Website Content & Copy
 * 
 * Edit this file to update text, links, social channels, or studio details
 * without needing to touch any UI components.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ClassItem {
  id: string;
  title: string;
  previewImage: string;
  tagline: string;
  batches: string;
  linkText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  instagram?: string;
  badge?: string;
}

export interface StudioLocation {
  id: string;
  name: string;
  address: string;
  hours: string;
  mapsUrl: string;
  phone: string;
  embedUrl: string;
}

export interface NewsItem {
  id: string;
  category: string;
  date: string;
  headline: string;
  excerpt: string;
  image: string;
  readLink: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  badge: string;
  quote: string;
  source: string;
  stars: number;
}

export interface VideoReviewItem {
  id: string;
  name: string;
  badge: string;
  quote: string;
  videoSrc: string;
  thumbnail: string;
  duration: string;
  isVertical: boolean;
  highlightText: string;
}

export interface StudioReelItem {
  id: string;
  title: string;
  category: string;
  description: string;
  videoSrc: string;
  thumbnail: string;
  duration: string;
  isVertical: boolean;
}

export interface YouTubeShowcaseItem {
  id: string;
  youtubeId: string;
  title: string;
  style: string;
  image: string;
  duration: string;
  channelLink: string;
}

export const siteConfig = {
  domain: "flawlessstudio.in",
  brandName: "Flawless Dance & Fitness Studio",
  shortName: "FDFS",
  whatsappNumber: "918850120018",
  phones: ["9892226202", "8850120018"],
  email: "flawlessdance123@gmail.com",
  instagramHandle: "@flawless_dfs",
  instagramUrl: "https://www.instagram.com/flawless_dfs?xtok=MTZncjg5d2lxb2t1dA%3D%3D&utm_source=qr",
  directorInstagramUrl: "https://www.instagram.com/ahvein_misrrah?exln=eW04cWJkdXA4dDlo&utm_source=qr",
  youtubeUrl: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
  seo: {
    title: "Flawless Dance & Fitness Studio | Dance & Zumba Classes in Ghansoli, Navi Mumbai",
    description: "Dance, Zumba, Fitness & Yoga classes for all ages in Ghansoli, Navi Mumbai. Certified instructors, reality show champions, and two expansive studios in Sector 16 & Sector 5.",
  },
  
  // Navigation
  navigation: [
    { label: "Trial Pass", href: "/trial" },
    { label: "Timetable", href: "/schedule" },
    { label: "Classes", href: "/classes" },
    { label: "Weddings", href: "/wedding" },
    { label: "Mentors", href: "/team" },
    { label: "Studios", href: "/studios" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  // Hero Section
  hero: {
    statement: "Building confidence through",
    interactiveDisciplines: [
      { label: "Dance", targetId: "class-dance", href: "/classes#dance" },
      { label: "Zumba", targetId: "class-zumba", href: "/classes#zumba" },
      { label: "Fitness", targetId: "class-fitness", href: "/classes#fitness" },
      { label: "Yoga", targetId: "class-yoga", href: "/classes#yoga" },
    ],
    discoverLabel: "Discover",
    discoverHref: "#about",
    slides: [
      {
        id: "1",
        image: "/media/hero-1.jpg",
        caption: "Now enrolling - Sector 16 & Sector 5, Ghansoli",
        subcaption: "Flagship Dance Academy & Crew",
      },
      {
        id: "2",
        image: "/media/hero-2.jpg",
        caption: "High-Energy Urban Street & Hip Hop Training",
        subcaption: "Mentored by Gold Medalist Faculty",
      },
      {
        id: "3",
        image: "/media/hero-3.jpg",
        caption: "State-of-the-Art Acoustic Studios & Wooden Decks",
        subcaption: "Two Convenient Campuses in Ghansoli",
      },
      {
        id: "4",
        image: "/media/hero-4.jpg",
        caption: "Annual Stage Showcases & Mega Productions",
        subcaption: "Building Stage Confidence for All Ages",
      },
      {
        id: "5",
        image: "/media/hero-5.jpg",
        caption: "Morning Zumba, Cardio Fitness & Yoga Flow",
        subcaption: "Daily Morning & Afternoon Batches",
      },
    ],
  },

  // About Section ("Inside (the) Studio")
  about: {
    label: "/About",
    headingPrefix: "Inside",
    headingParenthesized: "the",
    headingSuffix: "Studio",
    leadSentence: "Dance and fitness studio in Ghansoli, Navi Mumbai for kids, teenagers, adults and ladies, from first-timers to experienced dancers.",
    body: "Group classes and one-to-one training with experienced instructors and a friendly, high-energy atmosphere across two state-of-the-art Ghansoli campuses.",
    ctaLabel: "More about us",
    ctaHref: "/team",
  },

  // /Classes Section (Gang.tv capabilities-style stacked hover rows)
  classesSection: {
    label: "/Classes",
    title: "Disciplines & Training",
    classes: [
      {
        id: "dance",
        title: "Dance",
        previewImage: "/media/class-dance.jpg",
        tagline: "Bollywood, Hip Hop, Contemporary, Jazz, Open Style, Freestyle, Classical, Folk, Bhangra, Garba, Salsa, Locking, Popping, Krumping, Waacking, Beat Kill.",
        batches: "Evening batches for kids, teenagers and adults.",
        linkText: "Enquire",
      },
      {
        id: "zumba",
        title: "Zumba & Fitness",
        previewImage: "/media/class-zumba.jpg",
        tagline: "High-energy cardio routines, rhythmic conditioning, and fat-burning choreography.",
        batches: "Morning batches.",
        linkText: "Enquire",
      },
      {
        id: "yoga",
        title: "Yoga",
        previewImage: "/media/class-yoga.jpg",
        tagline: "Asanas, core stability, deep spinal flexibility, and meditative flow with certified yoga trainers.",
        batches: "Morning batches.",
        linkText: "Enquire",
      },
      {
        id: "ladies",
        title: "Ladies Batches",
        previewImage: "/media/class-ladies.jpg",
        tagline: "Private, supportive, and fun dance sessions tailored exclusively for homemakers and working women.",
        batches: "Afternoon dance batches for ladies.",
        linkText: "Enquire",
      },
    ] as ClassItem[],
  },

  // Schedule Block
  schedule: {
    label: "/Schedule",
    title: "Weekly Timetable",
    note: "Studio open Monday to Sunday, 7:00 AM to 10:30 PM across Sector 16 and Sector 5 branches.",
    slots: [
      {
        slot: "Morning",
        disciplines: "Fitness & Zumba, Yoga",
        description: "Cardio workouts, morning stretch, and mindful conditioning before your day begins.",
      },
      {
        slot: "Afternoon",
        disciplines: "Ladies Dance Batches",
        description: "Specialized private sessions focusing on Bollywood routines, belly dance, and fitness.",
      },
      {
        slot: "Evening",
        disciplines: "Kids, Teenagers & Adults Dance",
        description: "Age-separated progressive batches in Hip Hop, Contemporary, Bollywood, and Freestyle.",
      },
    ],
  },

  // /Team Section
  teamSection: {
    label: "/Team",
    title: "Master Faculty",
    lead: "Mentored by gold medalists, certified yoga teachers, and stage performers who give personal attention to every student.",
    members: [
      {
        id: "avinash",
        name: "Avinash Mishra",
        role: "Owner & Head Instructor",
        photo: "/media/team-avinash.jpg",
        bio: "Teaches Bollywood, Open Style, Contemporary, Hip Hop, and Zumba. Certified yoga trainer with 12+ years of choreography and reality television mentorship experience.",
        instagram: "https://www.instagram.com/ahvein_misrrah?exln=eW04cWJkdXA4dDlo&utm_source=qr",
        badge: "Founder & Director",
      },
      {
        id: "ankit",
        name: "Ankit Gupta",
        role: "Instructor",
        photo: "/media/team-ankit.jpg",
        bio: "Indian Hip Hop gold medalist who has appeared on a national television reality show with his dance group. Specializes in Hip Hop, Freestyle, Bollywood, and Jazz.",
        badge: "Indian Gold Medalist",
      },
      {
        id: "tisa",
        name: "Tisa Pal",
        role: "Instructor",
        photo: "/media/team-tisa.jpg",
        bio: "Teaches Bollywood, Open Style, Contemporary, Hip Hop, and Zumba. Certified yoga trainer specializing in flexibility, expressions, and high-energy routines.",
        badge: "Certified Faculty",
      },
    ] as TeamMember[],
  },

  // /Studios Section (Gang.tv footer-style huge stacked list)
  studiosSection: {
    label: "/Studios",
    title: "Two Ghansoli Locations",
    studios: [
      {
        id: "sector16",
        name: "Sector 16, Main Branch",
        address: "First Floor, Krishna Vihar, opp. Bus Stop, Sector 16, Talvali, Ghansoli Gaon, Ghansoli, Navi Mumbai, Maharashtra 400701, India",
        hours: "7:00 AM to 10:30 PM",
        mapsUrl: "https://maps.app.goo.gl/bWJzXbNUFJLfuCjV6",
        phone: "8850120018",
        embedUrl: "https://maps.google.com/maps?q=Krishna+Vihar+Sector+16+Ghansoli&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
      {
        id: "sector5",
        name: "Sector 5",
        address: "Plot no. 64, Tilak School Rd, opposite Tilak International School, Sector 5, Ghansoli, Navi Mumbai 400701",
        hours: "7:00 AM to 10:30 PM",
        mapsUrl: "https://maps.app.goo.gl/dwS4XrbeRN7YVjvH9",
        phone: "9892226202",
        embedUrl: "https://maps.google.com/maps?q=Plot+64+Tilak+School+Road+Sector+5+Ghansoli&t=&z=15&ie=UTF8&iwloc=&output=embed",
      },
    ] as StudioLocation[],
  },

  // Fees & Policies
  feesAndPolicies: {
    label: "/Fees & Policies",
    notice: "We do not publish fixed price lists online because fees depend on the class, batch, and package. Please contact us directly for transparent pricing.",
    buttonLabel: "Call or WhatsApp for fees",
    nonRefundableNotice: "Fees once paid are non-refundable.",
    classEtiquette: [
      "Arrive 5–10 minutes before batch start time.",
      "Wear comfortable dance/workout attire and clean indoor sports shoes.",
      "Carry your own water bottle and sweat towel.",
      "Keep mobile phones in silent mode inside studio rooms.",
      "Inform the instructor prior to class of any physical injury or health condition.",
      "Outdoor footwear is strictly prohibited on sprung wooden studio decks.",
    ],
  },

  // Studio Life News Cards ("What's up" in gang.tv)
  studioLife: {
    label: "/Studio Life",
    title: "News & Events",
    articles: [
      {
        id: "performance",
        category: "Showcase",
        date: "October 2026",
        headline: "Annual Stage Show & Competition Drills",
        excerpt: "Students from our evening batches prepare for upcoming regional dance battles and stage choreographies.",
        image: "/media/news-performance.jpg",
        readLink: "/gallery",
      },
      {
        id: "workshop",
        category: "Workshop",
        date: "Weekend Special",
        headline: "Street Hip Hop & Waacking Masterclasses",
        excerpt: "An intensive weekend workshop breaking down popping grooves, fast footwork, and musicality.",
        image: "/media/news-workshop.jpg",
        readLink: "/classes",
      },
      {
        id: "new-batch",
        category: "Admissions",
        date: "Now Enrolling",
        headline: "Morning Zumba & Afternoon Ladies Batches Open",
        excerpt: "Limited registrations open for morning fitness routines and ladies-only afternoon Bollywood batches.",
        image: "/media/news-batch.jpg",
        readLink: "/contact",
      },
    ] as NewsItem[],
  },

  // Real Studio Reels & Direct Videos (Captured directly at FDFS)
  studioReels: [
    {
      id: "reel-studio-tour",
      title: "Inside FDFS: Studio Ambience & Dance Floor",
      category: "Facility Tour",
      description: "Our spacious, air-conditioned studio with wooden sprung flooring, full-length mirrors, and immersive sound.",
      videoSrc: "/media/studio-tour-small.mp4",
      thumbnail: "/media/thumbnails/studio-tour-small.jpg",
      duration: "00:09",
      isVertical: true,
    },
    {
      id: "reel-kids-arrival",
      title: "Kids Academy: Coming to Class with Full Energy",
      category: "Kids Batch",
      description: "Beaming smiles and disciplined footwork as young dancers arrive for evening batch practice.",
      videoSrc: "/media/kids-arrival.mp4",
      thumbnail: "/media/thumbnails/kids-arrival.jpg",
      duration: "00:16",
      isVertical: true,
    },
    {
      id: "reel-dance-routine",
      title: "Choreography Drill: Studio Routine Showcase",
      category: "Master Choreography",
      description: "Dynamic routine breakdown, musical timing, and synchronized group energy in real time.",
      videoSrc: "/media/dance-routine.mp4",
      thumbnail: "/media/thumbnails/dance-routine.jpg",
      duration: "00:11",
      isVertical: true,
    },
  ] as StudioReelItem[],

  // Video Testimonials (Audio Denoised & Cleaned with FFT Noise Cancellation)
  videoReviews: [
    {
      id: "v-rev-3",
      name: "Shefali Patil",
      badge: "Zumba & Fitness Member",
      highlightText: "Sleep quality improved & daily stress gone",
      quote: "I joined Zumba for exercise, but after joining FDFS I gained so many benefits: sleep quality improved, learned to dance, and 1 hour of complete enjoyment away from daily workload. Motivating trainers Avinash Sir & Deepak Sir always push our limits!",
      videoSrc: "/media/reviews/review-3.mp4",
      thumbnail: "/media/thumbnails/review-3.jpg",
      duration: "01:13",
      isVertical: true,
    },
    {
      id: "v-rev-1",
      name: "Vivaan & Family",
      badge: "Kids Dance Academy",
      highlightText: "The energy is pure and we love it",
      quote: "It's been just a short time here, but the energy is very nice, the trainers are caring, and we absolutely love the classes!",
      videoSrc: "/media/reviews/review-1.mp4",
      thumbnail: "/media/thumbnails/review-1.jpg",
      duration: "00:10",
      isVertical: true,
    },
    {
      id: "v-rev-4",
      name: "Rusha",
      badge: "Dance & Conditioning Student",
      highlightText: "The trainers are just flawless",
      quote: "The trainers are just flawless! They help us grow, stay energetic and motivated for the day. If you are looking for workout sessions, this is the right place for you.",
      videoSrc: "/media/reviews/review-4.mp4",
      thumbnail: "/media/thumbnails/review-4.jpg",
      duration: "00:18",
      isVertical: true,
    },
    {
      id: "v-rev-5",
      name: "Manalma",
      badge: "1.5 Years Senior FDFS Member",
      highlightText: "My sacred daily me-time after work",
      quote: "1.5 years with FDFS! You really need to meet these trainers because they motivate you and keep your energy soaring. It is my dedicated me-time after work.",
      videoSrc: "/media/reviews/review-5.mp4",
      thumbnail: "/media/thumbnails/review-5.jpg",
      duration: "00:25",
      isVertical: true,
    },
    {
      id: "v-rev-2",
      name: "Shweta K.",
      badge: "Ladies Batch Student",
      highlightText: "Friendly, positive & patient teaching",
      quote: "The instructors give personal attention to every beginner. The environment is supportive, friendly, and refreshing.",
      videoSrc: "/media/reviews/review-2.mp4",
      thumbnail: "/media/thumbnails/review-2.jpg",
      duration: "00:13",
      isVertical: true,
    },
    {
      id: "v-rev-6",
      name: "Aditi S.",
      badge: "Bollywood & Urban Student",
      highlightText: "High energy classes in Ghansoli",
      quote: "Best dance academy in Ghansoli! Love the choreography and the vibe at both Sector 16 and Sector 5 studios.",
      videoSrc: "/media/reviews/review-6.mp4",
      thumbnail: "/media/thumbnails/review-6.jpg",
      duration: "00:18",
      isVertical: true,
    },
  ] as VideoReviewItem[],

  // Verified Written Reviews from Google & Justdial
  testimonials: {
    label: "/Reviews",
    badge: "5.0 ★ on Google (100+ Reviews) | 4.9 ★ on Justdial",
    title: "Real Student Reviews",
    subtitle: "What students and parents in Ghansoli say about Flawless Dance & Fitness Studio.",
    items: [
      {
        id: "1",
        name: "Pooja Sharma",
        badge: "Zumba & Bollywood Student",
        quote: "The energy at Flawless Studio is unmatched! Avinash sir and the trainers give personal attention to every single student. My dancing skills, flexibility, and stamina have improved tremendously.",
        source: "Google Review ★★★★★",
        stars: 5,
      },
      {
        id: "2",
        name: "Rajesh Patil",
        badge: "Parent of Kids Academy Student",
        quote: "Best dance academy in Ghansoli! My 8-year-old daughter joined the kids batch and her stage confidence has blossomed. The air-conditioned studio is safe, well-equipped, and the faculty is very patient.",
        source: "Google Review ★★★★★",
        stars: 5,
      },
      {
        id: "3",
        name: "Aman Kulkarni",
        badge: "Urban Hip Hop Batch",
        quote: "Ankit sir's hip hop training is pure gold. He breaks down grooves, musicality, and popping with international precision. Two great studios in Ghansoli make regular attendance effortless.",
        source: "Justdial Review ★★★★★",
        stars: 5,
      },
      {
        id: "4",
        name: "Sneha Nair",
        badge: "Ladies Afternoon Batch",
        quote: "The afternoon ladies batch is the best hour of my day. Fun, energetic Bollywood dancing in a warm, welcoming, and comfortable space.",
        source: "Google Review ★★★★★",
        stars: 5,
      },
      {
        id: "5",
        name: "Vikram Deshmukh",
        badge: "Fitness & Morning Yoga Member",
        quote: "Morning yoga and functional fitness with certified trainers have helped my back posture and mental clarity. Studio hours from 7:00 AM fit perfectly before my office shifts.",
        source: "Justdial Review ★★★★★",
        stars: 5,
      },
      {
        id: "6",
        name: "Megha Joshi",
        badge: "Contemporary & Open Style",
        quote: "Avinash Sir's choreography style is contemporary, graceful, and expressive. Truly flawless training standards right here in Ghansoli!",
        source: "Google Review ★★★★★",
        stars: 5,
      },
    ] as TestimonialItem[],
  },

  // YouTube Performance Showcase (@flawlessdancefitnessstudio3284)
  youtubeShowcase: [
    {
      id: "yt-1",
      youtubeId: "gRG3B2xHInE",
      title: "Govinda Aala Re | Bollywood Dance Cover | FDFS",
      style: "Bollywood & Festival Dance",
      image: "https://img.youtube.com/vi/gRG3B2xHInE/hqdefault.jpg",
      duration: "01:27",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
    {
      id: "yt-2",
      youtubeId: "G_86ABkFLyI",
      title: "Bollybeat Workout — Roop Tera Mastana | Mika Singh | Avinash Mishra",
      style: "Zumba & Bollybeat Conditioning",
      image: "https://img.youtube.com/vi/G_86ABkFLyI/hqdefault.jpg",
      duration: "02:39",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
    {
      id: "yt-3",
      youtubeId: "YPf_hI2yrJc",
      title: "Flawless Dance & Fitness Studio | Mega Stage Performance | Navi Mumbai",
      style: "Stage Production Showcase",
      image: "https://img.youtube.com/vi/YPf_hI2yrJc/hqdefault.jpg",
      duration: "07:08",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
    {
      id: "yt-4",
      youtubeId: "KzyBVF6KL1s",
      title: "Teri Ankhya Ka Yo Kajal | Studio Choreography | FDFS",
      style: "Bollywood Folk Fusion",
      image: "https://img.youtube.com/vi/KzyBVF6KL1s/hqdefault.jpg",
      duration: "01:34",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
    {
      id: "yt-5",
      youtubeId: "5TuiSsbO0gg",
      title: "Dilbar | Urban Hip Hop Dance Routine | Niharika | FDFS",
      style: "Hip Hop & Urban Street",
      image: "https://img.youtube.com/vi/5TuiSsbO0gg/hqdefault.jpg",
      duration: "01:22",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
    {
      id: "yt-6",
      youtubeId: "FaTVv8-zkgE",
      title: "Prarrambh Special Dance Tribute Performance | FDFS",
      style: "Stage Choreography",
      image: "https://img.youtube.com/vi/FaTVv8-zkgE/hqdefault.jpg",
      duration: "04:54",
      channelLink: "https://youtube.com/@flawlessdancefitnessstudio3284?si=37M2Jm7LJkU1A8nb",
    },
  ] as YouTubeShowcaseItem[],

  // Enquiry Strip ("Join a class")
  enquiry: {
    label: "/Enquire",
    title: "Join a class",
    subtitle: "Send us your preferred class and studio. We will connect with you immediately on WhatsApp.",
  },

  // Let's Connect & Footer
  footer: {
    label: "/Connect",
    connectTitle: "Let's connect",
    stackedCities: ["GHANSOLI.", "NAVI MUMBAI."],
    copyright: "© 2026 Flawless Dance & Fitness Studio. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund & Cancellation", href: "/refund" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
};
