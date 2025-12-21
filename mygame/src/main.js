import kaboom from "kaboom";

kaboom({
  background: [20, 20, 30], // dark background
});

// button colors and positions
const colors = ["red", "green", "blue", "yellow"];
const positions = [
  vec2(200, 150),
  vec2(400, 150),
  vec2(200, 300),
  vec2(400, 300),
];

// make buttons
const buttons = colors.map((color, i) => {
  const btn = add([
    rect(100, 100),
    pos(positions[i]),
    color === "red" ? colorize(255, 0, 0) :
    color === "green" ? colorize(0, 255, 0) :
    color === "blue" ? colorize(0, 0, 255) :
    colorize(255, 255, 0),
    area(),
    anchor("center"),
    "button",
    { color },
  ]);
  return btn;
});

// sequence memory game variables
let pattern = [];
let playerInput = [];
let canClick = false;

// helper: flash a button
function flashButton(btn) {
  const orig = btn.color.clone();
  btn.color = rgb(255, 255, 255);
  wait(0.3, () => (btn.color = orig));
}

// play pattern animation
async function playPattern() {
  canClick = false;
  for (const color of pattern) {
    const btn = buttons.find((b) => b.colorName === color || b.color === color);
    flashButton(btn);
    await new Promise((r) => setTimeout(r, 600));
  }
  canClick = true;
}

// start new round
function nextRound() {
  const randomColor = choose(colors);
  pattern.push(randomColor);
  playerInput = [];
  playPattern();
}

// handle clicks
buttons.forEach((btn) => {
  btn.onClick(() => {
    if (!canClick) return;

    const color = btn.colorName || btn.color;
    playerInput.push(btn.colorName || btn.color);
    flashButton(btn);

    const idx = playerInput.length - 1;
    if (playerInput[idx] !== pattern[idx]) {
      add([text("❌ Wrong!", { size: 48 }), pos(width() / 2, height() / 2), anchor("center"), lifespan(1)]);
      pattern = [];
      wait(1, nextRound);
      return;
    }

    if (playerInput.length === pattern.length) {
      add([text("✅ Correct!", { size: 48 }), pos(width() / 2, height() / 2), anchor("center"), lifespan(1)]);
      wait(1, nextRound);
    }
  });
});

// start the game
nextRound();
