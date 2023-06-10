import { api } from '.';
import type { SignInResponse } from 'api-response';

import { ENDPOINTS } from '@/constants/endpoints';

const { SIGN_IN, SIGN_UP } = ENDPOINTS;

export const signIn = ({ email, password }: { email: string; password: string }) =>
  api.post(SIGN_IN, { json: { email, password } }).json<SignInResponse>();

export const signUp = ({ email, password }: { email: string; password: string }) =>
  api.post(SIGN_UP, { json: { email, password } }).json();
