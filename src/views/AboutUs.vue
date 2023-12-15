<template>
  <div>
    <NavbarComp />
    <section
      class="u-clearfix u-image u-section-1"
      id="sec-263f"
      data-image-width="1500"
      data-image-height="1000"
    >
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-container-align-center-xs u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h1
              class="u-text u-text-body-alt-color u-text-1"
              style="color: antiquewhite"
            >
              Where every ingredient tells a story
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="u-clearfix u-grey-90 u-section-2" id="sec-8486">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div
              class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-1"
              data-image-width="1500"
              data-image-height="1000"
              style="width: 33%; float: left; color: antiquewhite"
            >
              <div
                class="u-container-layout u-similar-container u-valign-middle u-container-layout-1"
              >
                <h1 class="u-text u-text-palette-1-light-3 u-text-1">who</h1>
              </div>
            </div>
            <div
              class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-2"
              data-image-width="2250"
              data-image-height="1500"
              style="width: 33%; float: left; color: antiquewhite"
            >
              <div
                class="u-container-layout u-similar-container u-valign-middle u-container-layout-2"
              >
                <h1 class="u-text u-text-palette-1-light-3 u-text-2">are</h1>
              </div>
            </div>
            <div
              class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-3"
              data-image-width="1500"
              data-image-height="1000"
              style="width: 33%; float: left; color: antiquewhite"
            >
              <div
                class="u-container-layout u-similar-container u-valign-middle u-container-layout-3"
              >
                <h1 class="u-text u-text-palette-1-light-3 u-text-3">we</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="d-flex content">
        <Content
          text="Hello! Welcome to Recipes From Us, where we share the flavorsome essence
      of our world through delightful recipes. Are you ready to embark on a
      journey filled with exquisite dishes and culinary wonders?"
        />
        <div class="half-image">
          <img class="about-img" src="../assets/about-banner.jpg" alt="" />
        </div>
      </div>
      <div class="d-flex content">
        <div class="half-image">
          <img class="about-img" src="../assets/about-banner2.jpg" alt="" />
        </div>
        <Content
          text="Here, we cherish every moment spent in the kitchen and strive to present recipes that cater to every palate. We believe that delicious meals nourish not only the stomach but also the soul. That's why we carefully curate and share each recipe with utmost dedication."
        />
      </div>
      <div class="d-flex content">
        <Content
          text="Our goal is to make your kitchen experiences more enjoyable and inspire you with each recipe we offer. We're here for anyone who loves cooking, with a collection of mouthwatering recipes."
        />
        <div class="half-image">
          <img class="about-img" src="../assets/about-banner3.jpg" alt="" />
        </div>
      </div>

      <Footer class="foot" />
    </section>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavbarComp,
    Content,
    Footer,
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 60px;
}

.half-image {
  opacity: 1;
  z-index: 3;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 50%;
}

.section {
  height: 90vh;
}

.half {
  width: 50%;
  color: #023646;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  letter-spacing: 0.076em;
  font-family: "Zilla Slab", serif;
  padding: 0 10em;
}

.paragraph {
  font-family: "Raleway", sans-serif !important;
  font-size: 100%;
  font-weight: 500;
  margin-top: 1.5em;
  line-height: 20px;
  padding: 20px;
}

h2 {
  font-size: 237.5%;
  line-height: 40px;
}

h4 {
  font-weight: 400;
}

.about-img {
  width: 100%;
}

.about-img4 {
  width: 25%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

.foot {
  position: relative;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
* {
  margin: 0;
}
.u-section-1 {
  background-image: url("../../public/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg");
  background-repeat: no-repeat;
}

.u-section-1 .u-sheet-1 {
  min-height: 100px;
}

.u-section-1 .u-group-1 {
  min-height: 407px;
  height: auto;
  width: 583px;
  margin: 30px auto 30px 0;
}

.u-section-1 .u-container-layout-1 {
  padding: 10px;
}

.u-section-1 .u-text-1 {
  font-size: 3.75rem;
  margin: 0 95px 0 0;
}

@media (max-width: 1199px) {
  .u-section-1 .u-sheet-1 {
    min-height: 555px;
  }

  .u-section-1 .u-group-1 {
    background-position: 100% 50%;
    height: auto;
  }

  .u-section-1 .u-text-1 {
    margin-right: 49px;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-group-1 {
    background-position: 71.36% 50%;
    width: 523px;
  }

  .u-section-1 .u-text-1 {
    width: auto;
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-group-1 {
    margin-right: initial;
    margin-left: initial;
    width: auto;
  }

  .u-section-1 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-1 .u-text-1 {
    font-size: 3rem;
    margin-right: 126px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    margin-right: 0;
  }
}
.u-section-2 {
  background-image: none;
}

.u-section-2 .u-sheet-1 {
  min-height: 195px;
  margin-bottom: 0;
}

.u-section-2 .u-list-1 {
  margin-bottom: 6px;
  margin-top: 6px;
}

.u-section-2 .u-repeater-1 {
  grid-template-columns: repeat(3, calc(33.3333% - 13.3333px));
  min-height: 15px;
  grid-gap: 20px;
}

.u-section-2 .u-image-1 {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url("../../public/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg");
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-1 {
  padding: 0 10px;
}

.u-section-2 .u-text-1 {
  font-size: 6rem;
  width: 186px;
  margin: 0 auto;
}

.u-section-2 .u-image-2 {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url("../../public/images/pexels-photo-3850972.jpeg");
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-2 {
  padding: 0 10px;
}

.u-section-2 .u-text-2 {
  font-size: 6rem;
  width: 186px;
  margin: 0 auto;
}

.u-section-2 .u-image-3 {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url("../../public/images/italian-spaghetti-with-tomato-sauce-pan.jpg");
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-3 {
  padding: 0 10px;
}

.u-section-2 .u-text-3 {
  font-size: 6rem;
  width: 186px;
  margin: 0 auto;
}

@media (max-width: 1199px) {
  .u-section-2 .u-sheet-1 {
    min-height: 250px;
  }

  .u-section-2 .u-repeater-1 {
    min-height: 307px;
  }

  .u-section-2 .u-text-1 {
    font-size: 3.75rem;
  }

  .u-section-2 .u-text-2 {
    font-size: 3.75rem;
  }

  .u-section-2 .u-text-3 {
    font-size: 3.75rem;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-sheet-1 {
    min-height: 878px;
  }

  .u-section-2 .u-repeater-1 {
    grid-template-columns: repeat(2, calc(50% - 9.99997px));
    min-height: 736px;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-sheet-1 {
    min-height: 856px;
  }

  .u-section-2 .u-repeater-1 {
    grid-template-columns: 100%;
  }

  .u-section-2 .u-text-1 {
    font-size: 3rem;
  }

  .u-section-2 .u-text-2 {
    font-size: 3rem;
  }

  .u-section-2 .u-text-3 {
    font-size: 3rem;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-sheet-1 {
    min-height: 796px;
  }

  .u-section-2 .u-text-1 {
    font-size: 2.25rem;
  }

  .u-section-2 .u-text-2 {
    font-size: 2.25rem;
  }

  .u-section-2 .u-text-3 {
    font-size: 2.25rem;
  }
}
.u-section-3 {
  background-image: none;
}

.u-section-3 .u-sheet-1 {
  min-height: 710px;
}

.u-section-3 .u-layout-wrap-1 {
  margin-top: 12px;
  margin-bottom: 52px;
}

.u-section-3 .u-layout-cell-1 {
  min-height: 607px;
}

.u-section-3 .u-container-layout-1 {
  padding: 0 10px;
}

.u-section-3 .u-text-1 {
  margin: 43px 52px 0 14px;
}

.u-section-3 .u-text-2 {
  margin: 43px 1px 0;
}

.u-section-3 .u-layout-cell-2 {
  min-height: 607px;
}

.u-section-3 .u-container-layout-2 {
  padding: 30px 0;
}

.u-section-3 .u-image-1 {
  width: 540px;
  height: 521px;
  margin: 0 auto;
}

@media (max-width: 1199px) {
  .u-section-3 .u-sheet-1 {
    min-height: 604px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 501px;
  }

  .u-section-3 .u-text-1 {
    margin-right: 0;
    margin-left: 0;
  }

  .u-section-3 .u-text-2 {
    margin-right: 0;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 501px;
  }

  .u-section-3 .u-image-1 {
    width: 470px;
    height: 453px;
  }
}

@media (max-width: 991px) {
  .u-section-3 .u-sheet-1 {
    min-height: 487px;
  }

  .u-section-3 .u-layout-cell-1 {
    min-height: 100px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 384px;
  }

  .u-section-3 .u-image-1 {
    width: 360px;
    height: 347px;
  }
}

@media (max-width: 767px) {
  .u-section-3 .u-sheet-1 {
    min-height: 779px;
  }

  .u-section-3 .u-container-layout-1 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 412px;
  }
}

@media (max-width: 575px) {
  .u-section-3 .u-sheet-1 {
    min-height: 566px;
  }

  .u-section-3 .u-layout-cell-2 {
    min-height: 259px;
  }

  .u-section-3 .u-image-1 {
    width: 340px;
    height: 328px;
  }
}
</style>
