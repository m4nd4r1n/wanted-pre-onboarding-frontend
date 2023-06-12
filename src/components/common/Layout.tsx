import { HiArrowRightOnRectangle, HiOutlineChevronLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

import { PATHNAMES } from '@/constants/pathnames';
import { STORAGE_KEY } from '@/constants/storage-key';
import { successToast } from '@/libs/toast';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  hasBackButton?: boolean;
}

const { SIGN_IN } = PATHNAMES;
const { TODOS, TOKEN } = STORAGE_KEY;
const HEADER_ICON_SIZE = 24;

const Layout: React.FC<LayoutProps> = ({ children, title, hasBackButton }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem(TOKEN);

  const onBackClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };
  const onLogoutClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(TODOS);
    successToast('로그아웃 되었습니다.');
    navigate(SIGN_IN);
  };

  return (
    <div className='h-screen max-w-xl mx-auto bg-white shadow-md'>
      <header className='relative flex items-center justify-around h-16'>
        {hasBackButton && (
          <button className='absolute left-6' onClick={onBackClick}>
            <HiOutlineChevronLeft size={HEADER_ICON_SIZE} />
          </button>
        )}
        <span className='font-bold'>{title}</span>
        {!!token && (
          <button className='absolute right-6' onClick={onLogoutClick}>
            <HiArrowRightOnRectangle size={HEADER_ICON_SIZE} />
          </button>
        )}
      </header>
      <main className='px-6 mt-12 h-main'>{children}</main>
    </div>
  );
};

export default Layout;
