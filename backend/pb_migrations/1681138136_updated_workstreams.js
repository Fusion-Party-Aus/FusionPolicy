migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rlufnxbl",
    "name": "blurb",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // remove
  collection.schema.removeField("rlufnxbl")

  return dao.saveCollection(collection)
})
