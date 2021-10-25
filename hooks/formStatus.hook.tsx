import { useState, useEffect } from 'react';

export const useFormStatus = (defaultStatus = false) => {
  const [showFormState, setShowFormState] = useState(defaultStatus);
  const showFormStatus = () => {
    setShowFormState(true);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFormState(false);
    }, 5000);
    return function () {
      clearTimeout(timeout);
    };
  }, [showFormState]);
  return { isShown: showFormState, showFormStatus };
};
