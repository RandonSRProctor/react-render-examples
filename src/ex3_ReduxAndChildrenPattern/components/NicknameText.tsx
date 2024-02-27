import { useAppSelector } from '../../redux/hooks/hooks';
import { selectUserNickname } from '../../redux/slices/toDoListSlice';

export const NicknameText = () => {
  const nickname = useAppSelector(selectUserNickname);
  const nicknameText = nickname === '' ? '(not created)' : nickname;
  return <span>{nicknameText}</span>;
};
