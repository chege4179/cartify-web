import React from "react";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";


function App() {
    return (
        <Layout title={null}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/product/:productId" element={<ProductPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
