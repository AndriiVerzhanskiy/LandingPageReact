import NextLink from "next/link";

const Link = ({ href, className = "", children }) => {
  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
export default Link;
