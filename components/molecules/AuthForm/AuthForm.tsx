import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAuthButtons, StyledAuthForm } from 'Components/molecules/AuthForm/AuthForm.style';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type AuthTypeType = 'login' | 'register';

const schema = yup.object({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().required(),
});

type SchemaType = yup.InferType<typeof schema>;

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchemaType>({
    // resolver: yupResolver(schema),
  });

  const [authType, setAuthType] = useState<AuthTypeType>('login');

  const header = authType === 'login' ? 'Login' : 'Register';

  const optionButtonText = authType === 'login' ? 'Register' : 'Login';

  const changeAuthType = () => {
    setAuthType(prevState => (prevState === 'login' ? 'register' : 'login'));
    reset();
  };

  const onSubmit = async (data: SchemaType) => {
    await signIn('credentials', {
      callbackUrl: '/boards',
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });
  };

  const handleSignIn = async () => {
    await signIn('google', { callbackUrl: '/boards' });
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h1' color='dark'>
        {header}
      </Typography>
      {authType === 'register' && (
        <>
          <Input
            placeholder='First name'
            errorText={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            placeholder='Last name'
            errorText={errors.lastName?.message}
            {...register('lastName')}
          />
        </>
      )}
      <Input placeholder='Email' errorText={errors.email?.message} {...register('email')} />
      <Input
        placeholder='Pasword'
        errorText={errors.password?.message}
        {...register('password')}
        type='password'
      />
      <StyledAuthButtons>
        <Button variant='h5' type='submit'>
          Submit
        </Button>
        <Button color='dark' variant='h5' backgroundColor='transparent' onClick={changeAuthType}>
          {optionButtonText}
        </Button>
      </StyledAuthButtons>
      <Button variant='h5' icon={<Icon name='google' color='white' />} onClick={handleSignIn}>
        Continue with Google
      </Button>
    </StyledAuthForm>
  );
};

export default AuthForm;
