const d= 'taglist'
type Tag = {
    id: string;
    name: string;
}
type TagList={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success'|'duplicated';//success成功，duplicated重复
    save: () => void;
}
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
    // clone(data: string[]){
    //     return JSON.parse(JSON.stringify(data))
    // },
    create(name){
        const names = this.data.map(item => item.name)
        console.log(this.data)
        console.log(names+'111')
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.data.push({id:name,name:name})
        this.save()
        return 'success'
    }
}
export default model