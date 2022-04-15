import axios from "axios";

const client = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/b464f918-cd4f-41c9-a180-3cc0e32882b4",
});

export const getAdminAccess = async (id: string, pin: any) => {
  try {
    const res = await client.get(`/admin?id_lm=${id}&pin=${pin}`);
    return res.data;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
