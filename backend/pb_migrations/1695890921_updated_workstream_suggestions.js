migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efz4jzwt",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "position_request",
        "consider_resource"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efz4jzwt",
    "name": "selection_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "position_request",
        "consider_resource"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
