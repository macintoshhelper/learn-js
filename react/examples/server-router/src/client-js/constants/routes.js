import Home from '../components/Home';
import Login from '../components/Login';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    // loadData: () => getSomeData(),
  },
  {
    path: '/login',
    component: Login,
  },
  // etc.
];

export default routes;
