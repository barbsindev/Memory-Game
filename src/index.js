const card = document.querySelectorAll(".card");
const images = {
  dataset: [],
  index: [],
};

const score = document.querySelector("h2");

card.forEach((item, index, card) => {
  item.addEventListener("click", (event) => {
    item.classList.add("flip");
    console.log(item.children[1].dataset.cardid, item.children);

    if (images.index.length > 1) {
      images.dataset.length = 0;
      images.index.length = 0;
    }

    images.dataset.push(item.children[1].dataset.cardid);
    images.index.push(index);
    console.log(images);

    if (images.index.length > 1 && images.dataset[0] === images.dataset[1]) {
      console.log("match");
      score.innerHTML = "It is a match!";
    } else if (
      images.index.length > 1 &&
      images.dataset[0] !== images.dataset[1]
    ) {
      console.log("no match found");
      score.innerHTML = "It's not a match. Try again!";

      const handle = setTimeout(() => {
        console.log(item);
        item.classList.remove("flip");
        console.log(item);

        clearTimeout(handle);
      }, 1500);
      console.log(handle);
    } else {
      score.innerHTML = " ";
    }
    // }

    // console.log(images);
    //   setTimeout(() => {
    //     console.log(card);
    //     item.classList.remove("flip");
    //   }, 2000);
  });
});
