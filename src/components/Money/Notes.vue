<template>
    <div>
        <label for="" class="notes">
          <span class="name">备注：</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </div>
</template>

<script lang="ts">

    export default ({
        
    })
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  line-height: 64px;
  display: flex;
  // align-items: center;

  .name {
    padding: 0 16px;
  }
  input {
    flex-grow: 1;
    border: none;
    height: 64px;
    background: transparent;
  }
}

</style>