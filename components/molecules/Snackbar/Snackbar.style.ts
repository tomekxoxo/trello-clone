import { Severity } from 'Hooks/useSnackbar';
import styled from 'styled-components';
import { colors } from 'Utils/theme';

interface IStyledSnackbarProps {
  severity: Severity;
}

const mapSeverityToColor = {
  error: colors.red,
  info: colors.blue1,
  success: colors.green3,
  warning: colors.orange,
};

export const StyledSnackbar = styled.div<IStyledSnackbarProps>`
  align-items: center;
  align-items: center;
  background-color: ${({ severity }) => mapSeverityToColor[severity]};
  border: none;
  border-radius: 8px;
  bottom: 1.6rem;
  display: flex;
  gap: 0.8rem;
  left: 50%;
  padding: 9px;
  position: fixed;
  right: 50%;
  width: max-content;
  z-index: 1000;
`;
