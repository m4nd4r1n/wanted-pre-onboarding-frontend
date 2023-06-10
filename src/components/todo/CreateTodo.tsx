import Button from '../common/Button';
import { HiPlus } from 'react-icons/hi';

import { TEST_IDS } from '@/constants/test-ids';

const { NEW_TODO_INPUT, NEW_TODO_ADD_BUTTON } = TEST_IDS;

const CreateTodo = () => {
  return (
    <form className='flex' onSubmit={onSubmit}>
      <input
        type='text'
        name='newTodo'
        className='w-full border-b outline-none'
        placeholder='새로운 TODO를 입력하세요.'
        data-testid={NEW_TODO_INPUT}
      />
      <Button type='submit' textColor='amber' testid={NEW_TODO_ADD_BUTTON}>
        <HiPlus />
      </Button>
    </form>
  );
};

export default CreateTodo;
