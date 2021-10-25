import React, { FC, InputHTMLAttributes } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { Box, CheckBoxText, HiddenInput, Label, SubText, Wrapper } from './styled';

type PropsT = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<any> & {
    text: string;
    subtext?: string;
  };

const CheckBox: FC<PropsT> = (props) => {
  const { text, subtext, ...restProps } = props;
  const { field } = useController(restProps);
  const { value } = field;
  return (
    <Label>
      <Wrapper>
        <HiddenInput {...field} type="checkbox" value={value} />
        <Box />
        <CheckBoxText> {text} </CheckBoxText>
      </Wrapper>
      {subtext ? <SubText>{subtext}</SubText> : ''}
    </Label>
  );
};

export default CheckBox;
