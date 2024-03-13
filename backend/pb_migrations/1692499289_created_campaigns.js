migrate((db) => {
  const collection = new Collection({
    "id": "d3w55okbtluxmeo",
    "created": "2023-08-20 02:41:29.622Z",
    "updated": "2023-08-20 02:41:29.622Z",
    "name": "campaigns",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yhvakymr",
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
        "id": "vcusg3pa",
        "name": "summary",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("d3w55okbtluxmeo");

  return dao.deleteCollection(collection);
})
