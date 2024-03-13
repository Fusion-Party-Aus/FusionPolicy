migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // remove
  collection.schema.removeField("c8mawi7t")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8mawi7t",
    "name": "campaigns",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "d3w55okbtluxmeo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
