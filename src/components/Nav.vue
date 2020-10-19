<template>
  <nav class="lin">
    <router-link class="item" to="/money">
      <Icon name="money"></Icon><div >
      记账</div></router-link
    > <router-link class="item" to="/labels"> <Icon name="label"></Icon><div >标签</div></router-link>
    <router-link class="item" to="/statistics"
      ><Icon name="statistics"></Icon><div >统计</div></router-link
    >
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>
<style lang="scss" scoped>
// position: fixed;
// .lin{
//     position: fixed;
//     bottom: 0;
//     max-width: 1624px;
//     min-width: 1280px;
// }
nav {
//   height: 10vh;
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  font-size: 12px;
    > .item{
        padding: 2px 0;
     .icon{
       width: 30px;
       height: 30px; 
    }
    }
}
</style>