import { lazy, memo, Suspense } from 'react';
import { useTheme } from 'styled-components';
import { ThemeColorsType } from 'Utils/theme';

interface IIconProps {
  color: ThemeColorsType;
  name: string;
}

const Icon = ({ name, color = 'blue1', ...props }: IIconProps) => {
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
      <Component fill={colors[color]} {...props} width={16} height={16} />
    </Suspense>
  );
};

export default memo(Icon);
