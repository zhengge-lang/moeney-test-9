<template>
    <div>
        <ul class="types">
          <li v-for="item in dataSource" :key="item.value" :class="liclass(item)" @click="selectd(item.value)">{{item.text}} ~~~{{item.value}} </li>
          
        </ul>
      </div>
</template>


<script lang="ts">
type name1={
    text: string;value: string;
}
import Vue from 'vue'
import {  Component, Prop } from 'vue-property-decorator'
@Component

export default class Tabs extends Vue {
     @Prop(String) classPrefix?: string
  
    // @Prop(String)  value!: string 
    @Prop()  
    value!: string
    @Prop({required:true,type:Array})  dataSource!: name1[] 
    created() {
     console.log(this.value);
        
    }
    liclass=(item: name1)=>{
        return{
        selected2:this.value===item.value,[this.classPrefix+'-item']:this.classPrefix}
        }
    selectd(e: string){
      console.log('123456');
      
        console.log(e,this.value+'1111');
        
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