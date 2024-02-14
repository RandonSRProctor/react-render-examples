import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { SettingNickname } from './components/SettingNickname';
import { SettingTextSize } from './components/SettingTextSize';
import { SettingBGColor } from './components/SettingBGColor';
import { useAppSelector } from '../redux/hooks/hooks';
import {
  selectBackgroundColor,
  selectIsNicknameFormOpen,
  selectUserNickname,
} from '../redux/slices/toDoListSlice';

export const SettingsMenu_REDUX = () => {
  useAppSelector;
  const backgroundColor = useAppSelector(selectBackgroundColor);
  const userNickname = useAppSelector(selectUserNickname);
  const isNicknameFormOpen = useAppSelector(selectIsNicknameFormOpen);
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
