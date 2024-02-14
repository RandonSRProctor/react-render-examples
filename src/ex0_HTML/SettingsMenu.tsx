export const SettingsMenu_HTML = () => {
  return (
    <div className="SETTINGS_MENU pl-1 py-1 rounded bg-white border border-sky-600 shadow">
      <h2 className="pl-1 text-xl">User Settings</h2>
      <ul aria-label="User Settings">
        <li className="TEXT_SIZE pl-1 py-1 text-sm">
          <div className="rounded-l pl-1 py-1 pr-14 bg-sky-200 border border-gray-300 border-r-0 shadow">
            <div className="text-base">
              <div className="p-1">
                <span className="font-bold">Text Size</span>: Standard
              </div>
              <div className="p-1">
                <button className=" shadow border border-emerald-700 rounded bg-emerald-400 p-1 px-2">
                  Enable Large Font
                </button>
              </div>
            </div>
          </div>
        </li>
        <li className="NICKNAME py-1 pl-1 text-sm">
          <div className="rounded-l pl-1 py-1 pr-14 bg-sky-200 border border-gray-300 border-r-0 shadow">
            <div className="text-base">
              <div className="p-1">
                <span className="font-bold">Nickname</span>: Randy
              </div>
              <div className="p-1">
                <button className="shadow border border-emerald-700 rounded bg-emerald-400 p-1 px-2">
                  Change Nickname
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
