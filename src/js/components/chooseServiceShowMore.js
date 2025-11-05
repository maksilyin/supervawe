const moreBtns = document.querySelectorAll(".choose-services__more");
const hiddingTexts = document.querySelectorAll(".choose-services__hide");

const toggleHideText = (buttons, texts) => {
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (getComputedStyle(texts[index]).overflow === "hidden") {
        texts[index].style.overflow = "visible";
        texts[index].style.height = "auto";
        texts[index].style.position = "static";
        btn.classList.add("button-show-more--active");
      } else {
        texts[index].style.overflow = "hidden";
        texts[index].style.height = "0";
        texts[index].style.position = "absolute";
        btn.classList.remove("button-show-more--active");
      }
    });
  });
};

toggleHideText(moreBtns, hiddingTexts);
