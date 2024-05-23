import { FC } from "react";

interface ButtonProps {
  btnText: string;
  mockedCode: string;
  click: (value: string) => any;
}

const CodeButton: FC<ButtonProps> = ({
  btnText,
  mockedCode,
  click,
}) => {

  return (
    <div className="flex justify-center">
      <button
        className="w-60 bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 mb-4 rounded"
        onClick={() => click(mockedCode)}
      >
        {btnText}
      </button>

    </div>
  );
};

export default CodeButton;
