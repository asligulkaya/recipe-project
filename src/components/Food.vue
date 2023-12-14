<template>
  <div class="cardcontainer">
    <div class="photo">
      <img :src="`/images/${image}`" :alt="title" />
    </div>
    <div class="content">
      <p class="txt4">{{ title }}</p>
    <br>
      <p class="txt5">{{ ilkElliHarf(description) }}</p>
    </div>
    <div class="footer">
      <router-link
        class="waves-effect waves-light btn btn-success"
        :to="{
          name: 'recipe.show',
          params: { id, slug },
        }"
      >
        Show Recipe
      </router-link>
    </div>
  </div>
</template>
<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "roboto", sans-serif;
  background-color: #f2f2f2;
}
h1 {
  text-align: center;
  color: #333333;
}
.cardcontainer {
  width: 350px;
  height: 500px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  transition: 0.3s;
}
.photo {
  height: 300px;
  width: 100%;
}
.photo img {
  height: 100%;
  width: 100%;
}
.txt1 {
  margin: auto;
  text-align: center;
  font-size: 17px;
}
.content {
  width: 80%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -33px;
}
.photos {
  width: 90px;
  height: 30px;
  background-color: #e74c3c;
  color: white;
  position: relative;
  top: -30px;
  padding-left: 10px;
  font-size: 20px;
}
.txt4 {
  font-size: 22px;
  position: relative;
  top: 50px;
}
.txt5 {
  position: relative;
  top: 18px;
  color: #e74c3c;
  font-size: 15px;
}
.txt2 {
  position: relative;
  top: 10px;
}
@keyframes move1 {
  0% {
    height: 300px;
  }
  100% {
    height: 200px;
  }
}
.footer {
  width: 80%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  position: relative;
  top: -15px;
}
.btn {
  position: relative;
  top: 20px;
}
#heart {
  cursor: pointer;
}
.like {
  float: right;
  font-size: 22px;
  position: relative;
  top: 20px;
  color: #333333;
}
.fa-gratipay {
  margin-right: 10px;
  transition: 0.5s;
}
.txt3 {
  color: gray;
  position: relative;
  top: 18px;
  font-size: 14px;
}
.comments {
  float: right;
  cursor: pointer;
}
.fa-clock,
.fa-comments {
  margin-right: 7px;
}
</style>

<script>
export default {
  props: {
    title: String,
    image: String,
    id: Number,
    slug: String,
    description: String,
  },
  methods: {
    ilkElliHarf(metin) {
      return metin.slice(0, 50);
    },
  },
};
</script>