<template>
  <div>
    {{record}}
    <Layout>
      <Tags :datasource.sync="tags" @update:value="yyy"/>
      <Notes  @update:value ="nn"/>
      <Types  :value.sync="record.type" />
      <NumberPad :value.sync="record.output" />
    </Layout>
  </div>
</template>

<script lang="ts">


import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import { Component,Prop } from'vue-property-decorator'
type Record ={
  tagn: string[];
  note: string;
  type: string;
  output: number;
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
      
      record: Record={
        tagn:[],note:'',type:'+',output:10
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
