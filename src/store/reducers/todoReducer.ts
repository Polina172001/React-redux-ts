import { TodoActionTypes, TodosAction, TodoState } from "../../types/todos";

const initialState: TodoState = {
  todos: [],
  page: 1,
  limit: 10,
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodosAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.FETCH_TODOS_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
