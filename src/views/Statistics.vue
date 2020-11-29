<template>
    <div>
    <Layout>
            <!-- <Types class="x" class-prefix="qwe" :value.sync="yyy" /> -->
            <Tabs class="x" class-prefix="type"  :dataSource="array2" :value.sync="yyy"/>
        <Tabs class-prefix="interval"  :dataSource="array" :value.sync="day1"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import  {Component} from'vue-property-decorator'
import Types from "@/components/Money/Types.vue"
import Tabs from "@/components/Tabs.vue"
@Component({

  components:{
    Types,Tabs}
})
export default class Statistics extends Vue{
      yyy='-'
      day1='day'
      array=[{text:'按天',value:'day'},{text:'按周',value:'week'},{text:'按月',value:'month'}]
      array2=[{text:'收入',value:'-'},{text:'支出',value:'+'}]
    }
</script>


<style lang="scss" scoped>
  .x ::v-deep .type-item {
    background:white;
    
   &.selected2{
    background: #c4c4c4;

    &::after{
    display: none;

    }
    }
  }
</style>