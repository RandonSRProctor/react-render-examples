import {
  selectIsNicknameFormOpen,
  selectUserNickname,
  updateUserNickname,
} from '../../redux/slices/toDoListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

export const ChangeNicknameForm = () => {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector(selectUserNickname);
  const isNicknameFormOpen = useAppSelector(selectIsNicknameFormOpen);
  return (
    <li className={`${isNicknameFormOpen ? '' : 'hidden'}`}>
      <div className="p-1">
        <span>Nickname:&nbsp;</span>
        <input
          className="border border-black rounded"
          value={userNickname}
          onChange={e => dispatch(updateUserNickname(e.target.value))}
        ></input>
      </div>
    </li>
  );
};
