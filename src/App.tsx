import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Slide from './components/Slide';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Carousel>
        <Slide header='Slide 1' text='This is the first slide' color='F18A85' />
        <Slide header='Slide 2' text='This is the second slide' color='24788F' />
        <Slide header='Slide 3' text='This is the third slide' color='849DAB' />
      </Carousel>
    </div>
  );
}

export default App;
