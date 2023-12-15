<template>
  <div>
    <router-view />
  </div>
</template>

<style></style>
<script>
import sourceData from "@/data.json";
import NavbarComp from "@/components/NavbarComp.vue";

export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
  components: {
    NavbarComp,
  },
};
</script>
