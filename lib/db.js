import { openDB } from 'idb';

const DB_NAME = 'LifeForgeLocalDB';
const STORE_NAME = 'user_files';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const saveLocalFile = async (id, fileBlob, metadata) => {
  const db = await initDB();
  return db.put(STORE_NAME, {
    id,
    file: fileBlob,
    metadata,
    createdAt: new Date().toISOString()
  });
};

export const getLocalFile = async (id) => {
  const db = await initDB();
  return db.get(STORE_NAME, id);
};
