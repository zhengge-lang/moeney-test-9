<template>
    <div>
    <Layout>
            <!-- <Types class="x" class-prefix="qwe" :value.sync="yyy" /> -->
            <Tabs class="x" class-prefix="type"  :dataSource="recordtypeList" :value.sync="type"/>
        <Tabs class="y" class-prefix="interval"  :dataSource="intervalList" :value.sync="interval"/>
        <div class="hang" >
         

        </div>
        <ol>
        <li class="lei" v-for="(group,index) in result" :key="index">
         <h3 class="title">{{check(group.title)}}</h3>
         <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString( item.tagn)}}</span>
          <span class="b">{{item.note}}</span>
          <span>￥{{item.output}} </span>
            </li>
            </ol>
        </li>
        </ol>
        
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import  {Component} from'vue-property-decorator'
import Types from "@/components/Money/Types.vue"
import Tabs from "@/components/Tabs.vue"
import intervalList from "@/constants/intervaList"
import recordtypeList from "@/constants/recordList"
import store from "@/store/index"
import dayjs from 'dayjs'
import clone from '@/lib/clone'
@Component({

  components:{
    Types,Tabs}
})
export default class Statistics extends Vue{
      type='-'
      interval='day'
      showtime=''
      total=0
      nowday=new Date
      nowday1?: string=undefined
      oldday?: string=undefined

      intervalList=intervalList
      recordtypeList=recordtypeList
      tagString(tags: Tag[]){
        return tags.length===0?'wu':tags.join(',')
      }
      check(date: string){
        const time= new Date(date);
        // console.log(new Date(Date.parse(date)));
        const api =dayjs(date)
        
        // const y=time.getFullYear();
        // const m = time.getMonth();
        // const dd = time.getDate();
        const now = new Date();
        const now1 = dayjs();
        
        if(api.isSame(now,'day')){
          return '今天'
        }else if(api.isSame(now.valueOf()-24*3600*1000,'day')){
          return '昨天'
        }else if(api.isSame(now1.subtract(2,'day'),'day')){
          return '前天'
        }
        else {
          
          const timeyear=api.isSame(now,'year')?api.format('MM月DD日'):api.format('YYYY年MM月DD日')
          return timeyear
        }
        
        // if(now.getFullYear()===y&&now.getMonth()===m&&now.getDate()===dd){
        //   return '今天'
        // }else{
        //   return date
        // }

      }
      get recordlist(){
        return store.state.recordlist
      }
      
      get result(){
        type Items=Recorditem[]
        type HashTableValue = {title: string;items: Items}
        // const hashTable: HashTableValue[]
        // console.log(this.recordlist.map(i=>i.time));
        if(this.recordlist.length===0){return []}
        const newlist = this.recordlist.sort((a,b)=>dayjs(b.time).valueOf()-dayjs(a.time).valueOf())
        // console.log(newlist);
        const x = [{title:dayjs(newlist[0].time).format('YYYY-MM-DD'),items:[this.recordlist[0]]}]
        for(let i= 1;i<newlist.length;i++){
          const current=newlist[i];
        }
        console.log(x);
        
        return []
        // for(let i=0;i<this.recordlist.length;i++){

        //  const [date1,time1]=this.recordlist[i].time!.split('T')
        //  hashTable[date1]= hashTable[date1]||{title:date1,items:[]}
        //  hashTable[date1].items.push(this.recordlist[i] )
      
        // }
        // return hashTable;
      }
      //  hashTable:[{title:string,items:[]}]=[]
      mounted() {
        
        

        this.nowday1=this.nowday.toString().slice(11,15)+'-'+this.nowday.toString().slice(16,18)+'-'+this.nowday.toString().slice(8,10)
        
        
        store.commit('fetchRecord')
        this.recordlist.forEach((i)=>{
          this.oldday=JSON.stringify(i.time).slice(1,11) ;
          this.total+=i.output
         
          
        })
        if(this.oldday)
        if(this.nowday1>this.oldday){
          this.showtime='昨天'
        }else if(this.nowday1==this.oldday){
          this.showtime='今天'
        }
      }
      beforeCreate() {
        store.commit('fetchRecord')
        
      }
      
      // array=[{text:'按天',value:'day'},{text:'按周',value:'week'},{text:'按月',value:'month'}]
      // array2=[{text:'收入',value:'-'},{text:'支出',value:'+'}]
    }
</script>


<style lang="scss" scoped>
%item{
  padding:8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
  .x ::v-deep .type-item {
    background:white;
    
   &.selected2{
    background: #c4c4c4;

    &::after{
    display: none;

    }
    }
  }
  .y ::v-deep li.interval-item{
    min-height: 40px;
    line-height: 40px;
  }
  *{
    font-size: 17px;
    background: #E5E5E5;
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
      span{
         background: white
      }
    .b{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
    }
  // }
  .title{
    @extend %item

  }
  .record{
    background: white;
    @extend %item
  }

</style>