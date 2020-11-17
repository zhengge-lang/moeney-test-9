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

@Component({
  components: {
   Button
  }
})
   export default class Labels extends Vue{
       data=model.data;  
       beforeCreate() {
         
         model.fetch()
       }
       submit(){
        //  alert('Hi')
        //  console.log(e+'222')
         const name = window.prompt('请输入标签名') as string
         if(name){
           const id =idcreate()
           const ids: string =id.toString()
          const message= model.create(name,ids)
          if(message === 'duplicated'){
            window.alert('重复')
          }else if(message === 'success'){
            window.alert('成功')
            
          }
          
         }
        //  if(this.data.indexOf(name)!==-1){
        //    alert('命名重复')
        //    return 
        //  }else{
        //  this.data.push(name)
        //  }
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