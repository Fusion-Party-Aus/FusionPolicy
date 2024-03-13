migrate((db) => {
  const collection = new Collection({
    "id": "bfzpkdcjin5umyh",
    "created": "2023-09-28 07:12:17.950Z",
    "updated": "2023-09-28 07:12:17.950Z",
    "name": "workstream_content_versions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kj2eorgj",
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
        "id": "x7iouykt",
        "name": "plain_text",
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
        "id": "76zs3f1i",
        "name": "rich_text",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("bfzpkdcjin5umyh");

  return dao.deleteCollection(collection);
})
