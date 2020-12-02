/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import recordlistmodel from "@/models/recordModel.ts"
import model from "@/models/taglistModel"
import idcreate from "@/lib/idcreator.ts"

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    count:0,
    recordlist:[] as Recorditem[],
    Taglist:[] as Tag[]
  },
  mutations: {
    increment(state,n){
      state.count+=n
    },
    fetchRecord(state,record){
      state.recordlist=JSON.parse(window.localStorage.getItem( 'recordlist') || '[]');
    },
    createRecord(state,record)  {
      // recordlistmodel.create(record)
      
        const record2: Recorditem =recordlistmodel.clone(record)
        record2.time=new Date().toISOString()
        state.recordlist.push(record2)
        window.localStorage.setItem('recordlist',JSON.stringify(state.recordlist))
   
    },
    fetchTag(state,record){
      state.Taglist=JSON.parse(window.localStorage.getItem( 'taglist') || '[]');
    },
    createTag(state,name)  {
      const id = idcreate()
      const ids: string = id.toString()
        const names = state.Taglist.map(item => item.name)
        store.commit('fetchTag') 
       
        if(names.indexOf(name)>=0){ window.alert('重复')}
        console.log(this.data);
        
        state.Taglist.push({id:ids,name:name});
        console.log(this.data);
        
        store.commit('saveTags') 
       
        window.alert('成功')

    },
    removeTag (state,id) {
      model.remove(id)
      if (model.remove(id)) {
        alert('删除成功')
      } else {
                      alert('删除失败')

      }
    },
    saveTags(state) {
      window.localStorage.setItem('taglist', JSON.stringify(state.Taglist));
    },
    updateTags (state,{id, name}) {
      //  model.update(id, name)
      
        const j= state.Taglist.map(i =>i.id )
        console.log( '拉萨酱豆腐了'+j.indexOf(id))
        if(j.indexOf(id)>=0){
            console.log(j.indexOf(id)+'chengwei')
            state.Taglist[j.indexOf(id)].name=name
            store.commit('saveTags')
            return 'success'
        }else{
            return 'not found'
        }
        
    
    }
  },

  actions: {
  },
  modules: {
  }
})

 
 console.log(store.state.count);
store.commit('increment',10)
console.log(store.state.count);

export default store