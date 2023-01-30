import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import { AuthProvider } from "./Context/autentificationContext";
import Login from "./components/LoginPage";
import Product from "./components/Product";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route element={<AuthProvider />}>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/product" element={<Product />} />
                </Route>


            </Routes>

        </BrowserRouter>
    );
}

const Screen = styled.div`
    font-family: "Roboto Condensed", "Oswald", "sans-serif";
    background-color: #f3f7fa;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
