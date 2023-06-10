import Item from './Item';

const MOCK_TODOS = Array(20)
  .fill(0)
  .map((_, index) => ({ id: index, todo: 'test', isCompleted: index % 2 === 0, userId: 1 }));

const List = () => {
  return (
    <ul className='h-full space-y-4 overflow-y-scroll'>
      {MOCK_TODOS.map((todo) => (
        <li key={todo.id} className='flex gap-2'>
          <Item {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default List;
