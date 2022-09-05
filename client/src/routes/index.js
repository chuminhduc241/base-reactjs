import { Switch, withRouter } from 'react-router-dom';
import config from '~/config';
import Home from '~/pages/user/Home';
import Profile from '~/pages/user/Profile';
import PublicRoute from './publicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '~/pages/user/Login';
import Register from '~/pages/user/Register';
// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

const privateRoutes = [];

const AppRoutesComponent = () => {
    return (
        <div>
            <Switch>
                {publicRoutes.map((element, index) => (
                    <PublicRoute exact path={element.path} component={element.component} key={index} />
                ))}
                {privateRoutes.map((element, index) => (
                    <PrivateRoute path={element.path} component={element.component} key={index} />
                ))}
            </Switch>
        </div>
    );
};

export default withRouter(AppRoutesComponent);
