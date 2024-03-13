migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e2d5f2tedx4358")

  // remove
  collection.schema.removeField("nt5bjgxq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzokhnld",
    "name": "summary",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e2d5f2tedx4358")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nt5bjgxq",
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

  // remove
  collection.schema.removeField("hzokhnld")

  return dao.saveCollection(collection)
})
