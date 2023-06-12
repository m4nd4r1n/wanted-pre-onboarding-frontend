import Button from '../common/Button';
import { HiPlus } from 'react-icons/hi';

import { TEST_IDS } from '@/constants/test-ids';
import useTodoContext from '@/hooks/useTodoContext';
import { createTodo } from '@/libs/api/todo';
import { apiErrorToast, successToast } from '@/libs/toast';
import { addTodoBy } from '@/reducer/todo';

const { NEW_TODO_INPUT, NEW_TODO_ADD_BUTTON } = TEST_IDS;

const CreateTodo = () => {
  const [, dispatch] = useTodoContext();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const { target } = event;
    const newTodoInput = (target as HTMLFormElement).elements.namedItem(
      'newTodo',
    ) as HTMLInputElement;
    const todo = newTodoInput.value;

    if (!todo) return;

    try {
      const newTodo = await createTodo(todo);
      dispatch(addTodoBy(newTodo));
      newTodoInput.value = '';
      successToast(`추가되었습니다.`);
    } catch (e) {
      apiErrorToast(e);
    }
  };

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
