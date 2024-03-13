migrate((db) => {
  const collection = new Collection({
    "id": "ys2o4xu37oganuw",
    "created": "2023-10-30 00:32:27.749Z",
    "updated": "2023-10-30 00:32:27.749Z",
    "name": "comment_likes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7kcprvmp",
        "name": "comment",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "up68gz383c5y7cl",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vfcwxu2n",
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
        "id": "t44n9nts",
        "name": "active",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_4bvbv7O` ON `comment_likes` (\n  `comment`,\n  `user`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ys2o4xu37oganuw");

  return dao.deleteCollection(collection);
})
