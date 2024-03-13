migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glxmlysx",
    "name": "comments",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a")

  // remove
  collection.schema.removeField("glxmlysx")

  return dao.saveCollection(collection)
})
