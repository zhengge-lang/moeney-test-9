<template>
    <div>
    <Layout>
      <ol class="tags">
        <li v-for="lii in data"
        :key="lii"><span>{{lii}}</span><Icon name="left"></Icon></li>
        
      </ol>
      {{this.data}}
      <div>
        <button @click="newtag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    // import Nav from '@/components/Nav.vue'
  import model from "@/models/taglistModel.ts" 
import {Component,Watch} from 'vue-property-decorator'
import { extend } from 'vue/types/umd'
model.fetch()
  @Component
   export default class Labels extends Vue{
       data: string[]=model.data;      //  tags: string[]=['衣','食','住']
       newtag(){
         
         const name = window.prompt('请输入标签名') as string
         if(name){
           
          const message= model.create(name)
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
    }
    li{
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