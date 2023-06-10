import type { Todo } from '@/types/todo';

const ACTION = {
  ADD: 'todo/ADD',
  DELETE: 'todo/DELETE',
  UPDATE: 'todo/UPDATE',
  SET: 'todo/SET',
} as const;

export const addTodoBy = (todo: Todo) => ({ type: ACTION.ADD, payload: todo });
export const updateTodoBy = (todo: Todo) => ({ type: ACTION.UPDATE, payload: todo });
export const deleteTodoBy = (id: number) => ({ type: ACTION.DELETE, payload: { id } });
export const setTodosBy = (todos: Todo[]) => ({ type: ACTION.SET, payload: todos });

export type TodoAction =
  | ReturnType<typeof addTodoBy>
  | ReturnType<typeof updateTodoBy>
  | ReturnType<typeof deleteTodoBy>
  | ReturnType<typeof setTodosBy>;

const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case ACTION.ADD: {
      const updatedTodos = [...state, action.payload];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case ACTION.DELETE: {
      const updatedTodos = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case ACTION.UPDATE: {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case ACTION.SET: {
      localStorage.setItem('todos', JSON.stringify(action.payload));
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
