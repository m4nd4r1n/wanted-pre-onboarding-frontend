import type { ErrorResponse } from 'api-response';
import { HTTPError } from 'ky';
import { toast } from 'react-hot-toast';

export const apiErrorToast = async (e: unknown) => {
  if (e instanceof HTTPError) {
    const { message } = (await e.response.json()) as ErrorResponse;
    const errorMessage = Array.isArray(message) ? message.join('\n') : message;

    toast.error(`${errorMessage}`);
  }
};

export const successToast = (message: string) => {
  toast.success(message);
};
