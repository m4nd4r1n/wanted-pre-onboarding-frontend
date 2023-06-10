import { useEffect, useReducer } from 'react';

import { TodoDispatchContext, TodoStateContext } from '.';

import { STORAGE_KEY } from '@/constants/storage-key';
import { getTodos } from '@/libs/api/todo';
import todoReducer, { setTodosBy } from '@/reducer/todo';
import type { Todo } from '@/types/todo';

interface TodoProviderProps {
  children: React.ReactNode;
}

const { TODOS } = STORAGE_KEY;

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const initialState: Todo[] = JSON.parse(localStorage.getItem(TODOS) ?? '[]');
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    getTodos().then((todos) => dispatch(setTodosBy(todos)));
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
