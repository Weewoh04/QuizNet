import type { Quiz, QuizType } from "@/lib/types";

const image = "/images/og-default.svg";

// Add new quizzes here:
// 1. Copy an existing quiz object.
// 2. Give it a unique slug, category, tags, SEO fields, and Facebook fields.
// 3. Add questions with answer ids. Personality/recommendation answers use points keyed to result slugs.
// 4. Add results with matching slugs. Trivia results can use minScore and maxScore ranges.
// Routes, category pages, related quizzes, metadata, and share links update automatically.
const starterQuizzes: Quiz[] = [
  {
    slug: "what-kind-of-weekend-do-you-need",
    title: "What Kind of Weekend Do You Actually Need?",
    description: "Pick your current mood and habits to find the kind of weekend that would help you reset.",
    category: "lifestyle",
    type: "personality",
    tags: ["weekend", "self care", "mood"],
    image,
    estimatedMinutes: 3,
    trending: true,
    featured: true,
    publishedAt: "2026-05-01",
    questions: [
      {
        id: "q1",
        text: "Your ideal Friday night sounds like...",
        answers: [
          { id: "a", text: "A quiet dinner and early bedtime", points: { rest: 2 } },
          { id: "b", text: "Seeing friends somewhere lively", points: { social: 2 } },
          { id: "c", text: "Starting a small project", points: { reset: 2 } },
          { id: "d", text: "Getting out of town", points: { adventure: 2 } }
        ]
      },
      {
        id: "q2",
        text: "What has your week felt like?",
        answers: [
          { id: "a", text: "Overfull", points: { rest: 2 } },
          { id: "b", text: "A little lonely", points: { social: 2 } },
          { id: "c", text: "Scattered", points: { reset: 2 } },
          { id: "d", text: "Too predictable", points: { adventure: 2 } }
        ]
      },
      {
        id: "q3",
        text: "Choose a Saturday morning.",
        answers: [
          { id: "a", text: "Slow coffee, no plans", points: { rest: 2 } },
          { id: "b", text: "Brunch with people you like", points: { social: 2 } },
          { id: "c", text: "Cleaning, errands, then peace", points: { reset: 2 } },
          { id: "d", text: "A mini road trip", points: { adventure: 2 } }
        ]
      },
      {
        id: "q4",
        text: "What would feel most satisfying by Sunday night?",
        answers: [
          { id: "a", text: "Feeling deeply rested", points: { rest: 2 } },
          { id: "b", text: "Laughing about a good memory", points: { social: 2 } },
          { id: "c", text: "Having life back in order", points: { reset: 2 } },
          { id: "d", text: "Having a story to tell", points: { adventure: 2 } }
        ]
      }
    ],
    results: [
      { slug: "rest-weekend", title: "A True Rest Weekend", description: "You need softness, sleep, and a calendar with breathing room.", shareSummary: "I got A True Rest Weekend." },
      { slug: "social-weekend", title: "A Social Spark Weekend", description: "You need connection, laughter, and a little shared momentum.", shareSummary: "I got A Social Spark Weekend." },
      { slug: "reset-weekend", title: "A Reset Weekend", description: "You need a simple plan, a calmer space, and a fresh start feeling.", shareSummary: "I got A Reset Weekend." },
      { slug: "adventure-weekend", title: "A Small Adventure Weekend", description: "You need novelty, fresh scenery, and a break from autopilot.", shareSummary: "I got A Small Adventure Weekend." }
    ],
    seoTitle: "What Kind of Weekend Do You Actually Need? Quiz",
    seoDescription: "Take this quick lifestyle quiz to find the weekend mood that matches your current energy.",
    facebookShareTitle: "What kind of weekend do you actually need?",
    facebookShareDescription: "Take this quick quiz and compare results with friends."
  },
  {
    slug: "what-is-your-home-decor-personality",
    title: "What Is Your Home Decor Personality?",
    description: "Choose colors, textures, and room priorities to reveal your home style.",
    category: "home",
    type: "personality",
    tags: ["decor", "home", "style"],
    image,
    estimatedMinutes: 3,
    trending: true,
    publishedAt: "2026-04-29",
    questions: [
      { id: "q1", text: "Pick a room mood.", answers: [
        { id: "a", text: "Clean and uncluttered", points: { minimal: 2 } },
        { id: "b", text: "Warm and collected", points: { cozy: 2 } },
        { id: "c", text: "Fresh and airy", points: { classic: 2 } },
        { id: "d", text: "Bold and expressive", points: { eclectic: 2 } }
      ] },
      { id: "q2", text: "Which detail catches your eye first?", answers: [
        { id: "a", text: "Simple lines", points: { minimal: 2 } },
        { id: "b", text: "Soft throws", points: { cozy: 2 } },
        { id: "c", text: "Natural light", points: { classic: 2 } },
        { id: "d", text: "Art and color", points: { eclectic: 2 } }
      ] },
      { id: "q3", text: "Your favorite home compliment would be...", answers: [
        { id: "a", text: "So peaceful", points: { minimal: 2 } },
        { id: "b", text: "So welcoming", points: { cozy: 2 } },
        { id: "c", text: "So timeless", points: { classic: 2 } },
        { id: "d", text: "So you", points: { eclectic: 2 } }
      ] },
      { id: "q4", text: "Choose a finishing touch.", answers: [
        { id: "a", text: "Matte ceramic vase", points: { minimal: 2 } },
        { id: "b", text: "Textured blanket", points: { cozy: 2 } },
        { id: "c", text: "Linen curtains", points: { classic: 2 } },
        { id: "d", text: "Vintage lamp", points: { eclectic: 2 } }
      ] }
    ],
    results: [
      { slug: "minimal-calm", title: "Minimal Calm", description: "Your home style is edited, breathable, and quietly polished.", shareSummary: "My home decor personality is Minimal Calm." },
      { slug: "cozy-layered", title: "Cozy Layered", description: "You like a home that feels lived-in, warm, and easy to settle into.", shareSummary: "My home decor personality is Cozy Layered." },
      { slug: "fresh-classic", title: "Fresh Classic", description: "You lean timeless, bright, and balanced with natural textures.", shareSummary: "My home decor personality is Fresh Classic." },
      { slug: "collected-eclectic", title: "Collected Eclectic", description: "Your best rooms tell stories through color, art, and unexpected pieces.", shareSummary: "My home decor personality is Collected Eclectic." }
    ],
    seoTitle: "What Is Your Home Decor Personality? Quiz",
    seoDescription: "Find your home decor personality with this quick home style quiz.",
    facebookShareTitle: "What is your home decor personality?",
    facebookShareDescription: "Take the quiz to find your decor style."
  },
  {
    slug: "are-you-more-coffee-tea-or-smoothie",
    title: "Are You More Coffee, Tea, or Smoothie?",
    description: "A breezy food personality quiz for your everyday energy.",
    category: "food",
    type: "personality",
    tags: ["food", "drinks", "morning"],
    image,
    estimatedMinutes: 2,
    publishedAt: "2026-04-27",
    questions: [
      { id: "q1", text: "Your morning pace is usually...", answers: [
        { id: "a", text: "Direct and focused", points: { coffee: 2 } },
        { id: "b", text: "Gentle and steady", points: { tea: 2 } },
        { id: "c", text: "Bright and flexible", points: { smoothie: 2 } }
      ] },
      { id: "q2", text: "Pick a flavor.", answers: [
        { id: "a", text: "Bold", points: { coffee: 2 } },
        { id: "b", text: "Herbal", points: { tea: 2 } },
        { id: "c", text: "Fruity", points: { smoothie: 2 } }
      ] },
      { id: "q3", text: "Your friends ask you for...", answers: [
        { id: "a", text: "A clear opinion", points: { coffee: 2 } },
        { id: "b", text: "A calming perspective", points: { tea: 2 } },
        { id: "c", text: "A fun idea", points: { smoothie: 2 } }
      ] }
    ],
    results: [
      { slug: "coffee", title: "Coffee", description: "You bring focus, drive, and a little spark to the room.", shareSummary: "I'm Coffee energy." },
      { slug: "tea", title: "Tea", description: "You bring calm, thoughtfulness, and grounded ease.", shareSummary: "I'm Tea energy." },
      { slug: "smoothie", title: "Smoothie", description: "You bring freshness, color, and upbeat flexibility.", shareSummary: "I'm Smoothie energy." }
    ],
    seoTitle: "Are You More Coffee, Tea, or Smoothie? Quiz",
    seoDescription: "Take this quick food personality quiz to find your drink energy.",
    facebookShareTitle: "Are you more Coffee, Tea, or Smoothie?",
    facebookShareDescription: "This quick quiz reveals your drink personality."
  },
  {
    slug: "what-career-energy-are-you-giving-right-now",
    title: "What Career Energy Are You Giving Right Now?",
    description: "Find the work style you are bringing into this season.",
    category: "career",
    type: "personality",
    tags: ["career", "work", "motivation"],
    image,
    estimatedMinutes: 3,
    trending: true,
    publishedAt: "2026-04-25",
    questions: [
      { id: "q1", text: "At work, you are currently craving...", answers: [
        { id: "a", text: "A clear plan", points: { builder: 2 } },
        { id: "b", text: "A bold opportunity", points: { climber: 2 } },
        { id: "c", text: "A healthier pace", points: { steady: 2 } },
        { id: "d", text: "A creative shift", points: { creator: 2 } }
      ] },
      { id: "q2", text: "Your strongest contribution lately is...", answers: [
        { id: "a", text: "Making things work", points: { builder: 2 } },
        { id: "b", text: "Pushing things forward", points: { climber: 2 } },
        { id: "c", text: "Keeping things grounded", points: { steady: 2 } },
        { id: "d", text: "Imagining better options", points: { creator: 2 } }
      ] },
      { id: "q3", text: "Pick a workday win.", answers: [
        { id: "a", text: "A finished checklist", points: { builder: 2 } },
        { id: "b", text: "A visible success", points: { climber: 2 } },
        { id: "c", text: "A calm close to the day", points: { steady: 2 } },
        { id: "d", text: "A fresh idea landing", points: { creator: 2 } }
      ] }
    ],
    results: [
      { slug: "builder", title: "Builder Energy", description: "You are focused on structure, follow-through, and useful progress.", shareSummary: "I'm giving Builder Energy at work." },
      { slug: "climber", title: "Climber Energy", description: "You are ambitious, visible, and ready for your next opening.", shareSummary: "I'm giving Climber Energy at work." },
      { slug: "steady", title: "Steady Energy", description: "You are protecting your pace and making dependable choices.", shareSummary: "I'm giving Steady Energy at work." },
      { slug: "creator", title: "Creator Energy", description: "You are ready for more imagination, autonomy, and fresh inputs.", shareSummary: "I'm giving Creator Energy at work." }
    ],
    seoTitle: "What Career Energy Are You Giving Right Now? Quiz",
    seoDescription: "Discover your current career energy with this quick work style quiz.",
    facebookShareTitle: "What career energy are you giving right now?",
    facebookShareDescription: "Take this work style quiz and share your result."
  },
  {
    slug: "how-well-do-you-know-common-household-tips",
    title: "How Well Do You Know Common Household Tips?",
    description: "Test your everyday home know-how with simple household trivia.",
    category: "trivia",
    type: "trivia",
    tags: ["trivia", "home tips", "cleaning"],
    image,
    estimatedMinutes: 4,
    trending: true,
    publishedAt: "2026-04-22",
    questions: [
      { id: "q1", text: "Which pantry item is often used to absorb fridge odors?", answers: [
        { id: "a", text: "Baking soda", correct: true },
        { id: "b", text: "Cornmeal" },
        { id: "c", text: "Powdered sugar" }
      ] },
      { id: "q2", text: "A microfiber cloth is especially useful because it...", answers: [
        { id: "a", text: "Scratches most surfaces" },
        { id: "b", text: "Grabs dust well", correct: true },
        { id: "c", text: "Only works when dry" }
      ] },
      { id: "q3", text: "Which should usually be cleaned regularly to help a dryer run efficiently?", answers: [
        { id: "a", text: "Lint trap", correct: true },
        { id: "b", text: "Door handle" },
        { id: "c", text: "Laundry basket" }
      ] },
      { id: "q4", text: "What is a common first step before treating many fabric stains?", answers: [
        { id: "a", text: "Rub hard with heat" },
        { id: "b", text: "Blot excess liquid", correct: true },
        { id: "c", text: "Iron the spot" }
      ] }
    ],
    results: [
      { slug: "home-rookie", title: "Home Tips Rookie", description: "You know a few basics and have plenty of easy wins waiting.", shareSummary: "I got Home Tips Rookie.", minScore: 0, maxScore: 1 },
      { slug: "home-helper", title: "Home Tips Helper", description: "You have solid everyday know-how and a practical streak.", shareSummary: "I got Home Tips Helper.", minScore: 2, maxScore: 3 },
      { slug: "home-pro", title: "Home Tips Pro", description: "You know your way around common household fixes.", shareSummary: "I got Home Tips Pro.", minScore: 4, maxScore: 4 }
    ],
    seoTitle: "Common Household Tips Trivia Quiz",
    seoDescription: "Test how well you know common household tips with this quick trivia quiz.",
    facebookShareTitle: "How well do you know common household tips?",
    facebookShareDescription: "Try this household trivia quiz and compare scores."
  },
  {
    slug: "what-kind-of-vacation-matches-your-mood",
    title: "What Kind of Vacation Matches Your Mood?",
    description: "Choose your pace, scenery, and travel cravings to find your next-trip mood.",
    category: "travel",
    type: "recommendation",
    tags: ["travel", "vacation", "mood"],
    image,
    estimatedMinutes: 3,
    publishedAt: "2026-04-20",
    questions: [
      { id: "q1", text: "You want a trip that feels...", answers: [
        { id: "a", text: "Restorative", points: { beach: 2 } },
        { id: "b", text: "Curious", points: { city: 2 } },
        { id: "c", text: "Outdoorsy", points: { cabin: 2 } },
        { id: "d", text: "Effortless", points: { resort: 2 } }
      ] },
      { id: "q2", text: "Pick a view.", answers: [
        { id: "a", text: "Open water", points: { beach: 2 } },
        { id: "b", text: "A walkable street", points: { city: 2 } },
        { id: "c", text: "Trees and sky", points: { cabin: 2 } },
        { id: "d", text: "Pool and lounge chairs", points: { resort: 2 } }
      ] },
      { id: "q3", text: "Your itinerary style is...", answers: [
        { id: "a", text: "Loose and sunny", points: { beach: 2 } },
        { id: "b", text: "Packed with places", points: { city: 2 } },
        { id: "c", text: "Hikes and quiet nights", points: { cabin: 2 } },
        { id: "d", text: "Everything handled", points: { resort: 2 } }
      ] }
    ],
    results: [
      { slug: "beach-reset", title: "Beach Reset", description: "A simple seaside break matches your need for warmth and space.", shareSummary: "My vacation mood is Beach Reset." },
      { slug: "city-wander", title: "City Wander", description: "You would thrive with cafes, museums, neighborhoods, and movement.", shareSummary: "My vacation mood is City Wander." },
      { slug: "cabin-unplug", title: "Cabin Unplug", description: "You need trees, quiet, and a slower rhythm.", shareSummary: "My vacation mood is Cabin Unplug." },
      { slug: "easy-resort", title: "Easy Resort", description: "You want low-friction comfort, sunshine, and built-in ease.", shareSummary: "My vacation mood is Easy Resort." }
    ],
    seoTitle: "What Kind of Vacation Matches Your Mood? Quiz",
    seoDescription: "Take this travel recommendation quiz to find your ideal vacation mood.",
    facebookShareTitle: "What kind of vacation matches your mood?",
    facebookShareDescription: "Find your next-trip style with this quick quiz."
  },
  {
    slug: "what-type-of-friend-are-you",
    title: "What Type of Friend Are You?",
    description: "Find the friendship role you naturally bring to your circle.",
    category: "relationships",
    type: "personality",
    tags: ["friends", "relationships", "personality"],
    image,
    estimatedMinutes: 3,
    publishedAt: "2026-04-18",
    questions: [
      { id: "q1", text: "Your group chat role is...", answers: [
        { id: "a", text: "The checker-in", points: { anchor: 2 } },
        { id: "b", text: "The planner", points: { organizer: 2 } },
        { id: "c", text: "The comic relief", points: { spark: 2 } },
        { id: "d", text: "The advice person", points: { guide: 2 } }
      ] },
      { id: "q2", text: "A friend calls upset. You first...", answers: [
        { id: "a", text: "Listen closely", points: { anchor: 2 } },
        { id: "b", text: "Offer next steps", points: { organizer: 2 } },
        { id: "c", text: "Help them breathe and smile", points: { spark: 2 } },
        { id: "d", text: "Ask thoughtful questions", points: { guide: 2 } }
      ] },
      { id: "q3", text: "Your favorite plan is...", answers: [
        { id: "a", text: "A long catch-up", points: { anchor: 2 } },
        { id: "b", text: "A reservation that actually happens", points: { organizer: 2 } },
        { id: "c", text: "Something spontaneous", points: { spark: 2 } },
        { id: "d", text: "A meaningful conversation", points: { guide: 2 } }
      ] }
    ],
    results: [
      { slug: "anchor", title: "The Anchor Friend", description: "You are steady, loyal, and emotionally present.", shareSummary: "I'm The Anchor Friend." },
      { slug: "organizer", title: "The Organizer Friend", description: "You keep people connected and turn vague ideas into real plans.", shareSummary: "I'm The Organizer Friend." },
      { slug: "spark", title: "The Spark Friend", description: "You bring levity, energy, and the story everyone remembers.", shareSummary: "I'm The Spark Friend." },
      { slug: "guide", title: "The Guide Friend", description: "You help people sort through the messy middle with care.", shareSummary: "I'm The Guide Friend." }
    ],
    seoTitle: "What Type of Friend Are You? Quiz",
    seoDescription: "Take this friendship personality quiz and share your result.",
    facebookShareTitle: "What type of friend are you?",
    facebookShareDescription: "Find your friendship style with this quick quiz."
  },
  {
    slug: "what-is-your-parenting-survival-style",
    title: "What Is Your Parenting Survival Style?",
    description: "A light quiz about the strengths you lean on during busy family days.",
    category: "parenting",
    type: "personality",
    tags: ["parenting", "family", "routine"],
    image,
    estimatedMinutes: 3,
    publishedAt: "2026-04-16",
    questions: [
      { id: "q1", text: "A chaotic morning hits. You reach for...", answers: [
        { id: "a", text: "A checklist", points: { systems: 2 } },
        { id: "b", text: "A joke", points: { humor: 2 } },
        { id: "c", text: "A reset hug", points: { heart: 2 } },
        { id: "d", text: "A backup plan", points: { flexible: 2 } }
      ] },
      { id: "q2", text: "Your superpower is...", answers: [
        { id: "a", text: "Routines", points: { systems: 2 } },
        { id: "b", text: "Lightening the mood", points: { humor: 2 } },
        { id: "c", text: "Noticing feelings", points: { heart: 2 } },
        { id: "d", text: "Pivoting fast", points: { flexible: 2 } }
      ] },
      { id: "q3", text: "At bedtime, you want...", answers: [
        { id: "a", text: "A repeatable flow", points: { systems: 2 } },
        { id: "b", text: "A silly moment", points: { humor: 2 } },
        { id: "c", text: "A sweet conversation", points: { heart: 2 } },
        { id: "d", text: "Whatever works tonight", points: { flexible: 2 } }
      ] }
    ],
    results: [
      { slug: "systems", title: "Systems Parent", description: "You survive with structure, prep, and practical rhythms.", shareSummary: "My parenting survival style is Systems Parent." },
      { slug: "humor", title: "Humor Parent", description: "You survive by keeping things human, funny, and less tense.", shareSummary: "My parenting survival style is Humor Parent." },
      { slug: "heart", title: "Heart Parent", description: "You survive by staying emotionally tuned in.", shareSummary: "My parenting survival style is Heart Parent." },
      { slug: "flexible", title: "Flexible Parent", description: "You survive by adapting quickly and letting perfect go.", shareSummary: "My parenting survival style is Flexible Parent." }
    ],
    seoTitle: "What Is Your Parenting Survival Style? Quiz",
    seoDescription: "Take this light parenting quiz to find your busy-day survival style.",
    facebookShareTitle: "What is your parenting survival style?",
    facebookShareDescription: "A quick quiz for busy family days."
  },
  {
    slug: "what-season-matches-your-personality",
    title: "What Season Matches Your Personality?",
    description: "Find whether your personality feels like spring, summer, fall, or winter.",
    category: "seasonal",
    type: "personality",
    tags: ["seasonal", "mood", "personality"],
    image,
    estimatedMinutes: 2,
    publishedAt: "2026-04-14",
    questions: [
      { id: "q1", text: "Pick a color mood.", answers: [
        { id: "a", text: "Fresh green", points: { spring: 2 } },
        { id: "b", text: "Bright blue", points: { summer: 2 } },
        { id: "c", text: "Rust and gold", points: { fall: 2 } },
        { id: "d", text: "Soft gray", points: { winter: 2 } }
      ] },
      { id: "q2", text: "You are happiest when things feel...", answers: [
        { id: "a", text: "New", points: { spring: 2 } },
        { id: "b", text: "Open", points: { summer: 2 } },
        { id: "c", text: "Cozy", points: { fall: 2 } },
        { id: "d", text: "Quiet", points: { winter: 2 } }
      ] },
      { id: "q3", text: "Choose a weekend activity.", answers: [
        { id: "a", text: "Plant shopping", points: { spring: 2 } },
        { id: "b", text: "Outdoor lunch", points: { summer: 2 } },
        { id: "c", text: "A market and baking", points: { fall: 2 } },
        { id: "d", text: "Reading inside", points: { winter: 2 } }
      ] }
    ],
    results: [
      { slug: "spring", title: "Spring", description: "You bring freshness, hope, and a sense that things can begin again.", shareSummary: "My personality season is Spring." },
      { slug: "summer", title: "Summer", description: "You bring warmth, openness, and bright social energy.", shareSummary: "My personality season is Summer." },
      { slug: "fall", title: "Fall", description: "You bring coziness, depth, and a love of meaningful rituals.", shareSummary: "My personality season is Fall." },
      { slug: "winter", title: "Winter", description: "You bring calm, reflection, and quiet strength.", shareSummary: "My personality season is Winter." }
    ],
    seoTitle: "What Season Matches Your Personality? Quiz",
    seoDescription: "Find the season that matches your personality with this quick quiz.",
    facebookShareTitle: "What season matches your personality?",
    facebookShareDescription: "Take the seasonal personality quiz and share your result."
  },
  {
    slug: "are-you-a-planner-or-a-wing-it-person",
    title: "Are You a Planner or a Wing-It Person?",
    description: "Find where you land between detailed plans and spontaneous choices.",
    category: "personality",
    type: "personality",
    tags: ["personality", "planning", "habits"],
    image,
    estimatedMinutes: 2,
    featured: true,
    publishedAt: "2026-04-12",
    questions: [
      { id: "q1", text: "A free Saturday appears. You...", answers: [
        { id: "a", text: "Make a loose plan", points: { balanced: 2 } },
        { id: "b", text: "Schedule the highlights", points: { planner: 2 } },
        { id: "c", text: "See what happens", points: { wing: 2 } }
      ] },
      { id: "q2", text: "Before a trip, you usually have...", answers: [
        { id: "a", text: "A few must-dos", points: { balanced: 2 } },
        { id: "b", text: "A full itinerary", points: { planner: 2 } },
        { id: "c", text: "A destination and optimism", points: { wing: 2 } }
      ] },
      { id: "q3", text: "Plans changing last minute makes you feel...", answers: [
        { id: "a", text: "Okay if there is a new plan", points: { balanced: 2 } },
        { id: "b", text: "A little rattled", points: { planner: 2 } },
        { id: "c", text: "Honestly fine", points: { wing: 2 } }
      ] }
    ],
    results: [
      { slug: "planner", title: "Planner", description: "You like clarity, preparation, and the comfort of knowing what is next.", shareSummary: "I'm a Planner." },
      { slug: "balanced", title: "Flexible Planner", description: "You like a helpful outline but leave room for the day to breathe.", shareSummary: "I'm a Flexible Planner." },
      { slug: "wing-it", title: "Wing-It Person", description: "You trust the moment and often find the best stories off-script.", shareSummary: "I'm a Wing-It Person." }
    ],
    seoTitle: "Are You a Planner or a Wing-It Person? Quiz",
    seoDescription: "Take this quick personality quiz to find your planning style.",
    facebookShareTitle: "Are you a planner or a wing-it person?",
    facebookShareDescription: "Find your planning style with this quick quiz."
  }
];

type QuickResult = {
  slug: string;
  title: string;
  description: string;
  shareSummary: string;
};

type QuickQuestion = {
  text: string;
  answers: Array<{
    text: string;
    result: string;
  }>;
};

type QuickQuizInput = {
  slug: string;
  title: string;
  description: string;
  category: Quiz["category"];
  type?: QuizType;
  tags: string[];
  publishedAt: string;
  estimatedMinutes?: number;
  trending?: boolean;
  featured?: boolean;
  questions: QuickQuestion[];
  results: QuickResult[];
};

type TriviaQuizInput = Omit<QuickQuizInput, "type" | "questions" | "results"> & {
  questions: Array<{
    text: string;
    correct: string;
    wrong: string[];
  }>;
};

function makeQuickQuiz({
  slug,
  title,
  description,
  category,
  type = "personality",
  tags,
  publishedAt,
  estimatedMinutes = 2,
  trending,
  featured,
  questions,
  results
}: QuickQuizInput): Quiz {
  return {
    slug,
    title,
    description,
    category,
    type,
    tags,
    image,
    estimatedMinutes,
    trending,
    featured,
    publishedAt,
    questions: questions.map((question, questionIndex) => ({
      id: `q${questionIndex + 1}`,
      text: question.text,
      answers: question.answers.map((answer, answerIndex) => ({
        id: String.fromCharCode(97 + answerIndex),
        text: answer.text,
        points: { [answer.result]: 2 }
      }))
    })),
    results,
    seoTitle: `${title} Quiz`,
    seoDescription: description,
    facebookShareTitle: title,
    facebookShareDescription: "Take this quick quiz and share your result."
  };
}

function makeTriviaQuiz({
  slug,
  title,
  description,
  category,
  tags,
  publishedAt,
  estimatedMinutes = 3,
  trending,
  featured,
  questions
}: TriviaQuizInput): Quiz {
  const questionCount = questions.length;

  return {
    slug,
    title,
    description,
    category,
    type: "trivia",
    tags,
    image,
    estimatedMinutes,
    trending,
    featured,
    publishedAt,
    questions: questions.map((question, questionIndex) => ({
      id: `q${questionIndex + 1}`,
      text: question.text,
      answers: [
        { id: "a", text: question.correct, correct: true },
        ...question.wrong.map((wrongAnswer, wrongIndex) => ({
          id: String.fromCharCode(98 + wrongIndex),
          text: wrongAnswer
        }))
      ]
    })),
    results: [
      {
        slug: "just-starting",
        title: "Just Starting",
        description: "You picked up a few clues and have plenty of room for a rematch.",
        shareSummary: "I got Just Starting.",
        minScore: 0,
        maxScore: Math.max(1, Math.floor(questionCount / 3))
      },
      {
        slug: "solid-score",
        title: "Solid Score",
        description: "You know more than the basics and handled the middle ground well.",
        shareSummary: "I got Solid Score.",
        minScore: Math.max(2, Math.floor(questionCount / 3) + 1),
        maxScore: Math.max(2, questionCount - 1)
      },
      {
        slug: "sharp-mind",
        title: "Sharp Mind",
        description: "You were dialed in and caught the details.",
        shareSummary: "I got Sharp Mind.",
        minScore: questionCount,
        maxScore: questionCount
      }
    ],
    seoTitle: `${title} Quiz`,
    seoDescription: description,
    facebookShareTitle: title,
    facebookShareDescription: "Take this quick trivia quiz and compare scores."
  };
}

const expansionQuizzes: Quiz[] = [
  makeQuickQuiz({
    slug: "what-morning-routine-fits-your-personality",
    title: "What Morning Routine Fits Your Personality?",
    description: "Find the simple morning rhythm that matches your natural energy.",
    category: "lifestyle",
    tags: ["morning", "routine", "habits"],
    publishedAt: "2026-05-10",
    trending: true,
    questions: [
      { text: "Your first hour should feel...", answers: [
        { text: "Quiet and slow", result: "slow-start" },
        { text: "Structured and clear", result: "planned-start" },
        { text: "Bright and active", result: "energy-start" },
        { text: "Flexible and forgiving", result: "soft-start" }
      ] },
      { text: "Pick a morning anchor.", answers: [
        { text: "Coffee and silence", result: "slow-start" },
        { text: "A written checklist", result: "planned-start" },
        { text: "A walk or workout", result: "energy-start" },
        { text: "A gentle reset button", result: "soft-start" }
      ] },
      { text: "What usually derails you?", answers: [
        { text: "Too much noise", result: "slow-start" },
        { text: "No plan", result: "planned-start" },
        { text: "Sitting too long", result: "energy-start" },
        { text: "Feeling rushed", result: "soft-start" }
      ] }
    ],
    results: [
      { slug: "slow-start", title: "Slow Start Routine", description: "You do best with quiet, warmth, and a low-pressure beginning.", shareSummary: "My morning routine is Slow Start." },
      { slug: "planned-start", title: "Planned Start Routine", description: "You thrive with a short list and a clear first step.", shareSummary: "My morning routine is Planned Start." },
      { slug: "energy-start", title: "Energy Start Routine", description: "Movement and momentum help you feel awake and capable.", shareSummary: "My morning routine is Energy Start." },
      { slug: "soft-start", title: "Soft Start Routine", description: "You need grace, buffer time, and a routine that bends with real life.", shareSummary: "My morning routine is Soft Start." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-social-battery-do-you-have",
    title: "What Kind of Social Battery Do You Have?",
    description: "Find how your energy rises, dips, and recharges around people.",
    category: "personality",
    tags: ["personality", "friends", "energy"],
    publishedAt: "2026-05-09",
    trending: true,
    questions: [
      { text: "After a full day with people, you want...", answers: [
        { text: "Total quiet", result: "deep-recharger" },
        { text: "One trusted person", result: "selective-social" },
        { text: "A second plan", result: "high-spark" },
        { text: "A little of both", result: "balanced-battery" }
      ] },
      { text: "Your favorite invite is...", answers: [
        { text: "Small and calm", result: "deep-recharger" },
        { text: "Close friends only", result: "selective-social" },
        { text: "Big and lively", result: "high-spark" },
        { text: "Clear start and end time", result: "balanced-battery" }
      ] },
      { text: "You feel most yourself when...", answers: [
        { text: "You have space", result: "deep-recharger" },
        { text: "You feel known", result: "selective-social" },
        { text: "The room has energy", result: "high-spark" },
        { text: "You can choose your pace", result: "balanced-battery" }
      ] }
    ],
    results: [
      { slug: "deep-recharger", title: "Deep Recharger", description: "You enjoy people, but solitude is where your energy truly returns.", shareSummary: "My social battery is Deep Recharger." },
      { slug: "selective-social", title: "Selective Social", description: "You are warmest in small circles where the connection feels real.", shareSummary: "My social battery is Selective Social." },
      { slug: "high-spark", title: "High Spark", description: "You pick up energy from lively rooms, plans, and shared momentum.", shareSummary: "My social battery is High Spark." },
      { slug: "balanced-battery", title: "Balanced Battery", description: "You like connection and quiet in equal, well-timed doses.", shareSummary: "My social battery is Balanced Battery." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-color-matches-your-current-mood",
    title: "What Color Matches Your Current Mood?",
    description: "Choose a few feelings and tiny preferences to reveal your mood color.",
    category: "personality",
    tags: ["mood", "color", "personality"],
    publishedAt: "2026-05-08",
    questions: [
      { text: "Right now you want more...", answers: [
        { text: "Calm", result: "sage" },
        { text: "Clarity", result: "blue" },
        { text: "Comfort", result: "cream" },
        { text: "Focus", result: "charcoal" }
      ] },
      { text: "Pick a texture.", answers: [
        { text: "Linen", result: "sage" },
        { text: "Cool glass", result: "blue" },
        { text: "Soft knit", result: "cream" },
        { text: "Smooth stone", result: "charcoal" }
      ] },
      { text: "Your ideal pace is...", answers: [
        { text: "Gentle", result: "sage" },
        { text: "Steady", result: "blue" },
        { text: "Cozy", result: "cream" },
        { text: "Decisive", result: "charcoal" }
      ] }
    ],
    results: [
      { slug: "sage", title: "Muted Sage", description: "Your mood is grounded, restorative, and quietly hopeful.", shareSummary: "My current mood color is Muted Sage." },
      { slug: "blue", title: "Dusty Blue", description: "Your mood is clear, thoughtful, and ready for a little breathing room.", shareSummary: "My current mood color is Dusty Blue." },
      { slug: "cream", title: "Warm Cream", description: "Your mood is soft, comforting, and drawn to familiar things.", shareSummary: "My current mood color is Warm Cream." },
      { slug: "charcoal", title: "Soft Charcoal", description: "Your mood is focused, composed, and a little no-nonsense.", shareSummary: "My current mood color is Soft Charcoal." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-texting-style",
    title: "What Is Your Texting Style?",
    description: "Find out what your messages say about your connection style.",
    category: "relationships",
    tags: ["texting", "friends", "relationships"],
    publishedAt: "2026-05-07",
    trending: true,
    questions: [
      { text: "Your replies are usually...", answers: [
        { text: "Fast and expressive", result: "instant-spark" },
        { text: "Thoughtful paragraphs", result: "deep-reply" },
        { text: "Short but reliable", result: "steady-checkin" },
        { text: "Chaotic but loving", result: "delayed-gem" }
      ] },
      { text: "Your favorite message to send is...", answers: [
        { text: "A running commentary", result: "instant-spark" },
        { text: "A careful response", result: "deep-reply" },
        { text: "A practical update", result: "steady-checkin" },
        { text: "A meme three days late", result: "delayed-gem" }
      ] },
      { text: "Unread messages make you feel...", answers: [
        { text: "Curious", result: "instant-spark" },
        { text: "Like you need time", result: "deep-reply" },
        { text: "Ready to clear them", result: "steady-checkin" },
        { text: "A little haunted", result: "delayed-gem" }
      ] }
    ],
    results: [
      { slug: "instant-spark", title: "Instant Spark", description: "You keep conversations alive with quick warmth and energy.", shareSummary: "My texting style is Instant Spark." },
      { slug: "deep-reply", title: "Deep Reply", description: "You treat messages like real conversations and bring care to your words.", shareSummary: "My texting style is Deep Reply." },
      { slug: "steady-checkin", title: "Steady Check-In", description: "You may be concise, but people can count on you.", shareSummary: "My texting style is Steady Check-In." },
      { slug: "delayed-gem", title: "Delayed Gem", description: "Your timing is mysterious, but your messages are usually worth it.", shareSummary: "My texting style is Delayed Gem." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-apology-style",
    title: "What Is Your Apology Style?",
    description: "A gentle quiz about how you repair, reconnect, and move forward.",
    category: "relationships",
    tags: ["relationships", "communication", "personality"],
    publishedAt: "2026-05-06",
    questions: [
      { text: "When tension happens, you first want to...", answers: [
        { text: "Talk it through", result: "processor" },
        { text: "Fix the practical part", result: "repairer" },
        { text: "Give everyone space", result: "pauser" },
        { text: "Offer reassurance", result: "reconnector" }
      ] },
      { text: "A good apology needs...", answers: [
        { text: "Clarity", result: "processor" },
        { text: "Changed behavior", result: "repairer" },
        { text: "Timing", result: "pauser" },
        { text: "Warmth", result: "reconnector" }
      ] },
      { text: "You feel better after...", answers: [
        { text: "A full conversation", result: "processor" },
        { text: "A real solution", result: "repairer" },
        { text: "A calm reset", result: "pauser" },
        { text: "A kind check-in", result: "reconnector" }
      ] }
    ],
    results: [
      { slug: "processor", title: "The Processor", description: "You repair by understanding what happened and naming it honestly.", shareSummary: "My apology style is The Processor." },
      { slug: "repairer", title: "The Repairer", description: "You believe apologies matter most when they lead to better actions.", shareSummary: "My apology style is The Repairer." },
      { slug: "pauser", title: "The Pauser", description: "You need space to come back with a calmer heart and clearer words.", shareSummary: "My apology style is The Pauser." },
      { slug: "reconnector", title: "The Reconnector", description: "You repair with tenderness, reassurance, and a desire to feel close again.", shareSummary: "My apology style is The Reconnector." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-kitchen-person-are-you",
    title: "What Kind of Kitchen Person Are You?",
    description: "Find your kitchen energy, from tidy prepper to creative snacker.",
    category: "food",
    tags: ["kitchen", "food", "home"],
    publishedAt: "2026-05-05",
    questions: [
      { text: "Your kitchen counter is usually...", answers: [
        { text: "Clear and ready", result: "tidy-prepper" },
        { text: "A little busy", result: "creative-cook" },
        { text: "Snack central", result: "snack-curator" },
        { text: "Functional enough", result: "easy-meals" }
      ] },
      { text: "Pick a dinner mood.", answers: [
        { text: "Planned ingredients", result: "tidy-prepper" },
        { text: "Experimenting", result: "creative-cook" },
        { text: "Small plates", result: "snack-curator" },
        { text: "Simple and fast", result: "easy-meals" }
      ] },
      { text: "Your favorite kitchen win is...", answers: [
        { text: "Everything prepped", result: "tidy-prepper" },
        { text: "A new flavor working", result: "creative-cook" },
        { text: "The perfect bite", result: "snack-curator" },
        { text: "Dinner handled", result: "easy-meals" }
      ] }
    ],
    results: [
      { slug: "tidy-prepper", title: "Tidy Prepper", description: "You like order, clean counters, and a little future-you kindness.", shareSummary: "I'm a Tidy Prepper in the kitchen." },
      { slug: "creative-cook", title: "Creative Cook", description: "You cook by instinct and are happiest when the kitchen feels playful.", shareSummary: "I'm a Creative Cook." },
      { slug: "snack-curator", title: "Snack Curator", description: "You understand the art of grazing and building the perfect little plate.", shareSummary: "I'm a Snack Curator." },
      { slug: "easy-meals", title: "Easy Meals Realist", description: "You want food that works for real life without turning dinner into a project.", shareSummary: "I'm an Easy Meals Realist." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-breakfast-matches-your-personality",
    title: "What Breakfast Matches Your Personality?",
    description: "Pick your pace and cravings to reveal your breakfast match.",
    category: "food",
    tags: ["breakfast", "food", "personality"],
    publishedAt: "2026-05-04",
    questions: [
      { text: "Breakfast should be...", answers: [
        { text: "Warm and filling", result: "oatmeal" },
        { text: "Quick and bold", result: "breakfast-sandwich" },
        { text: "Fresh and colorful", result: "fruit-bowl" },
        { text: "Slow and special", result: "pancakes" }
      ] },
      { text: "Pick a morning flavor.", answers: [
        { text: "Cinnamon", result: "oatmeal" },
        { text: "Savory", result: "breakfast-sandwich" },
        { text: "Berry", result: "fruit-bowl" },
        { text: "Maple", result: "pancakes" }
      ] },
      { text: "Your breakfast energy is...", answers: [
        { text: "Comforting", result: "oatmeal" },
        { text: "Efficient", result: "breakfast-sandwich" },
        { text: "Fresh", result: "fruit-bowl" },
        { text: "Leisurely", result: "pancakes" }
      ] }
    ],
    results: [
      { slug: "oatmeal", title: "Cozy Oatmeal", description: "You are steady, warm, and surprisingly adaptable.", shareSummary: "My breakfast match is Cozy Oatmeal." },
      { slug: "breakfast-sandwich", title: "Breakfast Sandwich", description: "You are practical, direct, and ready to get moving.", shareSummary: "My breakfast match is Breakfast Sandwich." },
      { slug: "fruit-bowl", title: "Fruit Bowl", description: "You bring freshness, brightness, and a little color to the day.", shareSummary: "My breakfast match is Fruit Bowl." },
      { slug: "pancakes", title: "Weekend Pancakes", description: "You appreciate comfort, ritual, and a little treat energy.", shareSummary: "My breakfast match is Weekend Pancakes." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-organizing-style",
    title: "What Is Your Organizing Style?",
    description: "Find the home organization approach that actually fits your brain.",
    category: "home",
    tags: ["organizing", "home", "cleaning"],
    publishedAt: "2026-05-03",
    trending: true,
    questions: [
      { text: "A messy drawer makes you want to...", answers: [
        { text: "Label everything", result: "label-lover" },
        { text: "Make it pretty", result: "visual-styler" },
        { text: "Clear it fast", result: "quick-sorter" },
        { text: "Create zones", result: "system-builder" }
      ] },
      { text: "Your ideal storage is...", answers: [
        { text: "Clearly named", result: "label-lover" },
        { text: "Open and attractive", result: "visual-styler" },
        { text: "Simple bins", result: "quick-sorter" },
        { text: "Perfectly categorized", result: "system-builder" }
      ] },
      { text: "You keep a system going when it is...", answers: [
        { text: "Specific", result: "label-lover" },
        { text: "Visible", result: "visual-styler" },
        { text: "Fast", result: "quick-sorter" },
        { text: "Logical", result: "system-builder" }
      ] }
    ],
    results: [
      { slug: "label-lover", title: "Label Lover", description: "You like clarity and want every item to have a named place.", shareSummary: "My organizing style is Label Lover." },
      { slug: "visual-styler", title: "Visual Styler", description: "You stay organized when the system is attractive and easy to see.", shareSummary: "My organizing style is Visual Styler." },
      { slug: "quick-sorter", title: "Quick Sorter", description: "You need low-friction systems that can survive a busy week.", shareSummary: "My organizing style is Quick Sorter." },
      { slug: "system-builder", title: "System Builder", description: "You love a smart structure and a home that makes sense.", shareSummary: "My organizing style is System Builder." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-cleaning-rhythm",
    title: "What Is Your Cleaning Rhythm?",
    description: "Find the cleaning style that fits your real-life energy.",
    category: "home",
    tags: ["cleaning", "home", "routine"],
    publishedAt: "2026-05-02",
    questions: [
      { text: "You clean best when...", answers: [
        { text: "It is scheduled", result: "routine-cleaner" },
        { text: "The mood hits", result: "burst-cleaner" },
        { text: "It is tiny and daily", result: "micro-cleaner" },
        { text: "Someone is coming over", result: "deadline-cleaner" }
      ] },
      { text: "Pick a cleaning win.", answers: [
        { text: "A weekly reset", result: "routine-cleaner" },
        { text: "A dramatic before and after", result: "burst-cleaner" },
        { text: "A five-minute tidy", result: "micro-cleaner" },
        { text: "Guest-ready rooms", result: "deadline-cleaner" }
      ] },
      { text: "Your biggest obstacle is...", answers: [
        { text: "Forgetting the plan", result: "routine-cleaner" },
        { text: "Starting too late", result: "burst-cleaner" },
        { text: "Letting small things pile up", result: "micro-cleaner" },
        { text: "Needing pressure", result: "deadline-cleaner" }
      ] }
    ],
    results: [
      { slug: "routine-cleaner", title: "Routine Cleaner", description: "You do best with a predictable rhythm and repeatable tasks.", shareSummary: "My cleaning rhythm is Routine Cleaner." },
      { slug: "burst-cleaner", title: "Burst Cleaner", description: "When you get momentum, you can transform a room fast.", shareSummary: "My cleaning rhythm is Burst Cleaner." },
      { slug: "micro-cleaner", title: "Micro Cleaner", description: "Tiny daily resets are your best path to a calmer home.", shareSummary: "My cleaning rhythm is Micro Cleaner." },
      { slug: "deadline-cleaner", title: "Deadline Cleaner", description: "A little urgency helps you focus and get things done.", shareSummary: "My cleaning rhythm is Deadline Cleaner." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-career-motivation-style-are-you",
    title: "What Career Motivation Style Are You?",
    description: "Find what actually helps you feel engaged at work.",
    category: "career",
    tags: ["career", "work", "motivation"],
    publishedAt: "2026-04-30",
    questions: [
      { text: "You feel motivated by...", answers: [
        { text: "Clear goals", result: "goal-driven" },
        { text: "Helpful teamwork", result: "team-driven" },
        { text: "Creative freedom", result: "freedom-driven" },
        { text: "Visible progress", result: "progress-driven" }
      ] },
      { text: "A good project gives you...", answers: [
        { text: "Targets", result: "goal-driven" },
        { text: "Collaboration", result: "team-driven" },
        { text: "Room to shape it", result: "freedom-driven" },
        { text: "Momentum", result: "progress-driven" }
      ] },
      { text: "You lose steam when...", answers: [
        { text: "Expectations are vague", result: "goal-driven" },
        { text: "You feel isolated", result: "team-driven" },
        { text: "There is no autonomy", result: "freedom-driven" },
        { text: "Nothing feels finished", result: "progress-driven" }
      ] }
    ],
    results: [
      { slug: "goal-driven", title: "Goal Driven", description: "You like a clear finish line and the satisfaction of aiming well.", shareSummary: "My career motivation style is Goal Driven." },
      { slug: "team-driven", title: "Team Driven", description: "You do your best work when the people and purpose feel connected.", shareSummary: "My career motivation style is Team Driven." },
      { slug: "freedom-driven", title: "Freedom Driven", description: "You need space to make choices and bring your own ideas forward.", shareSummary: "My career motivation style is Freedom Driven." },
      { slug: "progress-driven", title: "Progress Driven", description: "You are energized by movement, milestones, and visible wins.", shareSummary: "My career motivation style is Progress Driven." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-meeting-personality",
    title: "What Is Your Meeting Personality?",
    description: "Find the role you naturally play when everyone gets on a call.",
    category: "career",
    tags: ["career", "meetings", "work"],
    publishedAt: "2026-04-28",
    questions: [
      { text: "In a meeting, you usually...", answers: [
        { text: "Ask clarifying questions", result: "clarifier" },
        { text: "Keep things moving", result: "driver" },
        { text: "Notice people", result: "connector" },
        { text: "Bring new ideas", result: "ideator" }
      ] },
      { text: "Your best meeting contribution is...", answers: [
        { text: "Making the ask clear", result: "clarifier" },
        { text: "Naming next steps", result: "driver" },
        { text: "Reading the room", result: "connector" },
        { text: "Offering options", result: "ideator" }
      ] },
      { text: "You get frustrated when...", answers: [
        { text: "Nobody defines the problem", result: "clarifier" },
        { text: "Nothing gets decided", result: "driver" },
        { text: "Tone gets ignored", result: "connector" },
        { text: "Ideas get shut down early", result: "ideator" }
      ] }
    ],
    results: [
      { slug: "clarifier", title: "The Clarifier", description: "You help the group understand what is actually being discussed.", shareSummary: "My meeting personality is The Clarifier." },
      { slug: "driver", title: "The Driver", description: "You turn conversation into decisions, owners, and next steps.", shareSummary: "My meeting personality is The Driver." },
      { slug: "connector", title: "The Connector", description: "You notice the human layer and keep collaboration healthier.", shareSummary: "My meeting personality is The Connector." },
      { slug: "ideator", title: "The Ideator", description: "You bring possibilities, angles, and creative momentum.", shareSummary: "My meeting personality is The Ideator." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-budgeting-style-fits-you",
    title: "What Budgeting Style Fits You?",
    description: "A simple money quiz about the planning style you might actually use.",
    category: "money",
    type: "recommendation",
    tags: ["money", "budgeting", "planning"],
    publishedAt: "2026-04-26",
    trending: true,
    questions: [
      { text: "A budget should feel...", answers: [
        { text: "Detailed", result: "line-by-line" },
        { text: "Flexible", result: "bucket-budget" },
        { text: "Automatic", result: "autopilot" },
        { text: "Motivating", result: "goal-first" }
      ] },
      { text: "You are most likely to stick with...", answers: [
        { text: "A spreadsheet", result: "line-by-line" },
        { text: "Broad categories", result: "bucket-budget" },
        { text: "Recurring transfers", result: "autopilot" },
        { text: "A savings target", result: "goal-first" }
      ] },
      { text: "Your money stress comes from...", answers: [
        { text: "Not knowing details", result: "line-by-line" },
        { text: "Rules that feel too tight", result: "bucket-budget" },
        { text: "Forgetting to act", result: "autopilot" },
        { text: "No clear why", result: "goal-first" }
      ] }
    ],
    results: [
      { slug: "line-by-line", title: "Line-by-Line Budget", description: "You feel calmer when the numbers are visible and specific.", shareSummary: "My budgeting style is Line-by-Line." },
      { slug: "bucket-budget", title: "Bucket Budget", description: "You need helpful categories without tracking every tiny detail.", shareSummary: "My budgeting style is Bucket Budget." },
      { slug: "autopilot", title: "Autopilot Budget", description: "You do best when good choices happen automatically in the background.", shareSummary: "My budgeting style is Autopilot." },
      { slug: "goal-first", title: "Goal-First Budget", description: "You stay engaged when your money has a clear purpose.", shareSummary: "My budgeting style is Goal-First." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-saver-are-you",
    title: "What Kind of Saver Are You?",
    description: "Find the savings motivation that best matches your personality.",
    category: "money",
    tags: ["money", "saving", "habits"],
    publishedAt: "2026-04-24",
    questions: [
      { text: "Saving feels easiest when...", answers: [
        { text: "There is a clear goal", result: "goal-saver" },
        { text: "It is automatic", result: "set-and-forget" },
        { text: "You can see progress", result: "tracker" },
        { text: "It protects your peace", result: "security-saver" }
      ] },
      { text: "Pick a savings reason.", answers: [
        { text: "A trip or purchase", result: "goal-saver" },
        { text: "Future convenience", result: "set-and-forget" },
        { text: "Watching the number grow", result: "tracker" },
        { text: "Less worry", result: "security-saver" }
      ] },
      { text: "Your biggest helper would be...", answers: [
        { text: "A deadline", result: "goal-saver" },
        { text: "Automation", result: "set-and-forget" },
        { text: "A visual tracker", result: "tracker" },
        { text: "An emergency fund", result: "security-saver" }
      ] }
    ],
    results: [
      { slug: "goal-saver", title: "Goal Saver", description: "You save best when you can picture exactly what the money is for.", shareSummary: "I'm a Goal Saver." },
      { slug: "set-and-forget", title: "Set-and-Forget Saver", description: "You win by making saving automatic and low-maintenance.", shareSummary: "I'm a Set-and-Forget Saver." },
      { slug: "tracker", title: "Progress Tracker", description: "Seeing the number move keeps you motivated and focused.", shareSummary: "I'm a Progress Tracker." },
      { slug: "security-saver", title: "Security Saver", description: "You save to create calm, options, and breathing room.", shareSummary: "I'm a Security Saver." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-road-trip-role-are-you",
    title: "What Road Trip Role Are You?",
    description: "Find your road trip personality before the snacks are packed.",
    category: "travel",
    tags: ["travel", "road trip", "friends"],
    publishedAt: "2026-04-23",
    questions: [
      { text: "Before leaving, you handle...", answers: [
        { text: "The route", result: "navigator" },
        { text: "The playlist", result: "dj" },
        { text: "The snacks", result: "snack-lead" },
        { text: "The spontaneous stops", result: "detour-finder" }
      ] },
      { text: "Your road trip priority is...", answers: [
        { text: "Arriving smoothly", result: "navigator" },
        { text: "The mood", result: "dj" },
        { text: "Comfort", result: "snack-lead" },
        { text: "The story", result: "detour-finder" }
      ] },
      { text: "Pick a travel phrase.", answers: [
        { text: "I know the exit", result: "navigator" },
        { text: "Queue this song", result: "dj" },
        { text: "I brought options", result: "snack-lead" },
        { text: "Let's stop there", result: "detour-finder" }
      ] }
    ],
    results: [
      { slug: "navigator", title: "The Navigator", description: "You keep the trip pointed in the right direction.", shareSummary: "My road trip role is The Navigator." },
      { slug: "dj", title: "The DJ", description: "You understand that the soundtrack is half the experience.", shareSummary: "My road trip role is The DJ." },
      { slug: "snack-lead", title: "The Snack Lead", description: "You keep everyone comfortable, fueled, and grateful.", shareSummary: "My road trip role is The Snack Lead." },
      { slug: "detour-finder", title: "The Detour Finder", description: "You make sure the best memory is not always on the plan.", shareSummary: "My road trip role is The Detour Finder." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-packing-style-are-you",
    title: "What Packing Style Are You?",
    description: "Find whether your suitcase energy is prepared, minimal, or delightfully last-minute.",
    category: "travel",
    tags: ["travel", "packing", "planning"],
    publishedAt: "2026-04-21",
    questions: [
      { text: "You start packing...", answers: [
        { text: "Days ahead", result: "prepared-packer" },
        { text: "With a small list", result: "minimal-packer" },
        { text: "The night before", result: "last-minute" },
        { text: "By outfit mood", result: "style-packer" }
      ] },
      { text: "Your suitcase usually has...", answers: [
        { text: "Everything needed", result: "prepared-packer" },
        { text: "Only essentials", result: "minimal-packer" },
        { text: "A surprise mix", result: "last-minute" },
        { text: "Options", result: "style-packer" }
      ] },
      { text: "Your travel fear is...", answers: [
        { text: "Forgetting something", result: "prepared-packer" },
        { text: "Overpacking", result: "minimal-packer" },
        { text: "Missing the flight", result: "last-minute" },
        { text: "Wrong outfit vibe", result: "style-packer" }
      ] }
    ],
    results: [
      { slug: "prepared-packer", title: "Prepared Packer", description: "You travel calmer when every detail has been considered.", shareSummary: "My packing style is Prepared Packer." },
      { slug: "minimal-packer", title: "Minimal Packer", description: "You like light bags, clear choices, and less to manage.", shareSummary: "My packing style is Minimal Packer." },
      { slug: "last-minute", title: "Last-Minute Packer", description: "You may pack late, but somehow the essentials usually make it.", shareSummary: "My packing style is Last-Minute Packer." },
      { slug: "style-packer", title: "Style Packer", description: "You pack for the version of yourself the trip deserves.", shareSummary: "My packing style is Style Packer." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-family-weekend-fits-you",
    title: "What Kind of Family Weekend Fits You?",
    description: "Find the family weekend rhythm that sounds most doable right now.",
    category: "parenting",
    type: "recommendation",
    tags: ["parenting", "family", "weekend"],
    publishedAt: "2026-04-19",
    questions: [
      { text: "This weekend needs more...", answers: [
        { text: "Rest", result: "quiet-home" },
        { text: "Fresh air", result: "outdoor-reset" },
        { text: "Connection", result: "together-time" },
        { text: "Structure", result: "planned-day" }
      ] },
      { text: "The best plan has...", answers: [
        { text: "Low expectations", result: "quiet-home" },
        { text: "A park or trail", result: "outdoor-reset" },
        { text: "A shared activity", result: "together-time" },
        { text: "A clear schedule", result: "planned-day" }
      ] },
      { text: "By Sunday night, you want...", answers: [
        { text: "Everyone calmer", result: "quiet-home" },
        { text: "Everyone tired in a good way", result: "outdoor-reset" },
        { text: "A sweet memory", result: "together-time" },
        { text: "The week set up", result: "planned-day" }
      ] }
    ],
    results: [
      { slug: "quiet-home", title: "Quiet Home Weekend", description: "Keep it simple, soft, and close to home.", shareSummary: "My family weekend fit is Quiet Home Weekend." },
      { slug: "outdoor-reset", title: "Outdoor Reset Weekend", description: "Fresh air and a change of scenery could help everyone reset.", shareSummary: "My family weekend fit is Outdoor Reset Weekend." },
      { slug: "together-time", title: "Together Time Weekend", description: "A shared plan, even a small one, is the thing that matters most.", shareSummary: "My family weekend fit is Together Time Weekend." },
      { slug: "planned-day", title: "Planned Day Weekend", description: "A little structure will make the weekend feel less chaotic.", shareSummary: "My family weekend fit is Planned Day Weekend." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-school-morning-role-are-you",
    title: "What School Morning Role Are You?",
    description: "A light parenting quiz about the energy you bring to busy mornings.",
    category: "parenting",
    tags: ["parenting", "school", "morning"],
    publishedAt: "2026-04-17",
    questions: [
      { text: "Your school morning phrase is...", answers: [
        { text: "Shoes, please", result: "timekeeper" },
        { text: "We can fix it", result: "problem-solver" },
        { text: "Deep breath", result: "calm-coach" },
        { text: "Grab a snack", result: "backup-hero" }
      ] },
      { text: "You are best at...", answers: [
        { text: "Keeping the clock moving", result: "timekeeper" },
        { text: "Handling surprises", result: "problem-solver" },
        { text: "Lowering the temperature", result: "calm-coach" },
        { text: "Remembering extras", result: "backup-hero" }
      ] },
      { text: "The morning needs...", answers: [
        { text: "A schedule", result: "timekeeper" },
        { text: "A Plan B", result: "problem-solver" },
        { text: "Less stress", result: "calm-coach" },
        { text: "A packed bag", result: "backup-hero" }
      ] }
    ],
    results: [
      { slug: "timekeeper", title: "The Timekeeper", description: "You keep everyone pointed toward the door and mostly on time.", shareSummary: "My school morning role is The Timekeeper." },
      { slug: "problem-solver", title: "The Problem Solver", description: "Lost shoe, surprise form, weird breakfast request: you adapt.", shareSummary: "My school morning role is The Problem Solver." },
      { slug: "calm-coach", title: "The Calm Coach", description: "You bring regulation and perspective when the morning gets loud.", shareSummary: "My school morning role is The Calm Coach." },
      { slug: "backup-hero", title: "The Backup Hero", description: "You survive with snacks, wipes, chargers, and mysterious preparedness.", shareSummary: "My school morning role is The Backup Hero." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-comfort-show-vibe-are-you",
    title: "What Comfort Show Vibe Are You?",
    description: "Find the kind of TV energy your personality gives off.",
    category: "pop-culture",
    tags: ["tv", "pop culture", "comfort"],
    publishedAt: "2026-04-15",
    trending: true,
    questions: [
      { text: "Your ideal show feels...", answers: [
        { text: "Cozy and familiar", result: "cozy-sitcom" },
        { text: "Clever and fast", result: "sharp-comedy" },
        { text: "Dramatic but warm", result: "heart-drama" },
        { text: "Quiet and beautiful", result: "slow-burn" }
      ] },
      { text: "Pick a viewing mood.", answers: [
        { text: "Background comfort", result: "cozy-sitcom" },
        { text: "Laughing out loud", result: "sharp-comedy" },
        { text: "Feeling invested", result: "heart-drama" },
        { text: "Getting absorbed", result: "slow-burn" }
      ] },
      { text: "A great character is...", answers: [
        { text: "Lovably familiar", result: "cozy-sitcom" },
        { text: "Witty", result: "sharp-comedy" },
        { text: "Emotionally layered", result: "heart-drama" },
        { text: "Subtle", result: "slow-burn" }
      ] }
    ],
    results: [
      { slug: "cozy-sitcom", title: "Cozy Sitcom", description: "You are comforting, familiar, and easy to return to.", shareSummary: "My comfort show vibe is Cozy Sitcom." },
      { slug: "sharp-comedy", title: "Sharp Comedy", description: "You bring quick timing, wit, and a little sparkle.", shareSummary: "My comfort show vibe is Sharp Comedy." },
      { slug: "heart-drama", title: "Heart Drama", description: "You have warmth, depth, and main-character feelings.", shareSummary: "My comfort show vibe is Heart Drama." },
      { slug: "slow-burn", title: "Slow Burn", description: "You are thoughtful, layered, and quietly memorable.", shareSummary: "My comfort show vibe is Slow Burn." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-nostalgia-decade-matches-you",
    title: "Which Nostalgia Decade Matches You?",
    description: "Pick your favorite throwback moods and find your nostalgia decade.",
    category: "pop-culture",
    tags: ["nostalgia", "pop culture", "personality"],
    publishedAt: "2026-04-13",
    questions: [
      { text: "Pick a vibe.", answers: [
        { text: "Analog and bold", result: "eighties" },
        { text: "Casual and cool", result: "nineties" },
        { text: "Glossy and playful", result: "twothousands" },
        { text: "Indie and online", result: "twenty-tens" }
      ] },
      { text: "Your throwback item is...", answers: [
        { text: "Cassette tape", result: "eighties" },
        { text: "Flannel", result: "nineties" },
        { text: "Flip phone", result: "twothousands" },
        { text: "Photo filter", result: "twenty-tens" }
      ] },
      { text: "A good nostalgic night has...", answers: [
        { text: "Big songs", result: "eighties" },
        { text: "Comfort movies", result: "nineties" },
        { text: "Sleepover snacks", result: "twothousands" },
        { text: "Playlist deep cuts", result: "twenty-tens" }
      ] }
    ],
    results: [
      { slug: "eighties", title: "80s Energy", description: "You like big feelings, bold choices, and memorable moments.", shareSummary: "My nostalgia decade is the 80s." },
      { slug: "nineties", title: "90s Energy", description: "You bring relaxed confidence and low-key cool.", shareSummary: "My nostalgia decade is the 90s." },
      { slug: "twothousands", title: "2000s Energy", description: "You are playful, glossy, and a little chaotic in the best way.", shareSummary: "My nostalgia decade is the 2000s." },
      { slug: "twenty-tens", title: "2010s Energy", description: "You bring curated vibes, internet fluency, and indie-mainstream overlap.", shareSummary: "My nostalgia decade is the 2010s." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-rainy-day-activity-fits-your-mood",
    title: "What Rainy Day Activity Fits Your Mood?",
    description: "Find the cozy plan your current rainy-day energy wants.",
    category: "seasonal",
    type: "recommendation",
    tags: ["rainy day", "seasonal", "cozy"],
    publishedAt: "2026-04-11",
    questions: [
      { text: "Rain makes you want to...", answers: [
        { text: "Read", result: "reading-nook" },
        { text: "Bake", result: "baking-day" },
        { text: "Organize", result: "tidy-reset" },
        { text: "Watch movies", result: "movie-marathon" }
      ] },
      { text: "Pick a sound.", answers: [
        { text: "Pages turning", result: "reading-nook" },
        { text: "Mixer humming", result: "baking-day" },
        { text: "A drawer sliding shut", result: "tidy-reset" },
        { text: "Opening credits", result: "movie-marathon" }
      ] },
      { text: "By evening you want to feel...", answers: [
        { text: "Rested", result: "reading-nook" },
        { text: "Comforted", result: "baking-day" },
        { text: "Clear", result: "tidy-reset" },
        { text: "Entertained", result: "movie-marathon" }
      ] }
    ],
    results: [
      { slug: "reading-nook", title: "Reading Nook Day", description: "A book, blanket, and quiet corner are exactly the speed.", shareSummary: "My rainy day activity is Reading Nook Day." },
      { slug: "baking-day", title: "Baking Day", description: "Warm smells and a little kitchen project would suit you perfectly.", shareSummary: "My rainy day activity is Baking Day." },
      { slug: "tidy-reset", title: "Tidy Reset", description: "You would feel better turning indoor time into a calmer space.", shareSummary: "My rainy day activity is Tidy Reset." },
      { slug: "movie-marathon", title: "Movie Marathon", description: "Lean into the weather with comfort viewing and low expectations.", shareSummary: "My rainy day activity is Movie Marathon." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-holiday-hosting-style-are-you",
    title: "What Holiday Hosting Style Are You?",
    description: "Find the hosting energy you bring to seasonal gatherings.",
    category: "seasonal",
    tags: ["holiday", "hosting", "seasonal"],
    publishedAt: "2026-04-09",
    questions: [
      { text: "Your hosting priority is...", answers: [
        { text: "A beautiful table", result: "detail-host" },
        { text: "Everyone feeling welcome", result: "warm-host" },
        { text: "Food handled early", result: "prep-host" },
        { text: "Keeping it casual", result: "easy-host" }
      ] },
      { text: "Guests remember your...", answers: [
        { text: "Thoughtful details", result: "detail-host" },
        { text: "Kindness", result: "warm-host" },
        { text: "Great timing", result: "prep-host" },
        { text: "Relaxed mood", result: "easy-host" }
      ] },
      { text: "Before people arrive, you are...", answers: [
        { text: "Adjusting place settings", result: "detail-host" },
        { text: "Making sure everyone has a spot", result: "warm-host" },
        { text: "Checking the oven", result: "prep-host" },
        { text: "Putting on music", result: "easy-host" }
      ] }
    ],
    results: [
      { slug: "detail-host", title: "Detail Host", description: "You make gatherings feel special through care and presentation.", shareSummary: "My holiday hosting style is Detail Host." },
      { slug: "warm-host", title: "Warm Host", description: "Your real gift is making people feel relaxed and included.", shareSummary: "My holiday hosting style is Warm Host." },
      { slug: "prep-host", title: "Prep Host", description: "You keep the day smoother with planning, timing, and smart shortcuts.", shareSummary: "My holiday hosting style is Prep Host." },
      { slug: "easy-host", title: "Easy Host", description: "You know that a good gathering does not need to be overproduced.", shareSummary: "My holiday hosting style is Easy Host." }
    ]
  }),
  makeTriviaQuiz({
    slug: "can-you-pass-this-kitchen-measurement-quiz",
    title: "Can You Pass This Kitchen Measurement Quiz?",
    description: "Test your everyday kitchen measurement knowledge.",
    category: "trivia",
    tags: ["trivia", "kitchen", "food"],
    publishedAt: "2026-04-08",
    trending: true,
    questions: [
      { text: "How many tablespoons are in one cup?", correct: "16", wrong: ["8", "12", "20"] },
      { text: "How many teaspoons are in one tablespoon?", correct: "3", wrong: ["2", "4", "6"] },
      { text: "A standard stick of butter is usually how many tablespoons?", correct: "8", wrong: ["4", "10", "12"] },
      { text: "Which is larger?", correct: "A quart", wrong: ["A pint", "A cup", "A tablespoon"] }
    ]
  }),
  makeTriviaQuiz({
    slug: "how-well-do-you-know-us-landmarks",
    title: "How Well Do You Know U.S. Landmarks?",
    description: "A quick trivia quiz about famous places across the United States.",
    category: "trivia",
    tags: ["trivia", "travel", "landmarks"],
    publishedAt: "2026-04-07",
    questions: [
      { text: "The Gateway Arch is in which city?", correct: "St. Louis", wrong: ["Chicago", "Denver", "Phoenix"] },
      { text: "Mount Rushmore is in which state?", correct: "South Dakota", wrong: ["North Dakota", "Wyoming", "Montana"] },
      { text: "The Space Needle is associated with which city?", correct: "Seattle", wrong: ["Portland", "San Francisco", "Las Vegas"] },
      { text: "The Liberty Bell is in which city?", correct: "Philadelphia", wrong: ["Boston", "New York City", "Baltimore"] }
    ]
  }),
  makeTriviaQuiz({
    slug: "can-you-answer-these-everyday-science-questions",
    title: "Can You Answer These Everyday Science Questions?",
    description: "Test a few simple science facts hiding in daily life.",
    category: "trivia",
    tags: ["trivia", "science", "everyday"],
    publishedAt: "2026-04-06",
    questions: [
      { text: "Water freezes at what temperature in Fahrenheit?", correct: "32 degrees", wrong: ["0 degrees", "50 degrees", "100 degrees"] },
      { text: "Which planet is known as the Red Planet?", correct: "Mars", wrong: ["Venus", "Jupiter", "Mercury"] },
      { text: "Plants use sunlight to make food through what process?", correct: "Photosynthesis", wrong: ["Condensation", "Evaporation", "Magnetism"] },
      { text: "Which gas do humans need to breathe?", correct: "Oxygen", wrong: ["Helium", "Carbon dioxide", "Neon"] }
    ]
  }),
  makeTriviaQuiz({
    slug: "how-many-common-sayings-do-you-know",
    title: "How Many Common Sayings Do You Know?",
    description: "Finish familiar sayings and see how many you remember.",
    category: "trivia",
    tags: ["trivia", "sayings", "language"],
    publishedAt: "2026-04-05",
    questions: [
      { text: "Finish the saying: Better late than...", correct: "Never", wrong: ["Tomorrow", "Early", "Perfect"] },
      { text: "Finish the saying: The early bird catches the...", correct: "Worm", wrong: ["Train", "Sunrise", "Idea"] },
      { text: "Finish the saying: Actions speak louder than...", correct: "Words", wrong: ["Plans", "Thoughts", "Noise"] },
      { text: "Finish the saying: Practice makes...", correct: "Perfect", wrong: ["Progress only", "Noise", "Trouble"] }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-decision-maker-are-you",
    title: "What Kind of Decision Maker Are You?",
    description: "Find how you naturally choose, compare, and commit.",
    category: "personality",
    tags: ["personality", "decisions", "habits"],
    publishedAt: "2026-04-04",
    questions: [
      { text: "A big choice appears. You want...", answers: [
        { text: "Data", result: "analyst" },
        { text: "A gut check", result: "instinctive" },
        { text: "Advice", result: "collaborative" },
        { text: "More time", result: "reflective" }
      ] },
      { text: "You trust decisions that feel...", answers: [
        { text: "Supported by facts", result: "analyst" },
        { text: "Immediately right", result: "instinctive" },
        { text: "Talked through", result: "collaborative" },
        { text: "Fully considered", result: "reflective" }
      ] },
      { text: "Your decision strength is...", answers: [
        { text: "Seeing patterns", result: "analyst" },
        { text: "Moving quickly", result: "instinctive" },
        { text: "Gathering perspectives", result: "collaborative" },
        { text: "Avoiding rush", result: "reflective" }
      ] }
    ],
    results: [
      { slug: "analyst", title: "The Analyst", description: "You make your best choices when the evidence is clear.", shareSummary: "My decision style is The Analyst." },
      { slug: "instinctive", title: "The Instinctive Chooser", description: "You often know what feels right before you can fully explain it.", shareSummary: "My decision style is Instinctive Chooser." },
      { slug: "collaborative", title: "The Collaborative Chooser", description: "You make stronger choices when you can hear trusted perspectives.", shareSummary: "My decision style is Collaborative Chooser." },
      { slug: "reflective", title: "The Reflective Chooser", description: "You value time, space, and a decision that settles well.", shareSummary: "My decision style is Reflective Chooser." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-sunday-reset-do-you-need",
    title: "What Sunday Reset Do You Need?",
    description: "Pick your weekend mood and find a Sunday reset that fits.",
    category: "lifestyle",
    type: "recommendation",
    tags: ["sunday", "reset", "lifestyle"],
    publishedAt: "2026-04-03",
    questions: [
      { text: "Sunday should help you feel...", answers: [
        { text: "Rested", result: "rest-reset" },
        { text: "Prepared", result: "prep-reset" },
        { text: "Inspired", result: "creative-reset" },
        { text: "Connected", result: "social-reset" }
      ] },
      { text: "Pick one task.", answers: [
        { text: "Nap", result: "rest-reset" },
        { text: "Meal plan", result: "prep-reset" },
        { text: "Journal", result: "creative-reset" },
        { text: "Call someone", result: "social-reset" }
      ] },
      { text: "Your week starts better with...", answers: [
        { text: "Energy", result: "rest-reset" },
        { text: "A plan", result: "prep-reset" },
        { text: "A spark", result: "creative-reset" },
        { text: "Warmth", result: "social-reset" }
      ] }
    ],
    results: [
      { slug: "rest-reset", title: "Rest Reset", description: "Keep Sunday soft and protect your energy.", shareSummary: "I need a Rest Reset." },
      { slug: "prep-reset", title: "Prep Reset", description: "A few practical steps will make Monday gentler.", shareSummary: "I need a Prep Reset." },
      { slug: "creative-reset", title: "Creative Reset", description: "You need a little beauty, reflection, and fresh input.", shareSummary: "I need a Creative Reset." },
      { slug: "social-reset", title: "Social Reset", description: "A warm check-in could make the week feel lighter.", shareSummary: "I need a Social Reset." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-date-night-fits-you",
    title: "What Kind of Date Night Fits You?",
    description: "Find the date-night mood that matches your current energy.",
    category: "relationships",
    type: "recommendation",
    tags: ["relationships", "date night", "lifestyle"],
    publishedAt: "2026-04-02",
    questions: [
      { text: "Tonight should feel...", answers: [
        { text: "Cozy", result: "home-date" },
        { text: "Fun", result: "activity-date" },
        { text: "Romantic", result: "dinner-date" },
        { text: "Low-pressure", result: "walk-date" }
      ] },
      { text: "Pick a detail.", answers: [
        { text: "Blankets", result: "home-date" },
        { text: "Tickets", result: "activity-date" },
        { text: "Candles", result: "dinner-date" },
        { text: "Fresh air", result: "walk-date" }
      ] },
      { text: "You want more...", answers: [
        { text: "Ease", result: "home-date" },
        { text: "Laughter", result: "activity-date" },
        { text: "Intention", result: "dinner-date" },
        { text: "Conversation", result: "walk-date" }
      ] }
    ],
    results: [
      { slug: "home-date", title: "Cozy Home Date", description: "A calm night in is the right kind of close.", shareSummary: "My date night fit is Cozy Home Date." },
      { slug: "activity-date", title: "Activity Date", description: "You need something playful that gives the night momentum.", shareSummary: "My date night fit is Activity Date." },
      { slug: "dinner-date", title: "Dinner Date", description: "A little effort and atmosphere would feel meaningful.", shareSummary: "My date night fit is Dinner Date." },
      { slug: "walk-date", title: "Walk-and-Talk Date", description: "Simple movement and easy conversation are the sweet spot.", shareSummary: "My date night fit is Walk-and-Talk Date." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-dream-reading-nook-is-your-style",
    title: "What Dream Reading Nook Is Your Style?",
    description: "Choose cozy details to find your ideal home reading corner.",
    category: "home",
    tags: ["home", "decor", "reading"],
    publishedAt: "2026-04-01",
    questions: [
      { text: "Your nook needs...", answers: [
        { text: "Sunlight", result: "window-seat" },
        { text: "Blankets", result: "cozy-corner" },
        { text: "Shelves", result: "library-wall" },
        { text: "Quiet", result: "minimal-chair" }
      ] },
      { text: "Pick a chair.", answers: [
        { text: "Built-in bench", result: "window-seat" },
        { text: "Overstuffed armchair", result: "cozy-corner" },
        { text: "Classic leather", result: "library-wall" },
        { text: "Clean-lined lounge", result: "minimal-chair" }
      ] },
      { text: "The mood is...", answers: [
        { text: "Bright", result: "window-seat" },
        { text: "Soft", result: "cozy-corner" },
        { text: "Collected", result: "library-wall" },
        { text: "Peaceful", result: "minimal-chair" }
      ] }
    ],
    results: [
      { slug: "window-seat", title: "Sunny Window Seat", description: "You want a bright little perch that makes reading feel easy.", shareSummary: "My reading nook style is Sunny Window Seat." },
      { slug: "cozy-corner", title: "Cozy Corner", description: "You want softness, layers, and a spot that feels like a retreat.", shareSummary: "My reading nook style is Cozy Corner." },
      { slug: "library-wall", title: "Library Wall", description: "You want books, character, and a room with stories built in.", shareSummary: "My reading nook style is Library Wall." },
      { slug: "minimal-chair", title: "Minimal Chair", description: "You want quiet design, open space, and fewer distractions.", shareSummary: "My reading nook style is Minimal Chair." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-dinner-plan-matches-your-evening",
    title: "What Dinner Plan Matches Your Evening?",
    description: "Find the dinner strategy your current evening can actually support.",
    category: "food",
    type: "recommendation",
    tags: ["food", "dinner", "lifestyle"],
    publishedAt: "2026-03-31",
    questions: [
      { text: "Tonight you have...", answers: [
        { text: "Very little energy", result: "assembly-dinner" },
        { text: "Time to cook", result: "one-pot" },
        { text: "A craving", result: "takeout-night" },
        { text: "Leftovers", result: "remix" }
      ] },
      { text: "Dinner should be...", answers: [
        { text: "Effortless", result: "assembly-dinner" },
        { text: "Warm", result: "one-pot" },
        { text: "Fun", result: "takeout-night" },
        { text: "Resourceful", result: "remix" }
      ] },
      { text: "Pick a kitchen mood.", answers: [
        { text: "No stove", result: "assembly-dinner" },
        { text: "Simmering", result: "one-pot" },
        { text: "Delivery tracking", result: "takeout-night" },
        { text: "Creative fridge scan", result: "remix" }
      ] }
    ],
    results: [
      { slug: "assembly-dinner", title: "Assembly Dinner", description: "Keep it simple with a plate of easy, ready-to-go pieces.", shareSummary: "My dinner plan is Assembly Dinner." },
      { slug: "one-pot", title: "One-Pot Dinner", description: "A cozy, contained cooking project fits the evening.", shareSummary: "My dinner plan is One-Pot Dinner." },
      { slug: "takeout-night", title: "Takeout Night", description: "Tonight may be best handled by outsourcing dinner.", shareSummary: "My dinner plan is Takeout Night." },
      { slug: "remix", title: "Leftover Remix", description: "You can turn what you have into something surprisingly satisfying.", shareSummary: "My dinner plan is Leftover Remix." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-splurge-style",
    title: "What Is Your Splurge Style?",
    description: "Find the kind of treat that feels most worth it to you.",
    category: "money",
    tags: ["money", "shopping", "personality"],
    publishedAt: "2026-03-30",
    questions: [
      { text: "A worthwhile splurge is...", answers: [
        { text: "Useful every day", result: "practical-splurge" },
        { text: "A memory", result: "experience-splurge" },
        { text: "Beautiful", result: "aesthetic-splurge" },
        { text: "Comforting", result: "comfort-splurge" }
      ] },
      { text: "You regret purchases when they...", answers: [
        { text: "Do not get used", result: "practical-splurge" },
        { text: "Feel forgettable", result: "experience-splurge" },
        { text: "Do not feel special", result: "aesthetic-splurge" },
        { text: "Do not make life easier", result: "comfort-splurge" }
      ] },
      { text: "Pick a treat.", answers: [
        { text: "Better shoes", result: "practical-splurge" },
        { text: "Concert tickets", result: "experience-splurge" },
        { text: "A lovely lamp", result: "aesthetic-splurge" },
        { text: "Quality bedding", result: "comfort-splurge" }
      ] }
    ],
    results: [
      { slug: "practical-splurge", title: "Practical Splurge", description: "You like treats that earn their keep and improve daily life.", shareSummary: "My splurge style is Practical Splurge." },
      { slug: "experience-splurge", title: "Experience Splurge", description: "You value memories, stories, and doing something meaningful.", shareSummary: "My splurge style is Experience Splurge." },
      { slug: "aesthetic-splurge", title: "Aesthetic Splurge", description: "You appreciate beauty and the mood a special piece can create.", shareSummary: "My splurge style is Aesthetic Splurge." },
      { slug: "comfort-splurge", title: "Comfort Splurge", description: "You spend best when the result is ease, softness, or peace.", shareSummary: "My splurge style is Comfort Splurge." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-mini-vacation-should-you-take",
    title: "What Mini Vacation Should You Take?",
    description: "Find a low-lift getaway idea that matches your mood.",
    category: "travel",
    type: "recommendation",
    tags: ["travel", "weekend", "vacation"],
    publishedAt: "2026-03-29",
    questions: [
      { text: "You want to be...", answers: [
        { text: "Near water", result: "lake-weekend" },
        { text: "Somewhere walkable", result: "small-city" },
        { text: "In nature", result: "cabin-night" },
        { text: "Taken care of", result: "hotel-reset" }
      ] },
      { text: "Your travel pace is...", answers: [
        { text: "Slow", result: "lake-weekend" },
        { text: "Curious", result: "small-city" },
        { text: "Quiet", result: "cabin-night" },
        { text: "Easy", result: "hotel-reset" }
      ] },
      { text: "Pack one thing.", answers: [
        { text: "A towel", result: "lake-weekend" },
        { text: "Walking shoes", result: "small-city" },
        { text: "A sweatshirt", result: "cabin-night" },
        { text: "A nice outfit", result: "hotel-reset" }
      ] }
    ],
    results: [
      { slug: "lake-weekend", title: "Lake Weekend", description: "Water, quiet, and low-pressure plans would reset you nicely.", shareSummary: "My mini vacation should be a Lake Weekend." },
      { slug: "small-city", title: "Small City Wander", description: "A walkable place with cafes and shops would keep things fresh.", shareSummary: "My mini vacation should be a Small City Wander." },
      { slug: "cabin-night", title: "Cabin Night", description: "A short nature escape would give you the exhale you need.", shareSummary: "My mini vacation should be a Cabin Night." },
      { slug: "hotel-reset", title: "Hotel Reset", description: "A comfortable room and no chores might be exactly enough.", shareSummary: "My mini vacation should be a Hotel Reset." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-after-school-reset-fits-your-family",
    title: "What After-School Reset Fits Your Family?",
    description: "Find a smoother transition idea for the late-afternoon stretch.",
    category: "parenting",
    type: "recommendation",
    tags: ["parenting", "school", "family"],
    publishedAt: "2026-03-28",
    questions: [
      { text: "After school usually needs...", answers: [
        { text: "Snacks", result: "snack-reset" },
        { text: "Quiet", result: "quiet-reset" },
        { text: "Movement", result: "movement-reset" },
        { text: "A plan", result: "homework-reset" }
      ] },
      { text: "The hardest part is...", answers: [
        { text: "Hunger", result: "snack-reset" },
        { text: "Overstimulation", result: "quiet-reset" },
        { text: "Wiggly energy", result: "movement-reset" },
        { text: "Starting tasks", result: "homework-reset" }
      ] },
      { text: "Pick a first step.", answers: [
        { text: "A snack plate", result: "snack-reset" },
        { text: "Ten quiet minutes", result: "quiet-reset" },
        { text: "Outside time", result: "movement-reset" },
        { text: "A short checklist", result: "homework-reset" }
      ] }
    ],
    results: [
      { slug: "snack-reset", title: "Snack Reset", description: "Start with food and lower the stakes before anything else.", shareSummary: "Our after-school reset is Snack Reset." },
      { slug: "quiet-reset", title: "Quiet Reset", description: "A calm buffer could make the rest of the evening smoother.", shareSummary: "Our after-school reset is Quiet Reset." },
      { slug: "movement-reset", title: "Movement Reset", description: "Some physical energy needs somewhere to go first.", shareSummary: "Our after-school reset is Movement Reset." },
      { slug: "homework-reset", title: "Homework Reset", description: "A tiny structure can make the transition feel less messy.", shareSummary: "Our after-school reset is Homework Reset." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-summer-plan-matches-your-personality",
    title: "What Summer Plan Matches Your Personality?",
    description: "Find the summer activity that fits your warm-weather energy.",
    category: "seasonal",
    type: "recommendation",
    tags: ["summer", "seasonal", "travel"],
    publishedAt: "2026-03-27",
    questions: [
      { text: "Summer should include...", answers: [
        { text: "Water", result: "pool-day" },
        { text: "Food outside", result: "patio-dinner" },
        { text: "A project", result: "garden-plan" },
        { text: "A trip", result: "weekend-away" }
      ] },
      { text: "Pick a summer feeling.", answers: [
        { text: "Cool", result: "pool-day" },
        { text: "Golden", result: "patio-dinner" },
        { text: "Fresh", result: "garden-plan" },
        { text: "Open", result: "weekend-away" }
      ] },
      { text: "Your ideal evening is...", answers: [
        { text: "By the water", result: "pool-day" },
        { text: "At a table outside", result: "patio-dinner" },
        { text: "Watering plants", result: "garden-plan" },
        { text: "Checking into somewhere new", result: "weekend-away" }
      ] }
    ],
    results: [
      { slug: "pool-day", title: "Pool Day", description: "Your summer match is easy, refreshing, and low-pressure.", shareSummary: "My summer plan is Pool Day." },
      { slug: "patio-dinner", title: "Patio Dinner", description: "Your summer match is warm, social, and full of good flavor.", shareSummary: "My summer plan is Patio Dinner." },
      { slug: "garden-plan", title: "Garden Plan", description: "Your summer match is hands-on, grounding, and satisfying.", shareSummary: "My summer plan is Garden Plan." },
      { slug: "weekend-away", title: "Weekend Away", description: "Your summer match is a little change of scenery.", shareSummary: "My summer plan is Weekend Away." }
    ]
  }),
  makeTriviaQuiz({
    slug: "can-you-pass-this-basic-geography-quiz",
    title: "Can You Pass This Basic Geography Quiz?",
    description: "Try a quick round of everyday geography trivia.",
    category: "trivia",
    tags: ["trivia", "geography", "travel"],
    publishedAt: "2026-03-26",
    questions: [
      { text: "Which ocean is on the East Coast of the United States?", correct: "Atlantic Ocean", wrong: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean"] },
      { text: "What is the capital of France?", correct: "Paris", wrong: ["Lyon", "Madrid", "Rome"] },
      { text: "Which continent is Brazil in?", correct: "South America", wrong: ["Europe", "Africa", "Asia"] },
      { text: "Which is the largest U.S. state by area?", correct: "Alaska", wrong: ["Texas", "California", "Montana"] }
    ]
  }),
  makeTriviaQuiz({
    slug: "how-well-do-you-know-food-facts",
    title: "How Well Do You Know Food Facts?",
    description: "A quick trivia quiz for everyday food knowledge.",
    category: "trivia",
    tags: ["trivia", "food", "kitchen"],
    publishedAt: "2026-03-25",
    questions: [
      { text: "Which fruit is known for having potassium?", correct: "Banana", wrong: ["Grape", "Lemon", "Pear"] },
      { text: "Pasta is commonly associated with which cuisine?", correct: "Italian", wrong: ["Norwegian", "Peruvian", "Thai"] },
      { text: "What do bees make?", correct: "Honey", wrong: ["Maple syrup", "Olive oil", "Vinegar"] },
      { text: "Which is usually made from milk?", correct: "Cheese", wrong: ["Tofu", "Jam", "Bread flour"] }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-boundary-setter-are-you",
    title: "What Kind of Boundary Setter Are You?",
    description: "Find the way you naturally protect your time, energy, and peace.",
    category: "relationships",
    tags: ["relationships", "boundaries", "personality"],
    publishedAt: "2026-03-24",
    trending: true,
    questions: [
      { text: "When you need space, you usually...", answers: [
        { text: "Say it directly", result: "clear-communicator" },
        { text: "Create quiet distance", result: "quiet-protector" },
        { text: "Explain the why", result: "thoughtful-explainer" },
        { text: "Need practice saying no", result: "learning-setter" }
      ] },
      { text: "Your easiest boundary is around...", answers: [
        { text: "Schedule", result: "clear-communicator" },
        { text: "Alone time", result: "quiet-protector" },
        { text: "Emotional honesty", result: "thoughtful-explainer" },
        { text: "Last-minute requests", result: "learning-setter" }
      ] },
      { text: "You feel respected when people...", answers: [
        { text: "Listen the first time", result: "clear-communicator" },
        { text: "Give you room", result: "quiet-protector" },
        { text: "Understand context", result: "thoughtful-explainer" },
        { text: "Do not push", result: "learning-setter" }
      ] }
    ],
    results: [
      { slug: "clear-communicator", title: "Clear Communicator", description: "You protect your peace through direct, steady honesty.", shareSummary: "My boundary style is Clear Communicator." },
      { slug: "quiet-protector", title: "Quiet Protector", description: "You preserve energy by stepping back and choosing your access carefully.", shareSummary: "My boundary style is Quiet Protector." },
      { slug: "thoughtful-explainer", title: "Thoughtful Explainer", description: "You set boundaries best when you can name the reason with care.", shareSummary: "My boundary style is Thoughtful Explainer." },
      { slug: "learning-setter", title: "Learning Setter", description: "You are practicing the brave skill of saying what you actually need.", shareSummary: "My boundary style is Learning Setter." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-is-your-hidden-strength",
    title: "What Is Your Hidden Strength?",
    description: "A quick personality quiz to reveal the quiet strength people may miss at first.",
    category: "personality",
    tags: ["personality", "strengths", "self discovery"],
    publishedAt: "2026-03-23",
    trending: true,
    questions: [
      { text: "People come to you when they need...", answers: [
        { text: "Perspective", result: "wise-observer" },
        { text: "Encouragement", result: "steady-believer" },
        { text: "A plan", result: "quiet-strategist" },
        { text: "Calm", result: "grounding-presence" }
      ] },
      { text: "Your best contribution is often...", answers: [
        { text: "Noticing patterns", result: "wise-observer" },
        { text: "Seeing potential", result: "steady-believer" },
        { text: "Solving quietly", result: "quiet-strategist" },
        { text: "Lowering the stress", result: "grounding-presence" }
      ] },
      { text: "You are proudest when you...", answers: [
        { text: "Understand something deeply", result: "wise-observer" },
        { text: "Help someone keep going", result: "steady-believer" },
        { text: "Make the next step easier", result: "quiet-strategist" },
        { text: "Bring peace to a hard moment", result: "grounding-presence" }
      ] }
    ],
    results: [
      { slug: "wise-observer", title: "Wise Observer", description: "You see what is happening beneath the surface.", shareSummary: "My hidden strength is Wise Observer." },
      { slug: "steady-believer", title: "Steady Believer", description: "You help people remember they are capable.", shareSummary: "My hidden strength is Steady Believer." },
      { slug: "quiet-strategist", title: "Quiet Strategist", description: "You make life easier by seeing the practical path forward.", shareSummary: "My hidden strength is Quiet Strategist." },
      { slug: "grounding-presence", title: "Grounding Presence", description: "You bring steadiness when things feel loud or uncertain.", shareSummary: "My hidden strength is Grounding Presence." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-weeknight-are-you",
    title: "What Kind of Weeknight Are You?",
    description: "Find your after-work or after-school evening personality.",
    category: "lifestyle",
    tags: ["weeknight", "routine", "personality"],
    publishedAt: "2026-03-22",
    questions: [
      { text: "After a long day, you want...", answers: [
        { text: "Quiet comfort", result: "cozy-night" },
        { text: "A productive reset", result: "reset-night" },
        { text: "Something fun", result: "spark-night" },
        { text: "No decisions", result: "easy-night" }
      ] },
      { text: "Pick a weeknight detail.", answers: [
        { text: "Soft lighting", result: "cozy-night" },
        { text: "A clean kitchen", result: "reset-night" },
        { text: "A quick plan out", result: "spark-night" },
        { text: "Leftovers", result: "easy-night" }
      ] },
      { text: "By bedtime, you want to feel...", answers: [
        { text: "Soothed", result: "cozy-night" },
        { text: "Prepared", result: "reset-night" },
        { text: "Refreshed", result: "spark-night" },
        { text: "Unbothered", result: "easy-night" }
      ] }
    ],
    results: [
      { slug: "cozy-night", title: "Cozy Weeknight", description: "You need softness, low lighting, and a slower landing.", shareSummary: "I'm a Cozy Weeknight." },
      { slug: "reset-night", title: "Reset Weeknight", description: "A short tidy or prep session helps tomorrow feel easier.", shareSummary: "I'm a Reset Weeknight." },
      { slug: "spark-night", title: "Spark Weeknight", description: "You need a small dose of novelty before the day closes.", shareSummary: "I'm a Spark Weeknight." },
      { slug: "easy-night", title: "Easy Weeknight", description: "Tonight works best with fewer choices and gentle expectations.", shareSummary: "I'm an Easy Weeknight." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-cozy-drink-are-you",
    title: "What Kind of Cozy Drink Are You?",
    description: "Pick a few comfort cues and find your cozy drink personality.",
    category: "food",
    tags: ["food", "drinks", "cozy"],
    publishedAt: "2026-03-21",
    questions: [
      { text: "Your cozy mood is...", answers: [
        { text: "Classic", result: "hot-cocoa" },
        { text: "Gentle", result: "chamomile-tea" },
        { text: "Rich", result: "chai-latte" },
        { text: "Simple", result: "warm-cider" }
      ] },
      { text: "Pick a scent.", answers: [
        { text: "Chocolate", result: "hot-cocoa" },
        { text: "Honey", result: "chamomile-tea" },
        { text: "Spice", result: "chai-latte" },
        { text: "Apple", result: "warm-cider" }
      ] },
      { text: "A perfect evening needs...", answers: [
        { text: "A blanket", result: "hot-cocoa" },
        { text: "Quiet", result: "chamomile-tea" },
        { text: "A little warmth", result: "chai-latte" },
        { text: "Something familiar", result: "warm-cider" }
      ] }
    ],
    results: [
      { slug: "hot-cocoa", title: "Hot Cocoa", description: "You are nostalgic, comforting, and easy to love.", shareSummary: "I'm Hot Cocoa energy." },
      { slug: "chamomile-tea", title: "Chamomile Tea", description: "You bring calm, softness, and a gentle kind of care.", shareSummary: "I'm Chamomile Tea energy." },
      { slug: "chai-latte", title: "Chai Latte", description: "You are warm, layered, and quietly bold.", shareSummary: "I'm Chai Latte energy." },
      { slug: "warm-cider", title: "Warm Cider", description: "You feel seasonal, familiar, and full of easy charm.", shareSummary: "I'm Warm Cider energy." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-home-project-should-you-tackle-next",
    title: "What Home Project Should You Tackle Next?",
    description: "Find a simple home project that matches your current energy.",
    category: "home",
    type: "recommendation",
    tags: ["home", "projects", "decor"],
    publishedAt: "2026-03-20",
    questions: [
      { text: "Your home needs more...", answers: [
        { text: "Calm", result: "declutter-zone" },
        { text: "Personality", result: "style-corner" },
        { text: "Function", result: "drop-zone" },
        { text: "Freshness", result: "paint-refresh" }
      ] },
      { text: "You have energy for...", answers: [
        { text: "Sorting", result: "declutter-zone" },
        { text: "Styling", result: "style-corner" },
        { text: "Solving a problem", result: "drop-zone" },
        { text: "A visible change", result: "paint-refresh" }
      ] },
      { text: "A satisfying result would be...", answers: [
        { text: "Less stuff", result: "declutter-zone" },
        { text: "A prettier corner", result: "style-corner" },
        { text: "A smoother routine", result: "drop-zone" },
        { text: "A new mood", result: "paint-refresh" }
      ] }
    ],
    results: [
      { slug: "declutter-zone", title: "Declutter One Zone", description: "Choose one small area and give it breathing room.", shareSummary: "My next home project is Declutter One Zone." },
      { slug: "style-corner", title: "Style a Corner", description: "A small visual upgrade will make the whole room feel fresher.", shareSummary: "My next home project is Style a Corner." },
      { slug: "drop-zone", title: "Create a Drop Zone", description: "Solve the daily pile-up with a practical landing spot.", shareSummary: "My next home project is Create a Drop Zone." },
      { slug: "paint-refresh", title: "Paint Refresh", description: "A little color or touch-up could shift the whole feeling.", shareSummary: "My next home project is Paint Refresh." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-work-break-do-you-need",
    title: "What Work Break Do You Need?",
    description: "Find the short break that would help your brain reset right now.",
    category: "career",
    type: "recommendation",
    tags: ["career", "work", "break"],
    publishedAt: "2026-03-19",
    questions: [
      { text: "Your brain feels...", answers: [
        { text: "Foggy", result: "fresh-air" },
        { text: "Tense", result: "stretch-break" },
        { text: "Scattered", result: "tiny-plan" },
        { text: "Drained", result: "quiet-break" }
      ] },
      { text: "You have about...", answers: [
        { text: "Five minutes outside", result: "fresh-air" },
        { text: "Room to move", result: "stretch-break" },
        { text: "A notebook", result: "tiny-plan" },
        { text: "A quiet corner", result: "quiet-break" }
      ] },
      { text: "You want to return feeling...", answers: [
        { text: "Awake", result: "fresh-air" },
        { text: "Looser", result: "stretch-break" },
        { text: "Clear", result: "tiny-plan" },
        { text: "Rested", result: "quiet-break" }
      ] }
    ],
    results: [
      { slug: "fresh-air", title: "Fresh-Air Break", description: "Step away, look farther than your screen, and reset your attention.", shareSummary: "I need a Fresh-Air Break." },
      { slug: "stretch-break", title: "Stretch Break", description: "Your body needs a reset before your focus can come back.", shareSummary: "I need a Stretch Break." },
      { slug: "tiny-plan", title: "Tiny Plan Break", description: "Write the next three steps and make the work feel smaller.", shareSummary: "I need a Tiny Plan Break." },
      { slug: "quiet-break", title: "Quiet Break", description: "Lower the input for a few minutes and let your system settle.", shareSummary: "I need a Quiet Break." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-shopping-list-personality-are-you",
    title: "What Shopping List Personality Are You?",
    description: "Find the grocery-planning style that follows you into the store.",
    category: "money",
    tags: ["money", "shopping", "food"],
    publishedAt: "2026-03-18",
    questions: [
      { text: "Your grocery list is usually...", answers: [
        { text: "Detailed", result: "list-master" },
        { text: "Mostly mental", result: "memory-shopper" },
        { text: "Based on deals", result: "deal-hunter" },
        { text: "A loose vibe", result: "mood-shopper" }
      ] },
      { text: "At the store, you prioritize...", answers: [
        { text: "The plan", result: "list-master" },
        { text: "The usuals", result: "memory-shopper" },
        { text: "Savings", result: "deal-hunter" },
        { text: "What sounds good", result: "mood-shopper" }
      ] },
      { text: "Your cart says...", answers: [
        { text: "Prepared", result: "list-master" },
        { text: "Reliable", result: "memory-shopper" },
        { text: "Strategic", result: "deal-hunter" },
        { text: "Inspired", result: "mood-shopper" }
      ] }
    ],
    results: [
      { slug: "list-master", title: "List Master", description: "You shop best with structure, categories, and a plan.", shareSummary: "My shopping list personality is List Master." },
      { slug: "memory-shopper", title: "Memory Shopper", description: "You know your staples and trust the familiar rhythm.", shareSummary: "My shopping list personality is Memory Shopper." },
      { slug: "deal-hunter", title: "Deal Hunter", description: "You know how to spot value and pivot around a good find.", shareSummary: "My shopping list personality is Deal Hunter." },
      { slug: "mood-shopper", title: "Mood Shopper", description: "You shop with appetite, curiosity, and a little spontaneity.", shareSummary: "My shopping list personality is Mood Shopper." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-airport-personality-are-you",
    title: "What Airport Personality Are You?",
    description: "Find your travel-day energy from gate planner to snack wanderer.",
    category: "travel",
    tags: ["travel", "airport", "personality"],
    publishedAt: "2026-03-17",
    trending: true,
    questions: [
      { text: "You arrive at the airport...", answers: [
        { text: "Very early", result: "gate-guardian" },
        { text: "Right on time", result: "efficient-flyer" },
        { text: "With snacks in mind", result: "terminal-wanderer" },
        { text: "A little rushed", result: "last-call" }
      ] },
      { text: "Before boarding, you...", answers: [
        { text: "Confirm everything", result: "gate-guardian" },
        { text: "Find the fastest route", result: "efficient-flyer" },
        { text: "Browse and snack", result: "terminal-wanderer" },
        { text: "Hope for the best", result: "last-call" }
      ] },
      { text: "Your carry-on has...", answers: [
        { text: "Backup items", result: "gate-guardian" },
        { text: "Only essentials", result: "efficient-flyer" },
        { text: "Treats", result: "terminal-wanderer" },
        { text: "A mystery mix", result: "last-call" }
      ] }
    ],
    results: [
      { slug: "gate-guardian", title: "Gate Guardian", description: "You are prepared, early, and already watching the boarding screen.", shareSummary: "My airport personality is Gate Guardian." },
      { slug: "efficient-flyer", title: "Efficient Flyer", description: "You move through the airport with focus and minimal fuss.", shareSummary: "My airport personality is Efficient Flyer." },
      { slug: "terminal-wanderer", title: "Terminal Wanderer", description: "You turn airport time into browsing, snacks, and people-watching.", shareSummary: "My airport personality is Terminal Wanderer." },
      { slug: "last-call", title: "Last-Call Flyer", description: "You bring suspense to the gate, but somehow you make it.", shareSummary: "My airport personality is Last-Call Flyer." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kid-activity-matches-today",
    title: "What Kid Activity Matches Today?",
    description: "A quick parenting recommendation quiz for choosing a doable activity.",
    category: "parenting",
    type: "recommendation",
    tags: ["parenting", "kids", "activities"],
    publishedAt: "2026-03-16",
    questions: [
      { text: "Today has more...", answers: [
        { text: "Big energy", result: "outside-play" },
        { text: "Quiet energy", result: "craft-table" },
        { text: "Curiosity", result: "kitchen-science" },
        { text: "Need for ease", result: "movie-fort" }
      ] },
      { text: "You need the activity to be...", answers: [
        { text: "Physical", result: "outside-play" },
        { text: "Creative", result: "craft-table" },
        { text: "Interesting", result: "kitchen-science" },
        { text: "Low effort", result: "movie-fort" }
      ] },
      { text: "Pick a supply.", answers: [
        { text: "Sidewalk chalk", result: "outside-play" },
        { text: "Paper", result: "craft-table" },
        { text: "Baking soda", result: "kitchen-science" },
        { text: "Blankets", result: "movie-fort" }
      ] }
    ],
    results: [
      { slug: "outside-play", title: "Outside Play", description: "Let the energy move somewhere with space.", shareSummary: "Today's kid activity is Outside Play." },
      { slug: "craft-table", title: "Craft Table", description: "A creative setup could buy focus and a little calm.", shareSummary: "Today's kid activity is Craft Table." },
      { slug: "kitchen-science", title: "Kitchen Science", description: "A simple experiment fits the curiosity in the room.", shareSummary: "Today's kid activity is Kitchen Science." },
      { slug: "movie-fort", title: "Movie Fort", description: "Today calls for cozy, contained, and low-pressure.", shareSummary: "Today's kid activity is Movie Fort." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-reality-show-role-would-you-play",
    title: "What Reality Show Role Would You Play?",
    description: "Find your imaginary reality TV personality role.",
    category: "pop-culture",
    tags: ["pop culture", "tv", "personality"],
    publishedAt: "2026-03-15",
    questions: [
      { text: "In a group scene, you are...", answers: [
        { text: "Narrating the truth", result: "confessional-star" },
        { text: "Keeping peace", result: "house-mediator" },
        { text: "Starting the plan", result: "plot-mover" },
        { text: "Making people laugh", result: "comic-relief" }
      ] },
      { text: "Your screen time would come from...", answers: [
        { text: "Sharp observations", result: "confessional-star" },
        { text: "Emotional intelligence", result: "house-mediator" },
        { text: "Bold choices", result: "plot-mover" },
        { text: "Perfect one-liners", result: "comic-relief" }
      ] },
      { text: "Your edit is...", answers: [
        { text: "Honest", result: "confessional-star" },
        { text: "Grounded", result: "house-mediator" },
        { text: "Eventful", result: "plot-mover" },
        { text: "Beloved", result: "comic-relief" }
      ] }
    ],
    results: [
      { slug: "confessional-star", title: "Confessional Star", description: "You would say what everyone else is thinking.", shareSummary: "My reality show role is Confessional Star." },
      { slug: "house-mediator", title: "House Mediator", description: "You would read the room and keep the group from fully unraveling.", shareSummary: "My reality show role is House Mediator." },
      { slug: "plot-mover", title: "Plot Mover", description: "You would make decisions that keep the episode alive.", shareSummary: "My reality show role is Plot Mover." },
      { slug: "comic-relief", title: "Comic Relief", description: "You would become the fan favorite by being funny at the exact right time.", shareSummary: "My reality show role is Comic Relief." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-fall-activity-fits-your-vibe",
    title: "What Fall Activity Fits Your Vibe?",
    description: "Find the autumn plan that best matches your seasonal mood.",
    category: "seasonal",
    type: "recommendation",
    tags: ["fall", "seasonal", "cozy"],
    publishedAt: "2026-03-14",
    questions: [
      { text: "Fall makes you want...", answers: [
        { text: "A cozy kitchen", result: "bake-something" },
        { text: "A scenic walk", result: "leaf-walk" },
        { text: "A decorated porch", result: "porch-refresh" },
        { text: "A movie night", result: "spooky-cozy" }
      ] },
      { text: "Pick a fall detail.", answers: [
        { text: "Cinnamon", result: "bake-something" },
        { text: "Crunchy leaves", result: "leaf-walk" },
        { text: "Pumpkins", result: "porch-refresh" },
        { text: "Candles", result: "spooky-cozy" }
      ] },
      { text: "Your ideal fall afternoon is...", answers: [
        { text: "Warm from the oven", result: "bake-something" },
        { text: "Outside", result: "leaf-walk" },
        { text: "A little decorative", result: "porch-refresh" },
        { text: "Dim and cozy", result: "spooky-cozy" }
      ] }
    ],
    results: [
      { slug: "bake-something", title: "Bake Something", description: "Your fall vibe wants warmth, spice, and a kitchen that smells amazing.", shareSummary: "My fall activity is Bake Something." },
      { slug: "leaf-walk", title: "Leaf Walk", description: "You need crisp air, color, and a gentle seasonal reset.", shareSummary: "My fall activity is Leaf Walk." },
      { slug: "porch-refresh", title: "Porch Refresh", description: "A little seasonal styling would make home feel extra welcoming.", shareSummary: "My fall activity is Porch Refresh." },
      { slug: "spooky-cozy", title: "Spooky-Cozy Movie Night", description: "You want blankets, candles, and something just a little atmospheric.", shareSummary: "My fall activity is Spooky-Cozy Movie Night." }
    ]
  }),
  makeTriviaQuiz({
    slug: "can-you-pass-this-coffee-trivia-quiz",
    title: "Can You Pass This Coffee Trivia Quiz?",
    description: "A quick trivia quiz for coffee fans and casual sippers.",
    category: "trivia",
    tags: ["trivia", "coffee", "food"],
    publishedAt: "2026-03-13",
    questions: [
      { text: "Espresso is made by forcing hot water through what?", correct: "Finely ground coffee", wrong: ["Tea leaves", "Cocoa powder", "Whole beans only"] },
      { text: "A latte traditionally includes espresso and what?", correct: "Steamed milk", wrong: ["Lemon juice", "Sparkling water", "Orange peel"] },
      { text: "Decaf coffee has had most of what removed?", correct: "Caffeine", wrong: ["Water", "Flavor", "Color"] },
      { text: "Coffee beans are usually roasted before being...", correct: "Ground and brewed", wrong: ["Frozen and peeled", "Boiled whole", "Fermented into tea"] }
    ]
  }),
  makeTriviaQuiz({
    slug: "how-well-do-you-know-classic-movies",
    title: "How Well Do You Know Classic Movies?",
    description: "Try a quick round of familiar classic movie trivia.",
    category: "pop-culture",
    tags: ["movies", "pop culture", "trivia"],
    publishedAt: "2026-03-12",
    questions: [
      { text: "Which movie features the line, 'There's no place like home'?", correct: "The Wizard of Oz", wrong: ["Casablanca", "Jaws", "Rocky"] },
      { text: "Which film features a shark terrorizing a beach town?", correct: "Jaws", wrong: ["Grease", "The Sound of Music", "Rear Window"] },
      { text: "Which movie is set largely around a boxing underdog?", correct: "Rocky", wrong: ["Mary Poppins", "Psycho", "Singin' in the Rain"] },
      { text: "Which classic movie includes the song 'Singin' in the Rain'?", correct: "Singin' in the Rain", wrong: ["The Godfather", "King Kong", "Citizen Kane"] }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-energy-do-you-give-off",
    title: "What Kind of Energy Do You Give Off?",
    description: "Find the first-impression energy people may feel when they are around you.",
    category: "personality",
    tags: ["personality", "energy", "vibes"],
    publishedAt: "2026-05-11",
    trending: true,
    questions: [
      { text: "When you enter a room, you tend to...", answers: [
        { text: "Notice the mood first", result: "calming-energy" },
        { text: "Start conversation easily", result: "bright-energy" },
        { text: "Observe before jumping in", result: "mysterious-energy" },
        { text: "Help things feel organized", result: "grounded-energy" }
      ] },
      { text: "People often describe you as...", answers: [
        { text: "Soothing", result: "calming-energy" },
        { text: "Warm", result: "bright-energy" },
        { text: "Interesting", result: "mysterious-energy" },
        { text: "Reliable", result: "grounded-energy" }
      ] },
      { text: "Your best social contribution is...", answers: [
        { text: "Lowering stress", result: "calming-energy" },
        { text: "Creating momentum", result: "bright-energy" },
        { text: "Adding depth", result: "mysterious-energy" },
        { text: "Making people feel steady", result: "grounded-energy" }
      ] }
    ],
    results: [
      { slug: "calming-energy", title: "Calming Energy", description: "You give off a peaceful presence that helps people relax without even trying.", shareSummary: "I give off Calming Energy." },
      { slug: "bright-energy", title: "Bright Energy", description: "You bring warmth, openness, and a little lift wherever you go.", shareSummary: "I give off Bright Energy." },
      { slug: "mysterious-energy", title: "Mysterious Energy", description: "You give off quiet depth, curiosity, and a presence people want to understand.", shareSummary: "I give off Mysterious Energy." },
      { slug: "grounded-energy", title: "Grounded Energy", description: "You make people feel like things are handled, steady, and safe to be real.", shareSummary: "I give off Grounded Energy." }
    ]
  }),
  makeQuickQuiz({
    slug: "are-you-more-introverted-or-socially-drained",
    title: "Are You More Introverted or Socially Drained?",
    description: "Find whether you truly recharge alone or just need a better kind of social rhythm.",
    category: "personality",
    tags: ["introvert", "social battery", "personality"],
    publishedAt: "2026-05-10",
    trending: true,
    questions: [
      { text: "After a busy social day, you usually feel...", answers: [
        { text: "Ready for deep quiet", result: "true-introvert" },
        { text: "Tired but happy", result: "balanced-social" },
        { text: "Overstimulated", result: "socially-drained" },
        { text: "Still open to the right person", result: "selective-social" }
      ] },
      { text: "The best plan includes...", answers: [
        { text: "Plenty of alone time", result: "true-introvert" },
        { text: "A clear end time", result: "balanced-social" },
        { text: "Less noise and pressure", result: "socially-drained" },
        { text: "People you fully trust", result: "selective-social" }
      ] },
      { text: "You cancel plans mostly because...", answers: [
        { text: "Solitude sounds better", result: "true-introvert" },
        { text: "The timing is off", result: "balanced-social" },
        { text: "You have no energy left", result: "socially-drained" },
        { text: "The group feels wrong", result: "selective-social" }
      ] }
    ],
    results: [
      { slug: "true-introvert", title: "True Introvert", description: "You genuinely refuel in your own space, and solitude helps you come back clearer.", shareSummary: "I'm more True Introvert." },
      { slug: "balanced-social", title: "Balanced Social", description: "You like people and quiet. The magic is having both in the right amounts.", shareSummary: "I'm Balanced Social." },
      { slug: "socially-drained", title: "Socially Drained", description: "You may not be antisocial; your nervous system just needs gentler social settings.", shareSummary: "I'm more Socially Drained." },
      { slug: "selective-social", title: "Selective Social", description: "You can be very social when the people feel safe, familiar, and real.", shareSummary: "I'm Selective Social." }
    ]
  }),
  makeQuickQuiz({
    slug: "whats-your-hidden-personality-trait",
    title: "What's Your Hidden Personality Trait?",
    description: "Reveal the quiet trait that shows up once people really get to know you.",
    category: "personality",
    tags: ["personality", "hidden trait", "self discovery"],
    publishedAt: "2026-05-09",
    trending: true,
    questions: [
      { text: "People are surprised when they learn you are...", answers: [
        { text: "Very determined", result: "quiet-ambition" },
        { text: "Deeply sentimental", result: "soft-hearted" },
        { text: "Highly observant", result: "pattern-reader" },
        { text: "Secretly playful", result: "hidden-spark" }
      ] },
      { text: "Your inner world is full of...", answers: [
        { text: "Goals", result: "quiet-ambition" },
        { text: "Memories", result: "soft-hearted" },
        { text: "Details", result: "pattern-reader" },
        { text: "Ideas", result: "hidden-spark" }
      ] },
      { text: "When you feel comfortable, you show more...", answers: [
        { text: "Drive", result: "quiet-ambition" },
        { text: "Tenderness", result: "soft-hearted" },
        { text: "Insight", result: "pattern-reader" },
        { text: "Humor", result: "hidden-spark" }
      ] }
    ],
    results: [
      { slug: "quiet-ambition", title: "Quiet Ambition", description: "You may seem calm, but there is a strong inner drive moving underneath.", shareSummary: "My hidden personality trait is Quiet Ambition." },
      { slug: "soft-hearted", title: "Soft-Hearted", description: "You feel more deeply than you always let on, and your care runs deep.", shareSummary: "My hidden personality trait is Soft-Hearted." },
      { slug: "pattern-reader", title: "Pattern Reader", description: "You notice shifts, details, and meanings other people often miss.", shareSummary: "My hidden personality trait is Pattern Reader." },
      { slug: "hidden-spark", title: "Hidden Spark", description: "There is a playful, clever side of you that comes out around the right people.", shareSummary: "My hidden personality trait is Hidden Spark." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-comfort-person-are-you",
    title: "What Kind of Comfort Person Are You?",
    description: "Find how you naturally make other people feel supported.",
    category: "relationships",
    tags: ["comfort", "relationships", "personality"],
    publishedAt: "2026-05-08",
    questions: [
      { text: "When someone is upset, you first...", answers: [
        { text: "Listen quietly", result: "safe-listener" },
        { text: "Offer practical help", result: "steady-helper" },
        { text: "Say something reassuring", result: "warm-reassurer" },
        { text: "Lighten the mood gently", result: "soft-brightener" }
      ] },
      { text: "Your comfort language is...", answers: [
        { text: "Presence", result: "safe-listener" },
        { text: "Solutions", result: "steady-helper" },
        { text: "Words", result: "warm-reassurer" },
        { text: "Levity", result: "soft-brightener" }
      ] },
      { text: "People feel better with you because you...", answers: [
        { text: "Do not rush them", result: "safe-listener" },
        { text: "Make the next step easier", result: "steady-helper" },
        { text: "Remind them they matter", result: "warm-reassurer" },
        { text: "Help them breathe again", result: "soft-brightener" }
      ] }
    ],
    results: [
      { slug: "safe-listener", title: "Safe Listener", description: "You comfort people by making room for the whole truth without judgment.", shareSummary: "I'm a Safe Listener comfort person." },
      { slug: "steady-helper", title: "Steady Helper", description: "You comfort people by showing up with practical care and reliable support.", shareSummary: "I'm a Steady Helper comfort person." },
      { slug: "warm-reassurer", title: "Warm Reassurer", description: "You comfort people with words that make them feel seen and less alone.", shareSummary: "I'm a Warm Reassurer comfort person." },
      { slug: "soft-brightener", title: "Soft Brightener", description: "You comfort people by bringing gentle light into heavy moments.", shareSummary: "I'm a Soft Brightener comfort person." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-calm-girl-archetype-are-you",
    title: "Which Calm Girl Archetype Are You?",
    description: "Find the soft, grounded archetype that matches your calmest self.",
    category: "lifestyle",
    tags: ["calm girl", "aesthetic", "personality"],
    publishedAt: "2026-05-07",
    trending: true,
    questions: [
      { text: "Your calmest morning includes...", answers: [
        { text: "A clean space", result: "minimal-muse" },
        { text: "A slow drink", result: "soft-ritualist" },
        { text: "A notebook", result: "thoughtful-planner" },
        { text: "A walk outside", result: "nature-resetter" }
      ] },
      { text: "Pick a calm-girl detail.", answers: [
        { text: "Linen", result: "minimal-muse" },
        { text: "Ceramic mug", result: "soft-ritualist" },
        { text: "A tidy list", result: "thoughtful-planner" },
        { text: "Fresh air", result: "nature-resetter" }
      ] },
      { text: "Your calm comes from...", answers: [
        { text: "Less visual noise", result: "minimal-muse" },
        { text: "Tiny routines", result: "soft-ritualist" },
        { text: "Knowing the plan", result: "thoughtful-planner" },
        { text: "Being grounded in your body", result: "nature-resetter" }
      ] }
    ],
    results: [
      { slug: "minimal-muse", title: "Minimal Muse", description: "Your calm is clean, edited, and beautifully understated.", shareSummary: "My Calm Girl archetype is Minimal Muse." },
      { slug: "soft-ritualist", title: "Soft Ritualist", description: "Your calm comes from small comforts that make ordinary life feel intentional.", shareSummary: "My Calm Girl archetype is Soft Ritualist." },
      { slug: "thoughtful-planner", title: "Thoughtful Planner", description: "Your calm comes from gentle structure, lists, and knowing what matters.", shareSummary: "My Calm Girl archetype is Thoughtful Planner." },
      { slug: "nature-resetter", title: "Nature Resetter", description: "Your calm returns when you reconnect with air, light, movement, and the outside world.", shareSummary: "My Calm Girl archetype is Nature Resetter." }
    ]
  }),
  makeQuickQuiz({
    slug: "are-you-more-logic-or-emotion-driven",
    title: "Are You More Logic or Emotion Driven?",
    description: "Find whether your decisions lean more analytical, emotional, or balanced.",
    category: "personality",
    tags: ["logic", "emotion", "personality"],
    publishedAt: "2026-05-06",
    questions: [
      { text: "When making a choice, you trust...", answers: [
        { text: "Facts first", result: "logic-led" },
        { text: "Feelings first", result: "heart-led" },
        { text: "Both equally", result: "balanced-led" },
        { text: "Context and timing", result: "situational-led" }
      ] },
      { text: "A good argument needs...", answers: [
        { text: "Evidence", result: "logic-led" },
        { text: "Empathy", result: "heart-led" },
        { text: "Both sides", result: "balanced-led" },
        { text: "Real-life nuance", result: "situational-led" }
      ] },
      { text: "You regret choices when you ignore...", answers: [
        { text: "The practical facts", result: "logic-led" },
        { text: "Your gut feeling", result: "heart-led" },
        { text: "Either side", result: "balanced-led" },
        { text: "The bigger picture", result: "situational-led" }
      ] }
    ],
    results: [
      { slug: "logic-led", title: "Logic Led", description: "You feel safest when decisions are clear, reasoned, and supported by facts.", shareSummary: "I'm more Logic Led." },
      { slug: "heart-led", title: "Heart Led", description: "You are guided by emotional truth, care, and what feels meaningful.", shareSummary: "I'm more Heart Led." },
      { slug: "balanced-led", title: "Balanced Led", description: "You are strongest when your head and heart both get a seat at the table.", shareSummary: "I'm Balanced Led." },
      { slug: "situational-led", title: "Situationally Led", description: "You read the room, the timing, and the nuance before deciding.", shareSummary: "I'm Situationally Led." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-vibe-does-your-home-match",
    title: "What Vibe Does Your Home Match?",
    description: "Choose a few home details to reveal the overall vibe your space gives off.",
    category: "home",
    tags: ["home", "decor", "vibe"],
    publishedAt: "2026-05-05",
    trending: true,
    questions: [
      { text: "Your home feels best when it is...", answers: [
        { text: "Soft and restful", result: "cozy-calm" },
        { text: "Bright and open", result: "fresh-airy" },
        { text: "Layered and personal", result: "collected-warm" },
        { text: "Clean and simple", result: "quiet-minimal" }
      ] },
      { text: "Pick a home detail.", answers: [
        { text: "A soft throw", result: "cozy-calm" },
        { text: "Open curtains", result: "fresh-airy" },
        { text: "Meaningful art", result: "collected-warm" },
        { text: "Clear surfaces", result: "quiet-minimal" }
      ] },
      { text: "Guests would likely say your space feels...", answers: [
        { text: "Comforting", result: "cozy-calm" },
        { text: "Light", result: "fresh-airy" },
        { text: "Interesting", result: "collected-warm" },
        { text: "Peaceful", result: "quiet-minimal" }
      ] }
    ],
    results: [
      { slug: "cozy-calm", title: "Cozy Calm", description: "Your home vibe is soft, restful, and easy to settle into.", shareSummary: "My home matches a Cozy Calm vibe." },
      { slug: "fresh-airy", title: "Fresh and Airy", description: "Your home vibe is bright, breathable, and quietly uplifting.", shareSummary: "My home matches a Fresh and Airy vibe." },
      { slug: "collected-warm", title: "Collected Warmth", description: "Your home vibe feels personal, layered, and full of lived-in charm.", shareSummary: "My home matches a Collected Warmth vibe." },
      { slug: "quiet-minimal", title: "Quiet Minimal", description: "Your home vibe is simple, calm, and free from unnecessary noise.", shareSummary: "My home matches a Quiet Minimal vibe." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-personality-type-do-people-think-you-are",
    title: "What Personality Type Do People Think You Are?",
    description: "Find the personality impression you may give before people know the full story.",
    category: "personality",
    tags: ["personality", "first impression", "vibes"],
    publishedAt: "2026-05-04",
    trending: true,
    questions: [
      { text: "In a new group, you usually...", answers: [
        { text: "Stay composed", result: "the-calm-one" },
        { text: "Make people comfortable", result: "the-friendly-one" },
        { text: "Ask smart questions", result: "the-thoughtful-one" },
        { text: "Take initiative", result: "the-capable-one" }
      ] },
      { text: "Your first impression is probably...", answers: [
        { text: "Peaceful", result: "the-calm-one" },
        { text: "Approachable", result: "the-friendly-one" },
        { text: "Insightful", result: "the-thoughtful-one" },
        { text: "Put together", result: "the-capable-one" }
      ] },
      { text: "People may underestimate your...", answers: [
        { text: "Depth", result: "the-calm-one" },
        { text: "Boundaries", result: "the-friendly-one" },
        { text: "Humor", result: "the-thoughtful-one" },
        { text: "Sensitivity", result: "the-capable-one" }
      ] }
    ],
    results: [
      { slug: "the-calm-one", title: "The Calm One", description: "People may see you as composed, steady, and hard to rattle.", shareSummary: "People probably think I'm The Calm One." },
      { slug: "the-friendly-one", title: "The Friendly One", description: "People may see you as warm, welcoming, and easy to talk to.", shareSummary: "People probably think I'm The Friendly One." },
      { slug: "the-thoughtful-one", title: "The Thoughtful One", description: "People may see you as observant, careful, and quietly insightful.", shareSummary: "People probably think I'm The Thoughtful One." },
      { slug: "the-capable-one", title: "The Capable One", description: "People may see you as organized, competent, and naturally in control.", shareSummary: "People probably think I'm The Capable One." }
    ]
  }),
  makeQuickQuiz({
    slug: "whats-your-true-home-aesthetic",
    title: "What's Your True Home Aesthetic?",
    description: "Choose colors, textures, and room details to reveal the home aesthetic that fits you best.",
    category: "home",
    tags: ["home", "decor", "aesthetic"],
    publishedAt: "2026-05-03",
    trending: true,
    questions: [
      { text: "Your dream home should feel...", answers: [
        { text: "Clean and peaceful", result: "soft-minimal" },
        { text: "Warm and layered", result: "cozy-collected" },
        { text: "Fresh and timeless", result: "classic-airy" },
        { text: "Creative and personal", result: "artful-eclectic" }
      ] },
      { text: "Pick a material.", answers: [
        { text: "Light wood", result: "soft-minimal" },
        { text: "Woven texture", result: "cozy-collected" },
        { text: "Linen", result: "classic-airy" },
        { text: "Vintage brass", result: "artful-eclectic" }
      ] },
      { text: "Your favorite kind of room is...", answers: [
        { text: "Uncluttered", result: "soft-minimal" },
        { text: "Lived-in", result: "cozy-collected" },
        { text: "Bright", result: "classic-airy" },
        { text: "Full of stories", result: "artful-eclectic" }
      ] }
    ],
    results: [
      { slug: "soft-minimal", title: "Soft Minimal", description: "Your true home aesthetic is calm, edited, and warm without feeling empty.", shareSummary: "My true home aesthetic is Soft Minimal." },
      { slug: "cozy-collected", title: "Cozy Collected", description: "Your true home aesthetic is layered, welcoming, and full of pieces that feel personal.", shareSummary: "My true home aesthetic is Cozy Collected." },
      { slug: "classic-airy", title: "Classic Airy", description: "Your true home aesthetic is fresh, timeless, and quietly polished.", shareSummary: "My true home aesthetic is Classic Airy." },
      { slug: "artful-eclectic", title: "Artful Eclectic", description: "Your true home aesthetic is expressive, creative, and built around character.", shareSummary: "My true home aesthetic is Artful Eclectic." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-kitchen-style-matches-your-personality",
    title: "Which Kitchen Style Matches Your Personality?",
    description: "Find the kitchen style that fits the way you cook, host, and live.",
    category: "home",
    tags: ["kitchen", "home", "decor"],
    publishedAt: "2026-05-02",
    questions: [
      { text: "Your ideal kitchen priority is...", answers: [
        { text: "Everything has a place", result: "modern-organized" },
        { text: "Warmth and gathering", result: "farmhouse-warm" },
        { text: "Light and ease", result: "coastal-bright" },
        { text: "A little drama", result: "bold-bistro" }
      ] },
      { text: "Pick a kitchen detail.", answers: [
        { text: "Flat-front cabinets", result: "modern-organized" },
        { text: "Open shelves", result: "farmhouse-warm" },
        { text: "White tile", result: "coastal-bright" },
        { text: "Statement lighting", result: "bold-bistro" }
      ] },
      { text: "Your cooking style is...", answers: [
        { text: "Efficient", result: "modern-organized" },
        { text: "Generous", result: "farmhouse-warm" },
        { text: "Simple and fresh", result: "coastal-bright" },
        { text: "Creative", result: "bold-bistro" }
      ] }
    ],
    results: [
      { slug: "modern-organized", title: "Modern Organized Kitchen", description: "You like clean surfaces, smart storage, and a kitchen that works hard quietly.", shareSummary: "My kitchen style is Modern Organized." },
      { slug: "farmhouse-warm", title: "Warm Farmhouse Kitchen", description: "You want a kitchen that feels generous, lived-in, and made for gathering.", shareSummary: "My kitchen style is Warm Farmhouse." },
      { slug: "coastal-bright", title: "Coastal Bright Kitchen", description: "You are drawn to fresh light, easy materials, and an open breezy feeling.", shareSummary: "My kitchen style is Coastal Bright." },
      { slug: "bold-bistro", title: "Bold Bistro Kitchen", description: "You like a kitchen with mood, personality, and a little restaurant energy.", shareSummary: "My kitchen style is Bold Bistro." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-cozy-are-you",
    title: "What Kind of Cozy Are You?",
    description: "Find your personal version of cozy, from soft and quiet to warm and social.",
    category: "lifestyle",
    tags: ["cozy", "personality", "lifestyle"],
    publishedAt: "2026-05-01",
    trending: true,
    questions: [
      { text: "Cozy means...", answers: [
        { text: "Silence and blankets", result: "quiet-cozy" },
        { text: "Good food and people", result: "gathered-cozy" },
        { text: "Candles and books", result: "romantic-cozy" },
        { text: "Sweats and no plans", result: "easy-cozy" }
      ] },
      { text: "Pick a cozy setting.", answers: [
        { text: "A reading chair", result: "quiet-cozy" },
        { text: "A full kitchen table", result: "gathered-cozy" },
        { text: "A rainy window", result: "romantic-cozy" },
        { text: "The couch", result: "easy-cozy" }
      ] },
      { text: "Your cozy night needs...", answers: [
        { text: "Low noise", result: "quiet-cozy" },
        { text: "Something homemade", result: "gathered-cozy" },
        { text: "Atmosphere", result: "romantic-cozy" },
        { text: "Zero effort", result: "easy-cozy" }
      ] }
    ],
    results: [
      { slug: "quiet-cozy", title: "Quiet Cozy", description: "Your cozy is soft, silent, and deeply restorative.", shareSummary: "I'm Quiet Cozy." },
      { slug: "gathered-cozy", title: "Gathered Cozy", description: "Your cozy comes from warmth, food, and being near the right people.", shareSummary: "I'm Gathered Cozy." },
      { slug: "romantic-cozy", title: "Romantic Cozy", description: "Your cozy is candlelit, thoughtful, and full of atmosphere.", shareSummary: "I'm Romantic Cozy." },
      { slug: "easy-cozy", title: "Easy Cozy", description: "Your cozy is uncomplicated, comfortable, and proudly low-maintenance.", shareSummary: "I'm Easy Cozy." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-does-your-dream-living-room-say-about-you",
    title: "What Does Your Dream Living Room Say About You?",
    description: "Build a dream living room and reveal what it says about your personality.",
    category: "home",
    tags: ["living room", "home", "personality"],
    publishedAt: "2026-04-30",
    questions: [
      { text: "Your dream sofa is...", answers: [
        { text: "Deep and soft", result: "comfort-seeker" },
        { text: "Tailored and neutral", result: "calm-curator" },
        { text: "Colorful or unique", result: "creative-host" },
        { text: "Big enough for everyone", result: "connection-maker" }
      ] },
      { text: "The room needs more...", answers: [
        { text: "Texture", result: "comfort-seeker" },
        { text: "Balance", result: "calm-curator" },
        { text: "Art", result: "creative-host" },
        { text: "Seating", result: "connection-maker" }
      ] },
      { text: "Your living room is mainly for...", answers: [
        { text: "Resting", result: "comfort-seeker" },
        { text: "Feeling peaceful", result: "calm-curator" },
        { text: "Self-expression", result: "creative-host" },
        { text: "Gathering", result: "connection-maker" }
      ] }
    ],
    results: [
      { slug: "comfort-seeker", title: "Comfort Seeker", description: "Your dream living room says you value softness, rest, and feeling held by your space.", shareSummary: "My dream living room says I'm a Comfort Seeker." },
      { slug: "calm-curator", title: "Calm Curator", description: "Your dream living room says you crave balance, beauty, and visual quiet.", shareSummary: "My dream living room says I'm a Calm Curator." },
      { slug: "creative-host", title: "Creative Host", description: "Your dream living room says you want personality, color, and conversation starters.", shareSummary: "My dream living room says I'm a Creative Host." },
      { slug: "connection-maker", title: "Connection Maker", description: "Your dream living room says home is where people gather and feel included.", shareSummary: "My dream living room says I'm a Connection Maker." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-small-luxury-fits-your-personality",
    title: "Which Small Luxury Fits Your Personality?",
    description: "Find the everyday little luxury that matches your taste and mood.",
    category: "lifestyle",
    type: "recommendation",
    tags: ["small luxury", "lifestyle", "personality"],
    publishedAt: "2026-04-29",
    trending: true,
    questions: [
      { text: "A small luxury should feel...", answers: [
        { text: "Soft", result: "linen-pajamas" },
        { text: "Beautiful", result: "fresh-flowers" },
        { text: "Useful", result: "good-notebook" },
        { text: "Indulgent", result: "fancy-coffee" }
      ] },
      { text: "Pick a treat moment.", answers: [
        { text: "Fresh sheets", result: "linen-pajamas" },
        { text: "A vase on the table", result: "fresh-flowers" },
        { text: "A quiet planning hour", result: "good-notebook" },
        { text: "A slow morning drink", result: "fancy-coffee" }
      ] },
      { text: "Your personality appreciates...", answers: [
        { text: "Comfort", result: "linen-pajamas" },
        { text: "Beauty", result: "fresh-flowers" },
        { text: "Intention", result: "good-notebook" },
        { text: "Ritual", result: "fancy-coffee" }
      ] }
    ],
    results: [
      { slug: "linen-pajamas", title: "Linen Pajamas", description: "Your small luxury is comfort you can actually feel at the end of the day.", shareSummary: "My small luxury is Linen Pajamas." },
      { slug: "fresh-flowers", title: "Fresh Flowers", description: "Your small luxury is beauty that changes the whole mood of a room.", shareSummary: "My small luxury is Fresh Flowers." },
      { slug: "good-notebook", title: "A Really Good Notebook", description: "Your small luxury is useful, thoughtful, and quietly satisfying.", shareSummary: "My small luxury is A Really Good Notebook." },
      { slug: "fancy-coffee", title: "Fancy Coffee", description: "Your small luxury is a ritual that makes an ordinary day feel a little special.", shareSummary: "My small luxury is Fancy Coffee." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-type-of-weekend-home-would-you-love",
    title: "What Type of Weekend Home Would You Love?",
    description: "Find the weekend home style that matches your ideal escape.",
    category: "home",
    type: "recommendation",
    tags: ["home", "weekend", "travel"],
    publishedAt: "2026-04-28",
    questions: [
      { text: "Your weekend escape needs...", answers: [
        { text: "Water views", result: "lake-cottage" },
        { text: "Trees and quiet", result: "woodland-cabin" },
        { text: "Walkable charm", result: "townhouse-retreat" },
        { text: "Open sunshine", result: "desert-casita" }
      ] },
      { text: "Pick a weekend activity.", answers: [
        { text: "Sitting on a dock", result: "lake-cottage" },
        { text: "Reading by a fire", result: "woodland-cabin" },
        { text: "Walking to coffee", result: "townhouse-retreat" },
        { text: "Watching the sunset", result: "desert-casita" }
      ] },
      { text: "The home should feel...", answers: [
        { text: "Easy and breezy", result: "lake-cottage" },
        { text: "Tucked away", result: "woodland-cabin" },
        { text: "Lively but cozy", result: "townhouse-retreat" },
        { text: "Warm and minimal", result: "desert-casita" }
      ] }
    ],
    results: [
      { slug: "lake-cottage", title: "Lake Cottage", description: "You would love a relaxed weekend home with water, light, and slow mornings.", shareSummary: "My weekend home would be a Lake Cottage." },
      { slug: "woodland-cabin", title: "Woodland Cabin", description: "You would love a quiet, tucked-away home where the whole point is unplugging.", shareSummary: "My weekend home would be a Woodland Cabin." },
      { slug: "townhouse-retreat", title: "Townhouse Retreat", description: "You would love a charming weekend spot near cafes, shops, and easy wandering.", shareSummary: "My weekend home would be a Townhouse Retreat." },
      { slug: "desert-casita", title: "Desert Casita", description: "You would love a warm, simple escape with sunshine, texture, and open skies.", shareSummary: "My weekend home would be a Desert Casita." }
    ]
  }),
  makeQuickQuiz({
    slug: "are-you-burnt-out-or-just-tired",
    title: "Are You Burnt Out or Just Tired?",
    description: "A gentle check-in quiz to help name whether you need sleep, space, support, or a deeper reset.",
    category: "lifestyle",
    tags: ["burnout", "rest", "wellness"],
    publishedAt: "2026-05-11",
    trending: true,
    questions: [
      { text: "When you wake up lately, you feel...", answers: [
        { text: "Sleepy but functional", result: "just-tired" },
        { text: "Heavy before the day starts", result: "burnout-signals" },
        { text: "Mentally foggy", result: "overloaded" },
        { text: "Emotionally stretched", result: "needs-support" }
      ] },
      { text: "A free afternoon would make you want to...", answers: [
        { text: "Nap hard", result: "just-tired" },
        { text: "Avoid all responsibilities", result: "burnout-signals" },
        { text: "Turn everything off", result: "overloaded" },
        { text: "Talk to someone safe", result: "needs-support" }
      ] },
      { text: "The thing that feels hardest is...", answers: [
        { text: "Keeping your eyes open", result: "just-tired" },
        { text: "Caring about tasks", result: "burnout-signals" },
        { text: "Processing one more input", result: "overloaded" },
        { text: "Holding everything alone", result: "needs-support" }
      ] }
    ],
    results: [
      { slug: "just-tired", title: "Probably Just Tired", description: "Your body may be asking for real sleep, simpler evenings, and fewer late-day demands.", shareSummary: "I got Probably Just Tired." },
      { slug: "burnout-signals", title: "Burnout Signals", description: "You may need more than a nap: less pressure, fewer obligations, and a reset that lasts longer than one night.", shareSummary: "I got Burnout Signals." },
      { slug: "overloaded", title: "Overloaded Brain", description: "Your system sounds full. Lowering noise, choices, and screen input may help you feel human again.", shareSummary: "I got Overloaded Brain." },
      { slug: "needs-support", title: "Needs Support", description: "You may be carrying too much by yourself. Gentle help, honest conversation, or practical backup could matter.", shareSummary: "I got Needs Support." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-kind-of-rest-do-you-actually-need",
    title: "What Kind of Rest Do You Actually Need?",
    description: "Find the kind of rest your current energy is really asking for.",
    category: "lifestyle",
    type: "recommendation",
    tags: ["rest", "self care", "wellness"],
    publishedAt: "2026-05-10",
    trending: true,
    questions: [
      { text: "The tiredness feels mostly...", answers: [
        { text: "Physical", result: "physical-rest" },
        { text: "Mental", result: "mental-rest" },
        { text: "Emotional", result: "emotional-rest" },
        { text: "Social", result: "social-rest" }
      ] },
      { text: "Right now you crave...", answers: [
        { text: "Sleep and stillness", result: "physical-rest" },
        { text: "Fewer decisions", result: "mental-rest" },
        { text: "A safe exhale", result: "emotional-rest" },
        { text: "Time alone", result: "social-rest" }
      ] },
      { text: "Your best reset would remove...", answers: [
        { text: "Movement and effort", result: "physical-rest" },
        { text: "Planning and noise", result: "mental-rest" },
        { text: "Pressure to be okay", result: "emotional-rest" },
        { text: "People-facing energy", result: "social-rest" }
      ] }
    ],
    results: [
      { slug: "physical-rest", title: "Physical Rest", description: "Your body wants softness: sleep, stretching, slower movement, and fewer demands.", shareSummary: "I need Physical Rest." },
      { slug: "mental-rest", title: "Mental Rest", description: "Your brain wants quiet: fewer choices, less multitasking, and a short break from processing.", shareSummary: "I need Mental Rest." },
      { slug: "emotional-rest", title: "Emotional Rest", description: "Your heart wants room to be honest without performing okay-ness.", shareSummary: "I need Emotional Rest." },
      { slug: "social-rest", title: "Social Rest", description: "Your social battery wants protected space, low input, and no explaining for a while.", shareSummary: "I need Social Rest." }
    ]
  }),
  makeQuickQuiz({
    slug: "is-your-brain-overstimulated",
    title: "Is Your Brain Overstimulated?",
    description: "A quick quiz to see whether your mind may be craving less input and more quiet.",
    category: "lifestyle",
    tags: ["overstimulated", "brain", "wellness"],
    publishedAt: "2026-05-09",
    questions: [
      { text: "Notifications lately feel...", answers: [
        { text: "Fine", result: "steady-input" },
        { text: "A little annoying", result: "mildly-overstimulated" },
        { text: "Too much", result: "very-overstimulated" },
        { text: "Like the final straw", result: "needs-input-break" }
      ] },
      { text: "After scrolling, you usually feel...", answers: [
        { text: "About the same", result: "steady-input" },
        { text: "Slightly scattered", result: "mildly-overstimulated" },
        { text: "Wired and tired", result: "very-overstimulated" },
        { text: "Ready to throw your phone away", result: "needs-input-break" }
      ] },
      { text: "Your brain wants...", answers: [
        { text: "Normal rhythm", result: "steady-input" },
        { text: "A quieter evening", result: "mildly-overstimulated" },
        { text: "A serious pause", result: "very-overstimulated" },
        { text: "A full input reset", result: "needs-input-break" }
      ] }
    ],
    results: [
      { slug: "steady-input", title: "Steady Input", description: "You seem to be handling input fairly well, though a little quiet never hurts.", shareSummary: "My brain input level is Steady Input." },
      { slug: "mildly-overstimulated", title: "Mildly Overstimulated", description: "Your brain may need fewer tabs, softer noise, and a slower transition into rest.", shareSummary: "My brain is Mildly Overstimulated." },
      { slug: "very-overstimulated", title: "Very Overstimulated", description: "Your mind sounds crowded. A screen break and a low-sensory reset could help.", shareSummary: "My brain is Very Overstimulated." },
      { slug: "needs-input-break", title: "Needs an Input Break", description: "Your system may be asking for a real pause from alerts, feeds, noise, and constant availability.", shareSummary: "My brain Needs an Input Break." }
    ]
  }),
  makeQuickQuiz({
    slug: "whats-secretly-draining-your-energy",
    title: "What's Secretly Draining Your Energy?",
    description: "Find the hidden energy leak that may be making your days feel heavier.",
    category: "lifestyle",
    tags: ["energy", "wellness", "self care"],
    publishedAt: "2026-05-08",
    trending: true,
    questions: [
      { text: "The day often feels harder because of...", answers: [
        { text: "Too many tiny decisions", result: "decision-fatigue" },
        { text: "Unspoken feelings", result: "emotional-backlog" },
        { text: "Digital noise", result: "screen-static" },
        { text: "Doing too much for others", result: "overgiving" }
      ] },
      { text: "You feel most relieved when...", answers: [
        { text: "Someone chooses for you", result: "decision-fatigue" },
        { text: "You finally talk it out", result: "emotional-backlog" },
        { text: "Everything gets quiet", result: "screen-static" },
        { text: "You say no", result: "overgiving" }
      ] },
      { text: "Your energy leak sounds like...", answers: [
        { text: "What now?", result: "decision-fatigue" },
        { text: "I'm fine, but not really", result: "emotional-backlog" },
        { text: "One more notification", result: "screen-static" },
        { text: "I can handle it", result: "overgiving" }
      ] }
    ],
    results: [
      { slug: "decision-fatigue", title: "Decision Fatigue", description: "Too many small choices may be draining more energy than you realize.", shareSummary: "What's secretly draining me is Decision Fatigue." },
      { slug: "emotional-backlog", title: "Emotional Backlog", description: "Unprocessed feelings may be taking up quiet space in the background.", shareSummary: "What's secretly draining me is Emotional Backlog." },
      { slug: "screen-static", title: "Screen Static", description: "Constant digital input may be making your brain feel busy even when nothing is happening.", shareSummary: "What's secretly draining me is Screen Static." },
      { slug: "overgiving", title: "Overgiving", description: "Being available to everyone else may be leaving too little room for you.", shareSummary: "What's secretly draining me is Overgiving." }
    ]
  }),
  makeQuickQuiz({
    slug: "are-you-mentally-in-summer-or-winter-right-now",
    title: "Are You Mentally in Summer or Winter Right Now?",
    description: "Find the inner season that best matches your current mood and energy.",
    category: "seasonal",
    tags: ["seasonal", "mood", "personality"],
    publishedAt: "2026-05-07",
    questions: [
      { text: "Your inner pace feels...", answers: [
        { text: "Open and bright", result: "mental-summer" },
        { text: "Slow and tucked in", result: "mental-winter" },
        { text: "Fresh and restarting", result: "mental-spring" },
        { text: "Reflective and cozy", result: "mental-fall" }
      ] },
      { text: "Right now you want more...", answers: [
        { text: "Freedom", result: "mental-summer" },
        { text: "Quiet", result: "mental-winter" },
        { text: "Hope", result: "mental-spring" },
        { text: "Comfort", result: "mental-fall" }
      ] },
      { text: "Pick a personal weather report.", answers: [
        { text: "Sunny", result: "mental-summer" },
        { text: "Snowed in", result: "mental-winter" },
        { text: "Clearing skies", result: "mental-spring" },
        { text: "Crisp air", result: "mental-fall" }
      ] }
    ],
    results: [
      { slug: "mental-summer", title: "Mentally in Summer", description: "Your inner world wants openness, movement, warmth, and a little more freedom.", shareSummary: "I'm mentally in Summer right now." },
      { slug: "mental-winter", title: "Mentally in Winter", description: "Your inner world wants quiet, protection, rest, and fewer expectations.", shareSummary: "I'm mentally in Winter right now." },
      { slug: "mental-spring", title: "Mentally in Spring", description: "Your inner world is ready for fresh starts, softer hope, and tiny signs of renewal.", shareSummary: "I'm mentally in Spring right now." },
      { slug: "mental-fall", title: "Mentally in Fall", description: "Your inner world wants comfort, reflection, rituals, and a slower kind of beauty.", shareSummary: "I'm mentally in Fall right now." }
    ]
  }),
  makeQuickQuiz({
    slug: "what-type-of-recharge-works-best-for-you",
    title: "What Type of Recharge Works Best for You?",
    description: "Find the recharge style that actually helps your energy come back.",
    category: "lifestyle",
    type: "recommendation",
    tags: ["recharge", "energy", "wellness"],
    publishedAt: "2026-05-06",
    trending: true,
    questions: [
      { text: "When you are low, you recover best by...", answers: [
        { text: "Being alone", result: "solitude-recharge" },
        { text: "Moving your body", result: "movement-recharge" },
        { text: "Doing something creative", result: "creative-recharge" },
        { text: "Being with safe people", result: "connection-recharge" }
      ] },
      { text: "A good reset leaves you feeling...", answers: [
        { text: "Clear", result: "solitude-recharge" },
        { text: "Awake", result: "movement-recharge" },
        { text: "Inspired", result: "creative-recharge" },
        { text: "Held", result: "connection-recharge" }
      ] },
      { text: "Pick your ideal hour.", answers: [
        { text: "No talking", result: "solitude-recharge" },
        { text: "A walk", result: "movement-recharge" },
        { text: "Making something", result: "creative-recharge" },
        { text: "A low-pressure hangout", result: "connection-recharge" }
      ] }
    ],
    results: [
      { slug: "solitude-recharge", title: "Solitude Recharge", description: "Your energy returns when you have quiet space with no performance required.", shareSummary: "My best recharge is Solitude Recharge." },
      { slug: "movement-recharge", title: "Movement Recharge", description: "Your energy comes back through walking, stretching, fresh air, or getting out of your head.", shareSummary: "My best recharge is Movement Recharge." },
      { slug: "creative-recharge", title: "Creative Recharge", description: "Your energy returns when you make, imagine, style, write, cook, or play.", shareSummary: "My best recharge is Creative Recharge." },
      { slug: "connection-recharge", title: "Connection Recharge", description: "Your energy comes back through safe, easy connection with people who feel like home.", shareSummary: "My best recharge is Connection Recharge." }
    ]
  }),
  makeTriviaQuiz({
    slug: "only-90s-kids-will-remember-these",
    title: "Only 90s Kids Will Remember These",
    description: "Test your memory of familiar 90s childhood moments, snacks, toys, and pop culture.",
    category: "pop-culture",
    tags: ["90s", "nostalgia", "trivia"],
    publishedAt: "2026-05-11",
    trending: true,
    questions: [
      { text: "Which virtual pet toy became a huge 90s playground obsession?", correct: "Tamagotchi", wrong: ["Fidget spinner", "Hoverboard", "Smart speaker"] },
      { text: "What colorful folder brand was famous for bold school-supply designs?", correct: "Lisa Frank", wrong: ["Le Creuset", "Dyson", "Peloton"] },
      { text: "Which handheld game system was famous for Pokemon games in the late 90s?", correct: "Game Boy", wrong: ["Blu-ray player", "Kindle", "iPad"] },
      { text: "Which phrase was commonly associated with dial-up internet?", correct: "You've got mail", wrong: ["Tap to pay", "Swipe up", "Streaming now"] }
    ]
  }),
  makeQuickQuiz({
    slug: "what-year-does-your-personality-belong-in",
    title: "What Year Does Your Personality Belong In?",
    description: "Find the throwback year that matches your mood, taste, and personality energy.",
    category: "pop-culture",
    tags: ["nostalgia", "personality", "decades"],
    publishedAt: "2026-05-10",
    trending: true,
    questions: [
      { text: "Pick a vibe.", answers: [
        { text: "Bright, bold, and optimistic", result: "year-1989" },
        { text: "Casual, cool, and a little sarcastic", result: "year-1996" },
        { text: "Glossy, fun, and dramatic", result: "year-2003" },
        { text: "Indie, cozy, and online", result: "year-2012" }
      ] },
      { text: "Your ideal soundtrack has...", answers: [
        { text: "Big pop hooks", result: "year-1989" },
        { text: "Alt-rock energy", result: "year-1996" },
        { text: "Dance-pop confidence", result: "year-2003" },
        { text: "Soft playlist feelings", result: "year-2012" }
      ] },
      { text: "Your personality leans...", answers: [
        { text: "Expressive", result: "year-1989" },
        { text: "Laid-back", result: "year-1996" },
        { text: "Main-character", result: "year-2003" },
        { text: "Thoughtful", result: "year-2012" }
      ] }
    ],
    results: [
      { slug: "year-1989", title: "1989", description: "Your personality belongs in 1989: bold, upbeat, expressive, and impossible to ignore.", shareSummary: "My personality belongs in 1989." },
      { slug: "year-1996", title: "1996", description: "Your personality belongs in 1996: relaxed, clever, a little nostalgic, and effortlessly cool.", shareSummary: "My personality belongs in 1996." },
      { slug: "year-2003", title: "2003", description: "Your personality belongs in 2003: glossy, playful, dramatic, and ready for a moment.", shareSummary: "My personality belongs in 2003." },
      { slug: "year-2012", title: "2012", description: "Your personality belongs in 2012: curated, introspective, internet-fluent, and quietly romantic.", shareSummary: "My personality belongs in 2012." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-early-2000s-trend-matches-you",
    title: "Which Early 2000s Trend Matches You?",
    description: "Find the early 2000s trend that matches your personality and nostalgic style.",
    category: "pop-culture",
    tags: ["2000s", "nostalgia", "style"],
    publishedAt: "2026-05-09",
    trending: true,
    questions: [
      { text: "Your throwback style is...", answers: [
        { text: "Playful and bright", result: "butterfly-clips" },
        { text: "Cozy and casual", result: "velour-tracksuit" },
        { text: "Techy and social", result: "flip-phone" },
        { text: "Glossy and dramatic", result: "frosted-lip-gloss" }
      ] },
      { text: "Pick an accessory.", answers: [
        { text: "Tiny colorful clips", result: "butterfly-clips" },
        { text: "A matching set", result: "velour-tracksuit" },
        { text: "A phone charm", result: "flip-phone" },
        { text: "A shiny tube", result: "frosted-lip-gloss" }
      ] },
      { text: "Your personality gives...", answers: [
        { text: "Whimsical", result: "butterfly-clips" },
        { text: "Comfortable confidence", result: "velour-tracksuit" },
        { text: "Always connected", result: "flip-phone" },
        { text: "Main-character sparkle", result: "frosted-lip-gloss" }
      ] }
    ],
    results: [
      { slug: "butterfly-clips", title: "Butterfly Clips", description: "You are playful, colorful, and bring a little lightness to everything.", shareSummary: "My early 2000s trend is Butterfly Clips." },
      { slug: "velour-tracksuit", title: "Velour Tracksuit", description: "You are relaxed, confident, and know comfort can still be iconic.", shareSummary: "My early 2000s trend is Velour Tracksuit." },
      { slug: "flip-phone", title: "Flip Phone", description: "You are social, expressive, and just mysterious enough to leave people waiting for a reply.", shareSummary: "My early 2000s trend is Flip Phone." },
      { slug: "frosted-lip-gloss", title: "Frosted Lip Gloss", description: "You are glossy, bold, and not afraid of a little attention.", shareSummary: "My early 2000s trend is Frosted Lip Gloss." }
    ]
  }),
  makeQuickQuiz({
    slug: "build-a-childhood-snack-plate-and-well-judge-your-personality",
    title: "Build a Childhood Snack Plate and We'll Judge Your Personality",
    description: "Choose nostalgic snacks and get a playful read on your personality.",
    category: "food",
    tags: ["snacks", "nostalgia", "personality"],
    publishedAt: "2026-05-08",
    trending: true,
    questions: [
      { text: "Pick the main snack.", answers: [
        { text: "Pizza rolls", result: "chaotic-fun" },
        { text: "Goldfish crackers", result: "comfort-classic" },
        { text: "Fruit snacks", result: "sweet-spark" },
        { text: "Cheese and crackers", result: "tiny-grownup" }
      ] },
      { text: "Add something sweet.", answers: [
        { text: "Cosmic brownie", result: "chaotic-fun" },
        { text: "Pudding cup", result: "comfort-classic" },
        { text: "Gushers", result: "sweet-spark" },
        { text: "Vanilla wafers", result: "tiny-grownup" }
      ] },
      { text: "Choose a drink.", answers: [
        { text: "Fruit punch", result: "chaotic-fun" },
        { text: "Chocolate milk", result: "comfort-classic" },
        { text: "Lemonade pouch", result: "sweet-spark" },
        { text: "Apple juice", result: "tiny-grownup" }
      ] }
    ],
    results: [
      { slug: "chaotic-fun", title: "Chaotic Fun", description: "You bring big snack-table energy, strong opinions, and the ability to make anything more entertaining.", shareSummary: "My childhood snack plate says I'm Chaotic Fun." },
      { slug: "comfort-classic", title: "Comfort Classic", description: "You are loyal, familiar, and the person people return to when they need something steady.", shareSummary: "My childhood snack plate says I'm Comfort Classic." },
      { slug: "sweet-spark", title: "Sweet Spark", description: "You are bright, playful, and probably more powerful than your cute exterior suggests.", shareSummary: "My childhood snack plate says I'm Sweet Spark." },
      { slug: "tiny-grownup", title: "Tiny Grown-Up", description: "You had opinions early, liked things just so, and probably seemed mature before your time.", shareSummary: "My childhood snack plate says I'm Tiny Grown-Up." }
    ]
  }),
  makeQuickQuiz({
    slug: "which-classic-comfort-movie-matches-your-energy",
    title: "Which Classic Comfort Movie Matches Your Energy?",
    description: "Find the familiar comfort-movie vibe that matches your current energy.",
    category: "pop-culture",
    tags: ["movies", "comfort", "personality"],
    publishedAt: "2026-05-07",
    questions: [
      { text: "Your comfort movie should feel...", answers: [
        { text: "Warm and hopeful", result: "small-town-heart" },
        { text: "Funny and familiar", result: "cozy-comedy" },
        { text: "Romantic and soft", result: "soft-romance" },
        { text: "Adventurous but safe", result: "gentle-adventure" }
      ] },
      { text: "Pick a movie-night snack.", answers: [
        { text: "Popcorn with extra butter", result: "small-town-heart" },
        { text: "Candy mix", result: "cozy-comedy" },
        { text: "Chocolate", result: "soft-romance" },
        { text: "Nachos", result: "gentle-adventure" }
      ] },
      { text: "Your current energy is...", answers: [
        { text: "Tender", result: "small-town-heart" },
        { text: "Lighthearted", result: "cozy-comedy" },
        { text: "Dreamy", result: "soft-romance" },
        { text: "Restless", result: "gentle-adventure" }
      ] }
    ],
    results: [
      { slug: "small-town-heart", title: "Small-Town Heart Movie", description: "Your comfort movie match is warm, hopeful, and full of people finding their way home.", shareSummary: "My comfort movie energy is Small-Town Heart." },
      { slug: "cozy-comedy", title: "Cozy Comedy", description: "Your comfort movie match is familiar, funny, and easy to rewatch when life feels too much.", shareSummary: "My comfort movie energy is Cozy Comedy." },
      { slug: "soft-romance", title: "Soft Romance", description: "Your comfort movie match is gentle, heartfelt, and just sentimental enough.", shareSummary: "My comfort movie energy is Soft Romance." },
      { slug: "gentle-adventure", title: "Gentle Adventure", description: "Your comfort movie match has movement, charm, and enough adventure to feel refreshed.", shareSummary: "My comfort movie energy is Gentle Adventure." }
    ]
  })
];

export const quizzes: Quiz[] = [...starterQuizzes, ...expansionQuizzes];
