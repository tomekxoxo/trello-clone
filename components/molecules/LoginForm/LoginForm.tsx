import { loginSchema } from 'common/validations';
import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAuthButtons, StyledLoginForm } from 'Components/molecules/LoginForm/LoginForm.style';
import useAuth from 'Hooks/useAuth';
import { InferType } from 'yup';

export type LoginSchemaType = InferType<typeof loginSchema>;

const LoginForm = () => {
  const { changeAuthType, handleGoogleSignIn, errors, handleSubmit, onSubmit, register } =
    useAuth<LoginSchemaType>({
      changeTo: 'register',
      schema: loginSchema,
    });

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h1' color='dark'>
        Login
      </Typography>
      <Input placeholder='Email' errorText={errors.email?.message} {...register('email')} />
      <Input
        placeholder='Password'
        errorText={errors.password?.message}
        {...register('password')}
        type='password'
      />
      <StyledAuthButtons>
        <Button variant='h5' type='submit'>
          Submit
        </Button>
        <Button color='dark' variant='h5' backgroundColor='transparent' onClick={changeAuthType}>
          Register
        </Button>
      </StyledAuthButtons>
      <Button variant='h5' icon={<Icon name='google' color='white' />} onClick={handleGoogleSignIn}>
        Continue with Google
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
