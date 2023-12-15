<template>
  <div class="half">
    <div class="w-100">
      <h4>About Us</h4>
      <h2>Find out more about us</h2>
    </div>
    <p class="paragraph">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style>
.half {
  position: relative;
  width: 100%;
  color: #023646;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  letter-spacing: 0.076em;
  font-family: "Zilla Slab", serif;
}

.paragraph {
  font-family: "Raleway", sans-serif !important;
  font-size: 100%;
  font-weight: 500;
  margin-top: 1.5em;
  line-height: 20px;
}
</style>
