import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import ProtectedRoute from './helpers/ProtectedRoute';

const Home = lazy(() => import('./screens/Home'));
const Login = lazy(() => import('./screens/Login'));
const NotFound = lazy(() => import('./screens/NotFound'));
const Signup = lazy(() => import('./screens/Signup'));

const App = () => {

  // AMEND THIS!!!
  const user = 'test';

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGNUP} component={Signup} />
            <ProtectedRoute user={user} path={ROUTES.HOME} exact>
              <Home />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
