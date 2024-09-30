import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PageNotFound from './Page/PageNotFound';
import Main from './Page/Main/Main';
import Guide from './Page/Guide';
import PageMain from './Page/PageMain';
import Test from './Page/Test';
import CallPopup from './Page/CallPopup';
import UI_ACB_0001 from './Page/Main/UI_ACB_0001';
import UI_ACB_0002 from './Page/Main/UI_ACB_0002';
import UI_ACB_0004 from './Page/Main/UI_ACB_0004';
import UI_ACB_0005 from './Page/Main/UI_ACB_0005';
import UI_ACB_000101 from './Page/Main/UI_ACB_000101';

export const router = createBrowserRouter([
  {
    path: '/', // 기본 셋팅 '/' 는 메인으로 이동
    element: <App />,
    errorElement: <PageNotFound />, // 페이지 없을 경우 페이지 설정.
    children: [
      {
        index: true, // 배열 첫번째 항목인 path와 동일한 true일 경우 메인화면을 출력.
        element: <PageMain /> // 메인 페이지
      },
      {
        path: '/Main/Main',
        element: <Main />
      },
      {
        path: '/Guide',
        element: <Guide />
      },
      {
        path: '/Test',
        element: <Test />
      },
      {
        path: '/CallPopup',
        element: <CallPopup />
      },
      {
        path: '/Main/UI_ACB_0001',
        element: <UI_ACB_0001 />
      },
      {
        path: '/Main/UI_ACB_0002',
        element: <UI_ACB_0002 />
      },
      {
        path: '/Main/UI_ACB_0004',
        element: <UI_ACB_0004 />
      },
      {
        path: '/Main/UI_ACB_0005',
        element: <UI_ACB_0005 />
      },
      {
        path: '/Main/UI_ACB_000101',
        element: <UI_ACB_000101 />
      }
    ]
  },
  {
    // 별도에 LOGIN이나 페이지가 GNB를 타지 않을 경우의 Router을 설정.
  }
]);
