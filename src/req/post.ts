import axios from "axios";

const client = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/b464f918-cd4f-41c9-a180-3cc0e32882b4",
});

export const getAllPost = async () => {
  try {
    const res = await client.get(`/Post`);
    return res.data;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
