migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aed7o1aa",
    "name": "topics",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "v7hv216dajbp9tb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsxeh0xv",
    "name": "portfolios",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2e2d5f2tedx4358",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "javlakbn",
    "name": "values",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9rp55dqy9d0oq3z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c3in1dlq",
    "name": "campaigns",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "d3w55okbtluxmeo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbf1knrs",
    "name": "categories",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  // remove
  collection.schema.removeField("aed7o1aa")

  // remove
  collection.schema.removeField("hsxeh0xv")

  // remove
  collection.schema.removeField("javlakbn")

  // remove
  collection.schema.removeField("c3in1dlq")

  // remove
  collection.schema.removeField("dbf1knrs")

  return dao.saveCollection(collection)
})
