
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import Desktop3 from './Componant/Desktop3';
import Desktop7 from './Componant/Desktop7';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Desktop3/>} path="/desktop-3"/>
          <Route element={<Desktop7/>} path="/desktop-7"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
