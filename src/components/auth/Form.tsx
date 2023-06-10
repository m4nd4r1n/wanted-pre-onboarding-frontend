import Button from '../common/Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

import { AUTH_TYPE_MAP } from '@/constants/auth';
import { PATHNAMES } from '@/constants/pathnames';
import { TEST_IDS } from '@/constants/test-ids';
import useValidate from '@/hooks/useValidate';
import { signIn, signUp } from '@/libs/api/auth';
import type { AuthPathnames } from '@/types/auth';

interface FormProps {
  type: AuthPathnames;
}

const { SIGN_IN, SIGN_UP, TODO } = PATHNAMES;
const { EMAIL_INPUT, PASSWORD_INPUT, SIGNIN_BUTTON, SIGNUP_BUTTON } = TEST_IDS;

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

const Form: React.FC<FormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [isEmailValid, onEmailChange] = useValidate(/@/);
  const [isPasswordValid, onPasswordChange] = useValidate(/.{8,}/);

  const isSignUp = type === SIGN_UP;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const { target } = event;
    const emailElement = (target as HTMLFormElement).elements.namedItem(
      'email',
    ) as HTMLInputElement;
    const passwordElement = (target as HTMLFormElement).elements.namedItem(
      'password',
    ) as HTMLInputElement;
    const email = emailElement.value;
    const password = passwordElement.value;

    if (!email || !password) {
      onEmailChange({ target: { value: email } } as React.ChangeEvent<HTMLInputElement>);
      onPasswordChange({ target: { value: password } } as React.ChangeEvent<HTMLInputElement>);
    }

    if (!email) {
      emailElement.focus();
      return;
    }
    if (!password) {
      passwordElement.focus();
      return;
    }

    if (isSignUp) {
      try {
        await signUp({ email, password });
        navigate(SIGN_IN);
      } catch (e) {
        console.error(e);
      }
      return;
    }

    try {
      const { access_token } = await signIn({ email, password });
      localStorage.setItem('token', access_token);
      navigate(TODO);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <div className='relative'>
        <Input testid={EMAIL_INPUT} onChange={onEmailChange} {...EmailInputProps} />
        {!isEmailValid && (
          <span className='absolute mt-1 text-xs text-red-500'>@를 포함해 주세요.</span>
        )}
      </div>
      <div className='relative'>
        <Input testid={PASSWORD_INPUT} onChange={onPasswordChange} {...PasswordInputProps} />
        {!isPasswordValid && (
          <span className='absolute mt-1 text-xs text-red-500'>최소 8글자 이상 입력해 주세요.</span>
        )}
      </div>
      <Button
        type='submit'
        primary
        size='large'
        testid={isSignUp ? SIGNUP_BUTTON : SIGNIN_BUTTON}
        disabled={!isEmailValid || !isPasswordValid}
      >
        {AUTH_TYPE_MAP[type]}
      </Button>
    </form>
  );
};

export default Form;
