import * as yup from 'yup';

const email = yup.string().email('Please enter valid e-mail').required('Please Enter your e-mail');

export const loginSchema = yup.object({
  email,
  password: yup.string().required(),
});

export const registerSchema = yup.object({
  email,
  name: yup.string().required('Please Enter your name'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});
