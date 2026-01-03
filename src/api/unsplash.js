import axios from "axios";

export const fetchImages = async () => {
  const res = await axios.get("https://api.unsplash.com/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
    },
    params: {
      per_page: 12,
    },
  });

  return res.data;
};
