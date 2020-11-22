import recordStore from './recordStore'
import tagStore from './tagStore'

//1.全局变量太多 2.过多依赖window //3.书写模块不统一
 const store = {
    count:0,
    addcount(){
      this.count++
      console.log( this.count)
    },
    //record store
    // ...recordStore,
  
    //tag store
    ...tagStore
  }
  export default store