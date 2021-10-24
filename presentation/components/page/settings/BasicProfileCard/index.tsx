import React, { FC, useState } from 'react';
import Card from '../../../common/block/Card';
import { ProfileCards } from '../../../../../enums/profileCards';
import PrimaryButton from '../../../common/control/PrimaryButton';
import { ButtonColors } from '../../../../../enums/styledComponents';
import {
  BasicCardFooter,
  BasicCardHeader,
  BasicCardHeaderSubTitle,
  BasicHeaderTitle,
} from './styled';
import { useForm } from 'react-hook-form';
import TextInput from '../../../common/control/TextInput';
import styled from 'styled-components';
import { FORM_INPUTS } from './formInputs';

export type BasicFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  region: string;
};

const StyledForm = styled.form`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.5rem;
`;
const StatusMessage = styled.div<{ isSuccessful: boolean }>`
  margin-left: 1rem;
  font-size: 1rem;
  color: ${({ isSuccessful, theme }) =>
    isSuccessful ? theme.colors.accentGreen : theme.colors.redAccent};
`;

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  region: '',
};
const BasicProfileCard: FC = () => {
  const { handleSubmit, control, reset, formState } = useForm<BasicFormInputs>({
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    defaultValues,
  });

  const [showFormState, setShowFormState] = useState(false);

  const onSubmit = async (data: BasicFormInputs) => {
    await new Promise((resolve, reject) => {
      if (Math.random() > 0.05) {
        alert(JSON.stringify(data, null, 2));
        reset(defaultValues);
        setTimeout(() => {
          setShowFormState(true);
          setTimeout(() => {
            setShowFormState(false);
          }, 5000);
          resolve(data);
        }, 1000);
      } else {
        setTimeout(() => {
          setShowFormState(true);
          setTimeout(() => {
            setShowFormState(false);
          }, 5000);
          reject('Error');
        }, 1000);
      }
    });
  };
  return (
    <Card
      area={ProfileCards.basicProfile}
      header={
        <BasicCardHeader>
          <BasicHeaderTitle>Basic Profile</BasicHeaderTitle>
          <BasicCardHeaderSubTitle>
            The information can be edited from your profile page
          </BasicCardHeaderSubTitle>
        </BasicCardHeader>
      }
      footer={
        <BasicCardFooter>
          <PrimaryButton
            color={ButtonColors.primary}
            type="submit"
            form="BasicForm"
            disabled={
              !formState.isDirty ||
              !formState.isValid ||
              formState.isValidating ||
              formState.isSubmitting
            }
          >
            Save settings
          </PrimaryButton>
          <StatusMessage isSuccessful={formState.isSubmitSuccessful}>
            {showFormState
              ? formState.isSubmitSuccessful
                ? `✔ Success`
                : '✘ Error. Try Again'
              : ''}
          </StatusMessage>
        </BasicCardFooter>
      }
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)} id="BasicForm">
        {FORM_INPUTS.map((input) => {
          const { name, type, label, rules } = input;
          return (
            <TextInput
              key={name}
              control={control}
              name={name}
              type={type}
              label={label}
              rules={rules}
            />
          );
        })}
      </StyledForm>
    </Card>
  );
};

export default BasicProfileCard;
