import Home from './components/Home';
import Page from './components/Page';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/page',
    component: Page,
  },
];

export default routes;
