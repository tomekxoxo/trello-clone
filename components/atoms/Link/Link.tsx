import NextLink from 'next/link';

interface ILinkProps {
  href: string;
  children: JSX.Element;
}

const Link = ({ href, children }: ILinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
