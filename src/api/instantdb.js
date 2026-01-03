import { init } from "@instantdb/react";

const db = init({
  appId: process.env.REACT_APP_INSTANTDB_APP_ID,
});

export default db;
