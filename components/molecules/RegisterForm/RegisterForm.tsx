import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledAuthButtons,
  StyledRegisterForm,
} from 'Components/molecules/RegisterForm/RegisterForm.style';
import { schema } from 'Components/molecules/RegisterForm/validation';
import useAuth from 'Hooks/useAuth';
import * as yup from 'yup';

type Schema = yup.InferType<typeof schema>;

const RegisterForm = () => {
  const { changeAuth, errors, handleSubmit, onSubmit, register } = useAuth<Schema>({
    changeTo: 'login',
    schema,
  });

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h1' color='dark'>
        Register
      </Typography>
      <Input placeholder='Name' errorText={errors.name?.message} {...register('name')} />
      <Input placeholder='Email' errorText={errors.email?.message} {...register('email')} />
      <Input
        placeholder='Password'
        errorText={errors.password?.message}
        {...register('password')}
        type='password'
      />
      <Input
        placeholder='Confirm password'
        errorText={errors.passwordConfirmation?.message}
        {...register('passwordConfirmation')}
        type='password'
      />
      <StyledAuthButtons>
        <Button variant='h5' type='submit'>
          Submit
        </Button>
        <Button color='dark' variant='h5' backgroundColor='transparent' onClick={changeAuth}>
          Login
        </Button>
      </StyledAuthButtons>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
