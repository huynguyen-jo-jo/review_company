
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import Componant from './Componant/Text';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Componant titile="desktop-1"/>} path="/desktop-1"/>
          <Route element={<Componant titile="desktop-2"/>} path="/desktop-2"/>
          <Route element={<Componant titile="desktop-3"/>} path="/desktop-3"/>
          <Route element={<Componant titile="desktop-4"/>} path="/desktop-4"/>
          <Route element={<Componant titile="desktop-5"/>} path="/desktop-5"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
