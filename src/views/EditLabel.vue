<template>
    <Layout>
       <div class="edit"> 
        <Icon class="ic" name="left" @click.native="goback"/>
        <span>编辑标签</span>
        </div>
        <Notes :value="this.tag.name" :bbb="`标签名`" placeholder="请输入标签名"  @update:value ="updatetag"/>
        {{tag}}
        <div class="wrapper">
            <Button @click.native="remove(con2)">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Notes from "@/components/Money/Notes.vue";
    import Button from "@/components/Button.vue"
    import taglistModel from "@/models/taglistModel.ts"
    import{ Component,Watch }from 'vue-property-decorator';
import store2 from '@/store/index'

   @Component({
  components: {
    Notes,Button
  },

})

    export default class Edit extends Vue{
          con2 = this.$route.params.id
        get tags(){
            return store2.state.Taglist
          }
        tag: { id: string; name: string }|undefined
        created() {
          const con = this.$route.params.id
          // taglistModel.fetch() 
          // const tags= taglistModel.data
          store2.commit('fetchTag')
          console.log(JSON.stringify( this.tags)+'zzz');
          
        const tags = store2.state.Taglist
          const tag= this.tags.filter(t=>t.id===con)[0]
          console.log(JSON.stringify( tag)+'xxx');

          if(tag){
              this.tag=tag
              console.log('对象存在')
          }else{
              this.$router.replace('/404')
          }
        }
        
        updatetag(name: string){
        console.log(name+'woshishui')
        if(this.tag)
        store2.commit('updateTags',{id:this.tag.id,name})
      }
      remove(e: string){
          console.log(e+''+this.tag?.id);
          if(this.tag){
            store2.commit('removeTag',this.tag.id)
            console.log('11');
            // todo
        //     if( true){

              this.$router.back()
        //   }else{
        //   }
          }

      }
      goback(){
          this.$router.back()
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
