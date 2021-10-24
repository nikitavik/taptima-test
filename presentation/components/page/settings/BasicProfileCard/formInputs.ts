import { UseControllerProps } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { EMAIL_REGEX } from '../../../../../constant/regEx';
import { BasicFormInputs } from './index';

export const FORM_INPUTS: Array<
  UseControllerProps<BasicFormInputs> & InputHTMLAttributes<HTMLInputElement> & { label: string }
> = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    rules: {
      required: 'That filed is required',
      minLength: { value: 2, message: 'Minimum length is 2 symbols' },
    },
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    rules: {
      required: 'That filed is required',
      minLength: { value: 2, message: 'Minimum length is 2 symbols' },
    },
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    rules: {
      required: 'That filed is required',
      validate: (value: string) => {
        return EMAIL_REGEX.test(value) || 'Enter valid email address';
      },
    },
  },
  {
    name: 'phoneNumber',
    type: 'text',
    label: 'Phone Number',
    rules: {},
  },
  {
    name: 'country',
    type: 'text',
    label: 'Country',
    rules: {},
  },
  {
    name: 'region',
    type: 'text',
    label: 'Region',
    rules: {},
  },
];
