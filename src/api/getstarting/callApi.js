import axios from "axios";
import * as Config from "./config";

export function  CallAPI(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  }).catch((e) => {
    console.error("lỗi kết nối");
  });
}
