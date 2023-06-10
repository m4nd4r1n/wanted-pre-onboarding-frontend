import { useState } from 'react';

const useValidate = (regex: RegExp) => {
  const [isValid, setIsValid] = useState(true);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setIsValid(regex.test(value));
  };

  return [isValid, onChange] as const;
};

export default useValidate;
