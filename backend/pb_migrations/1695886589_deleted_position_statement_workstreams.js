migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nwsjckml6iha1lr");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nwsjckml6iha1lr",
    "created": "2023-09-28 07:18:05.241Z",
    "updated": "2023-09-28 07:18:05.241Z",
    "name": "position_statement_workstreams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3fitp4k6",
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
        "id": "cw6mdh3h",
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
        "id": "0icysklp",
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
        "id": "t1ly48ps",
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
        "id": "rb5tghrj",
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
        "id": "rkp7rkkp",
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
        "id": "ywatn7ns",
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
        "id": "nto3eawp",
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
