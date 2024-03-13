migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xt6l1ddk",
    "name": "policy_groups",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "yt2fjtgn5epytl1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9")

  // remove
  collection.schema.removeField("xt6l1ddk")

  return dao.saveCollection(collection)
})
