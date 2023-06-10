import Input from '@/components/auth/Input';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import { AUTH_TYPE_MAP } from '@/constants/auth';
import { PATHNAMES } from '@/constants/pathnames';

const { SIGN_IN, SIGN_UP } = PATHNAMES;
import type { AuthPathnames } from '@/types/auth';

interface AuthPageProps {
  type: AuthPathnames;
}

const EmailInputProps = {
  label: '이메일',
  name: 'email',
  type: 'email',
  placeholder: '이메일 (@ 포함)',
};
const PasswordInputProps = {
  label: '비밀번호',
  name: 'password',
  type: 'password',
  placeholder: '비밀번호 (8자 이상)',
};

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  const navigate = useNavigate();

  const onSignUpPageClick = () => {
    navigate(SIGN_UP);
  };

  return (
    <Layout title={AUTH_TYPE_MAP[type]} hasBackButton={type === SIGN_UP}>
      <form className='flex flex-col gap-8'>
        <Input {...EmailInputProps} />
        <Input {...PasswordInputProps} />
        <button
          type='submit'
          className='w-full text-lg font-bold text-white bg-gray-900 rounded-lg h-14 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {AUTH_TYPE_MAP[type]}
        </button>
      </form>
      {type === SIGN_IN && (
        <div className='flex justify-center mt-8'>
          <button className='font-bold text-amber-500' onClick={onSignUpPageClick}>
            회원가입 하기
          </button>
        </div>
      )}
    </Layout>
  );
};

export default AuthPage;
