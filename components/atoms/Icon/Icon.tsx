import { lazy, memo, Suspense } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

export type IconNameType =
  | 'chevron'
  | 'image'
  | 'lock'
  | 'logo'
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
  | 'magnifying-glass';

interface IIconProps {
  color?: ThemeColorsType;
  name: IconNameType;
  size?: string;
}

const Icon = ({ name, color = 'blue1', size = '16', ...props }: IIconProps) => {
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
      <Component fill={colors[color]} {...props} width={size} height={size} />
    </Suspense>
  );
};

export default memo(Icon);
