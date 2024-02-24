import { useAppSelector } from '../../redux/hooks/hooks';
import { selectUserNickname } from '../../redux/slices/toDoListSlice';

export const MenuHeader = () => {
  const userNickname = useAppSelector(selectUserNickname);
  return (
    <h2 className="pl-1 text-xl">{`${userNickname === '' ? 'User' : `${userNickname}'s`} Settings`}</h2>
  );
};
