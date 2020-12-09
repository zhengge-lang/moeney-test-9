<template>
  <div>
    <Layout>
      <!-- <Types class="x" class-prefix="qwe" :value.sync="yyy" /> -->
      <Tabs
        class="x"
        class-prefix="type"
        :dataSource="recordtypeList"
        :value.sync="type"
      />
      <Tabs
        class="y"
        class-prefix="interval"
        :dataSource="intervalList"
        :value.sync="interval"
      />
      <div class="hang"></div>
      <ol>
        <li class="lei" v-for="(group, index) in result" :key="index">
        
          <h3 class="title">{{ check(group.title) }} <span style="text-align:right;background:#e5e5e5">{{group.total}}</span></h3>
          <ol>
            <li class="record" v-for="item in group.items" :key="item.id">
              <span>{{ tagString(item.tagn) }}</span>
              <span class="b">{{ item.note }}</span>
              <span>￥{{ item.output }} </span>
            </li>
          </ol>
        </li>
      </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Types from "@/components/Money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervaList";
import recordtypeList from "@/constants/recordList";
import store from "@/store/index";
import dayjs from "dayjs";
import clone from "@/lib/clone";
@Component({
  components: {
    Types,
    Tabs,
  },
})
export default class Statistics extends Vue {
  type = "+";
  interval = "day";
  showtime = "";
  total = 0;
  nowday = new Date();
  nowday1?: string = undefined;
  oldday?: string = undefined;
  x={}
  intervalList = intervalList;
  recordtypeList = recordtypeList;
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "wu" : tags.join(",");
  }
  check(date: string) {
    const time = new Date(date);
    // console.log(date);
    const api = dayjs(date);

    const now = new Date();
    const now1 = dayjs();

    if (api.isSame(now, "day")) {
      return "今天";
    } else if (api.isSame(now.valueOf() - 24 * 3600 * 1000, "day")) {
      return "昨天";
    } else if (api.isSame(now1.subtract(2, "day"), "day")) {
      return "前天";
    } else {
      const timeyear = api.isSame(now, "year")
        ? api.format("MM月DD日")
        : api.format("YYYY年MM月DD日");
      return timeyear;
    }


  }
  get recordlist() {
    return store.state.recordlist;
  }

  get result() {
    type Items = Recorditem[];
    type HashTableValue = { title: string; items: Items };
    // type x={title:string,total:number,i}
    if (this.recordlist.length === 0) {
      return [];
    }
    const newlist = this.recordlist.sort(
      (a, b) => dayjs(b.time).valueOf() - dayjs(a.time).valueOf()
    );

    let j = 0;
    console.log(j);

    if (this.type === this.recordlist[j].type) {
      const x = [
        {
          title: dayjs(newlist[j].time).format("YYYY-MM-DD"),
          total:0,
          items: [this.recordlist[j]],
        },
      ];
      console.log(JSON.stringify(x) + "000000");

      let c = 0;
      newlist
        .filter((r) => r.type == this.type)
        .sort(function (a, b) {
          if (dayjs(a.time).isSame(dayjs(b.time), "day")) {
            x[c].items.push(a);
          } else {
            c = c + 1;
            x.push({ title: dayjs(a.time).format("YYYY-MM-DD"),total:0, items: [a] });
          }
          return dayjs(b.time).valueOf() - dayjs(a.time).valueOf();
        });
      this.x=x
        x.map(r=>r.total=
        r.items.reduce(
  ( sum, cur ) => sum+cur.output,
  0
)
  )
      // return x;
    }
    while (this.type !== this.recordlist[j].type) {

      j = j + 1;
      if (this.type === this.recordlist[j].type) {
        const x = [
          {
            title: dayjs(newlist[j].time).format("YYYY-MM-DD"),
            total:0,
            items: [this.recordlist[j]],
          },
        ];

        let c = 0;
      newlist
        .filter((r) => r.type == this.type)
        .sort(function (a, b) {
          if (dayjs(a.time).isSame(dayjs(b.time), "day")) {
            x[c].items.push(a);
          } else {
            c = c + 1;
            x.push({ title: dayjs(a.time).format("YYYY-MM-DD"), total:0,items: [a] });
          }
          return dayjs(b.time).valueOf() - dayjs(a.time).valueOf();
        });

      // return x;
      this.x=x
      console.log(this.x);
      
      const t=0
      const title=''
      const titlelist: any[]=[]
        x.map(r=>r.total=
        r.items.reduce(
  ( sum, cur ) => sum+cur.output,
  0
)
  )
    
    
      }
    }
    console.log(this.x);
    
    return this.x
  }
  mounted() {
    this.nowday1 =
      this.nowday.toString().slice(11, 15) +
      "-" +
      this.nowday.toString().slice(16, 18) +
      "-" +
      this.nowday.toString().slice(8, 10);

    store.commit("fetchRecord");
    this.recordlist.forEach((i) => {
      this.oldday = JSON.stringify(i.time).slice(1, 11);
      this.total += i.output;
    });
    if (this.oldday)
      if (this.nowday1 > this.oldday) {
        this.showtime = "昨天";
      } else if (this.nowday1 == this.oldday) {
        this.showtime = "今天";
      }
  }
  beforeCreate() {
    store.commit("fetchRecord");
  }


}
</script>


<style lang="scss" scoped>
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.x ::v-deep .type-item {
  background: white;

  &.selected2 {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}
.y ::v-deep li.interval-item {
  min-height: 40px;
  line-height: 40px;
}
* {
  font-size: 17px;
  background: #e5e5e5;
}
// .hang{
//   padding:10px;
//   display: flex;
//   justify-content: space-between;
// }
// .lei{
//   //  display: flex;
//   // justify-content: space-between;
//   background: rgb(250, 247, 247);
span {
  background: white;
}
.b {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
// }
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
</style>