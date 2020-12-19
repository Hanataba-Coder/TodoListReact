import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO_SUCCESS,
  EDIT_LOADING,
} from './type';

const initialState = {
  todo: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        loading: false,
      };
    case EDIT_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
