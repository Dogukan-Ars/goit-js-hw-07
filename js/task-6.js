function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onCreateBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBoxes() {
  const amount = Number(refs.input.value.trim());

  if (amount < 1 || amount > 100) return;

  destroyBoxes();

  createBoxes(amount);
  refs.input.value = "";
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.display = "inline-block";
    fragment.append(box);
    size += 10;
  }

  refs.boxes.append(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}
