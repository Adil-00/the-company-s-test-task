const arrSimilarProducts = [
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/white_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/brown_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/blue_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/white_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/brown_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/blue_blouse.png",
  },
];

const screenWidth = window.screen.width;

let similarProductsnumberOfCards = 6;
let similarProductscurrentPage = 1;

if (screenWidth > 1024 && similarProductsnumberOfCards !== 6)
  similarProductsnumberOfCards = 6;
if (screenWidth === 1024 && similarProductsnumberOfCards !== 4)
  similarProductsnumberOfCards = 4;
if (screenWidth === 768 && similarProductsnumberOfCards !== 3)
  similarProductsnumberOfCards = 3;
if (screenWidth === 576 && similarProductsnumberOfCards !== 2)
  similarProductsnumberOfCards = 2;
if (screenWidth <= 414 && similarProductsnumberOfCards !== 1)
  similarProductsnumberOfCards = 1;

const addCardSimilarProducts = () => {
  let firstCountryIndex =
    (similarProductscurrentPage - 1) * similarProductsnumberOfCards;
  let lastCountryIndex = firstCountryIndex + similarProductsnumberOfCards;

  const currentCountry = arrSimilarProducts.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const similarProducts__rowCards = document.querySelector(
    ".similarProducts__rowCards"
  );

  similarProducts__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    similarProducts__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="similarProducts__card">
          <div class="card__img">
            <img src="${item.img}" alt="" />
            <img
              class="card__iconFavorite"
              src="${item.icon}"
              alt=""
            />
          </div>
        
          <div class="card__productName">Толстовка</div>
        
          <div class="card__productManufacturer">bluzki_style</div>
        
          <div class="card_productPrice">
            <div class="productPrice__discountedPrice">833 р</div>
            <div class="productPrice__oldPrice">1042 р</div>
            <div class="productPrice__discount">- 20%</div>
          </div>
        </div>`
    );
  });
};

addCardSimilarProducts();

const similarProductsPageNumbers = [];

for (
  let i = 1;
  i <= Math.ceil(arrSimilarProducts.length / similarProductsnumberOfCards);
  i++
) {
  similarProductsPageNumbers.push(i);
}

const similarProducts__btnNext = document.querySelector(
  ".similarProducts__btnNext"
);

const similarProducts__btnPrevious = document.querySelector(
  ".similarProducts__btnPrevious"
);

similarProducts__btnNext.addEventListener("click", () => {
  if (similarProductscurrentPage === similarProductsPageNumbers.length) return;
  similarProductscurrentPage += 1;

  addCardSimilarProducts();
});

similarProducts__btnPrevious.addEventListener("click", () => {
  if (similarProductscurrentPage === 1) return;
  similarProductscurrentPage -= 1;

  addCardSimilarProducts();
});

similarProductsPageNumbers.forEach((num) => {
  const pages = document.querySelector(".similarProductsPages");

  pages.insertAdjacentHTML(
    "beforeend",
    `<div class='page similarProductsPage' data-key='${num}'></div>`
  );
});

const pageAll = document.querySelectorAll(".similarProductsPage");

pageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  if (+key === 1) page.classList.add("pageActive");
  page.addEventListener("click", () => {
    similarProductscurrentPage = key;

    const pageActive = document.querySelectorAll(
      ".similarProductsPages .pageActive"
    );

    pageActive.forEach((item) => {
      item.classList.remove("pageActive");
    });

    page.classList.add("pageActive");

    console.log(similarProductsPageNumbers);

    addCardSimilarProducts();
  });
});

//------------------------------------------------------------------------------------------------

const arrHaveYouWatched = [
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/white_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/brown_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/blue_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/white_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/brown_blouse.png",
  },
  {
    icon: "./img/icon_favorite-grey.png",
    img: "./img/blue_blouse.png",
  },
];

let haveYouWatchedNumberOfCards = 6;
let haveYouWatchedCurrentPage = 1;

if (screenWidth > 1024 && haveYouWatchedNumberOfCards !== 6)
  haveYouWatchedNumberOfCards = 6;
if (screenWidth === 1024 && haveYouWatchedNumberOfCards !== 4)
  haveYouWatchedNumberOfCards = 4;
if (screenWidth === 768 && haveYouWatchedNumberOfCards !== 3)
  haveYouWatchedNumberOfCards = 3;
if (screenWidth === 576 && haveYouWatchedNumberOfCards !== 2)
  haveYouWatchedNumberOfCards = 2;
if (screenWidth <= 414 && haveYouWatchedNumberOfCards !== 1)
  haveYouWatchedNumberOfCards = 1;

const addCardHaveYouWatched = () => {
  let firstCountryIndex =
    (haveYouWatchedCurrentPage - 1) * haveYouWatchedNumberOfCards;
  let lastCountryIndex = firstCountryIndex + haveYouWatchedNumberOfCards;

  const currentCountry = arrHaveYouWatched.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const haveYouWatched__rowCards = document.querySelector(
    ".haveYouWatched__rowCards"
  );

  haveYouWatched__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    haveYouWatched__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="haveYouWatched__card">
          <div class="card__img">
            <img src="${item.img}" alt="" />
            <img
              class="card__iconFavorite"
              src="${item.icon}"
              alt=""
            />
          </div>
        
          <div class="card__productName">Толстовка</div>
        
          <div class="card__productManufacturer">bluzki_style</div>
        
          <div class="card_productPrice">
            <div class="productPrice__discountedPrice">833 р</div>
            <div class="productPrice__oldPrice">1042 р</div>
            <div class="productPrice__discount">- 20%</div>
          </div>
        </div>`
    );
  });
};

addCardHaveYouWatched();

const haveYouWatchedPageNumbers = [];

for (
  let i = 1;
  i <= Math.ceil(arrHaveYouWatched.length / haveYouWatchedNumberOfCards);
  i++
) {
  haveYouWatchedPageNumbers.push(i);
}

const haveYouWatched__btnNext = document.querySelector(
  ".haveYouWatched__btnNext"
);

const haveYouWatched__btnPrevious = document.querySelector(
  ".haveYouWatched__btnPrevious"
);

haveYouWatched__btnNext.addEventListener("click", () => {
  if (haveYouWatchedCurrentPage === haveYouWatchedPageNumbers.length) return;
  haveYouWatchedCurrentPage += 1;

  addCardHaveYouWatched();
});

haveYouWatched__btnPrevious.addEventListener("click", () => {
  if (haveYouWatchedCurrentPage === 1) return;
  haveYouWatchedCurrentPage -= 1;

  addCardHaveYouWatched();
});

haveYouWatchedPageNumbers.forEach((num) => {
  const pages = document.querySelector(".haveYouWatchedPages");

  pages.insertAdjacentHTML(
    "beforeend",
    `<div class='page haveYouWatchedPage' data-key='${num}'></div>`
  );
});

const haveYouWatchedPageAll = document.querySelectorAll(".haveYouWatchedPage");

haveYouWatchedPageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  if (+key === 1) page.classList.add("pageActive");
  page.addEventListener("click", () => {
    haveYouWatchedCurrentPage = key;

    const pageActive = document.querySelectorAll(
      ".haveYouWatchedPages .pageActive"
    );

    pageActive.forEach((item) => {
      item.classList.remove("pageActive");
    });

    page.classList.add("pageActive");

    addCardHaveYouWatched();
  });
  console.log(page);
});

const burgerMenu = document.querySelectorAll(".burgerMenu");
const burgerMenuClose = document.querySelector(".burgerMenuClose");
const headerModalWindow = document.querySelector(".headerModalWindow");
const mobileBtn__btnClose = document.querySelector(".mobileBtn__btnClose");
const mobileBtn__btnBack = document.querySelector(".mobileBtn__btnBack");

burgerMenu[1].addEventListener("click", () => {
  burgerMenu[1].classList.add("d-none");
  burgerMenuClose.classList.remove("d-none");
  headerModalWindow.classList.remove("d-none");
});

burgerMenu[0].addEventListener("click", () => {
  burgerMenuClose.classList.remove("d-none");
  headerModalWindow.classList.remove("d-none");
});

burgerMenuClose.addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";
  burgerMenu[1].classList.remove("d-none");
  burgerMenuClose.classList.add("d-none");
  headerModalWindow.classList.add("d-none");
});

mobileBtn__btnBack.addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";

  document
    .querySelector(".headerModalWindow__col_one")
    .classList.remove("d-none");

  document
    .querySelector(".headerModalWindow__col_two")
    .classList.remove("d-none");
});

mobileBtn__btnClose.addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";
  headerModalWindow.classList.add("d-none");
});

document.querySelector(".forWoman").addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";

  if (screenWidth <= 576)
    document
      .querySelector(".headerModalWindow__col_one")
      .classList.add("d-none");
  document.querySelector(".headerModalWindow__col_two").insertAdjacentHTML(
    "beforeend",
    ` <li><a href="#">Платья и сарафаны</a></li>
    <li><a href="#">Блузки и рубашки</a></li>
    <li><a href="#">Туники</a></li>
    <li><a href="#">Брюки и шорты</a></li>
    <li><a href="#">Юбки</a></li>
    <li><a href="#">Костюмы</a></li>
    <li><a href="#">Верхняя одежда</a></li>
    <li><a href="#">Кордиганы, джемпера, кофты и свитера</a></li>
    <li><a href="#">Водолазки</a></li>
    <li><a href="#">Фтуболки и топы</a></li>
    <li><a href="#">Жилеты</a></li>
    <li><a href="#">Пиджаки и жакеты</a></li>
    <li><a href="#">Толстовки</a></li>
    <li><a href="#">Халаты</a></li>
    <li><a href="#">Одежда ждля беременных</a></li>
    <li><a href="#">Бельё</a></li>
    <li><a href="#">Комбинезоны</a></li>
    <li><a href="#">Женские карнавальные костюмы</a></li>`
  );
});

document.querySelector(".forChildren").addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";

  if (screenWidth <= 576)
    document
      .querySelector(".headerModalWindow__col_one")
      .classList.add("d-none");

  document.querySelector(".headerModalWindow__col_two").insertAdjacentHTML(
    "beforeend",
    `<li><a class="forGirls" href="#">Для девочек</a></li>
    <li><a class="forBoys" href="#">Для мальчиков</a></li>
    <li><a class="schoolUniform" href="#">Школьная форма</a></li>`
  );

  document.querySelector(".forGirls").addEventListener("click", () => {
    document.querySelector(".headerModalWindow__col_three").innerHTML = " ";

    if (screenWidth <= 576)
      document
        .querySelector(".headerModalWindow__col_two")
        .classList.add("d-none");

    document.querySelector(".headerModalWindow__col_three").insertAdjacentHTML(
      "beforeend",
      `<li><a href="#">Платья и сарафаны</a></li>
      <li><a href="#">Туники</a></li>
      <li><a href="#">Блузки и рубашки</a></li>
      <li><a href="#">Фартуки</a></li>
      <li><a href="#">Банты</a></li>
      <li><a href="#">Юбки</a></li>
      <li><a href="#">Водолазки</a></li>
      <li><a href="#">Брюки и шорты</a></li>
      <li><a href="#">Верхняя одежда</a></li>
      <li><a href="#">Пиджаки и жакеты</a></li>
      <li><a href="#">Костюмы</a></li>
      <li><a href="#">Карнавальные костюмы</a></li>
      <li><a href="#">Толстовки</a></li>
      <li><a href="#">Свитшоты</a></li>
      <li><a href="#">Худи</a></li>
      <li><a href="#">Жилеты</a></li>
      <li><a href="#">Бельё Джемперы и кардиганы</a></li>
      <li><a href="#">Футболки и топы</a></li>
      <li><a href="#">Комбинезоны</a></li>
      <li><a href="#">Лонгсливы</a></li>
      <li><a href="#">Халаты</a></li>
      <li><a href="#">Головные уборы</a></li>`
    );
  });

  document.querySelector(".forBoys").addEventListener("click", () => {
    document.querySelector(".headerModalWindow__col_three").innerHTML = " ";

    if (screenWidth <= 576)
      document
        .querySelector(".headerModalWindow__col_two")
        .classList.add("d-none");

    document.querySelector(".headerModalWindow__col_three").insertAdjacentHTML(
      "beforeend",
      `<li><a href="#">Рубашки</a></li>
      <li><a href="#">Бельё</a></li>
      <li><a href="#">Брюки и шорты</a></li>
      <li><a href="#">Шалстуки и бабочки</a></li>
      <li><a href="#">Карнавальные костюмы</a></li>
      <li><a href="#">Костюмы</a></li>
      <li><a href="#">Толстовки</a></li>
      <li><a href="#">Свитшоты</a></li>
      <li><a href="#">Худи</a></li>
      <li><a href="#">Джемперы и кардиганы</a></li>
      <li><a href="#">Верхняя одежда</a></li>
      <li><a href="#">Жилеты</a></li>
      <li><a href="#">Водолазки</a></li>
      <li><a href="#">Комбинезоны</a></li>
      <li><a href="#">Головные уборы</a></li>
      <li><a href="#">Лонгсливы</a></li>
      <li><a href="#">Верхняя одежда</a></li>
      <li><a href="#">Пиджаки и жилеты</a></li>
      <li><a href="#">Футболки</a></li>`
    );
  });

  document.querySelector(".schoolUniform").addEventListener("click", () => {
    document.querySelector(".headerModalWindow__col_three").innerHTML = " ";

    if (screenWidth <= 576)
      document
        .querySelector(".headerModalWindow__col_two")
        .classList.add("d-none");

    document.querySelector(".headerModalWindow__col_three").insertAdjacentHTML(
      "beforeend",
      `<li><a href="#">Блузы</a></li>
      <li><a href="#">Платья</a></li>
      <li><a href="#">Фартуки</a></li>
      <li><a href="#">Юбки</a></li>
      <li><a href="#">Костюмы для девочек</a></li>
      <li><a href="#">Брюки для девочек</a></li>
      <li><a href="#">Брюки для мальчиков</a></li>
      <li><a href="#">Рубашки для мальчиков</a></li>
      <li><a href="#">Костюмы для мальчиков</a></li>
      <li><a href="#">Банты</a></li>
      <li><a href="#">Галстуки и бабочки</a></li>`
    );
  });
});

document.querySelector(".forMan").addEventListener("click", () => {
  document.querySelector(".headerModalWindow__col_three").innerHTML = " ";
  document.querySelector(".headerModalWindow__col_two").innerHTML = " ";

  if (screenWidth <= 576)
    document
      .querySelector(".headerModalWindow__col_one")
      .classList.add("d-none");

  document.querySelector(".headerModalWindow__col_two").insertAdjacentHTML(
    "beforeend",
    `<li><a href="#">Платья и сарафаны</a></li>
    <li><a href="#">Блузки и рубашки</a></li>
    <li><a href="#">Туники</a></li>`
  );
});

const headerModalWindow__currencies = document.querySelectorAll(
  ".headerModalWindow__currencies div a"
);

headerModalWindow__currencies.forEach((item) => {
  item.addEventListener("click", () => {
    headerModalWindow__currencies.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
  });
});

console.log(location);

// --------------------------------------------------------------------------------------------
