migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mvidrygn",
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
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // remove
  collection.schema.removeField("mvidrygn")

  return dao.saveCollection(collection)
})
