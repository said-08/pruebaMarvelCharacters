
import { Home } from '../Pages/home/home';
import Error404 from '../Pages/error/error404';
import Details from '../Pages/Details/details';

const marvelRoutes = [
{path: '/', component: Home},
{path: '/:id', component:Details},
{path: '*', component: Error404},
];

export { marvelRoutes };