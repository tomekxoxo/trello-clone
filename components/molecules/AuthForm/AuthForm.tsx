import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'Components/atoms/Button/Button';
import Input from 'Components/atoms/Input/Input';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledAuthButtons, StyledAuthForm } from 'Components/molecules/AuthForm/AuthForm.style';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type AuthTypeType = 'login' | 'register';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().required(),
});

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [authType, setAuthType] = useState<AuthTypeType>('login');

  const header = authType === 'login' ? 'Login' : 'Register';

  const optionButtonText = authType === 'login' ? 'Register' : 'Login';

  const changeAuthType = () => {
    setAuthType(prevState => (prevState === 'login' ? 'register' : 'login'));
    reset();
  };

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
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
            {...register('firstName', {
              required: true,
            })}
          />
          <Input
            placeholder='Last name'
            errorText={errors.lastName?.message}
            {...register('lastName', {
              required: true,
            })}
          />
        </>
      )}
      <Input
        placeholder='Email'
        errorText={errors.email?.message}
        {...register('email', {
          required: true,
        })}
      />
      <Input
        placeholder='Pasword'
        errorText={errors.password?.message}
        {...register('password', {
          required: true,
        })}
      />
      <StyledAuthButtons>
        <Button variant='h5'>Submit</Button>
        <Button color='dark' variant='h5' backgroundColor='transparent' onClick={changeAuthType}>
          {optionButtonText}
        </Button>
      </StyledAuthButtons>
    </StyledAuthForm>
  );
};

export default AuthForm;
