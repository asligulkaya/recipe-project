<template>
  <NavbarComp />
  <section class="u-section-1" id="carousel_7a39" :style="backgroundImageStyle">
    <div class="">
      <div class="">
        <div class="">
          <div class="" >
            <div class="">
              <div class="p-5 border w-25 ml-5 ingere" >
                <h2 class="u-align-center u-text u-text-1">Ingredients</h2>
                <p class="u-align-center u-text u-text-body-alt-color u-text-2">
                  <ul>
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                      {{ ingredient }}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="row w-full">
    <div class="bg-black px-5">
      <h1 class="mx-auto text-center title">{{ recipe.title }}</h1>
      <div class="recipe-details d-flex flex-column align-items-center">
        <img
          :src="`/images/${recipe.image}`"
          :alt="recipe.title"
          width="500"
          class="align-items-center"
        />
        <br />

        <h3 class="mb-4">{{ recipe.descripton }}</h3>
        <div class="leftcile d-flex">
          <br />
          <div class="col-6">
            <h5 class="ingredients">Ingredients</h5>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>
          <div class="col-6">
            <h5>Instructions</h5>
            <br />
            <ol class="px-4">
              <li
                class="mb-3"
                v-for="(instruction, index) in recipe.instructions"
                :key="index"
              >
                {{ instruction }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col-3">
      <div class="mx-auto" style="width: 100%">
        <FoodList style="width: 80%" />
      </div>
    </div> -->
  </div>
  <Footer />
</template>
<script>
import sourceData from "@/data.json";
import NavbarComp from "@/components/NavbarComp.vue";
import FoodList from "@/components/FoodList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavbarComp,
    FoodList,
    Footer,
  }, 
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(/images/${this.recipe.image})`,
        
      };
    },
    recipeId() {
      return parseInt(this.$route.params.id);
    },
    recipe() {
      return sourceData.recipes.find((recipe) => recipe.id === this.recipeId);
    },
  },
};

</script>
<style scoped>

.ingere{
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "Zilla Slab", serif;
  font-size: 1.875rem;
  font-weight: 700;
}
.ingredients {
  text-align: left !important;
}

.title {
  font-family: "Zilla Slab", serif;
}

.u-section-1 {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 854px;
}

.u-section-1 .u-sheet-1 {
  min-height: 854px;
}

.u-section-1 .u-layout-wrap-1 {
  width: 336px;
  margin: 60px auto 60px 0;
}

.u-section-1 .u-layout-cell-1 {
  min-height: 758px;
  background-image: none;
}

.u-section-1 .u-container-layout-1 {
  padding: 30px;
}

.u-section-1 .u-text-1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin: 41px 0 0;
}

.u-section-1 .u-text-2 {
  font-weight: 700;
  margin: 17px 0 0;
}
</style>
