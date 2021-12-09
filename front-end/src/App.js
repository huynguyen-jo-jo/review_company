
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import Desktop3 from './Componant/Desktop3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Desktop3/>} path="/desktop-3"/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
