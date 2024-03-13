migrate((db) => {
  const collection = new Collection({
    "id": "9rp55dqy9d0oq3z",
    "created": "2023-08-20 02:41:29.622Z",
    "updated": "2023-08-20 02:41:29.622Z",
    "name": "values",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irsdy7ed",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9rp55dqy9d0oq3z");

  return dao.deleteCollection(collection);
})
