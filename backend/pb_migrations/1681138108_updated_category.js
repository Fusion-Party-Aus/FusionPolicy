migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("krlzoiyodh78nq9")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("krlzoiyodh78nq9")

  collection.name = "category"

  return dao.saveCollection(collection)
})
