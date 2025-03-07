import React from "react";

interface PublicPageTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export default function PublicPageTitle({
  children,
  className,
  ...props
}: PublicPageTitleProps) {
  return (
    <h2 className={`font-semibold text-2xl ${className || ""}`}>{children}</h2>
  );
}
