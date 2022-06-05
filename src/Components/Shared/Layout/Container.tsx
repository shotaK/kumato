import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`px-6 ${className}`}>{children}</div>;
};

export default Container;
