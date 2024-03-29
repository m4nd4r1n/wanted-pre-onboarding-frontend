import { useState } from 'react';

import Button from '../common/Button';
import classNames from 'classnames';
import { toast } from 'react-hot-toast';
import { HiCheck, HiOutlinePencilAlt, HiOutlineTrash, HiX } from 'react-icons/hi';

import { TEST_IDS } from '@/constants/test-ids';
import useTodoContext from '@/hooks/useTodoContext';
import { deleteTodo, updateTodo } from '@/libs/api/todo';
import { apiErrorToast, successToast } from '@/libs/toast';
import { deleteTodoBy, updateTodoBy } from '@/reducer/todo';
import type { Todo } from '@/types/todo';

type ItemProps = Omit<Todo, 'userId'>;

const { CANCEL_BUTTON, DELETE_BUTTON, MODIFY_BUTTON, MODIFY_INPUT, SUBMIT_BUTTON } = TEST_IDS;

const Item: React.FC<ItemProps> = ({ id, isCompleted, todo }) => {
  const [, dispatch] = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);

  const onEditClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsEditing((prev) => !prev);
  };
  const onDeleteClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await deleteTodo(id);
      dispatch(deleteTodoBy(id));
      successToast(`삭제되었습니다.`);
    } catch (e) {
      apiErrorToast(e);
    }
  };
  const onEditCancelClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsEditing(false);
  };
  const onEditSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const { target } = event;
    const updatedTodoInput = (target as HTMLFormElement).elements.namedItem(
      'updatedTodo',
    ) as HTMLInputElement;
    const editedTodo = updatedTodoInput.value;
    if (!editedTodo) {
      toast.error(`수정할 내용을 입력해주세요.`);
      return;
    }
    if (todo === editedTodo) {
      setIsEditing(false);
      return;
    }
    try {
      const updatedTodo = await updateTodo({ id, isCompleted, todo: editedTodo });
      dispatch(updateTodoBy(updatedTodo));
      setIsEditing(false);
      successToast(`수정되었습니다.`);
    } catch (e) {
      apiErrorToast(e);
    }
  };
  const onCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    const { target } = event;
    const isCompleted = (target as HTMLInputElement).checked;

    try {
      const updatedTodo = await updateTodo({ id, isCompleted, todo });
      dispatch(updateTodoBy(updatedTodo));
    } catch (e) {
      apiErrorToast(e);
    }
  };

  return (
    <>
      <label
        className={classNames('flex items-center gap-4 cursor-pointer', !isEditing && 'w-full')}
      >
        <input
          type='checkbox'
          className='hidden peer'
          id={`${id}`}
          defaultChecked={isCompleted}
          disabled={isEditing}
          onChange={onCheckboxChange}
        />
        <label
          htmlFor={`${id}`}
          className='flex w-3 h-3 border border-gray-300 rounded-full aspect-square peer-checked:bg-amber-400'
        ></label>
        {!isEditing && (
          <span className='break-all peer-checked:line-through peer-checked:text-gray-400'>
            {todo}
          </span>
        )}
      </label>
      {isEditing ? (
        <form onSubmit={onEditSubmit} className='flex items-center w-full gap-2 ml-2'>
          <input
            className='w-full border-b'
            type='text'
            name='updatedTodo'
            defaultValue={todo}
            data-testid={MODIFY_INPUT}
          />
          <Button type='submit' testid={SUBMIT_BUTTON}>
            <HiCheck />
          </Button>
          <Button type='button' onClick={onEditCancelClick} testid={CANCEL_BUTTON}>
            <HiX />
          </Button>
        </form>
      ) : (
        <>
          <Button onClick={onEditClick} testid={MODIFY_BUTTON}>
            <HiOutlinePencilAlt />
          </Button>
          <Button textColor='red' onClick={onDeleteClick} testid={DELETE_BUTTON}>
            <HiOutlineTrash />
          </Button>
        </>
      )}
    </>
  );
};

export default Item;
