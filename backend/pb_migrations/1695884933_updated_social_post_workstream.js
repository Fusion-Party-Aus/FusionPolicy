migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujbltn0x",
    "name": "comments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "up68gz383c5y7cl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // remove
  collection.schema.removeField("ujbltn0x")

  return dao.saveCollection(collection)
})
