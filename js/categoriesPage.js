const burgerMenu = document.querySelectorAll(".burgerMenu");
const burgerMenuClose = document.querySelector(".burgerMenuClose");
const headerModalWindow = document.querySelector(".headerModalWindow");
const mobileBtn__btnClose = document.querySelector(".mobileBtn__btnClose");
const mobileBtn__btnBack = document.querySelector(".mobileBtn__btnBack");
const screenWidth = window.screen.width;

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

const rangeSlider = document.getElementById("range-slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 99999],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 99999,
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");

  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on("update", (value, handle) => {
    inputs[handle].value = Math.round(value[handle]);
  });
}

for (let i = 1; i < 100; i++) {
  const sizes = document.querySelector(".sizes__sizes");
  sizes.insertAdjacentHTML(
    "beforeend",
    ` <div class="sizes__size">
<input type="checkBox" id="checkBox${i}"/>
<label for="checkBox${i}">
  <span>${i}</span>
</label>
</div>`
  );
}

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

let ClothesnumberOfCards = 16;
let ClothescurrentPage = 1;

const condition4x3 = document.querySelector(".condition-4x3");
const condition2x2 = document.querySelector(".condition-2x2");
const condition4x3Active = document.querySelector(".condition-4x3-active");
const condition2x2Active = document.querySelector(".condition-2x2-active");

const addCardClothes = () => {
  let firstCountryIndex = (ClothescurrentPage - 1) * ClothesnumberOfCards;
  let lastCountryIndex = firstCountryIndex + ClothesnumberOfCards;

  const currentCountry = arrClothes.slice(firstCountryIndex, lastCountryIndex);

  const Clothes__rowCards = document.querySelector(".clothes__row");

  Clothes__rowCards.innerHTML = " ";

  currentCountry.forEach((item) => {
    Clothes__rowCards.insertAdjacentHTML(
      "beforeEnd",
      `<div class="clothes__card  ${
        screenWidth > 576
          ? condition4x3.classList.contains("d-none")
            ? "w-23"
            : "w-45"
          : condition4x3.classList.contains("d-none")
          ? "w-45"
          : "w-100"
      }">
            <div class="card__img">
              <img class="img__product" src="${item.img}" alt="" />
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

condition4x3.addEventListener("click", () => {
  condition4x3.classList.add("d-none");
  condition2x2Active.classList.add("d-none");
  condition4x3Active.classList.remove("d-none");
  condition2x2.classList.remove("d-none");
  const clothes__card = document.querySelectorAll(".clothes__card");

  clothes__card.forEach((item) => {
    if (screenWidth <= 576) {
      item.classList.add("w-45");
      item.classList.remove("w-100");
      return;
    }

    item.classList.remove("w-45");
    item.classList.add("w-23");
  });
});

condition2x2.addEventListener("click", () => {
  condition4x3.classList.remove("d-none");
  condition2x2Active.classList.remove("d-none");
  condition4x3Active.classList.add("d-none");
  condition2x2.classList.add("d-none");
  const clothes__card = document.querySelectorAll(".clothes__card");

  clothes__card.forEach((item) => {
    if (screenWidth <= 576) {
      item.classList.remove("w-45");
      item.classList.add("w-100");
      return;
    }

    item.classList.add("w-45");
    item.classList.remove("w-23");
  });
});

const clothesPageNumbers = [];

for (let i = 1; i <= Math.ceil(arrClothes.length / ClothesnumberOfCards); i++) {
  clothesPageNumbers.push(i);
}

clothesPageNumbers.forEach((num) => {
  const pages = document.querySelector(".pages__page");

  pages.insertAdjacentHTML(
    "beforeend",
    `<div class='page' data-key='${num}'>${num}</div>`
  );
});

const pageAll = document.querySelectorAll(".pages__page .page");

const addClassActive = () => {
  pageAll.forEach((item) => {
    item.classList.remove("active");

    if (item.textContent === ClothescurrentPage.toString())
      item.classList.add("active");
  });

  console.log(ClothescurrentPage);
};

addClassActive();

pageAll.forEach((page) => {
  const key = page.getAttribute("data-key");

  page.addEventListener("click", () => {
    ClothescurrentPage = key;

    addCardClothes();
    addClassActive();
  });
});

const Clothes__btnNext = document.querySelector(".pages__btnNext");

const Clothes__btnPrevious = document.querySelector(".pages__btnPrevious");

Clothes__btnNext.addEventListener("click", () => {
  if (
    ClothescurrentPage === Math.ceil(arrClothes.length / ClothesnumberOfCards)
  )
    return;
  ClothescurrentPage += 1;

  addCardClothes();
  addClassActive();
});

Clothes__btnPrevious.addEventListener("click", () => {
  if (ClothescurrentPage === 1) return;
  ClothescurrentPage -= 1;

  addCardClothes();
  addClassActive();
});

const filter = document.querySelector(".header__btnFilter");
const filterClose = document.querySelector(".filter__btnClose img");

filter.addEventListener("click", () => {
  document.querySelector(".tunics__sideBar").classList.add("d-block");
});

filterClose.addEventListener("click", () => {
  document.querySelector(".tunics__sideBar").classList.remove("d-block");
});

const sideBar__btnHide = document.querySelector(".sideBar__btnHide");
const colors__btnHide = document.querySelector(".colors__btnHide");
const price__btnHide = document.querySelector(".price__btnHide");
const sizes__btnHide = document.querySelector(".sizes__btnHide");
const season__btnHide = document.querySelector(".season__btnHide");
const cloth__btnHide = document.querySelector(".cloth__btnHide");
const colors__colors = document.querySelector(".colors__colors");
const price__slider = document.querySelector(".price__slider");
const sizes__sizes = document.querySelector(".sizes__sizes");
const season__seasons = document.querySelector(".season__seasons");
const cloth__fabrics = document.querySelector(".cloth__fabrics");

colors__btnHide.addEventListener("click", () => {
  if (colors__colors.classList.contains("d-none")) {
    colors__colors.classList.remove("d-none");
    colors__btnHide.classList.remove("t-rotate-270");
    return;
  }

  colors__colors.classList.add("d-none");
  colors__btnHide.classList.add("t-rotate-270");
});

price__btnHide.addEventListener("click", () => {
  if (price__slider.classList.contains("d-none")) {
    price__slider.classList.remove("d-none");
    price__btnHide.classList.remove("t-rotate-270");
    return;
  }

  price__slider.classList.add("d-none");
  price__btnHide.classList.add("t-rotate-270");
});

sizes__btnHide.addEventListener("click", () => {
  if (sizes__sizes.classList.contains("d-none")) {
    sizes__sizes.classList.remove("d-none");
    sizes__btnHide.classList.remove("t-rotate-270");
    return;
  }

  sizes__sizes.classList.add("d-none");
  sizes__btnHide.classList.add("t-rotate-270");
});

season__btnHide.addEventListener("click", () => {
  if (season__seasons.classList.contains("d-none")) {
    season__seasons.classList.remove("d-none");
    season__btnHide.classList.remove("t-rotate-270");
    return;
  }

  season__seasons.classList.add("d-none");
  season__btnHide.classList.add("t-rotate-270");
});

cloth__btnHide.addEventListener("click", () => {
  if (cloth__fabrics.classList.contains("d-none")) {
    cloth__fabrics.classList.remove("d-none");
    cloth__btnHide.classList.remove("t-rotate-270");
    return;
  }

  cloth__fabrics.classList.add("d-none");
  cloth__btnHide.classList.add("t-rotate-270");
});

sideBar__btnHide.addEventListener("click", () => {
  colors__colors.classList.add("d-none");
  colors__btnHide.classList.add("t-rotate-270");
  price__slider.classList.add("d-none");
  price__btnHide.classList.add("t-rotate-270");
  sizes__sizes.classList.add("d-none");
  sizes__btnHide.classList.add("t-rotate-270");
  season__seasons.classList.add("d-none");
  season__btnHide.classList.add("t-rotate-270");
  cloth__fabrics.classList.add("d-none");
  cloth__btnHide.classList.add("t-rotate-270");
});
