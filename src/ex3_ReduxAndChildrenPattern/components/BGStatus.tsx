import { useAppSelector } from '../../redux/hooks/hooks';
import { selectBackgroundColor } from '../../redux/slices/toDoListSlice';

export const BGStatus = () => {
  const value = useAppSelector(selectBackgroundColor);
  return <span>{value}</span>;
};
