import { create } from 'zustand';

export type Severity = 'error' | 'success' | 'info' | 'warning';

interface Snackbar {
  message: string;
  isVisible: boolean;
  clearSnackbar: () => void;
  showSnackbar: (message: string, severity: Severity) => void;
  severity: Severity;
}

const useSnackbar = create<Snackbar>(set => ({
  clearSnackbar: () => set(() => ({ isVisible: false, message: '' })),
  isVisible: false,
  message: '',
  severity: 'success',
  showSnackbar: (message, severity) => set(() => ({ isVisible: true, message, severity })),
}));

export default useSnackbar;
