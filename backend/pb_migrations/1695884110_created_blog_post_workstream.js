migrate((db) => {
  const collection = new Collection({
    "id": "c12gl0jwkj6dn5a",
    "created": "2023-09-28 06:55:10.946Z",
    "updated": "2023-09-28 06:55:10.946Z",
    "name": "blog_post_workstream",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sadzhipw",
        "name": "suggestion",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "fawpmcxzlxplhsj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a");

  return dao.deleteCollection(collection);
})
