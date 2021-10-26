import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CardAreas } from '../../../../../enums/cardAreas';
import { ButtonColors } from '../../../../../enums/styledComponents';
import Card from '../../../common/block/Card';
import PrimaryButton from '../../../common/control/PrimaryButton';
import CheckBox from '../../../common/control/CheckBox';
import { CHECKBOXES, CheckBoxGroups, CheckBoxGroupT } from './formInputs';
import { CardFooter, CardHeader, HeaderSubTitle, HeaderTitle } from '../styled';
import { Fieldset, SetTitle, StyledForm } from './styled';
import { useFormStatus } from '../../../../../hooks/formStatus.hook';
import { mockRequest } from '../../../../../data/mockRequest';
import FormStatusMessage from '../FormStatusMessage';
import { ProfilePageForms } from '../../../../../enums/forms';

type FormDefaultT = {
  notifications: CheckBoxGroupT;
  messages: CheckBoxGroupT;
};

const defaultValues: FormDefaultT = {
  notifications: {
    name: CheckBoxGroups.notifications,
    choice: [
      { name: 'Email', checked: false },
      { name: 'Push notifications', checked: false },
      { name: 'Text Messages', checked: false },
      { name: 'Phone Calls', checked: false },
    ],
  },
  messages: {
    name: CheckBoxGroups.messages,
    choice: [
      { name: 'Email', checked: false },
      { name: 'Push notifications', checked: false },
      { name: 'Text Messages', checked: false },
    ],
  },
};

const NotificationsCard: FC = () => {
  const { control, handleSubmit, reset, formState } = useForm<FormDefaultT>({
    defaultValues,
  });
  const { isShown, showFormStatus } = useFormStatus();

  const onSubmit = async (data: FormDefaultT) => {
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
      area={CardAreas.notification}
      header={
        <CardHeader>
          <HeaderTitle>Notifications</HeaderTitle>
          <HeaderSubTitle>Mange the notifications emailing</HeaderSubTitle>
        </CardHeader>
      }
      footer={
        <CardFooter>
          <PrimaryButton
            type="submit"
            color={ButtonColors.secondary}
            form={ProfilePageForms.notificationsForm}
          >
            Save
          </PrimaryButton>
          <FormStatusMessage isSuccessful={formState.isSubmitSuccessful} isShown={isShown} />
        </CardFooter>
      }
    >
      <StyledForm onSubmit={handleSubmit(onSubmit)} id={ProfilePageForms.notificationsForm}>
        <Fieldset>
          <SetTitle>Notifications</SetTitle>
          {CHECKBOXES.notifications.choice.map((j, i) => {
            return (
              <CheckBox
                key={CheckBoxGroups.notifications + j.name}
                control={control}
                name={`[${CheckBoxGroups.notifications}][choice][${i}][checked]`}
                text={j.name}
                subtext={j.subtext}
              />
            );
          })}
        </Fieldset>
        <Fieldset>
          <SetTitle>Messages</SetTitle>
          {CHECKBOXES.messages.choice.map((j, i) => {
            return (
              <CheckBox
                key={CheckBoxGroups.messages + j.name}
                control={control}
                name={`[${CheckBoxGroups.messages}][choice][${i}][checked]`}
                text={j.name}
                subtext={j.subtext}
              />
            );
          })}
        </Fieldset>
      </StyledForm>
    </Card>
  );
};

export default NotificationsCard;
