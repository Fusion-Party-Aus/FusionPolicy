migrate((db) => {
  const collection = new Collection({
    "id": "hsgeni1i3zdh2ki",
    "created": "2023-04-10 14:44:06.787Z",
    "updated": "2023-04-10 14:44:06.787Z",
    "name": "sources",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sqgvaiu2",
        "name": "snippet",
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
        "id": "wbts1jts",
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
        "id": "ddi3gfqv",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("hsgeni1i3zdh2ki");

  return dao.deleteCollection(collection);
})
