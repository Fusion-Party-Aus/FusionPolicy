migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d3w55okbtluxmeo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxysvdwt",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d3w55okbtluxmeo")

  // remove
  collection.schema.removeField("dxysvdwt")

  return dao.saveCollection(collection)
})
