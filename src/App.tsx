import React from 'react';
import {BookList} from './components/BookList';
import {Container, Segment} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Container>
        <Segment raised>
          <BookList />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
