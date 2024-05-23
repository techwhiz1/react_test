import { FC, useState, useEffect } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  flag: number;
}

const Input: FC<InputProps> = ({ placeholder, value, flag }) => {
  const [discountCode, setDiscountCode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  useEffect(() => {
    if (flag < 2)
      setDiscountCode(value)
    setShowError(false);
  }, [flag]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.match(/^[a-zA-Z]{2,}@[0-9]{2,}$/)) {
      setShowError(false)
    } else {
      setShowError(true)
    }

    setDiscountCode(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-center">
        <input
          type="text"
          value={discountCode}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        />
      </div>

      {showError && (
        <span className="text-xs text-red-500">
          Discount code must have more than 2 letters and after more than 2 numbers combined with @
        </span>
      )}

    </div>
  );
};

export default Input;
