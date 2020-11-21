<template>
  <div id="app">
   
    <div>
    <router-view/>
     
      </div>
    

  </div>
</template>
<script>
import store from '@/store/index2'
export default {
  data() {
    return {
      store:store
    }
  },
}
</script>

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
