/*
 * quiz-data.js  —  This is the only file you edit to change the quiz.
 *
 * To add an image:
 *   1. Drop the image file into the /images folder.
 *   2. Add an entry to the QUIZ_ITEMS list below.
 *
 * Fields:
 *   src     : path to the image (relative to index.html)
 *   isAI    : true  = AI-generated or otherwise fake
 *             false = a real, genuine photo
 *   caption : (optional) text shown under the image during the quiz.
 *             Leave as "" so it does not give the answer away.
 *   tells   : the give-away clues shown AFTER the person answers.
 */

const QUIZ_ITEMS = [
  {
    src: "images/img-01.jpg",
    isAI: true,
    caption: "",
    tells: [
      "The faces in the background crowd are smudged and blank, a classic AI giveaway.",
      "The hands held together blur into one another instead of looking like two real hands.",
      "Both faces have that slightly waxy, too smooth look.",
      "Ask yourself: a candid 'couple' photo of a famous person that no news outlet ever ran? That is a red flag."
    ]
  },
  {
    src: "images/img-02.png",
    isAI: true,
    caption: "",
    tells: [
      "The whole shot is a little too perfect and glossy, evenly lit like a polished studio promo rather than a real, slightly imperfect news photo.",
      "Look closely at the clasped hands, where the interlaced fingers blur together and are hard to count. That is still one of the biggest AI weak spots.",
      "The skin is very smooth and waxy and the lighting is flawlessly flattering, which is the giveaway of a generated portrait.",
      "Notice the trick: it wraps itself in a real, trusted news brand and an official looking 'Cyber Safety for Seniors' banner. That borrowed authority is exactly how a scam earns your trust.",
      "Notice too that the on screen text is perfectly clean. Readable writing used to be a sign of a real photo, but AI handles it well now, so the safest move is to check whether the segment ever actually aired."
    ]
  },
  {
    src: "images/img-03.jpg",
    isAI: false,
    caption: "",
    tells: [
      "This is a genuine candid event photo. The lighting and motion blur are natural.",
      "Hands, fingers, ears and teeth are all correct and consistent.",
      "The people in the background are real, with normal faces.",
      "Real snapshots look a bit imperfect and awkward, and that imperfection is a sign it is genuine."
    ]
  },
  {
    src: "images/img-04.jpg",
    isAI: true,
    caption: "",
    tells: [
      "This is a fake, but made the old fashioned way with photo editing, not a generator.",
      "The face and the body do not match. Look at the lighting and the cut out edges around the collar.",
      "The Hello Kitty suit is the joke, and there is a maker's handle watermarked in the corner.",
      "Lesson: not every fake is 'AI'. Plain photo editing still fools people every day."
    ]
  },
  {
    src: "images/img-05.jpg",
    isAI: false,
    caption: "",
    tells: [
      "A real, unposed street photo. The messy background of bins and fences is genuine.",
      "Body proportions, hands, feet and shoes are all correct and consistent.",
      "The worn lettering on the shirt is real text, not the garbled nonsense AI usually produces.",
      "The slightly unflattering, candid quality is typical of a real paparazzi shot."
    ]
  },
  {
    src: "images/img-06.jpg",
    isAI: false,
    caption: "",
    tells: [
      "A real photograph: the famous 'Pillars of Creation' taken by the Hubble Space Telescope.",
      "The cross shaped spikes on the bright stars are a real optical effect of telescopes.",
      "Lesson one: 'real' does not only mean a phone snapshot. Scientific images are real too.",
      "Lesson two: spectacular space images CAN be faked, so always check it came from NASA or ESA."
    ]
  },
  {
    src: "images/img-07.jpg",
    isAI: true,
    caption: "",
    tells: [
      "Dreamlike, flawless and perfectly symmetrical, which real wildlife photos never are.",
      "A pure white lion with bright blue eyes is a fantasy combination, and the fur melts into the snow.",
      "The background trees are a smooth blur with no real branches or detail.",
      "A polished studio style portrait of a wild animal out in the wild does not happen in reality."
    ]
  },
  {
    src: "images/img-08.jpg",
    isAI: false,
    caption: "",
    tells: [
      "A real photo of a guide dog. The leather harness has real stitching and metal buckles that make sense.",
      "Natural fur detail, real road texture, and a believable blurred background.",
      "Eyes, nose, tongue and the clips on the harness are all correct and physically sensible.",
      "Everything connects properly, which is exactly what AI still struggles to get right."
    ]
  },
  {
    src: "images/img-09.jpg",
    isAI: true,
    caption: "",
    tells: [
      "The classic 'too perfect' stock photo look: everyone laughing flawlessly in glossy light.",
      "Look at the people in the background, some have warped or melted faces and bodies.",
      "Count the fingers on the man who is gesturing.",
      "The skyline and buildings behind them are slightly warped and dreamy."
    ]
  },
  {
    src: "images/img-10.jpg",
    isAI: true,
    caption: "",
    tells: [
      "A fashion catalogue look: skin is too smooth and waxy, with no real pores or blemishes.",
      "The hair detail melts at the edges and the background reeds and forest are an even blur.",
      "The blazer texture and seams look slightly painted on rather than woven.",
      "Overall it is too perfect and posed, like a generated clothing lookbook image."
    ]
  }
];