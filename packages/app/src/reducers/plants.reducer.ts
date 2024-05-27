import { Plant } from '../types'

type PlantsReducerActions = 'SET_PLANTS';

const initialState: Plant[] = [];

const plantsReducer = (
  state = initialState,
  action: {
    type: PlantsReducerActions;
    payload: Plant[];
  },
) => {
  switch (action.type) {
    case "SET_PLANTS":
      return action.payload;
    default:
      return state;
  }
};

export default plantsReducer;
