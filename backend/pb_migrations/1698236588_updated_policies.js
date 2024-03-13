migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "teizjbvh",
    "name": "details",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // remove
  collection.schema.removeField("teizjbvh")

  return dao.saveCollection(collection)
})
