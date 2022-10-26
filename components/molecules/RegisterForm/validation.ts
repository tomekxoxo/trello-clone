import { registerSchema } from 'common/validations';
import * as yup from 'yup';

export const schema = yup
  .object({
    passwordConfirmation: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .concat(registerSchema);

export type Schema = yup.InferType<typeof schema>;
