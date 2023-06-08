import { StyledLabel } from 'Components/atoms/Checkbox/Checkbox.style';
import { ChangeEvent, ReactNode } from 'react';

interface CheckboxProps {
  value: boolean;
  onChange: (isChecked: boolean) => void;
  children: ReactNode;
}

const Checkbox = ({ value, onChange, children }: CheckboxProps) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <StyledLabel>
      <input type='checkbox' checked={value} onChange={handleCheckboxChange} />
      {children}
    </StyledLabel>
  );
};

export default Checkbox;
