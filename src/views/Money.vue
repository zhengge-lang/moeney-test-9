<template>
  <div>
    <Layout>
      <div class="tags">
        <!-- <div class="con"></div> -->
        
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
      <div>
        <label for="" class="notes">
          <span class="name">备注：</span>
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="selected2">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>清除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero"> 0</button>
          <button>.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import Nav from '@/components/Nav.vue'

export default Vue.extend({
  name: "Money",
});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/colo.scss";
@import "~@/assets/styles/helper.scss";

.selected {
  color: $color-highlight;
}

p {
  color: $red;
}
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
// .con {
//   flex: 1;
// }
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
.types {
  font-size: 24px;
  background: #c4c4c4;
  display: flex;
  list-style-type: none;
  li {
    position: relative;
    min-height: 64px;
    line-height: 64px;
    flex: 1;
    text-align: center;
  }
  .selected2::after {
    // border-bottom: black 2px solid;
    content: "";
    bottom: 0;
    left: 0;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #333;
  }
}
.numberPad {
  font-size: 36px;
  font-family: Consolas, monospace;
  .output {
    padding: 12px;
    text-align: right;
    background: #ffffff;
    box-shadow: inset 0px -2px 3px rgba(0, 0, 0, 0.25),inset 0px 2px 3px rgba(0, 0, 0, 0.25);
  }
  .buttons {
    @extend %clearFix;
    button {
      width: 25%;
      height: 64px;
      border: none;
      background: transparent;
      float: left;
    }
    .ok{
      height: 64*2px;
      float: right;

    }
    .zero{
      width: 50%;
    }
    :nth-child(1) {
      background: $bg;
    }
    :nth-child(2),
    :nth-child(5) {
      background: darken($bg,4%);
    }
    :nth-child(3),
    :nth-child(6),:nth-child(9) {
      background: darken($bg,8%);
    }
    :nth-child(4),
    :nth-child(7),:nth-child(10) {
      background: darken($bg,12%);
    }
    :nth-child(8), :nth-child(11), :nth-child(13) {
          background: darken($bg, 4*4%);
        }
   :nth-child(14) {
          background: darken($bg, 4*5%);
        }
       :nth-child(12) {
          background: darken($bg, 4*6%);
        }
  }
  .buttons::after{
    content: '';
    clear: both;
    display: block;

  }
}
</style>
