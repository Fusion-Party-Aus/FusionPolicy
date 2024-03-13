migrate((db) => {
  const collection = new Collection({
    "id": "2e2d5f2tedx4358",
    "created": "2023-08-20 02:41:29.622Z",
    "updated": "2023-08-20 02:41:29.622Z",
    "name": "portfolios",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dvsja6dj",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nt5bjgxq",
        "name": "summary",
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
  const collection = dao.findCollectionByNameOrId("2e2d5f2tedx4358");

  return dao.deleteCollection(collection);
})
