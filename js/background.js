// 04. Background
const images = [
  "IMG-220211-01.png",
  "IMG-220211-02.png",
  "IMG-220211-03.png",
  "IMG-220211-04.png",
  "IMG-220211-05.png",
  "IMG-220211-07.png",
  "IMG-220211-08.png",
  "IMG-220211-09.png",
  "IMG-220211-10.png",
  "IMG-220211-11.png",
  "IMG-220211-12.png",
  "IMG-220211-13.png",
  "IMG-220211-15.png",
  "IMG-220211-16.png",
  "IMG-220212-05.png",
  "IMG-220212-08.png",
  "IMG-220212-13.png",
  "IMG-220212-14.png",
  "IMG-220304-02.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);

