import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Setting } from './Setting';
import {
  selectIsNicknameFormOpen,
  selectUserNickname,
  toggleNicknameForm,
} from '../../redux/slices/toDoListSlice';

export const SettingNickname = () => {
  const dispatch = useAppDispatch();
  const userNickname = useAppSelector(selectUserNickname);
  const isNicknameFormOpen = useAppSelector(selectIsNicknameFormOpen);
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
