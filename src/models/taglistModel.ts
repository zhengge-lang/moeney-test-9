const d= 'taglist'

const model: TagList ={
    data:[],
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
        console.log(this.data)
        console.log(names+'111')
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.data.push({id:id,name:name})
        this.save()
        return 'success'
    },
    remove(id){
        const names = this.data.map(i =>i.id)
        if(names.indexOf(id)>=0){
            this.data.splice(names.indexOf(id),1)
            this.save()
        } 
        return true

    }
}
export default model