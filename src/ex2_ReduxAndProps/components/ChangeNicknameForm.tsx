import {
  selectUserNickname,
  updateUserNickname,
} from '../../redux/slices/toDoListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

export const ChangeNicknameForm = () => {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector(selectUserNickname);
  return (
    <div className="p-1">
      <span>Nickname:&nbsp;</span>
      <input
        className="border border-black rounded"
        value={userNickname}
        onChange={e => dispatch(updateUserNickname(e.target.value))}
      ></input>
    </div>
  );
};
