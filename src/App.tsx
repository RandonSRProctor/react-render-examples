import './App.css';

import {
  AppHeader,
  Gutter,
  HamburgerIcon,
  UserIcon,
  AppContent,
} from './sharedComponents';
import { SettingsMenu_PROPS } from './ex1_Props/SettingsMenu_PROPS';
import { SettingsMenu_REDUX } from './ex2_ReduxAndProps/SettingsMenu_REDUX';
import { SettingsMenu_CHILDREN } from './ex3_ReduxAndChildrenPattern/SettingsMenu_CHILDREN';

window.document.body.classList.add('bg-white');

export function App() {
  return (
    <>
      <AppHeader className="bg-indigo-800 py-1 flex justify-between">
        <Gutter className="pl-2 pt-1">
          <HamburgerIcon className="w-11 h-11" />
        </Gutter>
        <header className="bg-indigo-800 text-white text-center">
          <h1 className="text-3xl">Render Patterns</h1>
          <p className="text-xs italic text-yellow-200">
            with props, redux, and children
          </p>
        </header>
        <Gutter className="pr-2 pt-1">
          <UserIcon className="w-11 h-11" />
        </Gutter>
      </AppHeader>
      <AppContent className="pt-2 px-2 lg:pt-36 lg:px-36 w-screen">
        <div className="EXAMPLES_CONTAINER flex flex-col md:flex-row justify-between">
          <section className="p-1" aria-label="Example menu with props">
            <SettingsMenu_PROPS />
          </section>
          <section aria-label="Example menu with redux" className="REDUX p-1 ">
            <SettingsMenu_REDUX />
          </section>
          <section
            aria-label="Example menu with children pattern"
            className="CHILDREN p-1"
          >
            <SettingsMenu_CHILDREN />
          </section>
        </div>
      </AppContent>
    </>
  );
}
