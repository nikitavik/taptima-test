export enum CheckBoxGroups {
  notifications = 'notifications',
  messages = 'messages',
}
export type CheckBoxGroupT = {
  name: CheckBoxGroups;
  choice: CheckBoxChoiceT[];
};
export type CheckBoxChoiceT = {
  name: string;
  checked: boolean;
  subtext?: string;
};
export const CHECKBOXES = {
  notifications: {
    name: 'notifications',
    choice: [
      { name: 'Email', checked: false, subtext: '' },
      { name: 'Push notifications', checked: false, subtext: 'For your mobile or tablet device' },
      { name: 'Text Messages', checked: false, subtext: '' },
      { name: 'Phone Calls', checked: false, subtext: '' },
    ],
  },
  messages: {
    name: 'messages',
    choice: [
      { name: 'Email', checked: false, subtext: '' },
      { name: 'Push notifications', checked: false, subtext: '' },
      { name: 'Text Messages', checked: false, subtext: '' },
    ],
  },
};
