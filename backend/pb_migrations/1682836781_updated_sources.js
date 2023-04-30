migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anh8bcf6",
    "name": "submission",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "57naufjkows2jm3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anh8bcf6",
    "name": "submission",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "57naufjkows2jm3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
