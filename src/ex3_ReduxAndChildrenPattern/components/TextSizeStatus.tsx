import { useAppSelector } from '../../redux/hooks/hooks';
import { selectIsLargeFontEnabled } from '../../redux/slices/toDoListSlice';

export const TextSizeStatus = () => {
  const status = useAppSelector(selectIsLargeFontEnabled);
  return <span>&nbsp;{status ? 'Large' : 'Standard'}</span>;
};
