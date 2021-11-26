import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProducts from './components/AddProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarMenu from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';
// import your route components too

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <NavBarMenu />
          <Routes>
            <Route path="/" element={<ShowProducts />} />
            <Route path="addProduct" element={<AddProducts />} />
            <Route path="/:id/" element={<ProductDetail/>} />
            <Route path="/:id/update" element={<UpdateProduct/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
