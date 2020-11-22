<template>
    <div>
    <Layout>
      <div class="tags">
        <router-link class="yli" :to="`/labels/edit/${lii.id}`" v-for="lii in data"
        :key="lii.id"><span>{{lii.name}}</span><Icon name="left"></Icon></router-link>
        
      </div>
      {{this.data}}
      <div>
        <Button @click.native="submit" >新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    // import Nav from '@/components/Nav.vue'
  import model from "@/models/taglistModel.ts" 
  import Button from "@/components/Button.vue" 
import idcreate from "@/lib/idcreator.ts"
import {Component,Watch} from 'vue-property-decorator'
import { extend } from 'vue/types/umd'
import store2 from '@/store/index' 

@Component({
  components: {
   Button
  },
  computed: {
    data(){
      return this.$store.state.Taglist
    }
  },
})
   export default class Labels extends Vue{
     beforeCreate() {
       this.$store.commit('fetchTag')
     }
      //  data = store2.state.Taglist
       submit(){
         const name = window.prompt('请输入标签名') as string
         if(name){
           //Todo
           store2.commit( 'createTag',name)
         }
       }

    }
</script>

<style scoped>
    .tags{
      background:white;
      font-size: 14px;
    }
    .yli{
      min-height: 44px;
      padding: 12px 16px 16px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(0, 0, 0, 0.0001);
box-shadow: inset 0px -0.5px 0px #BCBBC1;
    }
    div{
      text-align: center;
    }
    button{
      min-height: 22px;
      padding: 9px 15px;
      border: none;
      background: #767676;
      border-radius: 4px;
      margin-top: 44px;
      color: #FFFFFF;
    }
</style>