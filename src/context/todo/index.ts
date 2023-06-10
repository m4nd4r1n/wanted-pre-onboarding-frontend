import { createContext } from 'react';

import type { TodoAction } from '@/reducer/todo';
import type { Todo } from '@/types/todo';

export const TodoStateContext = createContext<Todo[]>([]);
export const TodoDispatchContext = createContext<React.Dispatch<TodoAction>>(() => {});
