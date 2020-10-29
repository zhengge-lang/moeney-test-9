<template>
    <div class="tags">
        <a href="#" class="but">新增标签</a>
        <ul class="current">
          <li class="labii">衣</li>
          <li class="labii">食</li>
          <li class="labii">住</li>
          <li class="labii">行</li>
          <li class="labii">衣</li>
          <li class="labii">食</li>
          <li class="labii">住</li>
          <li class="labii">行</li>
          <li class="labii">衣</li>
          <li class="labii">食</li>
          <li class="labii">住</li>
          <li class="labii">行</li>
        </ul>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";
.tags {
  font-size: 14px;
  background-color: white;
  display: flex;
  padding: 16px;
  flex-grow: 1;
  flex-direction: column-reverse;
  .current {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .labii {
      text-align: center;
      list-style-type: none;
      margin-left: 4%;
       margin-top: 1%;
      padding: 0 16px;
      height: 24px;
      line-height: 24px;
      border-radius: (24px/2);
      background-color: #d9d9d9;
    }
  }
}
.but {
  padding-top: 16px;
  padding: 16px 3px 0 3px;
  width: 70px;
  color: #999;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid;
}
</style>