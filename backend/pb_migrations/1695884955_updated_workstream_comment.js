migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up68gz383c5y7cl")

  collection.name = "workstream_comments"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up68gz383c5y7cl")

  collection.name = "workstream_comment"

  return dao.saveCollection(collection)
})
