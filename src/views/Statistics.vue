<template>
    <div>
    <Layout>
            <Types class="x"  :value.sync="yyy" />

    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import  {Component} from'vue-property-decorator'

import Types from "@/components/Money/Types.vue"
@Component({

  components:{
    Types}
})
export default class Statistics extends Vue{
      yyy='-'
    }
</script>


<style lang="scss" scoped>
  .x ::v-deep li{
    background:white;
    
   &.selected2{
    background: #c4c4c4;

    &::after{
    display: none;

    }
    }
  }
</style>