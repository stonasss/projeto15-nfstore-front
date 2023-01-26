import React from "react";
import styled from "styled-components";
import RegisterPage from "./components/RegisterPage";

export default function App() {
    return (
        <Screen>
            <RegisterPage />
        </Screen>
    );
}

const Screen = styled.div`
    font-family: "Raleway", "sans-serif";
    background-color: #f3f7fa;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
