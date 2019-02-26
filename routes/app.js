import Loadable from 'react-loadable';
import load from '../src/util/load';

const Home = Loadable({
  loader: () => import('../src/app/home'),
  loading: load,
  delay: 300,
});
const Collection = Loadable({
  loader: () => import('../src/app/collection'),
  loading: load,
  delay: 300,
});
const Plan = Loadable({
  loader: () => import('../src/app/plan'),
  loading: load,
  delay: 300,
});

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
