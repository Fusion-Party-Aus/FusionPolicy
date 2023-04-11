migrate((db) => {
  const collection = new Collection({
    "id": "krlzoiyodh78nq9",
    "created": "2023-04-10 14:08:54.419Z",
    "updated": "2023-04-10 14:08:54.419Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "egzoddvz",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("krlzoiyodh78nq9");

  return dao.deleteCollection(collection);
})
