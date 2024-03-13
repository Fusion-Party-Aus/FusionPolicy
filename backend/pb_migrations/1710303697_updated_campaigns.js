migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d3w55okbtluxmeo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xoerduly",
    "name": "active",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d3w55okbtluxmeo")

  // remove
  collection.schema.removeField("xoerduly")

  return dao.saveCollection(collection)
})
