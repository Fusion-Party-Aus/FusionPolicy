migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-04-10 14:06:38.332Z",
      "updated": "2023-04-10 14:06:38.334Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "krlzoiyodh78nq9",
      "created": "2023-04-10 14:08:54.419Z",
      "updated": "2023-04-10 14:48:28.540Z",
      "name": "categories",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "egzoddvz",
          "name": "name",
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
    },
    {
      "id": "v7hv216dajbp9tb",
      "created": "2023-04-10 14:09:35.747Z",
      "updated": "2023-04-10 14:48:22.465Z",
      "name": "topics",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "obcjg6f0",
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
          "id": "zkobsext",
          "name": "category",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "krlzoiyodh78nq9",
            "cascadeDelete": false,
            "minSelect": 1,
            "maxSelect": null,
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
    },
    {
      "id": "6dz3asvoxfgs696",
      "created": "2023-04-10 14:42:27.210Z",
      "updated": "2023-04-10 15:27:20.566Z",
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
          "id": "rlufnxbl",
          "name": "blurb",
          "type": "editor",
          "required": false,
          "unique": false,
          "options": {}
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
        },
        {
          "system": false,
          "id": "pfxb9f3a",
          "name": "started",
          "type": "date",
          "required": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
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
    },
    {
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
    },
    {
      "id": "57naufjkows2jm3",
      "created": "2023-04-10 14:48:08.492Z",
      "updated": "2023-04-10 15:52:27.964Z",
      "name": "submissions",
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
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
