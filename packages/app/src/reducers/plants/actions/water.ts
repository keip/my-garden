import { WATER_PLANT } from "../constants/index.ts";
import axios, { AxiosResponse } from "axios";

const waterAction = (res: AxiosResponse) => {
  if (res.status === 200) {
    return {
      type: WATER_PLANT,
      payload: res.data.plants,
    };
  } else {
    console.error(res.statusText);
  }
};

const water = (plantId: number): any => {
  return async (dispatch: any) => {
    return axios
      .put(`http://localhost:3333/plants/${plantId}/water`)
      .then((res: AxiosResponse) => dispatch(waterAction(res)));
  };
};

export default water;
