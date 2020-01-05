import React, { useEffect } from 'react';

import { initFlowy } from './lib'
// import { Drag } from './lib/drag'
import './app.css'
import './lib/index.css'

function App() {
  useEffect(() => {
    initFlowy('.App')
  }, [])
  return (
    <div className='root'>
      <div className='blocks'>
        <div className='flow-block'>
          <div className='block a'>A</div>
        </div>
        <div className='flow-block'>
          <div className='block b'>B</div>
        </div>
      </div>
      <div className='container'>
        <div className="App">
          <div className='test'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
