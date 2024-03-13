migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "by3skdzv",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // remove
  collection.schema.removeField("by3skdzv")

  return dao.saveCollection(collection)
})
