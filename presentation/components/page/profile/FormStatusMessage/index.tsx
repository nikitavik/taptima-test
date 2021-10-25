import React, { FC } from 'react';
import { StatusMessage } from './styled';

type PropsT = {
  isSuccessful: boolean;
  isShown: boolean;
};

const FormStatusMessage: FC<PropsT> = (props) => {
  const { isSuccessful, isShown } = props;
  return (
    <StatusMessage isSuccessful={isSuccessful}>
      {isShown ? (isSuccessful ? `✔ Success` : '✘ Error. Try Again') : ''}
    </StatusMessage>
  );
};

export default FormStatusMessage;
