import Header from './componets/Header.jsx'
import MainBody from './componets/MainBody.jsx';
import React, { useState } from 'react';

function App() {

  const [selectedItemId, setSelectedItemId] = useState(null);

  return(
    <>
      <Header setSelectedItemId={setSelectedItemId}/>
      <MainBody selectedItemId={selectedItemId}/>      
    </>
  );
}

export default App
