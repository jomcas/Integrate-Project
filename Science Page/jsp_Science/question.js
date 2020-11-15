// Array of Questions
const unit1 = [
  {
    q:
      'What is NOSE for? <br> <img src="../Science Page/img/nose.PNG" alt="nose" width="50%,mkjhz" height="10%" margin="auto">',
    options: ["Tasting", "Smelling", "Seeing"],
    answer: 1,
  },
  {
    q:
      'What is TONGUE for? <br> <img src="../Science Page/img/tongue.PNG" alt="tongue" width="50%,mkjhz" height="5%" style="margin:auto;">',
    options: ["Touching", "Smelling", "Tasting"],
    answer: 2,
  },
  {
    q:
      'What is HANDS for? <br> <img src="../Science Page/img/skin-hand.PNG" alt="hands" width="50%,mkjhz" height="5%" style="margin:auto;">',
    options: ["Hearing", "Touching", "Tasting"],
    answer: 1,
  },
  {
    q:
      'What is EAR for? <br> <img src="../Science Page/img/ears.PNG" alt="ear" width="50%,mkjhz" height="5%" style="margin:auto;">',
    options: ["Seeing", "Hearing", "Tasting"],
    answer: 1,
  },
  {
    q:
      'What is EYES for? <br> <img src="../Science Page/img/eyes.PNG" alt="eyes" width="50%,mkjhz" height="5%" style="margin:auto;">',
    options: ["Seeing", "Smelling", "Tasting"],
    answer: 0,
  },
  {
    q:
      'Your ears help you hear sounds?  <br> <img src="../Science Page/img/ears.PNG" alt="ear" width="50%,mkjhz" height="5%" style="margin:auto;">',
    options: ["True", "False"],
    answer: 0,
  },
  {
    q:
      'Your nose help you taste food?  <br> <img src="../Science Page/img/nose.PNG" alt="nose" width="50%,mkjhz" height="10%" style="margin:auto;">',
    options: ["True", "False"],
    answer: 1,
  },
  {
    q:
      'Your tongue helps you taste different flavors of food? <br> <img src="../Science Page/img/tongue.PNG" alt="tongue" width="50%,mkjhz" height="10%" style="margin:auto;">',
    options: ["True", "False"],
    answer: 0,
  },
  {
    q:
      'Your skin helps you feel things? <br> <img src="../Science Page/img/skin-hand.PNG" alt="skin/hand" width="50%,mkjhz" height="10%" style="margin:auto;">',
    options: ["True", "False"],
    answer: 0,
  },
];

const unit2 = [
  {
    q: "Which of the following are living thing?",
    options: ["Elephant", "Pencil", "Chair"],
    answer: 0,
  },
  {
    q: "Which of the following are living thing?",
    options: ["Bag", "Pencil", "Tree"],
    answer: 2,
  },
  {
    q: "Which of the following are living thing?",
    options: ["Book", "Pencil", "Plants"],
    answer: 2,
  },
  {
    q: "Which of the following are living thing?",
    options: ["Book", "Human", "Ball"],
    answer: 1,
  },
  {
    q: "Which of the following are living thing?",
    options: ["Bird", "Chair", "Hat"],
    answer: 0,
  },
  {
    q: "Non-Living things cannot grow?",
    options: ["True", "False"],
    answer: 0,
  },
  {
    q: "Non-Living things can move?",
    options: ["True", "False"],
    answer: 1,
  },
  {
    q: "Non-Living things cannot multiply on their own?",
    options: ["True", "False"],
    answer: 0,
  },
  {
    q: "Is teddy bear a non-living thing?",
    options: ["True", "False"],
    answer: 0,
  },
  {
    q: "Is plant a non-living thing?",
    options: ["True", "False"],
    answer: 1,
  },
];

const unit3 = [
  {
    q: "Holds the seeds.",
    options: ["Fruit", "Flower", "Stem"],
    answer: 0,
  },
  {
    q: "Holds the plants in place.",
    options: ["Fruit", "Leaf", "Root"],
    answer: 2,
  },
  {
    q: "Makes the food of the plant.",
    options: ["Stem", "Flower", "Leaf"],
    answer: 2,
  },
  {
    q: "Produces the seeds and become fruits.",
    options: ["Leaf", "Stem", "Flower"],
    answer: 2,
  },
  {
    q: "Brings the water and nutrients from the roots to the leaves.",
    options: ["Leaf", "Fruit", "Stem"],
    answer: 2,
  },
  {
    q: "The products produced by the flowering part of a plant.",
    options: ["Leaf", "Fruit", "Stem"],
    answer: 1,
  },
  {
    q: "Takes in sunlight.",
    options: ["Leaf", "Fruit", "Root"],
    answer: 0,
  },
  {
    q: "Take the water from the soil.",
    options: ["Fruit", "Leaf", "Root"],
    answer: 2,
  },
  {
    q: "Breathes in air.",
    options: ["Flower", "Stem", "Leaf"],
    answer: 2,
  },
  {
    q: "Produces the seeds.",
    options: ["Stem", "Fruits", "Rootf"],
    answer: 1,
  },
];

const unit4 = [
  {
    q: "Animals that cannot become pets and cannot live inside the house.",
    options: ["TAME ANIMALS", "WILD ANIMALS"],
    answer: 1,
  },
  {
    q: "Animals that can become pets and can be useful to man.",
    options: ["TAME ANIMALS", "WILD ANIMALS"],
    answer: 0,
  },
  {
    q: "DOG",
    options: ["TAME ANIMAL", "WILD ANIMAL"],
    answer: 0,
  },
  {
    q: "LION",
    options: ["TAME ANIMAL", "WILD ANIMAL"],
    answer: 1,
  },
  {
    q: "TIGER",
    options: ["TAME ANIMAL", "WILD ANIMAL"],
    answer: 1,
  },
  {
    q: "What do RABBIT eats",
    options: ["carrot", "fish", "bone"],
    answer: 0,
  },
  {
    q: "What do CAT eats",
    options: ["leaf", "fish", "bone"],
    answer: 1,
  },
  {
    q: "BEAR",
    options: ["piglet", "cub", "kid"],
    answer: 1,
  },
  {
    q: "CAT",
    options: ["kitten", "cub", "calf"],
    answer: 0,
  },
  {
    q: "PIG",
    options: ["calf", "piglet", "kid"],
    answer: 0,
  },
];

const unit5 = [
  {
    q:
      "An air transportation is a transportation for moving a passenger by air vehicle.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    q:
      "A maritime trasportation is a transportation for moving passengers by water vehicle.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    q:
      "A road transportation is a vehicles which run on tracks (rails or railroad).",
    options: ["True", "False"],
    answer: 1,
  },
  {
    q:
      "Mountains that sometimes release steam and lava from the inside of the Earth.",
    options: ["Valley", "Hills", "Volcano"],
    answer: 2,
  },
  {
    q: "Large areas of land that are mostly flat.",
    options: ["Plain", "Mountain", "Hills"],
    answer: 0,
  },
  {
    q: "Is a landform that rises high above its surroundings.",
    options: ["Mountain", "Valley", "Volcano"],
    answer: 0,
  },
  {
    q: "Is a landform that rises high above its surroundings.",
    options: ["Mountain", "Valley", "Hills"],
    answer: 0,
  },
  {
    q: "A water flowing from the surface of the Earth.",
    options: ["Ocean", "Sea", "River"],
    answer: 2,
  },
  {
    q: "The largest type of water bodies.",
    options: ["Ocean", "River", "Lake"],
    answer: 0,
  },
  {
    q: "An area where water flows over a vertical drop.",
    options: ["Waterfalls", "Sea", "Lake"],
    answer: 0,
  },
  {
    q:
      "Represents a body of either fresh or salt water completely enclosed by land.",
    options: ["Lake", "River", "Ocean"],
    answer: 0,
  },
];
