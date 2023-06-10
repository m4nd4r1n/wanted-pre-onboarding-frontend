import { useMemo } from 'react';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  testid?: string;
  disabled?: boolean;
  primary?: boolean;
  size?: 'small' | 'large';
  textColor?: 'black' | 'amber' | 'red';
}

const SIZE_MAP = {
  small: 'p-2',
  large: 'w-full text-lg rounded-lg h-14',
} as const;

const getModeClass = (primary: boolean) =>
  primary
    ? 'text-white bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70'
    : 'hover:text-opacity-50';

const TEXT_COLOR_MAP = {
  black: 'text-black',
  amber: 'text-amber-500',
  red: 'text-red-500',
};

const BASE_CLASS = 'transition duration-100 break-keep font-bold';

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'small',
  textColor = 'black',
  testid,
  children,
  ...props
}) => {
  const memoizedClass = useMemo(() => {
    const modeClass = getModeClass(primary);
    const sizeClass = SIZE_MAP[size];
    const textColorClass = !primary ? TEXT_COLOR_MAP[textColor] : '';

    return `${modeClass} ${sizeClass} ${textColorClass}`;
  }, [primary, size, textColor]);

  return (
    <button className={`${BASE_CLASS} ${memoizedClass}`} data-testid={testid} {...props}>
      {children}
    </button>
  );
};

export default Button;
