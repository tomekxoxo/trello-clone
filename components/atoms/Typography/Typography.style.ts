import { VariantType, WeightType } from 'Components/atoms/Typography/Typography';
import styled from 'styled-components';

interface IStyledTypographyProps {
  color: string;
  variant: VariantType;
  weight: WeightType;
}

const variantMapping = {
  h1: {
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
  },
  h2: {
    fontSize: '1.6rem',
    lineHeight: '2.1rem',
  },
  h3: {
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
  },
  h4: {
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
  },
  h5: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
};

export const StyledTypography = styled.span<IStyledTypographyProps>`
  color: ${({ color }) => color};
  font-size: ${({ variant }) => variantMapping[variant].fontSize};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ variant }) => variantMapping[variant].lineHeight};
  white-space: break-spaces;
`;
