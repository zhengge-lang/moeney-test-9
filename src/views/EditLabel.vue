<template>
    <Layout>
       <div class="edit"> 
        <Icon class="ic" name="left"/>
        <span>编辑标签</span>
        </div>
        <Notes :aaa="this.con" :bbb="`标签名`"/>
        {{con}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Notes from "@/components/Money/Notes.vue";
    import{ Component }from 'vue-property-decorator';
   @Component({
  components: {
    Notes,
  }
})

    export default class Edit extends Vue{
        con = this.$route.params.id

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
</style>
