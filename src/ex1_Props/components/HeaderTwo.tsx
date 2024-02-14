import { ReactNode } from 'react';

type HeaderTwoProps = {
  children: ReactNode;
};

export const HeaderTwo = ({ children }: HeaderTwoProps) => {
  return <h2 className="pl-1 text-xl">{children}</h2>;
};
