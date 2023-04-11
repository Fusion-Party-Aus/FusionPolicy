migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57naufjkows2jm3")

  collection.name = "submissions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("57naufjkows2jm3")

  collection.name = "submission"

  return dao.saveCollection(collection)
})
