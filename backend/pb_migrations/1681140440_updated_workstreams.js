migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfxb9f3a",
    "name": "started",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // remove
  collection.schema.removeField("pfxb9f3a")

  return dao.saveCollection(collection)
})
