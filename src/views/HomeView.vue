<template>
  <div class="home">
    <div class="recipes">
      <router-link
        v-for="recipe in recipes"
        :key="recipe.id"
        :to="{
          name: 'recipe.show',
          params: { id: recipe.id, slug: recipe.slug },
        }"
      >
        <h2>{{ recipe.title }}</h2>
        <img :src="`/images/${recipe.image}`" :alt="recipe.title" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
};
</script>
