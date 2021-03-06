import axios from "axios";

const client = axios.create({
  baseURL: "https://ipgeolocation.abstractapi.com/v1",
});

const server = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/b464f918-cd4f-41c9-a180-3cc0e32882b4",
});

export const saveUserInfo = async (formData: any) => {
  try {
    const res = await server.post(`/UserLog`, formData);
    // console.log("RES SAVE : ", res.data);
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

export const getDetail = async () => {
  try {
    const res = await client.get(`/?api_key=df22964ae20347b0b5aaf600796e4f47`);
    if (res) {
      let data = {
        browser: navigator.appName,
        ip_address: res.data.ip_address,
        is_vpn: res.data.security.is_vpn.toString(),
        provider: `${res.data?.connection?.isp_name}  |  ${res.data?.connection?.organization_name}`,
        kota: `${res.data?.region},  ${res.data?.country}`,
        waktu: `${res.data?.timezone?.current_time}  ${res.data?.timezone?.abbreviation}`,
        user_agent: navigator.userAgent,
      };

      const save: any = await saveUserInfo(data);
      console.log("RES SAVE DATA : ", save.data);

      localStorage.setItem("userInfo", JSON.stringify(res.data));
    }
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};

export const getVisitor = async () => {
  try {
    const res = await server.get(`/UserLog`);
    return res.data;
  } catch (error: any) {
    return {
      status: error.response.status,
      message: error.response.data.message,
    };
  }
};
