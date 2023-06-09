interface InputProps {
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className='text-xl font-bold'>{label}</label>
      <input className='w-full pb-2 text-base border-b border-gray-400 outline-none' {...rest} />
    </div>
  );
};

export default Input;
