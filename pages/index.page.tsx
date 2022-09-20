import AuthForm from 'Components/molecules/AuthForm/AuthForm';
import type { NextPage } from 'next';
import { StyledIndex } from 'Pages/index.style';

const Home: NextPage = () => {
  return (
    <StyledIndex>
      <AuthForm />
    </StyledIndex>
  );
};

export default Home;
