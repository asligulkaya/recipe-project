<template>
  <div class="home">
    <FoodList />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import FoodList from "@/components/FoodList.vue";
export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
  components: {
    FoodList,
  },
};
</script>
