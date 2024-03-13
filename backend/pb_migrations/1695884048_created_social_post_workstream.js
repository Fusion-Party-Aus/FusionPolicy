migrate((db) => {
  const collection = new Collection({
    "id": "j1egde5htpadedx",
    "created": "2023-09-28 06:54:08.391Z",
    "updated": "2023-09-28 06:54:08.391Z",
    "name": "social_post_workstream",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aoihgrqx",
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
      },
      {
        "system": false,
        "id": "qef7owtw",
        "name": "url",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ledrkalh",
        "name": "content",
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
        "id": "f0uuk2yh",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "draft",
            "submitted",
            "approved",
            "cancelled",
            "rejected"
          ]
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
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx");

  return dao.deleteCollection(collection);
})
