import type { ReactNode } from "react";

/** 72rem of content with the side padding outside it. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto box-content max-w-content px-gutter ${className}`}>{children}</div>;
}
