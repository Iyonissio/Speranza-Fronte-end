import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProducts from './components/AddProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarMenu from './components/NavBarMenu';
// import your route components too

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <NavBarMenu />
          <Routes>
            <Route path="/" element={<ShowProducts />} />
            <Route path="addProduct" element={<AddProducts />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
