import { ReactNode } from 'react';
import { selectBackgroundColor } from '../../redux/slices/toDoListSlice';
import { useAppSelector } from '../../redux/hooks/hooks';

type BackGroundProps = {
  children: ReactNode;
};

export const BackGround = ({ children }: BackGroundProps) => {
  const backgroundColor = useAppSelector(selectBackgroundColor);
  return <div className={`${backgroundColor} p-16`}>{children}</div>;
};
