migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c12gl0jwkj6dn5a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "c12gl0jwkj6dn5a",
    "created": "2023-09-28 06:55:10.946Z",
    "updated": "2023-09-28 07:13:56.139Z",
    "name": "blog_post_workstream",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sadzhipw",
        "name": "suggestion",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "fawpmcxzlxplhsj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "dmb0dacs",
        "name": "authors",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "etlzrisk",
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
        "id": "trfkqi9r",
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
        "id": "fbqcgw1m",
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
        "id": "qul1o7nc",
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
      },
      {
        "system": false,
        "id": "maormmje",
        "name": "categories",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "krlzoiyodh78nq9",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "glxmlysx",
        "name": "comments",
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
        "id": "yaoasmuo",
        "name": "content_versions",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bfzpkdcjin5umyh",
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
})
