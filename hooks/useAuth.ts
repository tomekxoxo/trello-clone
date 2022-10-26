import { gql, useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import useSnackbar from 'Hooks/useSnackbar';
import router from 'next/router';
import { signIn } from 'next-auth/react';
import { FieldValues, useForm } from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

const REGISTER = gql`
  mutation Register($credentials: registerInput!) {
    register(credentials: $credentials) {
      id
      name
      email
      emailVerified
      password
      image
      origin
    }
  }
`;

function useAuth<InputsType extends FieldValues>({
  schema,
  changeTo,
}: {
  schema: AnyObjectSchema;
  changeTo: 'login' | 'register';
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(schema),
  });

  const showSnackbar = useSnackbar(state => state.showSnackbar);

  const [registerMutation] = useMutation(REGISTER);

  const changeAuthType = () => router.push(changeTo);

  const handleLogin = async (data: InputsType) => {
    await signIn('credentials', {
      ...data,
      redirect: false,
    }).then(res => {
      if (res?.ok) router.push('/');
      if (res?.error) showSnackbar(res.error, 'error');
    });
  };

  const onSubmit = async (data: InputsType) => {
    if (changeTo === 'register') {
      handleLogin(data);
    } else {
      const credentials = { email: data.email, name: data.name, password: data.password };
      await registerMutation({
        onCompleted: () => router.push('/login'),
        onError: err => showSnackbar(err.message, 'error'),
        variables: {
          credentials,
        },
      });
    }
  };

  const handleGoogleSignIn = async () => await signIn('google', { callbackUrl: '/' });

  return {
    changeAuthType,
    errors,
    handleGoogleSignIn,
    handleSubmit,
    onSubmit,
    register,
  };
}

export default useAuth;
