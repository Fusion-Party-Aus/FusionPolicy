migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57naufjkows2jm3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rkce1bn",
    "name": "outcome_vision",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foxjb8gk",
    "name": "outcome_specifics",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdamvp5f",
    "name": "outcome_changes",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewxark17",
    "name": "outcome_impacts",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r8fj5ok9",
    "name": "outcome_metrics",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ertsjfqi",
    "name": "outcome_stakeholders",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57naufjkows2jm3")

  // remove
  collection.schema.removeField("8rkce1bn")

  // remove
  collection.schema.removeField("foxjb8gk")

  // remove
  collection.schema.removeField("sdamvp5f")

  // remove
  collection.schema.removeField("ewxark17")

  // remove
  collection.schema.removeField("r8fj5ok9")

  // remove
  collection.schema.removeField("ertsjfqi")

  return dao.saveCollection(collection)
})
