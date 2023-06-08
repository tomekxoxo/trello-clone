import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from 'graphql/generated/hooks';
import useSnackbar from 'Hooks/useSnackbar';
import router from 'next/router';
import { signIn } from 'next-auth/react';
import { FieldValues, useForm } from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

function useAuth<Inputs extends FieldValues>({
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
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const showSnackbar = useSnackbar(state => state.showSnackbar);

  const [registerMutation] = useRegisterMutation();

  const changeAuth = () => router.push(changeTo);

  const handleLogin = async (data: Inputs) => {
    await signIn('credentials', {
      ...data,
      redirect: false,
    }).then(res => {
      if (res?.ok) router.push('/');
      if (res?.error) showSnackbar(res.error, 'error');
    });
  };

  const onSubmit = async (data: Inputs) => {
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
    changeAuth,
    errors,
    handleGoogleSignIn,
    handleSubmit,
    onSubmit,
    register,
  };
}

export default useAuth;
