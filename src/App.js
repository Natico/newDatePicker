import React from 'react';
import Year from './components/Year';
import moment from 'moment';



function App() {

  return (
    <Year yearNumber={moment().year()}></Year>
  );
}

export default App;
