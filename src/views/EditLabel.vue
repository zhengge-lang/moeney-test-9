<template>
    <Layout>
       <div class="edit"> 
        <Icon class="ic" name="left"/>
        <span>编辑标签</span>
        </div>
        <Notes :value="this.tag.name" :bbb="`标签名`"  @update:value ="gg"/>
        {{tag}}
        <div class="wrapper">
            <Button >删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Notes from "@/components/Money/Notes.vue";
    import Button from "@/components/Button.vue"
    import taglistModel from "@/models/taglistModel.ts"
    import{ Component }from 'vue-property-decorator';
   @Component({
  components: {
    Notes,Button
  }
})

    export default class Edit extends Vue{
        
        tag?: {id: string;name: string}=undefined
        created() {
          const con = this.$route.params.id
          taglistModel.fetch() 
          const tags= taglistModel.data
          const tag= tags.filter(t=>t.id===con)[0]
          if(tag){
              this.tag=tag
              console.log('对象存在')
          }else{
              this.$router.replace('/404')
          }
        }
        gg(val: {id: string;name: string}){
        console.log(val+'woshishui')
        
      }

    }
</script>

<style lang="scss" scoped>
    body{
        background: #E5E5E5;
    }
   .edit{
        min-height: 48px;
        display: flex;
        align-items: center;
        font-size: 16px;
        background: #FFFFFF;
        .ic{
            margin-left: 23px;
            margin-right: 123px;
        }
        span{
            
        }
    }
    .wrapper{
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
