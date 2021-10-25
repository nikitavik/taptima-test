import React, { FC, InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import { useController, UseControllerProps } from 'react-hook-form';
import { MaskConfigT } from '../../../page/profile/BasicProfileCard/formInputs';
import { ErrorMessage, Label, Wrapper, Input } from './styled';

type PropsT = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<any> & {
    label: string;
    maskConfig?: MaskConfigT;
  };

const TextInput: FC<PropsT> = (props) => {
  const { label, maskConfig, ...restProps } = props;
  const { field, fieldState } = useController(restProps);
  const { name } = field;
  const { error } = fieldState;
  return (
    <>
      <Wrapper>
        {maskConfig ? (
          <InputMask {...maskConfig} {...field}>
            {(inputProps: PropsT) => <Input {...inputProps} id={name} isInvalid={!!error} />}
          </InputMask>
        ) : (
          <Input {...field} id={name} isInvalid={!!error} />
        )}
        <Label htmlFor={name} isInvalid={!!error}>
          {label}
        </Label>
        <ErrorMessage>{error?.message}</ErrorMessage>
      </Wrapper>
    </>
  );
};

export default TextInput;
