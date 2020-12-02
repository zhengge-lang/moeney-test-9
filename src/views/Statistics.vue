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
         <h3 class="title">{{group.title}}</h3>
         <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString( item.tagn)}}</span>
          <span class="b">{{item.note}}</span>
          <span>￥{{item.output}} </span>
            </li>
            </ol>
        </li>
        </ol>
        {{result}}
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
      get recordlist(){
        return store.state.recordlist
      }
      
      get result(){
        type Items=Recorditem[]
        type HashTableValue = {title: string;items: Items}
        const hashTable: {[key: string]: HashTableValue}={}
        for(let i=0;i<this.recordlist.length;i++){
        //  let date=JSON.stringify(this.recordlist[i].time).slice(1,11)
            console.log(    JSON.stringify(this.recordlist[i].time).split('T')+'woshi1');
         const [date1,time1]=this.recordlist[i].time!.split('T')
         hashTable[date1]= hashTable[date1]||{title:date1,items:[]}
         hashTable[date1].items.push(this.recordlist[i] )
         console.log(JSON.stringify( hashTable)+'woshi222');
         
        }
        return hashTable;
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