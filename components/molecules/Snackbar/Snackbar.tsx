import Icon from 'Components/atoms/Icon/Icon';
import Typography from 'Components/atoms/Typography/Typography';
import { StyledSnackbar } from 'Components/molecules/Snackbar/Snackbar.style';
import useSnackbar from 'Hooks/useSnackbar';
import { useEffect } from 'react';

const Snackbar = () => {
  const message = useSnackbar(state => state.message);
  const clearSnackbar = useSnackbar(state => state.clearSnackbar);
  const severity = useSnackbar(state => state.severity);

  useEffect(() => {
    setTimeout(() => {
      clearSnackbar();
    }, 5000);
  }, [clearSnackbar]);

  const getIcon = () => {
    switch (severity) {
      case 'success':
        return 'circle-check';
      case 'error':
        return 'exclamation';
      case 'warning':
        return 'triangle-exclamation';
      default:
        return 'circle-exclamation';
    }
  };

  return (
    <StyledSnackbar severity={severity}>
      <Icon name={getIcon()} color='white' />;
      <Typography variant='h4' color='white'>
        {message}
      </Typography>
    </StyledSnackbar>
  );
};

export default Snackbar;
