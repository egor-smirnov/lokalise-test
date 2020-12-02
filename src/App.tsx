import React from 'react';
import { Container } from 'react-bootstrap';

import './App.css';
import { LanguagesList } from './features/languages';

function App() {
  return (
    <Container className="App" fluid>
      <LanguagesList />
    </Container>
  );
}

export default App;
