<template>
  <div class="home">
    <Banner/>
    <FoodList />
    <Footer />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import FoodList from "@/components/FoodList.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
  components: {
    FoodList,
    Banner,
    Footer,
  },
};
</script>
