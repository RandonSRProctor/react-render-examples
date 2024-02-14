import { ReactNode } from 'react';

type ButtonProps = {
  action: () => void;
  children: ReactNode;
};

export const Button = ({ action, children }: ButtonProps) => {
  return (
    <button
      onClick={() => action && action()}
      className=" shadow border border-emerald-700 rounded bg-emerald-400 p-1 px-2"
    >
      {children}
    </button>
  );
};
