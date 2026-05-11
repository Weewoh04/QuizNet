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
  })
];

export const quizzes: Quiz[] = [...starterQuizzes, ...expansionQuizzes];
