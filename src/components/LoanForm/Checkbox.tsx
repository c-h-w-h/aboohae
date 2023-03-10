import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';

interface CheckboxProps {
  id: string;
  label: ReactNode;
}

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const onClick = () => setIsChecked((prev) => !prev);

  return (
    <>
      <label htmlFor={id} onClick={onClick}>
        {label}
      </label>
      <InvisibleInput
        id={id}
        name={id}
        type="checkbox"
        defaultChecked={isChecked}
      />
    </>
  );
};

const InvisibleInput = styled.input`
  display: none;
`;

export default Checkbox;
