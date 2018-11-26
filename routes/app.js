import Home from '../src/app/home';
import Login from '../src/app/login';

export default [
  {
    path: '/',
    component: Home,
    breadcrumbName: '首页',
    children: [
      {
        path: '/login',
        component: Home,
        breadcrumbName: 'qqq',
      },
    ],
  },
  {
    path: '/aaa',
    component: Login,
    breadcrumbName: 'aaa',
    children: [
      {
        path: '/aaa/123',
        component: Home,
        breadcrumbName: 'qqq',
      },
    ],
  },
];
