import NextLink from 'next/link';

interface ILink {
  href: string;
  children: JSX.Element;
}

const Link = ({ href, children }: ILink) => {
  return (
    <NextLink href={href} passHref>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
