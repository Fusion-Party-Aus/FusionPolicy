migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwoyga6g",
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

  // remove
  collection.schema.removeField("iwoyga6g")

  return dao.saveCollection(collection)
})
