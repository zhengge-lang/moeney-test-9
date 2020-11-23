/* eslint-disable */
import store from '@/store/index';
import store2 from '@/store/index'

const d= 'taglist'

const model: TagList ={
    data:[] as Tag[],
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem( d) || '[]');
        console.log(this.data)
        return this.data 
    },
    save(){
        window.localStorage.setItem(d,JSON.stringify(this.data))
    },
    update(id: string,val: string){
        const j= this.data.map(i =>i.id )
        console.log( '拉萨酱豆腐了'+j.indexOf(id))
        if(j.indexOf(id)>=0){
            console.log(j.indexOf(id)+'chengwei')
            this.data[j.indexOf(id)].name=val
            this.save()
            return 'success'
        }else{
            return 'not found'
        }
        
    },
    // clone(data: string[]){
    //     return JSON.parse(JSON.stringify(data))
    // },
    create(name,id){
        const names = this.data.map(item => item.name)
        store2.commit('fetchTag') 
        console.log(this.data)
        console.log(names+'111')
        store2.state.Taglist=this.data
        if(names.indexOf(name)>=0){return 'duplicated'}
        console.log(this.data);
        
        this.data.push({id:id,name:name});
        console.log(this.data);
        
        // this.$store.commit('fetchTag') 
        this.save()
        return 'success'
    },
    remove(id){
        this.data=store2.state.Taglist
        const names = this.data.map(i =>i.id)
        console.log(this.data);
        if(names.indexOf(id)>=0){
            this.data.splice(names.indexOf(id),1)
            console.log(this.data);
            console.log('44');
            
            this.save()
        } 
        return true

    }
}

export default model