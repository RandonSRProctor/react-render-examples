import { useAppDispatch } from '../../redux/hooks/hooks';
import { useSelector } from 'react-redux';
import { Setting } from './Setting';
import {
  selectIsNicknameFormOpen,
  selectUserNickname,
  toggleNicknameForm,
} from '../../redux/slices/toDoListSlice';

export const SettingNickname = () => {
  const dispatch = useAppDispatch();
  const userNickname = useSelector(selectUserNickname);
  const isNicknameFormOpen = useSelector(selectIsNicknameFormOpen);
  return (
    <Setting
      setting="Nickname"
      value={userNickname}
      buttonText={
        isNicknameFormOpen ? 'Done Changing Nickname' : 'Change NickName'
      }
      action={() => dispatch(toggleNicknameForm())}
    />
  );
};
