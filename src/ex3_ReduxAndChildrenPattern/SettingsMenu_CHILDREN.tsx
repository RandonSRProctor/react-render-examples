import { SettingNickname } from './components/SettingNickname';
import { ChangeNicknameForm } from './components/ChangeNicknameForm';
import { SettingTextSize } from './components/SettingTextSize';
import { SettingBGColor } from './components/SettingBGColor';
import { BackGround } from './components/BackGround';
import { MenuHeader } from './components/MenuHeader';
import { TextSizeStatus } from './components/TextSizeStatus';
import { ToggleTextSizeButton } from './components/ToggleTextSizeButton';
import { BGStatus } from './components/BGStatus';
import { ToggleBGColorButton } from './components/ToggleBGColorButton';

export const SettingsMenu_CHILDREN = () => {
  return (
    <BackGround>
      <div className="SETTINGS_MENU pl-1 py-1 rounded bg-white border border-black shadow">
        <MenuHeader />
        <ul aria-label="User Settings">
          <li className="pl-1 py-1 text-sm">
            <div className="rounded-l pl-1 py-1 pr-14 bg-sky-200 border border-gray-300 border-r-0 shadow">
              <div className="text-base">
                <div className="p-1">
                  <span className="font-bold">Text Size:</span>
                  <TextSizeStatus /> Change to Notifications
                </div>
                <div className="p-1">
                  <ToggleTextSizeButton />
                </div>
              </div>
            </div>
          </li>
          <li className="pl-1 py-1 text-sm">
            <div className="rounded-l pl-1 py-1 pr-14 bg-sky-200 border border-gray-300 border-r-0 shadow">
              <div className="text-base">
                <div className="p-1">
                  <span className="font-bold">Background Color</span>:{' '}
                  <BGStatus />
                </div>
                <div className="p-1">
                  <ToggleBGColorButton>Change Color</ToggleBGColorButton>
                </div>
              </div>
            </div>
          </li>
          <SettingNickname />
          <ChangeNicknameForm />
        </ul>
      </div>
    </BackGround>
  );
};
