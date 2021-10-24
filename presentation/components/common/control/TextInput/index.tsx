import React, { FC, InputHTMLAttributes } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { ErrorMessage, Label, Wrapper, Input } from './styled';

type PropsT = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<any> & {
    label: string;
  };
const TextInput: FC<PropsT> = (props) => {
  const { label, ...restProps } = props;
  const { field, fieldState } = useController(restProps);
  const { name } = field;
  const { error } = fieldState;
  return (
    <>
      <Wrapper>
        <Input {...field} id={name} isInvalid={!!error} />
        <Label htmlFor={name} isInvalid={!!error}>
          {label}
        </Label>
        <ErrorMessage>{error?.message}</ErrorMessage>
      </Wrapper>
    </>
  );
};

export default TextInput;
