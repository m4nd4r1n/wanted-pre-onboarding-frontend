import { HiOutlineChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  hasBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, hasBackButton }) => {
  const navigate = useNavigate();

  const onBackClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };

  return (
    <div className='h-screen max-w-xl mx-auto bg-white shadow-md'>
      <header className='relative flex items-center justify-around h-16'>
        {hasBackButton && (
          <button className='absolute left-6' onClick={onBackClick}>
            <HiOutlineChevronLeft size={24} />
          </button>
        )}
        <span className='font-bold'>{title}</span>
      </header>
      <main className='px-6 mt-12 h-main'>{children}</main>
    </div>
  );
};

export default Layout;
