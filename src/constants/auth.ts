import { PATHNAMES } from './pathnames';

const { SIGN_IN, SIGN_UP } = PATHNAMES;

export const AUTH_TYPE_MAP = {
  [SIGN_IN]: '로그인',
  [SIGN_UP]: '회원가입',
} as const;
