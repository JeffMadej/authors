import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorTable from './views/AuthorTable';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <h1 className="mx-auto">Favorite Authors</h1>
      <Router>
        <AuthorTable path="/"/>
        <NewAuthor path="/new"/>
        <UpdateAuthor path="/update/:id"/>
      </Router>
    </div>
  );
}

export default App;