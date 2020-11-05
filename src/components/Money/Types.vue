<template>
    <div>
        <ul class="types">
          <li :class="value==='-'?'selected2':''" @click="ctype('-')">支出</li>
          <li :class="value==='+'?'selected2':''" @click="ctype('+')">收入</li>
        </ul>
      </div>
</template>


<script lang="ts">
import Vue from 'vue'
import {  Component, Prop } from 'vue-property-decorator'

@Component

export default class Types extends Vue {
    @Prop(String)  value!: string 
  
  
 
  ctype(e: string){
          if(e!=='-'&&e!=='+'){
            throw new Error('type is unknown')
          }
          this.$emit('update:value',e)
        }
  
}
</script>
 
<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
    .types {
  font-size: 24px;
  background: #c4c4c4;
  display: flex;
  list-style-type: none;
  li {
    position: relative;
    min-height: 64px;
    line-height: 64px;
    flex: 1;
    text-align: center;
  }
  .selected2::after {
    // border-bottom: black 2px solid;
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #333;
  }
}
</style>