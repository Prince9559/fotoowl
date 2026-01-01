import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
});

export const fetchImages = async (page = 1) => {
  const res = await unsplash.get("/photos", {
    params: {
      page,
      per_page: 16,
    },
  });
  return res.data;
};
