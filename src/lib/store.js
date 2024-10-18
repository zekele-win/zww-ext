import Dexie from "dexie";

function getDb() {
  // Open the DB.
  const db = new Dexie("zww");

  // Prepare the stores.
  db.version(1).stores({
    wallet: "id, data",
  });

  return db;
}

// Get data from store.
async function getData(storeName, id) {
  const db = getDb();

  // Get the store.
  const store = db.table(storeName);

  // Get the data.
  const res = await store.get(id);
  return res ? res.data : null;
}

// Put data to store.
async function putData(storeName, id, data) {
  const db = getDb();

  // Get the store.
  const store = db.table(storeName);

  await store.put({
    id: id,
    data: data,
  });
}

export default {
  getData,
  putData,
};
