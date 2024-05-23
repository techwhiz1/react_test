import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { radioData, commentData } from "./reducers/dashboard.ts";

import Input from "./components/Input";
import TextArea from './components/TextArea';
import CodeButton from "./components/Button.tsx";
import Radio from './components/Radio.tsx';

const options = [
  { value: 1, label: 'Option A' },
  { value: 2, label: 'Option B' },
  { value: 3, label: 'Option C' },
];

const mockedCode = 'AB@12';

const App = () => {
  const dispatch = useDispatch();
  const initialOption = useSelector((state: any) => state.data.radio);

  const [selectedValue, setSelectedValue] = useState<number>(initialOption);
  const [inputCode, setInputCode] = useState<string>('');
  const [flagCodeClick, setFlagCodeClick] = useState<number>(2);

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+event.target.value);
    dispatch(radioData(+event.target.value));
  };

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(commentData(event.target.value));
  };

  const codeClick = (value: string) => {
    setInputCode(value);
    setFlagCodeClick((flagCodeClick + 1) % 2);
  }

  return (
    <div className="container h-[100vh] m-auto p-6 flex justify-center items-center">

      <div>
        <div className="mb-4">
          <span className="mb-4 block text-center">Select option</span>
          {options.map((option) => (
            <Radio
              option={option}
              name="radioGroup"
              key={option.value}
              onChange={handleChangeRadio}
              isChecked={selectedValue === option.value}
            />
          ))}
        </div>

        <Input
          flag={flagCodeClick}
          value={inputCode}
          placeholder="Enter Discount Code"
        />
        <CodeButton
          click={codeClick}
          mockedCode={mockedCode}
          btnText="Generate Discount Code"
        />
        <TextArea
          name="textArea"
          placeholder="Add Comment"
          onChange={handleChangeTextArea}
        />

      </div>

    </div>
  );
};

export default App;
