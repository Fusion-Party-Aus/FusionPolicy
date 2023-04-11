migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7hv216dajbp9tb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zkobsext",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "krlzoiyodh78nq9",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7hv216dajbp9tb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zkobsext",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "krlzoiyodh78nq9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
