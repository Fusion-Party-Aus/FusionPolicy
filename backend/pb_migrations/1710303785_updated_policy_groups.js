migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccqhh9rc",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtr8vbc0",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // remove
  collection.schema.removeField("ccqhh9rc")

  // remove
  collection.schema.removeField("dtr8vbc0")

  return dao.saveCollection(collection)
})
