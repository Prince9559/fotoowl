import { init } from "@instantdb/react";

export const db = init({
  appId: process.env.REACT_APP_INSTANTDB_APP_ID,
});
