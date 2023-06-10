import { useContext } from 'react';

import { TodoDispatchContext, TodoStateContext } from '@/context/todo';

const useTodoContext = () => {
  const context = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error('TodoContext not found');
  }
  if (!dispatch) {
    throw new Error('TodoDispatchContext not found');
  }

  return [context, dispatch] as const;
};

export default useTodoContext;
