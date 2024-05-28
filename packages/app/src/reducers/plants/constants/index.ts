import { Plant } from "../../../types";

export const GET_PLANTS = 'GET_PLANTS';
export const ADD_PLANT = 'ADD_PLANT';
export const WATER_PLANT = 'WATER_PLANT';

export interface GetPlantsAction {
	type: typeof GET_PLANTS;
	payload: {
		plants: Plant[];
	};
}
export interface AddPlantAction {
	type: typeof ADD_PLANT;
	payload: {
		plants: Plant[];
	};
}

export interface WaterPlantAction {
	type: typeof WATER_PLANT;
	payload: {
		plants: Plant[];
	};
}

export type PlantActionTypes =
	| GetPlantsAction
	| AddPlantAction
	| WaterPlantAction;
