<template>
  <div id="app">
   
    <div>
    <router-view/>
     
      </div>
    

  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "assets/styles/colo.scss";
@import "~@/assets/styles/reset.scss";
// body{
//   }

#app {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

</style>
