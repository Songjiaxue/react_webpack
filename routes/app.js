import Home from '../src/app/home';
import Collection from '../src/app/collection';
import Plan from '../src/app/plan';

export default [
  {
    path: '/',
    component: Home,
    breadcrumbName: 'HOME',
    // children: [
    //   {
    //     path: '/login',
    //     component: Home,
    //     breadcrumbName: 'qqq',
    //   },
    // ],
  },
  {
    path: '/page1',
    component: Collection,
    breadcrumbName: 'PAGE1',
    // children: [
    //   {
    //     path: '/aaa/123',
    //     component: Home,
    //     breadcrumbName: 'qqq',
    //   },
    // ],
  },
  {
    path: '/page2',
    component: Plan,
    breadcrumbName: 'PAGE2',
    // children: [
    //   {
    //     path: '/aaa/123',
    //     component: Home,
    //     breadcrumbName: 'qqq',
    //   },
    // ],
  },
];
