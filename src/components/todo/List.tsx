import Item from './Item';

import useTodoContext from '@/hooks/useTodoContext';

const List = () => {
  const [todos] = useTodoContext();

  return (
    <ul className='h-full space-y-4 overflow-y-scroll'>
      {todos.map((todo) => (
        <li key={todo.id} className='flex w-full gap-2'>
          <Item {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default List;
