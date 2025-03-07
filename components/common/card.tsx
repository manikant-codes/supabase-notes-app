import React from "react";

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`bg-neutral-900 rounded border border-neutral-700 p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
