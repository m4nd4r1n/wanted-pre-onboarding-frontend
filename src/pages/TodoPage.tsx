import Layout from '@/components/common/Layout';
import CreateTodo from '@/components/todo/CreateTodo';
import List from '@/components/todo/List';
import TodoProvider from '@/context/todo/Provider';

const TodoPage = () => {
  return (
    <Layout title='Todo'>
      <div className='flex flex-col h-full gap-8'>
        <TodoProvider>
          <CreateTodo />
          <List />
        </TodoProvider>
      </div>
    </Layout>
  );
};

export default TodoPage;
