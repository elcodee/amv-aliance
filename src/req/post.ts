import axios from "axios";

const client = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/b464f918-cd4f-41c9-a180-3cc0e32882b4",
});

export const getAllPost = async () => {
  try {
    const res = await client.get(`/Post?$sort[sort]=-1`);
    return res.data;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

export const getPostByID = async (id: any) => {
  try {
    const res = await client.get(`/Post/${id}`);
    // console.log("RESSSS : ", res.data);
    
    const obj = {
      ...res.data,
      cover: res.data.cover ? res.data.cover[0].url : '',
      img_1: res.data.img_1 ? res.data.img_1[0].url : '',
      img_2: res.data.img_2 ? res.data.img_2[0].url : '',
      img_3: res.data.img_3 ? res.data.img_3[0].url : '',
      img_4: res.data.img_4 ? res.data.img_4[0].url : '',
      img_5: res.data.img_5 ? res.data.img_5[0].url : '',
      img_6: res.data.img_6 ? res.data.img_6[0].url : '',
    }
    return obj;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
