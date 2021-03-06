import axios from "axios";
import { Dispatch } from "redux";
import { TodoActionTypes, TodosAction } from "../../types/todos";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке",
      });
    }
  };
};

export const setTodoPage = (page: number): TodosAction => {
  return { type: TodoActionTypes.FETCH_TODOS_PAGE, payload: page };
};
