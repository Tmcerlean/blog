import { lazy, Suspense, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import * as ROUTES from './constants/routes';
import ProtectedRoute from './helpers/ProtectedRoute';

const Admin = lazy(() => import('./screens/Admin'));
const Home = lazy(() => import('./screens/Home'));
const Login = lazy(() => import('./screens/Login'));
const NotFound = lazy(() => import('./screens/NotFound'));
const Signup = lazy(() => import('./screens/Signup'));

const App = () => {

  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("userAuth");
    if (user) {
      setUserAuth(true);
    } else {
      setUserAuth(false);
    }
  }, [userAuth]);

  return (
    <Router>
      <Suspense fallback={<p>Loading ...</p>}>
        <Switch>
          <Route path={ROUTES.HOME} component={Home} exact={true} />
          <Route userAuth={userAuth} path={ROUTES.LOGIN} component={Login} />
          <Route userAuth={userAuth} path={ROUTES.SIGNUP} component={Signup} />
          <ProtectedRoute userAuth={userAuth} path={ROUTES.ADMIN} exact>
            <Admin />
          </ProtectedRoute>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
