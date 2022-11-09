

const pictures = document.querySelectorAll(".gallery__image");
const fullscreen = document.querySelector(".js-fullscreen");
const table__header = document.querySelector(".js-table__header");
const table__Invincible = document.querySelector(".js-table__Invincible");
const table__Vicarious = document.querySelector(".js-table__Vicarious");
const table__UsAndThem = document.querySelector(".js-table__UsAndThem");
const table__TrójkątyIKwadrty = document.querySelector(
  ".js-table__TrójkątyIKwadrty"
);
const table__DanceWithSomebody = document.querySelector(
  ".js-table__DanceWithSomebody"
);

const classAdd = (element, className) => {
  element.classList.add(className);
};

const classAddIndex = (element, index, className) => {
  element.classList.add(className + index);
};

const changeInnerText = (elementName, text) => {
  elementName.innerText = text;
};

const tableTextchange = () => {
  if (table__button.innerText === "POKAŻ GATUNEK MUZYCZNY") {
    changeInnerText(table__button, "POKAŻ DATE WYDANIA");
    changeInnerText(table__header, "Gatunek muzyczny");
    changeInnerText(table__Invincible, "Metal progresywny");
    changeInnerText(table__Vicarious, "Hard rock");
    changeInnerText(table__UsAndThem, "Rock progresywny");
    changeInnerText(table__TrójkątyIKwadrty, "Indie pop");
    changeInnerText(table__DanceWithSomebody, "Alternatywna");
    localStorage.setItem("tableClicked", "genre");
  } else {
    changeInnerText(table__button, "POKAŻ GATUNEK MUZYCZNY");
    changeInnerText(table__header, "Data wydania");
    changeInnerText(table__Invincible, "2019");
    changeInnerText(table__Vicarious, "2006");
    changeInnerText(table__UsAndThem, "1973");
    changeInnerText(table__TrójkątyIKwadrty, "2013");
    changeInnerText(table__DanceWithSomebody, "2009");
    localStorage.setItem("tableClicked", "date");
  }
};

pictures.forEach((picture, index) => {
  picture.addEventListener("click", () => {
    classAdd(fullscreen, "fullscreen");
    classAddIndex(fullscreen, index, "fullscreen");

    fullscreen.addEventListener("click", () => {
      fullscreen.classList.remove("fullscreen");
      fullscreen.classList.remove("fullscreen" + index);
    });
  });
});



const table__button = document.querySelector(".js-table__button");

table__button.addEventListener("click", tableTextchange);



const photography__button = document.querySelector(".js-photography__button");

const photographyTextExpand = () => {
  const photography = document.querySelector(".photography__text");
  const paraghraph = document.createElement("p");
  paraghraph.classList.add("abc");
  paraghraph.classList.add("photography__paragraph");
  const text = document.createTextNode(
    "lorem it amet consectetur adipisicing elit. Animi quidem consectetur voluptatibus cumque accusantium non, facere distinctio libero illo sequi dicta rem quos "
  );
  paraghraph.appendChild(text);

  if (photography__button.innerText == "ROZWIŃ") {
    photography__button.innerText = "ZWIŃ";
    const photography__readMore = document.querySelector(
      ".photography__readMore"
    );
    photography.insertBefore(paraghraph, photography__readMore);
    localStorage.setItem("photoClicked", "yes");
  } else {
    photography__button.innerText = "ROZWIŃ";
    document.querySelector(".abc").remove();
    localStorage.setItem("photoClicked", "no");
  }
};

photography__button.addEventListener("click", photographyTextExpand);

const makingVisibility = () => {
  table__button.classList.remove("vanish");
  photography__button.classList.remove("vanish");
};

makingVisibility();

if (localStorage.getItem("photoClicked") == "yes") {
  photographyTextExpand();
}

if (localStorage.getItem("tableClicked") == "genre") {
  changeInnerText(table__button, "POKAŻ DATE WYDANIA");
  changeInnerText(table__header, "Gatunek muzyczny");
  changeInnerText(table__Invincible, "Metal progresywny");
  changeInnerText(table__Vicarious, "Hard rock");
  changeInnerText(table__UsAndThem, "Rock progresywny");
  changeInnerText(table__TrójkątyIKwadrty, "Indie pop");
  changeInnerText(table__DanceWithSomebody, "Alternatywna");
}
if (localStorage.getItem("tableClicked") == "date") {
  changeInnerText(table__button, "POKAŻ GATUNEK MUZYCZNY");
  changeInnerText(table__header, "Data wydania");
  changeInnerText(table__Invincible, "2019");
  changeInnerText(table__Vicarious, "2006");
  changeInnerText(table__UsAndThem, "1973");
  changeInnerText(table__TrójkątyIKwadrty, "2013");
  changeInnerText(table__DanceWithSomebody, "2009");
}
