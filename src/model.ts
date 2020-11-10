const d= 'recordlist'
const model ={
    fetch(){
        
        const x: Recorditem[]= JSON.parse(window.localStorage.getItem( d) || '[]');
        return x 
    },
    save(data: Recorditem[]){
        window.localStorage.setItem(d,JSON.stringify(data))
    },
    clone(data: Recorditem|Recorditem[]){
        return JSON.parse(JSON.stringify(data))
    }
}
export default model