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

type SchemaType = yup.InferType<typeof schema>;

const RegisterForm = () => {
  const { changeAuthType, errors, handleSubmit, onSubmit, register } = useAuth<SchemaType>({
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
        <Button color='dark' variant='h5' backgroundColor='transparent' onClick={changeAuthType}>
          Login
        </Button>
      </StyledAuthButtons>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
