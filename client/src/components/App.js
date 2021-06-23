import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const user = 'test';

const App = () => {
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
      <Main>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            {currentChannel ? (
              <Chat />
            ) : (
              <NoChat />
            )}
          </Route>
        </Switch>
      </Main>
      )}
    </Router>
  );
}

export default App;
