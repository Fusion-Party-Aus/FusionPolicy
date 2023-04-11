migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7hv216dajbp9tb")

  collection.name = "topics"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7hv216dajbp9tb")

  collection.name = "topic"

  return dao.saveCollection(collection)
})
