<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style/style.css" />
    <title>Document</title>
  </head>
  <body>
  <?php
require('header.php');
?>

    <div class="currentPath">
      <div class="container">
        <p>
          Главная >
          <span> Женская одежда </span>
        </p>
      </div>
    </div>

    <div class="womensClothing">
      <div class="container">
        <div class="womensClothing__content">
          <div class="womensClothing__sidebar">
            <div class="sidebar__title">женщинам</div>

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

          <div class="womensClothing__blok">
            <div class="womensClothing__title">женщинам</div>
            <div class="womensClothing__news">
              <div class="autumnWinter">
                <div class="autumnWinter__text">
                  <div>
                    осень-зима
                    <p>2020</p>
                  </div>
                </div>

                <img src="./img/img_autumn-winter.png" alt="" />
              </div>

              <div class="warehouse">
                <div class="warehouse__text">
                  <div>
                    Распродажа <br />
                    склада
                    <p>2020</p>
                  </div>
                </div>

                <img src="./img/img_warehouse.png" alt="" />
              </div>

              <div class="hoodies">
                <img src="./img/img_hoodies.png" alt="" />

                <div>
                  <div>
                    всё до
                    <span> 399 р </span>
                  </div>
                </div>
              </div>

              <div class="shirt">
                <div>
                  <div>
                    всё до <br />
                    <span> 399 р </span>
                  </div>
                </div>

                <img src="./img/img_shirt.png" alt="" />
              </div>
            </div>

            <section class="womensClothing__discounts1">
              <div class="womensClothing__discounts1__rowCard"></div>
              <!-- <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_trousers.png" alt="" />
                  <div class="card__discounts">до -60%</div>
                </div>
                <p class="card__text">Брюки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_jackets.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Пиджаки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_blouses.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Блузки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_tunics.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Женсике туники на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_children's-jackets.png" alt="" />
                  <div class="card__discounts">до -55%</div>
                </div>
                <p class="card__text">Десткие куртки на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_dresses.png" alt="" />
                  <div class="card__discounts">до -70%</div>
                </div>
                <p class="card__text">Женские платья на осень</p>
              </div> -->

              <div class="pages womensClothing__discounts1Pages"></div>
            </section>

            <section class="Clothes">
              <div class="container">
                <div class="Clothes__content">
                  <div class="Clothes__header">
                    <div class="Clothes__title">Одежда</div>
                    <div class="Clothes__btn">
                      <img
                        class="Clothes__btnPrevious"
                        src="./img/arrow_btn.png"
                        alt=""
                      /><img
                        class="Clothes__btnNext"
                        src="./img/arrow_btn.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="Clothes__rowCards">
                    <!-- <div class="Clothes__card">
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
                  <div class="allProducts">Все товары</div>
                  <div class="hideallProducts d-none">Скрыть все товары</div>
                </div>
              </div>
            </section>

            <section class="womensClothing__discounts2">
              <div class="womensClothing__discounts2__rowCard"></div>
              <!-- <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_trousers.png" alt="" />
                  <div class="card__discounts">до -60%</div>
                </div>
                <p class="card__text">Брюки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_jackets.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Пиджаки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_blouses.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Блузки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_tunics.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Женсике туники на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_children's-jackets.png" alt="" />
                  <div class="card__discounts">до -55%</div>
                </div>
                <p class="card__text">Десткие куртки на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_dresses.png" alt="" />
                  <div class="card__discounts">до -70%</div>
                </div>
                <p class="card__text">Женские платья на осень</p>
              </div> -->

              <div class="pages womensClothing__discounts2Pages"></div>
            </section>

            <section class="shoes">
              <div class="container">
                <div class="shoes__content">
                  <div class="shoes__header">
                    <div class="shoes__title">Обувь</div>
                    <div class="shoes__btn">
                      <img
                        class="shoes__btnPrevious"
                        src="./img/arrow_btn.png"
                        alt=""
                      /><img
                        class="shoes__btnNext"
                        src="./img/arrow_btn.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="shoes__rowCards">
                    <!-- <div class="shoes__card">
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
                  <div class="allProducts">Все товары</div>
                  <div class="hideallProducts d-none">Скрыть все товары</div>
                </div>
              </div>
            </section>

            <section class="womensClothing__discounts3">
              <div class="womensClothing__discounts3__rowCard"></div>
              <!-- <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_trousers.png" alt="" />
                  <div class="card__discounts">до -60%</div>
                </div>
                <p class="card__text">Брюки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_jackets.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Пиджаки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_blouses.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Блузки для женщин</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_tunics.png" alt="" />
                  <div class="card__discounts">до -40%</div>
                </div>
                <p class="card__text">Женсике туники на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_children's-jackets.png" alt="" />
                  <div class="card__discounts">до -55%</div>
                </div>
                <p class="card__text">Десткие куртки на осень</p>
              </div>

              <div class="womensClothing__card">
                <div class="card__img">
                  <img src="./img/img_dresses.png" alt="" />
                  <div class="card__discounts">до -70%</div>
                </div>
                <p class="card__text">Женские платья на осень</p>
              </div> -->

              <div class="pages womensClothing__discounts3Pages"></div>
            </section>

            <section class="largeSizes">
              <div class="container">
                <div class="largeSizes__content">
                  <div class="largeSizes__header">
                    <div class="largeSizes__title">большие размеры</div>
                    <div class="largeSizes__btn">
                      <img
                        class="largeSizes__btnPrevious"
                        src="./img/arrow_btn.png"
                        alt=""
                      /><img
                        class="largeSizes__btnNext"
                        src="./img/arrow_btn.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="largeSizes__rowCards">
                    <!-- <div class="largeSizes__card">
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
                  <div class="allProducts">Все товары</div>
                  <div class="hideallProducts d-none">Скрыть все товары</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
      <?php
  require('footer.php');
  ?>`

    <script src="js/generalSection.js?v=1.0" ></script>
  </body>
</html>
