import { useState } from 'react';

export const useFormStatus = (defaultStatus = false) => {
  const [showFormState, setShowFormState] = useState(defaultStatus);
  const showFormStatus = () => {
    setShowFormState(true);
    setTimeout(() => {
      setShowFormState(false);
    }, 5000);
  };
  return { isShown: showFormState, showFormStatus };
};
