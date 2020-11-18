import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from "@/components/icon.vue"
import model from "@/models/taglistModel" 
import recordlistmodel from "@/models/recordModel.ts"

import idcreate from "@/lib/idcreator.ts"


Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout',Layout)
Vue.component('Icon',Icon);

//record store
window.recordlist = recordlistmodel.fetch();
//tag store
window.tagList=model.fetch();
window.createTag = (name: string) =>{
  const id =idcreate()
           const ids: string =id.toString()
          const message= model.create(name,ids)
          if(message === 'duplicated'){
            window.alert('重复')
          }else if(message === 'success'){
            window.alert('成功')
            
          }
}
window.removeTag =(id: string)=>{
  model.remove(id)
  if(model.remove(id)){
      return true;
  }else{
      return false
  }
} 
window.update=(id: string,name: string)=>{
  return model.update(id,name)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
