let id: number = parseInt( window.localStorage.getItem('_key')||'0')
function idcreate(){
    id++
    window.localStorage.setItem('_key',id.toString())
    return id
}
export default idcreate;