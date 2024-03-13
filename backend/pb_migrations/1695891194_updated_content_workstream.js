migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  collection.name = "content_workstreams"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j1egde5htpadedx")

  collection.name = "content_workstream"

  return dao.saveCollection(collection)
})
