migrate((db) => {
  const collection = new Collection({
    "id": "lp4qu2bawmrq0k9",
    "created": "2023-08-20 02:41:29.622Z",
    "updated": "2023-08-20 02:41:29.622Z",
    "name": "policies",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pgtulbbq",
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
        "id": "bxjdrijy",
        "name": "summary",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "nxyoc68r",
        "name": "portfolios",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "2e2d5f2tedx4358",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "6s19ebyp",
        "name": "values",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "9rp55dqy9d0oq3z",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "c8mawi7t",
        "name": "campaigns",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "d3w55okbtluxmeo",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lp4qu2bawmrq0k9");

  return dao.deleteCollection(collection);
})
