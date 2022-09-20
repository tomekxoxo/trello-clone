import Typography from 'Components/atoms/Typography/Typography';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: IErrorMessageProps) => (
  <Typography variant='h5' color='red'>
    {message}
  </Typography>
);

export default ErrorMessage;
