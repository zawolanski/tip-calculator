import * as yup from 'yup';
import { store } from '../store/store';

const validation = {
  bill: yup
    .number()
    .required('Field is required')
    .positive('Must be positive')
    .typeError('Must be a number'),
  numberOfPeople: yup
    .number()
    .required('Field is required')
    .positive('Must be positive')
    .integer('Must be an integer')
    .typeError('Must be a number'),
  tip__custom: yup
    .number()
    .required('Field is required')
    .positive('Must be positive')
    .max(100, 'Invalid number')
    .typeError('Must be a number'),
};

export const validate = (e: any) => {
  const name: 'bill' | 'numberOfPeople' | 'tip__custom' = e.target.name;
  const value = e.target.value;
  let error = '';

  try {
    validation[name].validateSync(value);
  } catch (e) {
    error = e.errors[0];
  }

  store.update((store) => ({
    ...store,
    errors: { ...store.errors, [name]: error },
  }));
};
