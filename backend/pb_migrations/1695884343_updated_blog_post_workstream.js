migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmb0dacs",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etlzrisk",
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
    "id": "trfkqi9r",
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
    "id": "fbqcgw1m",
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
    "id": "qul1o7nc",
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
    "id": "maormmje",
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
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a")

  // remove
  collection.schema.removeField("hpcv8idz")

  // remove
  collection.schema.removeField("dmb0dacs")

  // remove
  collection.schema.removeField("etlzrisk")

  // remove
  collection.schema.removeField("trfkqi9r")

  // remove
  collection.schema.removeField("fbqcgw1m")

  // remove
  collection.schema.removeField("qul1o7nc")

  // remove
  collection.schema.removeField("maormmje")

  return dao.saveCollection(collection)
})
