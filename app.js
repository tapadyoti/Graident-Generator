const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const container = document.querySelector(".container");
const text = document.querySelector(".text");

const generateGradient = () => {
  let TotalHexaValue = "0123456789abcdef";
  let gradient = "#";
  for (let i = 0; i < 6; i++) {
    gradient = gradient + TotalHexaValue[Math.floor(Math.random() * 16)];
  }
  return gradient;
};

let rgb1 = "#ca29c9";
let rgb2 = "#171e4d";

const handleBtn1 = () => {
  rgb1 = generateGradient();
  btn1.innerText = rgb1.toUpperCase();
  container.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  text.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleBtn2 = () => {
  rgb2 = generateGradient();
  btn2.innerText = rgb2.toUpperCase();
  container.style.backgroundImage = `linear-gradient(to right, ${rgb1},  ${rgb2})`;
  text.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);

text.addEventListener("click", () =>{
navigator.clipboard.writeText(text.innerText)
alert("Code has been successfully copied")
})
