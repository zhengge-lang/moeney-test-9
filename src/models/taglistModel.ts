const d= 'taglist'
// type Tag = {
//     id:string;
//     name:string
// }
type TagList={
    data: string[];
    fetch: () => string[];
    create: (name: string) => string;//success成功，duplicated重复
    save: () => void;
}
const model: TagList ={
    data:[],
    fetch(){
        
         this.data= JSON.parse(window.localStorage.getItem( d) || '[]');
        return this.data 
    },
    save(){
        window.localStorage.setItem(d,JSON.stringify(this.data))
    },
    // clone(data: string[]){
    //     return JSON.parse(JSON.stringify(data))
    // },
    create(name){
        if(this.data.indexOf(name)>=0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    }
}
export default model