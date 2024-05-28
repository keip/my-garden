import { Plant } from '../../types'
import { ADD_PLANT, GET_PLANTS, PlantActionTypes, WATER_PLANT } from './constants/index.ts';

const initialState: Plant[] = [];

const plantsReducer = (
  state = initialState,
  action: PlantActionTypes,
) => {
  switch (action.type) {
    case GET_PLANTS:
      return action.payload;
    case ADD_PLANT:
      return action.payload;
    case WATER_PLANT:
      return action.payload;
    default:
      return state;
  }
};

export default plantsReducer;
