<template>
  <div>
    <Header></Header>
    <div class="container">
      <tool-bar></tool-bar>
      <main-home></main-home>
    </div>
  </div>
</template>
<script>
import Header from './components/Header';
import ToolBar from './components/ToolBar'; 
import MainHome from './views/MainHome';

export default {
  components : {
    Header,
    ToolBar, 
    MainHome,
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
  
  .container {
    display:flex; 
  }
</style>