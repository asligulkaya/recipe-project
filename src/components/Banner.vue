<template>
    
<!-- Background image -->
  <div class="p-5 text-center bg-image object-fit-cover" style="
  background-image: url('https://cdn.discordapp.com/attachments/1170384429869445162/1185005501948375112/im-121422.jpeg?ex=658e0960&is=657b9460&hm=2597cc937b63be47c230daa788f9c0a7ed5c8e021524de778b7d9ae2de4d1aff&');
  height: 550px;
  weight: 100%;
  background-repeat:no-repeat;
  background-size: cover;
">
<NavbarComp/>
<div class="mask rounded" style="background-color: rgba(0, 0, 0, 0.6);">
  <div class="d-flex justify-content-center align-items-center">
    <div class="text-white py-4">
      <h1 class="mb-3">Welcome</h1>
      <h4 class="mb-3">Are you hungry?</h4>
      <a class="btn btn-outline-light btn-lg" v-on:click="scroll" style="transition: 2s;" href="#foodlist" role="button">See our recipes</a>
    </div>
  </div>
</div>
</div>
</template>
  
<script>
import NavbarComp from "@/components/NavbarComp.vue";
export default {
    components: {
    NavbarComp,
  },
  methods:{
    scroll(){
        window.scroll({
            behavior: 'smooth'
        })
    }
  }
};
</script>
<style scoped>
*{
    scroll-behavior: smooth;
}
    
    
</style>
  