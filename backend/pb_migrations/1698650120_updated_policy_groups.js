migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovzdfy4o",
    "name": "summary",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hghynedh",
    "name": "summary_old",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // remove
  collection.schema.removeField("ovzdfy4o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hghynedh",
    "name": "summary",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
