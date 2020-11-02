<template>
    
      <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
          <button @click="add">1</button>
          <button @click="add" >2</button>
          <button @click="add" >3</button>
          <button @click="remove" >清除</button>
          <button @click="add" >4</button>
          <button @click="add" >5</button>
          <button @click="add" >6</button>
          <button @click="clear" >清空</button>
          <button @click="add" >7</button>
          <button @click="add" >8</button>
          <button @click="add" >9</button>
          <button  class="ok">OK</button>
          <button @click="add"  class="zero"> 0</button>
          <button @click="add" >.</button>
        </div>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from'vue-property-decorator'
@Component
export default class NumberPad extends Vue {
  output='0'
  add(e: any){
    if(this.output.length===15){
      return
    }
    
    if(this.output==='0'&&e.target.innerText==='0'){
      return
      
    }else if(this.output==='0'&&'123456789'.indexOf(e.target.innerText)>=0){
      this.output=e.target.innerText
      return
    }else
        if(this.output.indexOf('.')!==-1&&e.target.innerText==='.'){
  
        return
      }else{
        this.output+=e.target.innerText
  
      }
    
    
    console.log(this.output.indexOf('.'))

  }
  remove(){
    
    if(this.output.length===1){
      console.log('123')
      return
    }else{
      this.output=this.output.slice(0,     -1)
    }
  }
  clear(){
    this.output='0'
  }

}

</script>

<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.numberPad {
  font-size: 36px;
  font-family: Consolas, monospace;
  .output {
    padding: 12px;
    text-align: right;
    background: #ffffff;
    box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25),inset 0px 2px 3px rgba(0, 0, 0, 0.25);
    height: 70px;
  }
  .buttons {
    @extend %clearFix;
    button {
      width: 25%;
      height: 64px;
      border: none;
      background: transparent;
      float: left;
    }
    .ok{
      height: 64*2px;
      float: right;

    }
    .zero{
      width: 50%;
    }
    :nth-child(1) {
      background: $bg;
    }
    :nth-child(2),
    :nth-child(5) {
      background: darken($bg,4%);
    }
    :nth-child(3),
    :nth-child(6),:nth-child(9) {
      background: darken($bg,8%);
    }
    :nth-child(4),
    :nth-child(7),:nth-child(10) {
      background: darken($bg,12%);
    }
    :nth-child(8), :nth-child(11), :nth-child(13) {
          background: darken($bg, 4*4%);
        }
   :nth-child(14) {
          background: darken($bg, 4*5%);
        }
       :nth-child(12) {
          background: darken($bg, 4*6%);
        }
  }
  .buttons::after{
    content: '';
    clear: both;
    display: block;

  }
}
</style>