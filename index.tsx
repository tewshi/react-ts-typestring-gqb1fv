import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Solution } from './Solution';

const App = () => (
  <div>
    <div>
      <h1>Welcome to Turing ReactJS Interview</h1>
      <div />
      <h4>Question: </h4>
      <h5 style={{ color: '#06f' }}>
        1 - Update the function <b>[getMostRepeatedCharacter]</b> that takes a
        string as an argument to return the most frequent character of a string
      </h5>
      <Solution />
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
