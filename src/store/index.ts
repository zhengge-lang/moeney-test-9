import Vue from 'vue'
import Vuex from 'vuex'
import recordlistmodel from "@/models/recordModel.ts"

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    count:0,
    recordlist:[] as Recorditem[],
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