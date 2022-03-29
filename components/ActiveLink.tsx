import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement, useMemo } from "react";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

/**
 *
 * @return {link}
 */
export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    return shouldMatchExactHref
      ? asPath == (rest.href || asPath == rest.as)
      : (asPath.startsWith(String(rest.href))) || asPath.startsWith(String(rest.as))
  }, [asPath, shouldMatchExactHref, rest]);


  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "yellow.orange" : "gray.50",
      })}
    </Link>
  );
}
