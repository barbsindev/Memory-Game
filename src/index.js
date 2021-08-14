const card = document.querySelectorAll(".card");
const images = {
  dataset: [],
  index: [],
  elements: [],
};

const score = document.querySelector("h2");

card.forEach((item, index, card) => {
  item.addEventListener("click", (event) => {
    item.classList.add("flip");
    // console.log(item.children[1].dataset.cardid, item.children);

    if (images.index.length > 1 || item.classList.contains("matched")) {
      images.dataset.length = 0;
      images.index.length = 0;
      images.elements.length = 0;
    }

    images.dataset.push(item.children[1].dataset.cardid);
    images.index.push(index);

    console.log(item.classList);
    images.elements.push(item);

    // images.index.length > 1 && images.dataset[0] === images.dataset[1]
    //   ? (score.innerHTML = "It is a match!")
    //   : images.index.length > 1 && images.dataset[0] !== images.dataset[1]
    //   ? (score.innerHTML = "Its is not a match! Try again!")
    //   : (score.innerHTML = "Let's play!");

    if (images.index.length > 1 && images.dataset[0] === images.dataset[1]) {
      console.log("match");
      setTimeout(() => {
        score.innerHTML = "It is a match!";
      }, 800);

      console.log(images, "match");
      images.elements.forEach((els) => {
        els.classList.add("matched");
      });
    } else if (
      images.index.length > 1 &&
      images.dataset[0] !== images.dataset[1]
    ) {
      console.log("no match found");
      setTimeout(() => {
        score.innerHTML = "It's not a match. Try again!";
      }, 800);

      console.log(images, "nomatch");

      const handle = setTimeout(() => {
        console.log(images.dataset[0], "settimeout");
        console.log(images, "time");
        images.elements.forEach((els) => {
          console.log(els.classList[1], "els");
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
