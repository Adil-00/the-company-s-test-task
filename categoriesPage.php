<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style/style.css" />
    <link rel="stylesheet" href="./style/nouislider.min.css" />
    <title>Document</title>
  </head>
  <body>
    <?php
require('header.php');
?>

    <div class="currentPath">
      <div class="container">
        <p>
          Главная > Женская одежда >
          <span>Туники</span>
        </p>
      </div>
    </div>

    <div class="tunics">
      <div class="container">
        <div class="tunics__content">
          <div class="tunics__sideBar">
            <div class="sideBar__title">Туники</div>
            <div class="sideBar__btnHide">
              <img src="img/arrow_btnGrey.png" alt="" /> Скрыть фильтры
            </div>
            <div class="sideBar__list">
              <ul>
                <li><a href="#">Платья и сарафаны</a></li>
                <li><a href="#">Блузки и рубашки</a></li>
                <li><a href="#">Туники</a></li>
                <li><a href="#">Брюки и шорты</a></li>
                <li><a href="#">Юбки</a></li>
                <li><a href="#">Костюмы</a></li>
                <li><a href="#"> Верхняя одежда</a></li>
                <li><a href="#">Кордиганы, джемпера, кофты и свитера</a></li>
                <li><a href="#">Водолазки</a></li>
                <li><a href="#">Фтуболки и топы</a></li>
                <li><a href="#">Жилеты</a></li>
                <li><a href="#">Пиджаки и жакеты</a></li>
                <li><a href="#"> Толстовки</a></li>
                <li><a href="#">Халаты</a></li>
                <li><a href="#"> Одежда ждля беременных</a></li>
                <li><a href="#">Бельё</a></li>
                <li><a href="#">Комбинезоны</a></li>
                <li><a href="#">Женские карнавальные костюмы</a></li>
              </ul>
            </div>

            <div class="sideBar__filter">
              <div class="filter__btnClose">
                <img src="./img/icon_btnExit.png" alt="" />
              </div>
              <div class="filter__colors">
                <div class="colors__header d-flex a-center j-spaceBetween">
                  <div class="colors__title title">Цвета</div>
                  <img src="img/arrow_btn.png" alt="" class="colors__btnHide" />
                </div>

                <div class="colors__colors">
                  <div class="colors__color red"></div>
                  <div class="colors__color blue"></div>
                  <div class="colors__color purple"></div>
                  <div class="colors__color black"></div>
                  <div class="colors__color dullGrey"></div>
                  <div class="colors__color dullPink"></div>
                  <div class="colors__color dullOrange"></div>
                  <div class="colors__color orange"></div>
                  <div class="colors__color violet"></div>
                  <div class="colors__color white"></div>
                  <div class="colors__color black"></div>
                  <div class="colors__color dullOrange"></div>
                  <div class="colors__color grey"></div>
                </div>
              </div>

              <div class="filter__price">
                <div class="price__header d-flex a-center j-spaceBetween">
                  <div class="price__title title">Цена</div>
                  <img src="img/arrow_btn.png" alt="" class="price__btnHide" />
                </div>

                <div class="price__slider">
                  <div class="slider__rowInp">
                    <label class="slider__inp">
                      <input
                        id="input-0"
                        min="0"
                        max="99999"
                        type="number"
                        placeholder="0"
                      />
                    </label>

                    <label class="slider__inp">
                      <input
                        id="input-1"
                        min="0"
                        max="99999"
                        type="number"
                        placeholder="99999"
                      />
                    </label>
                  </div>

                  <div class="slider__rowSlider">
                    <div id="range-slider"></div>
                  </div>
                </div>
              </div>

              <div class="filter__sizes">
                <div class="sizes__header d-flex a-center j-spaceBetween">
                  <div class="size__title title">Размеры</div>
                  <img src="img/arrow_btn.png" alt="" class="sizes__btnHide" />
                </div>

                <div class="sizes__sizes">
                  <!-- <div class="sizes__size">
                    <input type="checkBox" id="checkBox"/>
                    <label for="checkBox">
                      <span>1</span>
                    </label>
                  </div> -->
                </div>
              </div>

              <div class="filter__season">
                <div class="season__header d-flex a-center j-spaceBetween">
                  <div class="season__title title">Сезон</div>
                  <img src="img/arrow_btn.png" alt="" class="season__btnHide" />
                </div>

                <div class="season__seasons">
                  <div class="demi-season">
                    <input id="demi" type="checkBox" />
                    <label for="demi">
                      <span>Демисезон</span>
                    </label>
                  </div>

                  <div class="year-round">
                    <input id="year" type="checkBox" />
                    <label for="year">
                      <span>Круглогодичный</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter__cloth">
                <div class="cloth__header d-flex a-center j-spaceBetween">
                  <div class="cloth__title title">Ткань</div>
                  <img src="img/arrow_btn.png" alt="" class="cloth__btnHide" />
                </div>

                <div class="cloth__fabrics">
                  <div class="cloth">
                    <input id="bengalin" type="checkBox" />
                    <label for="bengalin">
                      <span>Бенгалин</span>
                    </label>
                  </div>

                  <div class="cloth">
                    <input id="oil" type="checkBox" />
                    <label for="oil">
                      <span>Масло</span>
                    </label>
                  </div>

                  <div class="cloth">
                    <input id="knitwear" type="checkBox" />
                    <label for="knitwear">
                      <span>Трикотаж</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="filter__resetFiltersBtn">Сбросить фильтры</div>
            </div>
          </div>

          <div class="tunics__block">
            <div class="tunics__header">
              <div class="header__top">
                <div class="header__title">туники</div>

                <div class="header__btnFilter"> Фильтры</div>

                <div class="clothingWholesale">
                  Женская одежда оптом: <span> цена от 500 руб </span>
                </div>

                <div class="totalModels">Всего моделей 18953</div>

                <div class="condition">
                  <img
                    class="condition-4x3-active"
                    src="./img/condition 4x3 active.png"
                    alt=""
                  />
                  <img
                    class="condition-4x3 d-none"
                    src="./img/condition 4x3.png"
                    alt=""
                  />
                  <img
                    class="condition-2x2-active d-none"
                    src="./img/condition 2x2 active.png"
                    alt=""
                  />
                  <img
                    class="condition-2x2"
                    src="./img/condition 2x2.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="header__mid">
                <ul>
                  <li><a class="mid_nav" href="#">Сначало дешевые</a></li>
                  <li><a class="mid_nav" href="#">Сначало дорогие</a></li>
                  <li><a class="mid_nav" href="#">Скидки</a></li>
                  <li><a class="mid_nav active" href="#">Обновление</a></li>
                  <li><a class="mid_nav" href="#">Готовые к отправке</a></li>
                </ul>
              </div>

              <div class="header__bottom">
                <ul>
                  <li>Красный <img src="./img/filter-delete.png" alt="" /></li>
                  <li>
                    Демисезон
                    <img src="./img/filter-delete.png" alt="" />
                  </li>
                  <li>
                    28, 29, 42, 43...
                    <img src="./img/filter-delete.png" alt="" />
                  </li>
                  <li>Трикотаж <img src="./img/filter-delete.png" alt="" /></li>
                </ul>
              </div>
            </div>

            <div class="tunic__clothes">
              <div class="clothes__row">
                <!-- <div class="clothes__card">
                  <div class="card__img">
                    <img src="./img/white_blouse.png" alt="" />
                    <img
                      class="card__iconFavorite"
                      src="./img/icon_favorite-grey.png"
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
                </div> -->
              </div>

              <div class="clothes__pages">
                <div class="pages__btnPrevious">
                  <img src="./img/brn_page.png" alt="" />
                </div>
                <div class="pages__page"></div>
                <div class="pages__btnNext">
                  <img src="./img/brn_page.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php
  require('footer.php');
  ?>

    <script src="./js/nouislider.min.js"></script>
    <script src="js/categoriesPage.js?v=1.1"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
