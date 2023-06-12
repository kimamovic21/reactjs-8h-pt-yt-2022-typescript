import React from 'react';
import './App13.css';
import Person from './Person';
import { Country } from './Person';

const App13 = () => {
  return (
    <div className="App">
      <Person 
            name='Kerim Imamovic'
            email='kerim@gmail.com'
            age={26}
            isMarried={false}
            friends={['James', 'John', 'Robert']}
            country={Country.Bosnia}
        />
    </div>
  );
}

export default App13;
