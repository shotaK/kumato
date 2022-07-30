import { ReactNode } from "react";

const Container = ({
  children,
  className,
  adjustSpacing = false,
}: {
  children: ReactNode;
  className?: string;
  adjustSpacing?: boolean;
}) => {
  return (
    <div className={`${className} ${adjustSpacing ? "pl-6 pr-4" : "px-6 "}`}>
      {children}
    </div>
  );
};

export default Container;
