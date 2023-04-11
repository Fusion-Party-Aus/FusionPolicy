migrate((db) => {
  const collection = new Collection({
    "id": "6dz3asvoxfgs696",
    "created": "2023-04-10 14:42:27.210Z",
    "updated": "2023-04-10 14:42:27.210Z",
    "name": "workstreams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ornehfex",
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
        "id": "vdf2h6ee",
        "name": "topics",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "v7hv216dajbp9tb",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "frt22tmi",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Problem Identification",
            "Solution Identification",
            "Implementation"
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
  const collection = dao.findCollectionByNameOrId("6dz3asvoxfgs696");

  return dao.deleteCollection(collection);
})
