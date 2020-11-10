<template>
    <div>
    <Layout>
      <ol>
        <li><span>衣</span><Icon name="left"></Icon></li>
        <li><span>食</span><Icon name="left"></Icon></li>
        <li><span>住</span><Icon name="left"></Icon></li>
        <li><span>行</span><Icon name="left"></Icon></li>
      </ol>
      <div>
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    // import Nav from '@/components/Nav.vue'

    export default Vue.extend({
        name: "Labels",
        // components: { Nav }
    })
</script>

<style scoped>
    body{
      background: #e5e5e5;
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