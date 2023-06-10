import { api } from '.';
import type { CreateTodoResponse, GetTodosResponse, UpdateTodoResponse } from 'api-response';

import { ENDPOINTS } from '@/constants/endpoints';

const { TODO } = ENDPOINTS;

export const createTodo = (todo: string) => {
  const token = localStorage.getItem('token');

  return api
    .post(TODO, { json: { todo }, headers: { Authorization: `Bearer ${token}` } })
    .json<CreateTodoResponse>();
};

export const getTodos = () => {
  const token = localStorage.getItem('token');

  return api.get(TODO, { headers: { Authorization: `Bearer ${token}` } }).json<GetTodosResponse>();
};

export const updateTodo = ({
  id,
  todo,
  isCompleted,
}: {
  id: number;
  todo: string;
  isCompleted: boolean;
}) => {
  const token = localStorage.getItem('token');

  return api
    .put(`${TODO}/${id}`, {
      json: { todo, isCompleted },
      headers: { Authorization: `Bearer ${token}` },
    })
    .json<UpdateTodoResponse>();
};

export const deleteTodo = (id: number) => {
  const token = localStorage.getItem('token');

  return api.delete(`${TODO}/${id}`, { headers: { Authorization: `Bearer ${token}` } }).json();
};
