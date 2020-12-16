<template>
    <div>
    <Layout>
            <!-- <Types class="x" class-prefix="qwe" :value.sync="yyy" /> -->
            <Tabs class="x" class-prefix="type"  :dataSource="recordtypeList" :value.sync="yyy"/>
        <Tabs class="y" class-prefix="interval"  :dataSource="intervalList" :value.sync="day1"/>
        <div class="hang" >
          <span>{{showtime}}</span>
          <span>{{total}}</span>

        </div>
        <div class="lei" v-for="item in recordlist" :key="item.output">
         
          <span v-for="it in item.tagn" :key="it">{{it}}</span>
          <span class="b">{{item.note}}</span>
          <span>{{item.output}}</span>
          
        </div>
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
      yyy='-'
      day1='day'
      showtime=''
      total=0
      nowday=new Date
      nowday1?: string=undefined
      oldday?: string=undefined

      intervalList=intervalList
      recordtypeList=recordtypeList
      recordlist=store.state.recordlist
      mounted() {
        
     
        
        
        this.nowday1=this.nowday.toString().slice(11,15)+'-'+this.nowday.toString().slice(16,18)+'-'+this.nowday.toString().slice(8,10)
        
        
        store.commit('fetchRecord')
        store.state.recordlist.forEach((i)=>{
          this.oldday=JSON.stringify(i.time).slice(1,11) ;
          console.log(JSON.stringify(i.output));
          this.total+=i.output
          console.log(this.nowday);
          console.log(this.oldday);
          
          
    const str=`abdcadfasfdbadfafdasdfasyweroweurowqrewqrwqrebwqrewqrejwq`
     const hash={}
    for(let i=0;i<str.length;i++){
      const key=str[i];
                          let   value;
      console.log(value)  ; 
   }
    console.log(hash)
          console.log(this.nowday1==this.oldday);
          
        })
        if(this.oldday)
        if(this.nowday1>this.oldday){
          this.showtime='昨天'
        }else if(this.nowday1==this.oldday){
          this.showtime='今天'
        }
      }
      
      created() {
        
     
        
        
        this.nowday1=this.nowday.toString().slice(11,15)+'-'+this.nowday.toString().slice(16,18)+'-'+this.nowday.toString().slice(8,10)
        
        
        store.commit('fetchRecord')
        store.state.recordlist.forEach((i)=>{
          this.oldday=JSON.stringify(i.time).slice(1,11) ;
          console.log(JSON.stringify(i.output));
          this.total+=i.output
          console.log(this.nowday);
          console.log(this.oldday);
          
          
          console.log(this.nowday1==this.oldday);
          
        })
        if(this.oldday)
        if(this.nowday1>this.oldday){
          this.showtime='昨天'
        }else if(this.nowday1==this.oldday){
          this.showtime='今天'
        }
      }
      // array=[{text:'按天',value:'day'},{text:'按周',value:'week'},{text:'按月',value:'month'}]
      // array2=[{text:'收入',value:'-'},{text:'支出',value:'+'}]
    }
</script>


<style lang="scss" scoped>
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
  .hang{
    padding:10px;
    display: flex;
    justify-content: space-between;
  }
  .lei{
    padding:10px;
     display: flex;
    justify-content: space-between;
    background: rgb(250, 247, 247);
      span{
         background: rgb(250, 247, 247);
      }
    .b{
      margin-right: 171px;
    }
  }

</style>