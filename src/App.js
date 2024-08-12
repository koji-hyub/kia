import Navigation from '~/Page/Layout/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import React from 'react';
import QuickMenu from './Components/QuickMenu/QuickMenu';
import AppStyle from './AppStyle';
const AppWrap = AppStyle(APP_SKIN);

function App() {
  return (
    <AppWrap className="App">
      <Navigation />
      <Outlet />
      {/*<QuickMenu />*/}
    </AppWrap>
  );
}
export default App;
