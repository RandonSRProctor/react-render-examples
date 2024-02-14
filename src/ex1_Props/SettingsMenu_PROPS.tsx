import { useState } from 'react';

import { Setting } from './components/Setting';
import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { getNextColor } from './components/utils/getNextColor';

export const SettingsMenu_PROPS = () => {
  const [isLargeFontEnabled, setIsLargeFontEnabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const [userNickname, setUserNickName] = useState('');
  const [isNicknameFormOpen, setIsNicknameFormOpen] = useState(false);

  return (
    <div className={`${backgroundColor} p-16`}>
      <div className="SETTINGS_MENU pl-1 py-1 rounded bg-white border border-black shadow">
        <h2 className="pl-1 text-xl">{`${userNickname === '' ? 'User' : `${userNickname}'s`} Settings`}</h2>
        <ul aria-label="User Settings">
          <Setting
            setting="Text Size"
            value={isLargeFontEnabled ? 'Large' : 'Standard'}
            buttonText={
              isLargeFontEnabled ? 'Disable Large Font' : 'Enable Large Font'
            }
            action={() => setIsLargeFontEnabled(prevState => !prevState)}
          />
          <Setting
            setting="Background Color"
            value={backgroundColor}
            buttonText="Change Color"
            action={() => setBackgroundColor(getNextColor(backgroundColor))}
          />
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
    </div>
  );
};
