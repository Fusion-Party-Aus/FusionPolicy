migrate((db) => {
  const collection = new Collection({
    "id": "yt2fjtgn5epytl1",
    "created": "2023-08-20 10:24:49.988Z",
    "updated": "2023-08-20 10:24:49.988Z",
    "name": "policy_groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ueltsdzv",
        "name": "title",
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
        "id": "hghynedh",
        "name": "summary",
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
        "id": "zxp6vwle",
        "name": "portfolios",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "2e2d5f2tedx4358",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "woppzcsn",
        "name": "campaigns",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "d3w55okbtluxmeo",
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
  const collection = dao.findCollectionByNameOrId("yt2fjtgn5epytl1");

  return dao.deleteCollection(collection);
})
