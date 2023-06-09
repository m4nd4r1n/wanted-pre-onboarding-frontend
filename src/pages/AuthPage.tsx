import Input from '@/components/auth/Input';
import Layout from '@/components/common/Layout';
import { PATHNAMES } from '@/constants/pathnames';

const { SIGN_IN, SIGN_UP } = PATHNAMES;

interface AuthPageProps {
  type: typeof SIGN_IN | typeof SIGN_UP;
}

const AUTH_TYPE_MAP = {
  [SIGN_IN]: '로그인',
  [SIGN_UP]: '회원가입',
} as const;

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
          <button className='font-bold text-amber-500'>회원가입 하기</button>
        </div>
      )}
    </Layout>
  );
};

export default AuthPage;