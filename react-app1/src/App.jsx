import Header from './componets/Header.jsx'
import MainBody from './componets/MainBody.jsx';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import Mitarbeiter from './componets/Mitarbeiter.jsx';
import Zeit from './componets/Zeit.jsx';
import Anwesenheit from './componets/Anwesenheit.jsx';
import MeinKalender from './componets/MeinKalender.jsx';
import Ampelkonto from './componets/Ampelkonto.jsx';
import MeinTerminal from './componets/MeinTerminal.jsx';
import MeinUrlaub from './componets/MeinUrlaub.jsx';

function App() {

  const [selectedItemId, setSelectedItemId] = useState(null);

  return(
    <>
      <Header setSelectedItemId={setSelectedItemId}/>
      <Routes>
        <Route path="/" element={<MainBody selectedItemId={selectedItemId}/>}/>
        <Route path="/mitarbeiter/:id" element={<Mitarbeiter />}/>
        <Route path="/zeit" element={<Zeit />}/>
        <Route path="/anwesenheit" element={< Anwesenheit/>}/>
        <Route path="/kalender" element={< MeinKalender/>}/>
        <Route path="/ampelkonto" element={<Ampelkonto/>}/>
        <Route path="/terminal" element={<MeinTerminal/>}/>
        <Route path='/meinurlaub' element={<MeinUrlaub/>} />
      </Routes>     
    </>
  );
}

export default App
