<template>
    <nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand text-success" href="#">Recipes from us</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto mr-md-3">
                <li class="nav-item active"><router-link class="nav-link text-success" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link text-success" to="/about">About</router-link></li>
            </ul> 
          </div>
        </div>
      </nav>
</template>

<script>
export default {};
</script>