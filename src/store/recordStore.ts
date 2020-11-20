import recordlistmodel from "@/models/recordModel.ts"

export default {
    recordlist: recordlistmodel.fetch(),
    createRecord : (record: Recorditem) => {
      recordlistmodel.create(record)
    },
}