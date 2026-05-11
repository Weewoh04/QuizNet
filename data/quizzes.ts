import type { Quiz } from "@/lib/types";

const image = "/images/og-default.svg";

// Add new quizzes here:
// 1. Copy an existing quiz object.
// 2. Give it a unique slug, category, tags, SEO fields, and Facebook fields.
// 3. Add questions with answer ids. Personality/recommendation answers use points keyed to result slugs.
// 4. Add results with matching slugs. Trivia results can use minScore and maxScore ranges.
// Routes, category pages, related quizzes, metadata, and share links update automatically.
export const quizzes: Quiz[] = [
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
