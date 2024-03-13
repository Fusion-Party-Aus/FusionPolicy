migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // remove
  collection.schema.removeField("ledrkalh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h2behcln",
    "name": "content_versions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bfzpkdcjin5umyh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ledrkalh",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("h2behcln")

  return dao.saveCollection(collection)
})
