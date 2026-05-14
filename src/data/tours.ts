import bali from "@/assets/dest-bali.jpg";
import dubai from "@/assets/dest-dubai.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import maldives from "@/assets/dest-maldives.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import thailand from "@/assets/dest-thailand.jpg";
import paris from "@/assets/dest-paris.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero5.png";
import hero5 from "@/assets/hero6.png";
import hero6 from "@/assets/hero7.png";

export type Tour = {
  slug: string;
  title: string;
  destination: string;
  category: "International" | "Domestic" | "Honeymoon" | "Family";
  duration: string;
  groupSize: string;
  travelType: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; details: string }[];
  included: string[];
  excluded: string[];
  gallery: string[];
};

export const tours: Tour[] = [
  {
    slug: "maldives-paradise-escape",
    title: "Maldives Paradise Escape",
    destination: "Maldives",
    category: "Honeymoon",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 4",
    travelType: "Luxury",
    price: 89999,
    rating: 4.9,
    reviews: 312,
    image: maldives,
    description:
      "Drift away to overwater villas, glass-clear lagoons and unforgettable sunsets in the world's most romantic island nation.",
    highlights: ["Overwater villa stay", "Sunset dolphin cruise", "Snorkeling at coral reef", "Private beach dinner"],
    itinerary: [
      { day: 1, title: "Arrival in Male", details: "Speedboat transfer to resort, welcome drinks and lagoon view villa check-in." },
      { day: 2, title: "Reef Snorkeling", details: "Half-day reef snorkeling with marine biologist guide, evening at the spa." },
      { day: 3, title: "Sandbank Picnic", details: "Boat ride to a private sandbank, gourmet picnic and underwater photography." },
      { day: 4, title: "Sunset Cruise", details: "Dolphin spotting on a traditional dhoni cruise, candle-lit beach dinner." },
      { day: 5, title: "Departure", details: "Leisure breakfast and transfer to Male international airport." },
    ],
    included: ["4 nights overwater villa", "Daily breakfast & dinner", "All transfers", "Snorkeling gear", "Sunset cruise"],
    excluded: ["International flights", "Visa fees", "Personal expenses", "Travel insurance"],
    gallery: [maldives, hero1, thailand, bali],
  },
  {
    slug: "swiss-alps-grand-tour",
    title: "Swiss Alps Grand Tour",
    destination: "Switzerland",
    category: "International",
    duration: "7 Days / 6 Nights",
    groupSize: "2 - 12",
    travelType: "Scenic",
    price: 159999,
    rating: 4.8,
    reviews: 189,
    image: swiss,
    description:
      "Glide between alpine lakes and snow-capped peaks on Switzerland's most iconic scenic train routes.",
    highlights: ["Jungfraujoch Top of Europe", "Glacier Express ride", "Lake Lucerne cruise", "Mt. Titlis cable car"],
    itinerary: [
      { day: 1, title: "Arrival in Zurich", details: "Welcome dinner and city orientation walk." },
      { day: 2, title: "Lucerne & Mt. Titlis", details: "Cable car to glacial summit, lake cruise in the evening." },
      { day: 3, title: "Interlaken", details: "Scenic train to Interlaken, optional paragliding over the Alps." },
      { day: 4, title: "Jungfraujoch", details: "Cogwheel train to Top of Europe, ice palace and snow plateau." },
      { day: 5, title: "Zermatt", details: "Travel to Zermatt with Matterhorn views from Gornergrat." },
      { day: 6, title: "Glacier Express", details: "Panoramic train to St. Moritz, evening leisure." },
      { day: 7, title: "Departure", details: "Transfer to Zurich airport." },
    ],
    included: ["6 nights 4-star hotels", "Swiss Travel Pass", "Daily breakfast", "All scenic trains", "Tour manager"],
    excluded: ["Flights", "Lunches & dinners", "Optional activities", "Insurance"],
    gallery: [swiss, hero2, paris, dubai],
  },
  {
    slug: "kerala-backwaters-bliss",
    title: "Kerala Backwaters Bliss",
    destination: "Kerala, India",
    category: "Domestic",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 8",
    travelType: "Cultural",
    price: 32999,
    rating: 4.7,
    reviews: 421,
    image: kerala,
    description:
      "Float through palm-lined canals on a private houseboat and unwind in tea-garden hill stations.",
    highlights: ["Alleppey houseboat", "Munnar tea plantations", "Kathakali show", "Ayurvedic spa session"],
    itinerary: [
      { day: 1, title: "Arrive Cochin", details: "Fort Kochi heritage walk and Chinese fishing nets at sunset." },
      { day: 2, title: "Munnar", details: "Drive through tea estates and waterfalls." },
      { day: 3, title: "Munnar Sightseeing", details: "Tea museum, Eravikulam national park." },
      { day: 4, title: "Thekkady", details: "Periyar wildlife boat safari and spice plantation tour." },
      { day: 5, title: "Alleppey Houseboat", details: "Overnight in private houseboat with local cuisine onboard." },
      { day: 6, title: "Departure", details: "Transfer to Cochin airport." },
    ],
    included: ["5 nights stay", "Houseboat with full board", "All transfers in AC vehicle", "Sightseeing"],
    excluded: ["Flights", "Camera fees", "Tips", "Personal expenses"],
    gallery: [kerala, bali, thailand, hero1],
  },
  {
    slug: "bali-tropical-getaway",
    title: "Bali Tropical Getaway",
    destination: "Bali, Indonesia",
    category: "Honeymoon",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 6",
    travelType: "Beach & Culture",
    price: 54999,
    rating: 4.8,
    reviews: 276,
    image: bali,
    description: "Rice terraces, temple sunsets and beach clubs — a perfect blend of culture and relaxation.",
    highlights: ["Ubud rice terrace trek", "Tanah Lot sunset", "Nusa Penida day trip", "Private villa with pool"],
    itinerary: [
      { day: 1, title: "Arrival Denpasar", details: "Transfer to Seminyak villa, beach club evening." },
      { day: 2, title: "Ubud Tour", details: "Tegallalang rice terraces, sacred monkey forest." },
      { day: 3, title: "Temples & Sunset", details: "Tanah Lot and Uluwatu Kecak fire dance." },
      { day: 4, title: "Nusa Penida", details: "Speedboat day trip, Kelingking beach viewpoint." },
      { day: 5, title: "Spa & Leisure", details: "Couple Balinese spa, free evening." },
      { day: 6, title: "Departure", details: "Airport transfer." },
    ],
    included: ["Villa stay with breakfast", "All sightseeing", "Speedboat tickets", "English-speaking guide"],
    excluded: ["Flights", "Visa", "Lunches & dinners", "Insurance"],
    gallery: [bali, maldives, thailand, hero3],
  },
  {
    slug: "dubai-desert-luxe",
    title: "Dubai Desert & City Luxe",
    destination: "Dubai, UAE",
    category: "Family",
    duration: "5 Days / 4 Nights",
    groupSize: "2 - 10",
    travelType: "City & Adventure",
    price: 64999,
    rating: 4.7,
    reviews: 358,
    image: dubai,
    description: "Skyline marvels, desert dunes and theme park thrills in one action-packed itinerary.",
    highlights: ["Burj Khalifa 124th floor", "Desert safari with BBQ", "Dubai Marina dhow cruise", "Atlantis Aquaventure"],
    itinerary: [
      { day: 1, title: "Arrival", details: "Hotel check-in, evening at Dubai Mall fountain show." },
      { day: 2, title: "City Tour", details: "Burj Khalifa, Old Dubai souks, Frame." },
      { day: 3, title: "Desert Safari", details: "Dune bashing, camel ride, BBQ dinner with cultural shows." },
      { day: 4, title: "Theme Park Day", details: "Atlantis Aquaventure or IMG Worlds." },
      { day: 5, title: "Departure", details: "Marina cruise breakfast and transfer." },
    ],
    included: ["4 nights stay", "All transfers", "Burj Khalifa tickets", "Desert safari", "Daily breakfast"],
    excluded: ["Flights", "Visa", "Lunches & dinners", "Personal expenses"],
    gallery: [dubai, hero1, paris, maldives],
  },
  {
    slug: "thailand-island-hopper",
    title: "Thailand Island Hopper",
    destination: "Phuket & Krabi",
    category: "International",
    duration: "6 Days / 5 Nights",
    groupSize: "2 - 12",
    travelType: "Beach",
    price: 48999,
    rating: 4.6,
    reviews: 244,
    image: thailand,
    description: "Long-tail boats, hidden lagoons and electric Patong nightlife across Thailand's southern coast.",
    highlights: ["Phi Phi islands tour", "James Bond Island", "Krabi 4-island tour", "Phuket nightlife"],
    itinerary: [
      { day: 1, title: "Arrive Phuket", details: "Patong beach evening and street food tour." },
      { day: 2, title: "Phi Phi Tour", details: "Maya Bay, Monkey Beach, snorkeling lunch." },
      { day: 3, title: "James Bond Island", details: "Phang Nga Bay sea canoe adventure." },
      { day: 4, title: "Krabi Transfer", details: "Drive to Krabi, Ao Nang beach evening." },
      { day: 5, title: "4 Islands", details: "Chicken Island, Tup Island, Poda, Phra Nang cave." },
      { day: 6, title: "Departure", details: "Krabi airport transfer." },
    ],
    included: ["5 nights stay", "Daily breakfast", "All island tours", "Transfers"],
    excluded: ["Flights", "Visa", "Lunches & dinners", "Insurance"],
    gallery: [thailand, bali, maldives, hero1],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export const heroSlides = [
  {
    image: hero4,
    title: "All India Bike Rides",
    subtitle: "Explore India on two wheels with unforgettable bike trips across every state"
  },
  {
    image: hero5,
    title: "No Cost EMI",
    subtitle: "Book your dream adventure now and pay later with easy no cost EMI options"
  },
  {
    image: hero6,
    title: "25% First Login Discount",
    subtitle: "First time login pandra ellarukum special 25% OFF on all bookings"
  },
  { image: hero1, title: "Discover Paradise", subtitle: "Curated luxury escapes to the world's most beautiful islands" },
  { image: hero2, title: "Chase Mountains", subtitle: "Breath-taking Himalayan trails and alpine adventures" },
  { image: hero3, title: "Live The Postcard", subtitle: "Iconic destinations, handcrafted experiences" },
];


export const categories = [
  { name: "International", image: paris, count: 42 },
  { name: "Domestic", image: kerala, count: 58 },
  { name: "Honeymoon", image: maldives, count: 24 },
  { name: "Family", image: dubai, count: 36 },
];

export const testimonials = [
  { name: "Aarav Mehta", trip: "Maldives Honeymoon", rating: 5, text: "Every detail was handled — from the seaplane to the private dinner. Truly the best trip of our lives." },
  { name: "Priya Sharma", trip: "Swiss Alps", rating: 5, text: "The Glacier Express was magical. Our guide knew every story behind every peak." },
  { name: "Rohan Kapoor", trip: "Bali Family Trip", rating: 4, text: "Kids loved the rice terraces and the villa pool. Smooth experience start to finish." },
  { name: "Neha Iyer", trip: "Kerala Backwaters", rating: 5, text: "Houseboat night was unforgettable. Felt like floating through a painting." },
];

export const blogPosts = [
  { slug: "10-things-bali", title: "10 Things You Must Do In Bali", excerpt: "From sunrise hikes to hidden waterfalls, here's how to make the most of the Island of Gods.", image: bali, category: "Travel Tips", date: "Mar 14, 2026" },
  { slug: "europe-on-budget", title: "Europe On A Budget — Yes, It's Possible", excerpt: "Smart routing, off-season timing and rail passes can cut your Europe trip cost by half.", image: paris, category: "Budget Travel", date: "Feb 28, 2026" },
  { slug: "honeymoon-destinations-2026", title: "Top 7 Honeymoon Destinations For 2026", excerpt: "From the Maldives to Santorini, these are this year's most romantic escapes.", image: maldives, category: "Honeymoon", date: "Feb 10, 2026" },
  { slug: "monsoon-kerala", title: "Why Monsoon Is The Best Time For Kerala", excerpt: "Lush greens, fewer crowds and Ayurveda season — monsoon in God's own country is unmatched.", image: kerala, category: "Destinations", date: "Jan 22, 2026" },
];
