import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardAreas } from '../../../../../enums/cardAreas';
import { ButtonColors } from '../../../../../enums/styledComponents';
import Card from '../../../common/block/Card';
import PrimaryButton from '../../../common/control/PrimaryButton';
import TextInput from '../../../common/control/TextInput';
import { CardFooter, CardHeader, HeaderSubTitle, HeaderTitle } from '../styled';
import { BasicFormInputs, FORM_INPUTS } from './formInputs';
import { StatusMessage, StyledForm } from './styled';

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
      area={CardAreas.basicProfile}
      header={
        <CardHeader>
          <HeaderTitle>Basic Profile</HeaderTitle>
          <HeaderSubTitle>The information can be edited from your profile page</HeaderSubTitle>
        </CardHeader>
      }
      footer={
        <CardFooter>
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
        </CardFooter>
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
