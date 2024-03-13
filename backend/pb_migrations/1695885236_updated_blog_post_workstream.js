migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a")

  // remove
  collection.schema.removeField("hpcv8idz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yaoasmuo",
    "name": "content_versions",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bfzpkdcjin5umyh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpcv8idz",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yaoasmuo")

  return dao.saveCollection(collection)
})
