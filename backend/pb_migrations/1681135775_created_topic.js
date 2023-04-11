migrate((db) => {
  const collection = new Collection({
    "id": "v7hv216dajbp9tb",
    "created": "2023-04-10 14:09:35.747Z",
    "updated": "2023-04-10 14:09:35.747Z",
    "name": "topic",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "obcjg6f0",
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
        "id": "zkobsext",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("v7hv216dajbp9tb");

  return dao.deleteCollection(collection);
})
