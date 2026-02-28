export const WEDDING = {
  couple: {
    bride: "Anshika",
    groom: "Ram",
    brideFull: "Anshika Pandey",
    groomFull: "Ram Pandey",
    tagline: "Two souls, one beautiful journey",
    taglineHindi: "दो आत्माएं, एक खूबसूरत सफर",
  },
  date: new Date("2026-04-28T22:00:00"),
  venue: {
    name: "Pandey Niwas",
    address:
      "Malaiya ka Pura, Madhu ka Pura, Barawan, Karchhana, Naini, Prayagraj - 212301",
    description:
      "An intimate celebration at the bride's family home, adorned with traditional decorations, marigold garlands, and the warmth of family love.",
  },
  ceremonies: [
    {
      slug: "haldi",
      name: "Haldi",
      nameHindi: "हल्दी",
      date: "April 27, 2026",
      time: "4:00 PM onwards",
      venue: "Pandey Niwas",
      dressCode: "Yellow & White",
      description:
        "A joyful afternoon of turmeric blessings. The sacred haldi paste brings radiance and marks the beginning of wedding festivities.",
      accentColor: "#D4A010",
      icon: "haldi" as const,
    },
    {
      slug: "mehendi",
      name: "Mehendi",
      nameHindi: "मेहंदी",
      date: "April 27, 2026",
      time: "10:00 PM onwards",
      venue: "Pandey Niwas",
      dressCode: "Bright Greens & Yellows",
      description:
        "A night of intricate henna art, laughter, and music. Watch as beautiful mehndi patterns tell our love story on Anshika's hands.",
      accentColor: "#5A8A5A",
      icon: "mehendi" as const,
    },
    {
      slug: "wedding",
      name: "Wedding",
      nameHindi: "विवाह",
      date: "April 28, 2026",
      time: "10:00 PM onwards",
      venue: "Main Mandap, Pandey Niwas",
      dressCode: "Traditional Indian Attire",
      description:
        "The sacred union of Ram and Anshika under the mandap. Seven vows, seven promises — two hearts becoming one forever.",
      accentColor: "#C5716A",
      icon: "wedding" as const,
    },
  ],
  timeline: [
    {
      date: "July 4",
      year: "2025",
      title: "First Talk",
      description:
        "A simple conversation that changed everything. Words flowed like they were meant to, and we knew this was the beginning of something special.",
      image: "/photos/firstTalk.jpeg",
    },
    {
      date: "July 26",
      year: "2025",
      title: "First Time Meeting",
      description:
        "Hearts racing, eyes meeting for the first time in person. The world stood still as we realized the connection was even more magical face to face.",
      image: "/photos/firstMeeting.jpeg",
    },
    {
      date: "July 27",
      year: "2025",
      title: "Engagement",
      description:
        "Just one day later, we knew. With blessings from both families, we said yes to forever. The rings were exchanged, and our hearts sealed the promise.",
      image: "/photos/engagement.jpeg",
    },
    {
      date: "September 1",
      year: "2025",
      title: "First Outing Together",
      description:
        "Our first adventure as a couple. Every moment was filled with laughter, stolen glances, and the joy of building memories together.",
      image: "/photos/firstOuting.jpeg",
    },
    {
      date: "January 19",
      year: "2026",
      title: "Baraksha",
      description:
        "A beautiful ceremony bringing our families closer. Blessings were exchanged, traditions honored, and the countdown to our wedding truly began.",
      image: "/photos/baraksha.jpeg",
    },
  ],
};

export const COUPLE_PHOTO = "/photos/main.png";

export const MUSIC_TRACKS = [
  {
    title: "Shehnai Melody",
    artist: "Traditional",
    src: "/audio/shehnai.mp3",
  },
];
