<template>
  <div>
    {{recordlist}}
    <Layout>
      <Tags @update:value='yyy'/>
      <button @click="add">+1</button>
      {{count}}
      <Notes  @update:value ="nn"  :aaa="`在这里添加备注`" :bbb="`备注1`"/>
      
      <Types  :value.sync="record.type" />
      <NumberPad :value="record.output" @update:value ="gg" @submit="saverecord"/>
    </Layout>
  </div>
</template>

<script lang="ts">


import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component,Prop,Watch  } from'vue-property-decorator'
import model from "@/models/recordModel.ts"
import tagmodel from "@/models/taglistModel.ts"
import store from '@/store/index2'

// const model= require('@/model.js').default

const recordList = model.fetch()
// tagmodel.fetch()
// const tagList = tagmodel.data
const tagList = store.tagList
type Recorditem ={
  tagn: string[];
  note: string;
  type: string;
  output: number;
  time?: Date;
}
type Tag = {
    id: string;
    name: string;
}
@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
   computed: {
        count(){
       
        return  store.count
        },
        recordList(){
          return store.recordlist
        }

      }
})

export default class Money extends Vue{
  store=store
 
      // created(){
        //   tagmodel.data=this.tags
      //   tagmodel.save()
      // }
      
     add(){
       console.log(store.count)
       store.count++
     }
      recordlist: Recorditem[]= recordList
      record: Recorditem={
        tagn:[],note:'',type:'+',output:10
      }
 
        @Watch('recordlist')
  onChanged2(val: string, oldVal: string) {
    console.log(model)
     model.save()
    
}
      yyy(tagc: string[]){
        this.record.tagn=tagc
      }
      nn(val: string){
        this.record.note = val
      }
      // vv(val:string){
      //   this.record.type = val
      // }
       gg(val: string){
        this.record.output =parseFloat(val)
      }
      saverecord(){
        model.create(this.record)
      }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.selected {
  color: $color-highlight;
}
p {
  color: $red;
}
</style>
