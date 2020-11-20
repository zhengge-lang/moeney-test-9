/* eslint-disable */
type Recorditem ={
    tagn: string[];
    note: string;
    type: string;
    output: number;
    time?: Date;
  }
 
  type Tag = {
    id: string;
    name: string;
}
type TagList={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string,id: string) => 'success'|'duplicated';//success成功，duplicated重复
    save: () => void;
    update: (id: string,val: string) => 'success'|'not found'|'duplicated';
    remove: (id: string) => boolean;
}
interface window{
  createTag: (name: string) => void;
  tagList: Tag[];
}
declare interface Window {
  store:{
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  update: (id: string,name: string) => 'success'|'not found'|'duplicated';
  recordlist: Recorditem[];
  createRecord:(record:Recorditem) =>void
}
}