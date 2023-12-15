<template>
  <NavbarComp />
  <div class="row w-full">
    <div class="col-9 bg-black px-5">
      <h1 class="mx-auto text-center">{{ recipe.title }}</h1>
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
    <div class="col-3">
      <div class="mx-auto" style="width: 100%">
        <FoodList style="width: 80%" />
      </div>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
import NavbarComp from "@/components/NavbarComp.vue";
import FoodList from "@/components/FoodList.vue";
export default {
  components: {
    NavbarComp,
    FoodList,
  },
  computed: {
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
.ingredients{
  text-align: left !important;
}
</style>

