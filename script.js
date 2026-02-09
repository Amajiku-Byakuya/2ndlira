// ===== 設定 =====
const startDate = new Date("2026-02-01");
const today = new Date();

const days =
  Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

// 表示上限（スマホ保護）
const MAX_RENDER = 150;

const NORMAL_IMAGES = [
  "image/rira_fuyufuku.png",
  "image/rira_meido.pngg",
  "image/rira_natufuku.png",
  "image/rira_pajama.png",
  "image/rira_yukata.png"
];

const RARE_IMAGES = [
  "image/rira_dress.png"
];

// レア出現率（5%）
const RARE_RATE = 0.05;

// ===== 表示 =====
document.getElementById("title").textContent = "毎日1体ずつ増えるセイレーン";
document.getElementById("counter").textContent =
  `現在 ${days} 体のセイレーンが存在しています`;

const field = document.getElementById("field");

// 実際に描画する数
const renderCount = Math.min(days, MAX_RENDER);

// スマホ判定
const isMobile = window.innerWidth < 768;

for (let i = 0; i < renderCount; i++) {
  const img = document.createElement("img");

  const isRare = Math.random() < RARE_RATE;
  img.src = isRare
    ? randomFrom(RARE_IMAGES)
    : randomFrom(NORMAL_IMAGES);

  img.className = "vtuber";
  if (isRare) img.classList.add("rare");

  // 横は控えめ、縦に広げる
  img.style.left = Math.random() * 80 + "%";
  img.style.top = (i * (isMobile ? 120 : 100)) + "px";

  const baseSize = isMobile ? 100 : 80;
  img.style.width = baseSize + Math.random() * 40 + "px";

  const rotate = Math.random() * 20 - 10;
  img.style.transform = `rotate(${rotate}deg)`;

  field.appendChild(img);
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
