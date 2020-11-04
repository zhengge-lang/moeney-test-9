<template>
  <div class="tags">
    <a href="#" class="but" @click="create">新增标签</a>
    <ul class="current">
      <li
        class="labii"
        v-for="lii in datasource"
        :key="lii"
        @click="toggle($event)"
        :class="tag1.indexOf(lii)>= 0 ? 'selected' : ''"
      >
        {{ lii }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component,Prop } from'vue-property-decorator'
@Component
export default class Tags extends Vue{

      @Prop()
  datasource: string[]|undefined
      tag1: []=[]
      i: 0|undefined
 
    toggle(e: MouseEvent) {
      const button =(e.target as HTMLButtonElement);
      const input = button.innerText  as never;
      if(this.tag1.indexOf(input)===-1){
      this.tag1.push(input)
      }else{
      this.tag1.splice(this.tag1.indexOf(input),1)  //删
      }
    }
    create(){
      
      const name = window.prompt('请输入标签名') as string
      console.log(name);
      
      if(name===''){
        alert('标签名不能为空')
      }else if(name === ''||name === null){
        return
      }else{
        if(this.datasource){
      this.$emit('update:datasource',[...this.datasource,name])
      }
    }    
  
}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.tags {
  font-size: 14px;
  background-color: white;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  flex-direction: column-reverse;
  .current {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .labii {
      text-align: center;
      list-style-type: none;
      margin-left: 4%;
      margin-top: 1%;
      padding: 0 16px;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      background-color: #d9d9d9;
    }
    $bg:#d9d9d9;
    .selected {
      background: darken($color: $bg, $amount: 20%);
      color:white
    }
  }
}
.but {
  padding-top: 16px;
  padding: 16px 3px 0 3px;
  width: 70px;
  color: #999;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid;
}
</style>