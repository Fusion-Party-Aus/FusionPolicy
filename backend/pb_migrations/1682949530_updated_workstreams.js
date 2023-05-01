migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frt22tmi",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Problem Identification",
        "Outcome Identification",
        "Implementation"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frt22tmi",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Problem Identification",
        "Solution Identification",
        "Implementation"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
