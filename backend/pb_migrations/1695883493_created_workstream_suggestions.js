migrate((db) => {
  const collection = new Collection({
    "id": "fawpmcxzlxplhsj",
    "created": "2023-09-28 06:44:53.459Z",
    "updated": "2023-09-28 06:44:53.459Z",
    "name": "workstream_suggestions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "glougqgi",
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
        "id": "94ft2jvt",
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
        "id": "wm7qbffz",
        "name": "additional_information",
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
        "id": "ipgxfsat",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "accepted",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "upvpgfjb",
        "name": "response",
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
  const collection = dao.findCollectionByNameOrId("fawpmcxzlxplhsj");

  return dao.deleteCollection(collection);
})
