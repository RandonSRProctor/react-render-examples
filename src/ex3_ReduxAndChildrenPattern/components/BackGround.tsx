import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectBackgroundColor } from '../../redux/slices/toDoListSlice';

type BackGroundProps = {
  children: ReactNode;
};

export const BackGround = ({ children }: BackGroundProps) => {
  const backgroundColor = useSelector(selectBackgroundColor);
  return <div className={`${backgroundColor} p-16`}>{children}</div>;
};
