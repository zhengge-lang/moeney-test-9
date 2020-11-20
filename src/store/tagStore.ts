import model from "@/models/taglistModel"

import idcreate from "@/lib/idcreator.ts"
export default {
    tagList: model.fetch(),
    createTag: (name: string) => {
      const id = idcreate()
      const ids: string = id.toString()
      const message = model.create(name, ids)
      if (message === 'duplicated') {
        window.alert('重复')
      } else if (message === 'success') {
        window.alert('成功')
  
      }
    },
    removeTag: (id: string) => {
      model.remove(id)
      if (model.remove(id)) {
        return true;
      } else {
        return false
      }
    },
    update: (id: string, name: string) => {
      return model.update(id, name)
    }
}