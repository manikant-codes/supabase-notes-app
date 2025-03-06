import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-neutral-900 rounded border border-neutral-700 p-8">
      {children}
    </div>
  );
}
