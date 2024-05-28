import { Plant } from '../../../types';
import { ADD_PLANT } from '../constants/index.ts';
import axios, { AxiosResponse } from 'axios';

const addRequest = (plant: Plant) => {
	return axios.post("http://localhost:3333/plants", {
		plant
	});
};

const addAction = (res: AxiosResponse) => {
	if (res.status === 200) {
		return {
			type: ADD_PLANT,
			payload: res.data.plants,
		};
	} else {
		console.error(res.statusText);
	}
};

const add = (plant: Plant): any => {
	return async (dispatch: any) => {
		return addRequest(plant).then((res: AxiosResponse) => dispatch(addAction(res)));
	};
};

export default add;
