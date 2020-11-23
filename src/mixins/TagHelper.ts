import store2 from '@/store/index' 
import Vue from 'vue'
import Component from 'vue-class-component'
import component from 'vue-class-component'
@Component
export class TagHelper extends Vue{
    submit(){
        console.log('hao');
        
        const name = window.prompt('请输入标签名') as string
        if(name){
          store2.commit( 'createTag',name)
        }
      }
}