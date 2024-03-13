migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up68gz383c5y7cl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oaymy1b6",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "up68gz383c5y7cl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cspqyakd",
    "name": "likes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ys2o4xu37oganuw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up68gz383c5y7cl")

  // remove
  collection.schema.removeField("oaymy1b6")

  // remove
  collection.schema.removeField("cspqyakd")

  return dao.saveCollection(collection)
})
