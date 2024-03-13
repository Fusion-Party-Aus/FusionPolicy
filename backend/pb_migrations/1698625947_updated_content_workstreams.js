migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n5w8haol",
    "name": "google_doc",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // remove
  collection.schema.removeField("n5w8haol")

  return dao.saveCollection(collection)
})
