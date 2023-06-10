import Button from '../common/Button';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';

import type { Todo } from '@/types/todo';

const Item: React.FC<Todo> = ({ id, isCompleted, todo, userId }) => {
  return (
    <>
      <label className='flex items-center w-full gap-4 cursor-pointer'>
        <input type='checkbox' className='hidden peer' id={`${id}`} defaultChecked={isCompleted} />
        <label
          htmlFor={`${id}`}
          className='flex w-3 h-3 border border-gray-300 rounded-full aspect-square peer-checked:bg-amber-400'
        ></label>
        <span className='w-full peer-checked:line-through peer-checked:text-gray-400'>{todo}</span>
      </label>
      <Button>
        <HiOutlinePencilAlt />
      </Button>
      <Button textColor='red'>
        <HiOutlineTrash />
      </Button>
    </>
  );
};

export default Item;
