migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  collection.name = "content_workstream"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chpk6qp2",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "blog",
        "position_statement",
        "social_post"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tzyoeiz0",
    "name": "authors",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  collection.name = "social_post_workstream"

  // remove
  collection.schema.removeField("chpk6qp2")

  // remove
  collection.schema.removeField("tzyoeiz0")

  return dao.saveCollection(collection)
})
