<template>
    <div>
      <NavbarComp/>
      <section class="u-clearfix u-image u-section-1" id="sec-263f" data-image-width="1500" data-image-height="1000">
        <div class="u-clearfix u-sheet u-sheet-1">
          <div class="u-container-align-center-xs u-group-1">
            <div class="u-container-layout u-container-layout-1">
              <h1 class="u-text u-text-body-alt-color u-text-1" style="color:antiquewhite"> Where every ingredient tells a story</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="u-clearfix u-grey-90 u-section-2" id="sec-8486">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div class="u-expanded-width u-list u-list-1">
            <div class="u-repeater u-repeater-1">
              <div class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-1" data-image-width="1500" data-image-height="1000" style="width:33%; float:left; color:antiquewhite">
                <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                  <h1 class="u-text u-text-palette-1-light-3 u-text-1"> who </h1>
                </div>
              </div>
              <div class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-2" data-image-width="2250" data-image-height="1500" style="width:33%; float:left; color:antiquewhite">
                <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-2">
                  <h1 class="u-text u-text-palette-1-light-3 u-text-2"> are </h1>
                </div>
              </div>
              <div class="u-container-style u-image u-image-round u-list-item u-radius-50 u-repeater-item u-shading u-image-3" data-image-width="1500" data-image-height="1000" style="width:33%; float:left; color:antiquewhite">
                <div class="u-container-layout u-similar-container u-valign-middle u-container-layout-3">
                  <h1 class="u-text u-text-palette-1-light-3 u-text-3"> we </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-clearfix u-grey-90 u-section-3" id="sec-3d95" style="background-color:rgba(60, 52, 52, 0.123); width:100%">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div class="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
              <div class="u-layout-row">
                <div class="u-container-align-center-sm u-container-align-center-xs u-container-style u-layout-cell u-size-30 u-layout-cell-1" style="width:40%; float:left;">
                  <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-1">
                    <h2 class="u-text u-text-1">we are here for you</h2>
                    <p class="u-text u-text-2"> &nbsp; &nbsp;We are passionate about bringing delicious recipes to your table. Our mission is to inspire and empower home cooks of all skill levels to explore the world of culinary delights.&nbsp; &nbsp;<br>&nbsp; &nbsp;Behind the scenes, a team of dedicated food enthusiasts, chefs, and writers work tirelessly to bring you the best culinary content. Meet the faces behind ​Recipes From Us&nbsp;and discover the personalities that make our recipes come to life.Thank you for being part of our culinary journey. We look forward to being your go-to resource for all things delicious!<br>Happy Cooking,<br>
                    </p>
                  </div>
                </div>
                <div class="u-container-align-center u-container-style u-layout-cell u-size-30 u-layout-cell-2" style="width:60%; float:left;">
                  <div class="u-container-layout u-valign-middle u-container-layout-2">
                    <img class="u-image u-image-round u-radius-50 u-image-1" src="../../public/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg" alt="" data-image-width="1500" data-image-height="1000" style="width:100%;border-radius: 10px 10px 10px 10px;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import NavbarComp from "@/components/NavbarComp.vue";
  export default {
    components: {
      NavbarComp,
    },
  }
  </script>
  
  <style scoped>  
  *{
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
  } .u-section-2 {
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
    background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("../../public/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg");
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
    background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("../../public/images/pexels-photo-3850972.jpeg");
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
    background-image: linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("../../public/images/italian-spaghetti-with-tomato-sauce-pan.jpg");
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
  } .u-section-3 {
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
  