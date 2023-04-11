migrate((db) => {
  const collection = new Collection({
    "id": "57naufjkows2jm3",
    "created": "2023-04-10 14:48:08.492Z",
    "updated": "2023-04-10 14:48:08.492Z",
    "name": "submission",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9htazrft",
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
        "id": "umrs0jih",
        "name": "summary",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "5xhbjsbg",
        "name": "benefit",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "9nenvvjx",
        "name": "significance",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "fobasaov",
        "name": "workstream",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "6dz3asvoxfgs696",
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
  const collection = dao.findCollectionByNameOrId("57naufjkows2jm3");

  return dao.deleteCollection(collection);
})
