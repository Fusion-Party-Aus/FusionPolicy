migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki")

  // remove
  collection.schema.removeField("sqgvaiu2")

  // remove
  collection.schema.removeField("wbts1jts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anh8bcf6",
    "name": "submission",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "57naufjkows2jm3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddi3gfqv",
    "name": "url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sqgvaiu2",
    "name": "snippet",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbts1jts",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("anh8bcf6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddi3gfqv",
    "name": "link",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
