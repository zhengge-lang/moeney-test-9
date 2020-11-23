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
      recordlistmodel.create(record)
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
        return true;
      } else {
        return false
      }
    },
    saveTags(state) {
      window.localStorage.setItem('taglist', JSON.stringify(state.Taglist));
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