import Layout from '@/components/common/Layout';
import List from '@/components/todo/List';
import NewTodo from '@/components/todo/NewTodo';

const TodoPage = () => {
  return (
    <Layout title='Todo'>
      <div className='flex flex-col h-full gap-8'>
        <NewTodo />
        <List />
      </div>
    </Layout>
  );
};

export default TodoPage;
