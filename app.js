const colorContainer = document.getElementById("color-container");
const colorSchemeBtn = document.getElementById("color-scheme-btn");

colorSchemeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const inputColorValue = document
    .getElementById("input-color")
    .value.slice(1, 7);

  const optionValue = document.getElementById("color-select").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${inputColorValue}&mode=${optionValue}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      const colorsArray = data.colors;
      const colorBox = colorsArray
        .map((color) => {
          return `<div class="color">
          <div class="color-box" id="color-box" style="background-color:${color.hex.value}"></div>
          <div class="color-hex">${color.hex.value}</div>
        </div>`;
        })
        .join("");

      colorContainer.innerHTML = colorBox;
    });
});
