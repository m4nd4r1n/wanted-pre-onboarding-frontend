import { PATHNAMES } from '@/constants/pathnames';

const { SIGN_IN, SIGN_UP } = PATHNAMES;

export type AuthPathnames = typeof SIGN_IN | typeof SIGN_UP;
