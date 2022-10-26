import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: JSX.Element;
}

const Link = ({ href, children }: LinkProps) => (
  <NextLink href={href} passHref>
    <a>{children}</a>
  </NextLink>
);

export default Link;
