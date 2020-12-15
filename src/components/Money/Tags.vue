<template>
  <div class="tags">
    <a href="#" class="but" @click="submit">新增标签</a>
    <ul class="current">
      <li
        class="labii"
        v-for="lii in datasource"
        :key="lii.id"
        @click="toggle($event)"
        :class="tag1.indexOf(lii.name)>= 0 ? 'selected' : ''"
      >
        {{ lii.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component,Prop } from'vue-property-decorator'
import tagmodel from "@/models/taglistModel.ts"
import idcreate from "@/lib/idcreator.ts"
import store from '@/store/index2'
import store2 from '@/store/index'
import { mixins } from 'vue-class-component'
import { TagHelper } from '@/mixins/TagHelper'

@Component({
   computed: {
        
        datasource(){
          console.log(store2.state.Taglist.length);
          
          if(!store2.state.Taglist||store2.state.Taglist.length==0){
            store2.commit('createTag','衣')
            store2.commit('createTag','食')
            store2.commit('createTag','住')

          }
          return store2.state.Taglist
        },
        count1(){
          return store2.state.count
        }

      }
})
export default class Tags extends mixins(TagHelper){

      tag1: []=[]
      @Prop()
      i: 0|undefined
    created() {
       this.$store.commit('fetchTag') 
    }
    toggle(e: MouseEvent) {
      const button =(e.target as HTMLButtonElement);
      const input = button.innerText  as never;
      if(this.tag1.indexOf(input)===-1){
      this.tag1.push(input)
      }else{
      this.tag1.splice(this.tag1.indexOf(input),1)  //删
      }
      this.$emit('update:value',this.tag1)
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