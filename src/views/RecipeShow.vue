<template>
  <div>
    <h1>{{ recipe.title }}</h1>
    <div class="recipe-details">
      <img :src="`/images/${recipe.image}`" :alt="recipe.title" />
      <h6>{{ recipe.descripton }}</h6>
      <br />
      <h6>Ingredients</h6>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <h6>Instructions</h6>
      <br />
      <ol>
        <li v-for="(instruction, index) in recipe.instructions" :key="index">
          {{ instruction }}
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";
export default {
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
