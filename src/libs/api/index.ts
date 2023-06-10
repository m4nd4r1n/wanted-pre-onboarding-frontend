import ky from 'ky';

import { ENDPOINTS } from '@/constants/endpoints';

const { BASE_URL } = ENDPOINTS;

export const api = ky.create({
  prefixUrl: BASE_URL,
});
