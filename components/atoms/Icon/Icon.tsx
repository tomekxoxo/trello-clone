import { lazy, memo, Suspense } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'Utils/theme';

export type IconName =
  | 'chevron'
  | 'image'
  | 'lock'
  | 'logo'
  | 'google'
  | 'panorama'
  | 'plus'
  | 'xmark'
  | 'grid'
  | 'ellipsis'
  | 'paperclip'
  | 'message'
  | 'earth'
  | 'user'
  | 'file-lines'
  | 'calendar'
  | 'pen'
  | 'exclamation'
  | 'circle-check'
  | 'circle-exclamation'
  | 'triangle-exclamation'
  | 'magnifying-glass';

interface IconProps {
  color?: ThemeColors;
  name: IconName;
  size?: string;
  onClick?: () => void;
}

const Icon = ({ name, color = 'blue1', size = '16', onClick, ...props }: IconProps) => {
  const { colors } = useTheme();

  const Component = lazy(() =>
    import(`../../../public/${name}.svg`).catch(() => ({
      default: () => {
        console.error(`Icon with name: ${name} not found!`);
        return null;
      },
    })),
  );

  return (
    <Suspense fallback={false}>
      <Component fill={colors[color]} {...props} width={size} height={size} onClick={onClick} />
    </Suspense>
  );
};

export default memo(Icon);
