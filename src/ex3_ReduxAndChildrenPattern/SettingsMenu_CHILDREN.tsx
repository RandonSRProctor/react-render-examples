import { useState } from 'react';

import { Setting } from './components/Setting';
import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { SettingTextSize } from './components/SettingTextSize';
import { SettingBGColor } from './components/SettingBGColor';
import { BackGround } from './components/BackGround';

export const SettingsMenu_CHILDREN = () => {
  const [userNickname, setUserNickName] = useState('');
  const [isNicknameFormOpen, setIsNicknameFormOpen] = useState(false);

  return (
    <BackGround>
      <div className="SETTINGS_MENU pl-1 py-1 rounded bg-white border border-black shadow">
        <h2 className="pl-1 text-xl">{`${userNickname === '' ? 'User' : `${userNickname}'s`} Settings`}</h2>
        <ul aria-label="User Settings">
          <SettingTextSize />
          <SettingBGColor />
          <Setting
            setting="Nickname"
            value={userNickname}
            buttonText={
              isNicknameFormOpen ? 'Done Changing Nickname' : 'Change NickName'
            }
            action={() => setIsNicknameFormOpen(prevState => !prevState)}
          />
          {isNicknameFormOpen ? (
            <li>
              <ChangeNicknameForm
                userNickname={userNickname}
                setUserNickName={setUserNickName}
              />
            </li>
          ) : null}
        </ul>
      </div>
    </BackGround>
  );
};
