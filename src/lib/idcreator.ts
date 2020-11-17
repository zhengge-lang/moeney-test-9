let id: number = parseInt( window.localStorage.getItem('_key')||'0')
function idcreate(){
    id++
    return id
}
export default idcreate;