import React from 'react';
import './index.scss';
import { Success } from './components-inner/Succes.jsx';
import { Users } from './components-inner/Users/Users.jsx';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;