<template>
    <div class="container" id="foodlist">
      <div class="row">
        <Food v-for="recipe in recipes.slice(0, limit || recipes.length)"
            class="my-3"
          :key="recipe.id"
          :to="{
            name: 'recipe.show',
            params: { id: recipe.id, slug: recipe.slug },
          }" 
          :id="recipe.id"
          :slug="recipe.slug"
          :image="recipe.image" 
          :title="recipe.title" 
          :description="recipe.descripton"
        />
      </div>
    </div>
  </template>
  
  <script>
  import sourceData from "@/data.json";
  import Food from "@/components/Food.vue";
  export default {
    data() {
      return {
        recipes: sourceData.recipes,
      };
    },
    props: {
      limit: Number,
    },  
    components: {
    Food,
  },
  };
  </script>
  