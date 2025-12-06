import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound.jsx';
import Products from './components/pages/Products.jsx';
import ProductDetail from './components/pages/ItemDetailContainer.jsx';
import CartDetail from './components/pages/CartDetail.jsx';
import Contact from './components/pages/Contact.jsx';
import CartProvider from './context/CartContext.jsx';
import RegisterPage from './components/pages/Register/Register.jsx';
import Login from './components/pages/Login/Login.jsx';
import UserProvider from './context/UserContext.jsx';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <CartProvider>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Products />} />
              <Route path="/category/:category" element={<Products />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/cart-detail" element={<CartDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<RegisterPage    />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App

