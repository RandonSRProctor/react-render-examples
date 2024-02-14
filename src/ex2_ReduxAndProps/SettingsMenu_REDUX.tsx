import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { SettingNickname } from './components/SettingNickname';
import { SettingTextSize } from './components/SettingTextSize';
import { SettingBGColor } from './components/SettingBGColor';
import { useSelector } from 'react-redux';
import {
  selectBackgroundColor,
  selectIsNicknameFormOpen,
  selectUserNickname,
} from '../redux/slices/toDoListSlice';

export const SettingsMenu_REDUX = () => {
  const backgroundColor = useSelector(selectBackgroundColor);
  const userNickname = useSelector(selectUserNickname);
  const isNicknameFormOpen = useSelector(selectIsNicknameFormOpen);
  return (
    <div className={`${backgroundColor} p-16`}>
      <div className="SETTINGS_MENU pl-1 py-1 rounded bg-white border border-black shadow">
        <h2 className="pl-1 text-xl">{`${userNickname === '' ? 'User' : `${userNickname}'s`} Settings`}</h2>
        <ul aria-label="User Settings">
          <SettingTextSize />
          <SettingBGColor />
          <SettingNickname />
          {isNicknameFormOpen ? (
            <li>
              <ChangeNicknameForm />
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
