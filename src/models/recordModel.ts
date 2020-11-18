import clone from '@/lib/clone'
const d= 'recordlist'

const model ={
    data:[] as Recorditem[],
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem( d) || '[]');
        // const x: Recorditem[]= JSON.parse(window.localStorage.getItem( d) || '[]');
        return this.data 
    },
    save(){
        window.localStorage.setItem(d,JSON.stringify(this.data))
    },
    clone(data: Recorditem|Recorditem[]){
        return JSON.parse(JSON.stringify(data))
    },
    create(record: Recorditem){
        const record2: Recorditem =clone(record)
        record2.time=new Date()
        this.data.push(record2)
    }
}
export default model