import React from 'react';
import {BookList} from './components/BookList';
import {Container, Segment} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Segment raised>
            <Link to="/books">Bücher</Link>
            <Switch>
              <Route path="/books">
                <BookList />
              </Route>
            </Switch>
          </Segment>
        </Container>
      </div>
    </Router>
  );
}

export default App;
