import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CardAreas } from '../../../../../enums/cardAreas';
import { ButtonColors } from '../../../../../enums/styledComponents';
import { useFormStatus } from '../../../../../hooks/formStatus.hook';
import Card from '../../../common/block/Card';
import PrimaryButton from '../../../common/control/PrimaryButton';
import TextInput from '../../../common/control/TextInput';
import FormStatusMessage from '../FormStatusMessage';
import { CardFooter, CardHeader, HeaderSubTitle, HeaderTitle } from '../styled';
import { BasicFormInputsT, FORM_INPUTS } from './formInputs';
import { StyledForm } from './styled';
import { mockRequest } from '../../../../../data/mockRequest';
import { ProfilePageForms } from '../../../../../enums/forms';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  region: '',
};

const BasicProfileCard: FC = () => {
  const { handleSubmit, control, reset, formState } = useForm<BasicFormInputsT>({
    mode: 'onBlur',
    defaultValues,
  });
  const { isShown, showFormStatus } = useFormStatus();

  const onSubmit = async (data: BasicFormInputsT) => {
    try {
      await mockRequest(data);
      reset(defaultValues);
      showFormStatus();
    } catch (e) {
      showFormStatus();
      throw e;
    }
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
            form={ProfilePageForms.basicProfileForm}
            disabled={
              !formState.isDirty ||
              !formState.isValid ||
              formState.isValidating ||
              formState.isSubmitting
            }
          >
            Save settings
          </PrimaryButton>
          <FormStatusMessage isSuccessful={formState.isSubmitSuccessful} isShown={isShown} />
        </CardFooter>
      }
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)} id={ProfilePageForms.basicProfileForm}>
        {FORM_INPUTS.map((input) => {
          const { name, type, label, rules, maskConfig } = input;
          return (
            <TextInput
              key={name}
              control={control}
              name={name}
              type={type}
              label={label}
              rules={rules}
              maskConfig={maskConfig}
            />
          );
        })}
      </StyledForm>
    </Card>
  );
};

export default BasicProfileCard;
