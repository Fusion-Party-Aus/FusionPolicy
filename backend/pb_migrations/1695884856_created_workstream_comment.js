migrate((db) => {
  const collection = new Collection({
    "id": "up68gz383c5y7cl",
    "created": "2023-09-28 07:07:36.690Z",
    "updated": "2023-09-28 07:07:36.690Z",
    "name": "workstream_comment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6wrtflqq",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ttoalpcr",
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
        "id": "tmvqpy8t",
        "name": "deleted",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hef6wzdi",
        "name": "deleted_reason",
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
  const collection = dao.findCollectionByNameOrId("up68gz383c5y7cl");

  return dao.deleteCollection(collection);
})
