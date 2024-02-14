import { SettingNickname } from './components/SettingNickname';
import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { SettingTextSize } from './components/SettingTextSize';
import { SettingBGColor } from './components/SettingBGColor';
import { BackGround } from './components/BackGround';
import {
  selectIsNicknameFormOpen,
  selectUserNickname,
} from '../redux/slices/toDoListSlice';
import { useAppSelector } from '../redux/hooks/hooks';

export const SettingsMenu_CHILDREN = () => {
  const userNickname = useAppSelector(selectUserNickname);
  const isNicknameFormOpen = useAppSelector(selectIsNicknameFormOpen);

  return (
    <BackGround>
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
    </BackGround>
  );
};
