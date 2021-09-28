<template>
  <div class="toolbar"> 
    <router-link to="/sports">sports</router-link>
    <router-link to="/film">film</router-link>
    <router-link to="/music">music</router-link>
    <router-link to="/history">history</router-link>
    <router-link to="/animals">animals</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .toolbar {
    display:flex; 
    flex-direction : column;
    border-right : 1px solid $font-visited; 
    padding: 1rem 1rem;

    a {
      text-decoration: none; 
      margin-bottom : 1rem;
    }

    a:hover {
      color: $font-correct;
    }

    a:visited{
      color: $font-visited; 
    }

    a:link{
      color: $font-visited;
    }
      }
</style>