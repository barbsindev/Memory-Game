"use strict";

var card = document.querySelectorAll(".card");
var images = {
  dataset: [],
  index: [],
  elements: []
};
var score = document.querySelector("h2");
card.forEach(function (item, index) {
  item.addEventListener("click", function () {
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
      setTimeout(function () {
        score.innerHTML = "It is a match!";
      }, 800);
      images.elements.forEach(function (els) {
        els.classList.add("matched");
      });
    } else if (images.index.length > 1 && images.dataset[0] !== images.dataset[1]) {
      setTimeout(function () {
        score.innerHTML = "It's not a match. Try again!";
      }, 800);
      var handle = setTimeout(function () {
        images.elements.forEach(function (els) {
          els.classList.remove("flip");
        });
        clearTimeout(handle);
      }, 1200);
      setTimeout(function () {
        score.innerHTML = "Let's play!";
      }, 2000);
    } else {
      score.innerHTML = "Let's play!";
    }
  });
});
//# sourceMappingURL=index.dev.js.map
