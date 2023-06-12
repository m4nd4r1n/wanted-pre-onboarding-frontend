declare module 'api-response' {
  import type { Todo } from '@/types/todo';

  export type SignInResponse = {
    access_token: string;
  };

  export type CreateTodoResponse = Todo;
  export type GetTodosResponse = Todo[];
  export type UpdateTodoResponse = Todo;

  export type ErrorResponse = {
    statusCode: number;
    message: string | string[];
    error?: string;
  };
}
