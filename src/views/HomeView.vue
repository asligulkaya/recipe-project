<template>
  <div class="home">
    <Banner/>
    <FoodList />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import FoodList from "@/components/FoodList.vue";
import Banner from "@/components/Banner.vue";
export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
  components: {
    FoodList,
    Banner,
  },
};
</script>
