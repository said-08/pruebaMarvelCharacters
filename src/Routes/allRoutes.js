
import { Home } from '../Pages/home/home';
import { Loading } from '../Components/Loading/loading'
import Error404 from '../Pages/error/error404';

const marvelRoutes = [
{path: '/', component: Home},
{path: '/loading', component: Loading},
{path: '/error404', component: Error404},
];

export { marvelRoutes };