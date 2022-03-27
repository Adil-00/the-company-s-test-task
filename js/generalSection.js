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

const arrClothes = [
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

let ClothesFlagBtn = true;
let ClothesnumberOfCards = 6;
let ClothescurrentPage = 1;

if (screenWidth > 1024 && ClothesnumberOfCards !== 4 && ClothesFlagBtn)
  ClothesnumberOfCards = 4;

if (
  screenWidth <= 1024 &&
  screenWidth > 576 &&
  ClothesnumberOfCards !== 3 &&
  ClothesFlagBtn
)
  ClothesnumberOfCards = 3;

if (screenWidth <= 576 && ClothesnumberOfCards !== 6 && flagBtn)
  ClothesnumberOfCards = 6;

const addCardClothes = () => {
  let firstCountryIndex = (ClothescurrentPage - 1) * ClothesnumberOfCards;
  let lastCountryIndex = firstCountryIndex + ClothesnumberOfCards;

  const currentCountry = arrClothes.slice(firstCountryIndex, lastCountryIndex);

  const Clothes__rowCards = document.querySelector(".Clothes__rowCards");

  Clothes__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    Clothes__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="Clothes__card">
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
addCardClothes();

const Clothes__btnNext = document.querySelector(".Clothes__btnNext");

const Clothes__btnPrevious = document.querySelector(".Clothes__btnPrevious");

Clothes__btnNext.addEventListener("click", () => {
  if (ClothescurrentPage === arrClothes.length / ClothesnumberOfCards) return;
  ClothescurrentPage += 1;

  addCardClothes();
});

Clothes__btnPrevious.addEventListener("click", () => {
  if (ClothescurrentPage === 1) return;
  ClothescurrentPage -= 1;

  addCardClothes();
});

const allProducts = document.querySelector(".Clothes__content .allProducts");

const hideallProducts = document.querySelector(
  ".Clothes__content .hideallProducts"
);

allProducts.addEventListener("click", () => {
  ClothesnumberOfCards = arrClothes.length;
  allProducts.classList.add("d-none");
  hideallProducts.classList.remove("d-none");
  addCardClothes();
});

hideallProducts.addEventListener("click", () => {
  ClothesnumberOfCards = 6;
  allProducts.classList.remove("d-none");
  hideallProducts.classList.add("d-none");
  addCardClothes();
});

//------------------------------------------------------------------------------------------

const arrshoes = [
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

let shoesFlagBtn = true;
let shoesnumberOfCards = 6;
let shoescurrentPage = 1;

if (screenWidth > 1024 && shoesnumberOfCards !== 4 && shoesFlagBtn)
  shoesnumberOfCards = 4;

if (
  screenWidth <= 1024 &&
  screenWidth > 576 &&
  shoesnumberOfCards !== 3 &&
  shoesFlagBtn
)
  shoesnumberOfCards = 3;

if (screenWidth <= 576 && shoesnumberOfCards !== 6 && shoesFlagBtn)
  shoesnumberOfCards = 6;

const addCardShoes = () => {
  let firstCountryIndex = (shoescurrentPage - 1) * shoesnumberOfCards;
  let lastCountryIndex = firstCountryIndex + shoesnumberOfCards;

  const currentCountry = arrshoes.slice(firstCountryIndex, lastCountryIndex);

  console.log(currentCountry);

  const shoes__rowCards = document.querySelector(".shoes__rowCards");

  shoes__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    shoes__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="shoes__card">
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

addCardShoes();

const shoes__btnNext = document.querySelector(".shoes__btnNext");

const shoes__btnPrevious = document.querySelector(".shoes__btnPrevious");

shoes__btnNext.addEventListener("click", () => {
  if (shoescurrentPage === arrshoes.length / shoesnumberOfCards) return;
  shoescurrentPage += 1;

  addCardShoes();
});

shoes__btnPrevious.addEventListener("click", () => {
  if (shoescurrentPage === 1) return;
  shoescurrentPage -= 1;

  addCardShoes();
});

const shoesAllProducts = document.querySelector(".shoes__content .allProducts");

const shoesHideallProducts = document.querySelector(
  ".shoes__content .hideallProducts"
);

console.log(shoesHideallProducts);

shoesAllProducts.addEventListener("click", () => {
  shoesnumberOfCards = arrshoes.length;
  shoesAllProducts.classList.add("d-none");
  shoesHideallProducts.classList.remove("d-none");
  addCardShoes();
});

shoesHideallProducts.addEventListener("click", () => {
  shoesnumberOfCards = 6;
  shoesAllProducts.classList.remove("d-none");
  shoesHideallProducts.classList.add("d-none");
  addCardShoes();
});

// --------------------------------------------------------------------------------------------------------

const arrlargeSizes = [
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

let largeSizesFlagBtn = true;
let largeSizesnumberOfCards = 6;
let largeSizescurrentPage = 1;

if (screenWidth > 1024 && largeSizesnumberOfCards !== 4 && largeSizesFlagBtn)
  largeSizesnumberOfCards = 4;

if (
  screenWidth <= 1024 &&
  screenWidth > 576 &&
  largeSizesnumberOfCards !== 3 &&
  largeSizesFlagBtn
)
  largeSizesnumberOfCards = 3;

if (screenWidth <= 576 && largeSizesnumberOfCards !== 6 && largeSizesFlagBtn)
  largeSizesnumberOfCards = 6;

const addCardlargeSizes = () => {
  let firstCountryIndex = (largeSizescurrentPage - 1) * largeSizesnumberOfCards;
  let lastCountryIndex = firstCountryIndex + largeSizesnumberOfCards;

  const currentCountry = arrlargeSizes.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  console.log(currentCountry);

  const largeSizes__rowCards = document.querySelector(".largeSizes__rowCards");

  largeSizes__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    largeSizes__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="largeSizes__card">
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
addCardlargeSizes();

const largeSizes__btnNext = document.querySelector(".largeSizes__btnNext");

const largeSizes__btnPrevious = document.querySelector(
  ".largeSizes__btnPrevious"
);

largeSizes__btnNext.addEventListener("click", () => {
  if (largeSizescurrentPage === arrlargeSizes.length / largeSizesnumberOfCards)
    return;
  largeSizescurrentPage += 1;

  addCardlargeSizes();
});

largeSizes__btnPrevious.addEventListener("click", () => {
  if (largeSizescurrentPage === 1) return;
  largeSizescurrentPage -= 1;

  addCardlargeSizes();
});

const largeSizesAllProducts = document.querySelector(
  ".largeSizes__content .allProducts"
);

const largeSizesHideallProducts = document.querySelector(
  ".largeSizes__content .hideallProducts"
);

console.log(largeSizesHideallProducts);

largeSizesAllProducts.addEventListener("click", () => {
  largeSizesnumberOfCards = arrlargeSizes.length;
  largeSizesAllProducts.classList.add("d-none");
  largeSizesHideallProducts.classList.remove("d-none");
  addCardlargeSizes();
});

largeSizesHideallProducts.addEventListener("click", () => {
  largeSizesnumberOfCards = 6;
  largeSizesAllProducts.classList.remove("d-none");
  largeSizesHideallProducts.classList.add("d-none");
  addCardlargeSizes();
});

// -----------------------------------------------------------------------------------

const arrdiscounts = [
  {
    img: "./img/img_trousers.png",
    discounts: "до -60%",
    card__text: "Брюки для женщин",
  },
  {
    img: "./img/img_jackets.png",
    discounts: "до -40%",
    card__text: "Пиджаки для женщин",
  },
  {
    img: "./img/img_blouses.png",
    discounts: "до -40%",
    card__text: "Блузки для женщин",
  },
  {
    img: "./img/img_tunics.png",
    discounts: "до -40%",
    card__text: "Женсике туники на осень",
  },
  {
    img: "./img/img_children's-jackets.png",
    discounts: "до -55%",
    card__text: "Десткие куртки на осень",
  },
  {
    img: "./img/img_dresses.png",
    discounts: "до -70%",
    card__text: "Женские платья на осень",
  },
];

let discounts1numberOfCards = 4;
let discounts1currentPage = 1;

if (screenWidth > 1024 && discounts1numberOfCards !== 6)
  discounts1numberOfCards = 6;

if (screenWidth <= 576 && discounts1numberOfCards !== 4)
  discounts1numberOfCards = 4;

const addCarddiscounts1 = () => {
  let firstCountryIndex = (discounts1currentPage - 1) * discounts1numberOfCards;
  let lastCountryIndex = firstCountryIndex + discounts1numberOfCards;

  const currentCountry = arrdiscounts.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const womensClothing__discounts1__rowCard = document.querySelector(
    ".womensClothing__discounts1__rowCard"
  );

  womensClothing__discounts1__rowCard.innerHTML = " ";

  currentCountry.forEach((item) => {
    womensClothing__discounts1__rowCard.insertAdjacentHTML(
      "beforeEnd",
      `<div class="womensClothing__card">
        <div class="card__img">
          <img src="${item.img}" alt="" />
          <div class="card__discounts">${item.discounts}</div>
        </div>
        <p class="card__text">${item.card__text}</p>
        <div class="card__discountsMobile">${item.discounts}</div>
      </div>`
    );
  });
};

addCarddiscounts1();

const discounts1PageNumbers = [];

for (
  let i = 1;
  i <= Math.ceil(arrdiscounts.length / discounts1numberOfCards);
  i++
) {
  discounts1PageNumbers.push(i);
}

discounts1PageNumbers.forEach((num) => {
  const womensClothing__discounts1Pages = document.querySelectorAll(
    ".womensClothing__discounts1Pages"
  );

  womensClothing__discounts1Pages.forEach((womensClothing__discounts1Page) => {
    womensClothing__discounts1Page.insertAdjacentHTML(
      "beforeend",
      `<div class='page discounts1Page' data-key='${num}'></div>`
    );
  });
});

const discounts1PageAll = document.querySelectorAll(".discounts1Page");

discounts1PageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  if (+key === 1) page.classList.add("pageActive");
  page.addEventListener("click", () => {
    discounts1currentPage = key;

    const pageActive = document.querySelectorAll(
      ".womensClothing__discounts1Pages .pageActive"
    );

    pageActive.forEach((item) => {
      item.classList.remove("pageActive");
    });

    page.classList.add("pageActive");

    addCarddiscounts1();
  });
});

// ------------------------------------------------------------------------------------------

let discounts2numberOfCards = 4;
let discounts2currentPage = 1;

if (screenWidth > 1024 && discounts2numberOfCards !== 6)
  discounts2numberOfCards = 6;

if (screenWidth <= 576 && discounts2numberOfCards !== 4)
  discounts2numberOfCards = 4;

const addCarddiscounts2 = () => {
  let firstCountryIndex = (discounts2currentPage - 1) * discounts2numberOfCards;
  let lastCountryIndex = firstCountryIndex + discounts2numberOfCards;

  const currentCountry = arrdiscounts.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const womensClothing__discounts2__rowCard = document.querySelector(
    ".womensClothing__discounts2__rowCard"
  );

  womensClothing__discounts2__rowCard.innerHTML = " ";

  currentCountry.forEach((item) => {
    womensClothing__discounts2__rowCard.insertAdjacentHTML(
      "beforeEnd",
      `<div class="womensClothing__card">
        <div class="card__img">
          <img src="${item.img}" alt="" />
          <div class="card__discounts">${item.discounts}</div>
        </div>
        <p class="card__text">${item.card__text}</p>
        <div class="card__discountsMobile">${item.discounts}</div>
      </div>`
    );
  });
};

addCarddiscounts2();

const discounts2PageNumbers = [];

for (
  let i = 1;
  i <= Math.ceil(arrdiscounts.length / discounts2numberOfCards);
  i++
) {
  discounts2PageNumbers.push(i);
}

discounts2PageNumbers.forEach((num) => {
  const womensClothing__discounts2Pages = document.querySelectorAll(
    ".womensClothing__discounts2Pages"
  );

  womensClothing__discounts2Pages.forEach((womensClothing__discounts2Page) => {
    womensClothing__discounts2Page.insertAdjacentHTML(
      "beforeend",
      `<div class='page discounts2Page' data-key='${num}'></div>`
    );
  });
});

const discounts2PageAll = document.querySelectorAll(".discounts2Page");

discounts2PageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  if (+key === 1) page.classList.add("pageActive");
  page.addEventListener("click", () => {
    discounts2currentPage = key;

    const pageActive = document.querySelectorAll(
      ".womensClothing__discounts2Pages .pageActive"
    );

    pageActive.forEach((item) => {
      item.classList.remove("pageActive");
    });

    page.classList.add("pageActive");

    console.log(discounts2PageNumbers);

    addCarddiscounts2();
  });
});

// -------------------------------------------------------------

let discounts3numberOfCards = 4;
let discounts3currentPage = 1;

if (screenWidth > 1024 && discounts3numberOfCards !== 6)
  discounts3numberOfCards = 6;

if (screenWidth <= 576 && discounts3numberOfCards !== 4)
  discounts3numberOfCards = 4;

const addCarddiscounts3 = () => {
  let firstCountryIndex = (discounts3currentPage - 1) * discounts3numberOfCards;
  let lastCountryIndex = firstCountryIndex + discounts3numberOfCards;

  const currentCountry = arrdiscounts.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const womensClothing__discounts3__rowCard = document.querySelector(
    ".womensClothing__discounts3__rowCard"
  );

  womensClothing__discounts3__rowCard.innerHTML = " ";

  currentCountry.forEach((item) => {
    womensClothing__discounts3__rowCard.insertAdjacentHTML(
      "beforeEnd",
      `<div class="womensClothing__card">
        <div class="card__img">
          <img src="${item.img}" alt="" />
          <div class="card__discounts">${item.discounts}</div>
        </div>
        <p class="card__text">${item.card__text}</p>
        <div class="card__discountsMobile">${item.discounts}</div>
      </div>`
    );
  });
};

addCarddiscounts3();

const discounts3PageNumbers = [];

for (
  let i = 1;
  i <= Math.ceil(arrdiscounts.length / discounts3numberOfCards);
  i++
) {
  discounts3PageNumbers.push(i);
}

discounts3PageNumbers.forEach((num) => {
  const womensClothing__discounts3Pages = document.querySelectorAll(
    ".womensClothing__discounts3Pages"
  );

  womensClothing__discounts3Pages.forEach((womensClothing__discounts3Page) => {
    womensClothing__discounts3Page.insertAdjacentHTML(
      "beforeend",
      `<div class='page discounts3Page' data-key='${num}'></div>`
    );
  });
});

const discounts3PageAll = document.querySelectorAll(".discounts3Page");

discounts3PageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  if (+key === 1) page.classList.add("pageActive");
  page.addEventListener("click", () => {
    discounts3currentPage = key;

    const pageActive = document.querySelectorAll(
      ".womensClothing__discounts3Pages .pageActive"
    );

    pageActive.forEach((item) => {
      item.classList.remove("pageActive");
    });

    page.classList.add("pageActive");

    console.log(discounts3PageNumbers);

    addCarddiscounts3();
  });
});
