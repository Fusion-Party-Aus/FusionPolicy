migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztycml4k",
    "name": "title",
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
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // remove
  collection.schema.removeField("ztycml4k")

  return dao.saveCollection(collection)
})
