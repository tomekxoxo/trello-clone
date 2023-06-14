import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: JSX.Element;
}

const Link = ({ href, children }: LinkProps) => (
  <NextLink href={href} passHref>
    {children}
  </NextLink>
);

export default Link;
