<template>
    <nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light p-3 w-full" id="ftco-navbar" style="background-color:rgba(0, 0, 0, 0.592)  ">
        <div class="container">
            <router-link class="navbar-brand text-white" to="/">Recipes From Us</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto mr-md-3">
                <li class="nav-item active"><router-link class="nav-link text-white" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-white" to="/about">About</router-link></li>
            </ul> 
          </div>
        </div>
      </nav>
</template>

<script>
export default {};
</script>