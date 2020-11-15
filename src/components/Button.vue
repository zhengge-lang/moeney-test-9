<template>
    <div>
         <button @click="$emit('welcome')"><slot></slot></button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default class Button extends Vue{
       giao(){
           console.log(this)
    this.$emit("click")
    // this.$emit('submit')
  }
    }
</script>

<style scoped>
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