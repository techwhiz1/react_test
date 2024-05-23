import { FC, useState } from 'react';

interface TextareaProps {
  name: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextareaProps> = ({
  name,
  onChange,
  value = '',
  placeholder = '',
}) => {
  const [textAreaValue, setTextAreaValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="mb-3">
      <textarea
        rows={5}
        id={name}
        name={name}
        value={textAreaValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md sm:text-sm border border-gray-300 p-2.5 w-60"}
      />
    </div>
  );
};

export default TextArea;