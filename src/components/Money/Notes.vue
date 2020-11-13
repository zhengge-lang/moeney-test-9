<template>
  <div>
    <label for="" class="notes">
      <!-- <span class="name" v-if="this.aaa">标签名</span> -->
      <span class="name" >{{bbb}}</span>
      <!-- <input type="text" :value="aaa" v-if="this.aaa" /> -->
      <input type="text" :placeholder="aaa" v-model="x"  />
      {{x}}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop,Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  x= ''
   @Prop(String)  aaa!: string
   @Prop(String)  bbb!: string
    @Watch('x')
  onPersonChanged2(val: string, oldVal: string) {
    this.$emit('update:value',val)
  }
  created() {
  //  if(this.aaa){
     
  //  } 
  }
    
    
  // value1 = "" as string

  // t(e:KeyboardEvent){
  //   console.log(e)
  //   const input = e.target as HTMLInputElement
  //   this.value1 = input.value
    
  // }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  line-height: 64px;
  display: flex;
  // align-items: center;

  .name {
    padding: 0 16px;
  }
  input {
    flex-grow: 1;
    border: none;
    height: 64px;
    background: transparent;
  }
}
</style>