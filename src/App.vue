<template>  
  <div class="  ">
    <router-view />
  </div>
  <Footer/>
</template>

<style></style>
<script>
import sourceData from "@/data.json";
import NavbarComp from "@/components/NavbarComp.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      recipes: sourceData.recipes,
    };
  },
  components: {
    NavbarComp,
    Footer,
  },
};
</script>
<style>
*{
padding: 0;
margin: 0;
box-sizing: border-box;
scroll-behavior: smooth;
}
</style>
