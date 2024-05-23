import { FC } from 'react';

interface OptionProps {
  label: string;
  value: number;
}

interface RadioButtonProps {
  name: string;
  option: OptionProps;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<RadioButtonProps> = ({
  name,
  option,
  onChange,
  isChecked = false,
}) => {
  const { label, value } = option;

  return (
    <div className="flex items-center mb-2 justify-center">
      <input
        type="radio"
        id={label}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="w-4 h-4 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-offset-0 dark:focus:ring-offset-gray-800 focus:ring-2"
      />
      <label htmlFor={label} className="ml-2 text-sm font-medium ">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
