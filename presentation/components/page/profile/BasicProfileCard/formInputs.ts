import { UseControllerProps } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';
import { EMAIL_REGEX } from '../../../../../constant/regEx';

export type MaskConfigT = {
  mask: string;
  maskChar?: string | null;
  alwaysShowMask?: boolean;
};

export type BasicFormInputsT = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  region: string;
};

export const FORM_INPUTS: Array<
  UseControllerProps<BasicFormInputsT> &
    InputHTMLAttributes<HTMLInputElement> & {
      label: string;
      maskConfig?: MaskConfigT;
    }
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
    maskConfig: {
      mask: '+9(999)999-99-99',
      maskChar: null,
      alwaysShowMask: false,
    },
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
