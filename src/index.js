const card = document.querySelectorAll(".card");
const images = {
  dataset: [],
  index: [],
  elements: [],
};

const score = document.querySelector("h2");

card.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("flip");

    if (images.index.length > 1 || item.classList.contains("matched")) {
      images.dataset.length = 0;
      images.index.length = 0;
      images.elements.length = 0;
    }

    images.dataset.push(item.children[1].dataset.cardid);
    images.index.push(index);
    images.elements.push(item);

    if (images.index.length > 1 && images.dataset[0] === images.dataset[1]) {
      setTimeout(() => {
        score.innerHTML = "It is a match!";
      }, 800);

      images.elements.forEach((els) => {
        els.classList.add("matched");
      });
    } else if (
      images.index.length > 1 &&
      images.dataset[0] !== images.dataset[1]
    ) {
      setTimeout(() => {
        score.innerHTML = "It's not a match. Try again!";
      }, 800);

      const handle = setTimeout(() => {
        images.elements.forEach((els) => {
          els.classList.remove("flip");
        });
        clearTimeout(handle);
      }, 1200);
      setTimeout(() => {
        score.innerHTML = "Let's play!";
      }, 2000);
    } else {
      score.innerHTML = "Let's play!";
    }
  });
});
