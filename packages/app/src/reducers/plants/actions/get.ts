import { GET_PLANTS } from "../constants/index.ts";
import axios, { AxiosResponse } from "axios";

const getAction = (res: AxiosResponse) => {
  if (res.status === 200) {
    return {
      type: GET_PLANTS,
      payload: res.data.plants,
    };
  } else {
    console.error(res.statusText);
  }
};

const get = (): any => {
  return async (dispatch: any) => {
    return axios
      .get("http://localhost:3333/plants")
      .then((res: AxiosResponse) => dispatch(getAction(res)));
  };
};

export default get;
