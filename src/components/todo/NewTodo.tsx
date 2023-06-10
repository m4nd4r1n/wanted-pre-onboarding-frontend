import Button from '../common/Button';
import { HiPlus } from 'react-icons/hi';


const NewTodo = () => {
  return (
    <div className='flex'>
      <input
        type='text'
        className='w-full border-b outline-none'
        placeholder='새로운 TODO를 입력하세요.'
      />
      <Button textColor='amber'>
        <HiPlus />
      </Button>
    </div>
  );
};

export default NewTodo;
