import './App.css';
import ShowCondutores  from './components/ShowCondutores ';
import AddCondutor from './components/AddCondutor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarMenu from './components/NavBarMenu';
import ChapaDetail from './components/ChapaDetail';
// import Todas as Rotas React js Spe Formularios

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <NavBarMenu />
          <Routes>
            <Route path="/" element={<ShowCondutores />} />
            <Route path="addCondutor" element={<AddCondutor />} />
            <Route path="/:id/" element={<ChapaDetail/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
