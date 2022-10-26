import RegisterForm from 'Components/molecules/RegisterForm/RegisterForm';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { StyledIndex } from 'Pages/login/index.style';

const Home: NextPage = () => {
  return (
    <StyledIndex>
      <RegisterForm />
    </StyledIndex>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
