migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // remove
  collection.schema.removeField("zxp6vwle")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "woppzcsn",
    "name": "campaigns",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "d3w55okbtluxmeo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxp6vwle",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "woppzcsn",
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

  return dao.saveCollection(collection)
})
