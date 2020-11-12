<template>
  <div>
    {{recordlist}}
    <Layout>
      <Tags :datasource.sync="tags" @update:value="yyy"/>
      <Notes  @update:value ="nn"/>
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
// const model= require('@/model.js').default

const recordList = model.fetch()
type Recorditem ={
  tagn: string[];
  note: string;
  type: string;
  output: number;
  time?: Date;
}
@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  }
})

export default class Money extends Vue{
      tags: string[]=['衣','食','住']
      recordlist: Recorditem[]= recordList
      record: Recorditem={
        tagn:[],note:'',type:'+',output:10
      }
 
        @Watch('recordlist')
  onChanged2(val: string, oldVal: string) {
    console.log(model)
     model.save(this.recordlist)
    //  window.localStorage.setItem('recordlist',JSON.stringify(this.recordlist))
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
        const record2: Recorditem =model.clone(this.record)
        record2.time=new Date()
        this.recordlist.push(record2)
        console.log( this.recordlist)
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
