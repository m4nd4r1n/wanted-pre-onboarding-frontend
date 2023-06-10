import { useNavigate } from 'react-router-dom';

import Form from '@/components/auth/Form';
import Button from '@/components/common/Button';
import Layout from '@/components/common/Layout';
import { AUTH_TYPE_MAP } from '@/constants/auth';
import { PATHNAMES } from '@/constants/pathnames';
import type { AuthPathnames } from '@/types/auth';

interface AuthPageProps {
  type: AuthPathnames;
}

const { SIGN_UP } = PATHNAMES;

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  const navigate = useNavigate();

  const isSignUp = type === SIGN_UP;

  const onSignUpPageClick = () => {
    navigate(SIGN_UP);
  };

  return (
    <Layout title={AUTH_TYPE_MAP[type]} hasBackButton={isSignUp}>
      <Form type={type} />
      {!isSignUp && (
        <div className='flex justify-center mt-8'>
          <Button textColor='amber' onClick={onSignUpPageClick}>
            회원가입 하기
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default AuthPage;
