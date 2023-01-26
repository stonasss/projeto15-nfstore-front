import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signUp(e) {
        axios
            .post(`${process.env.REACT_APP_API_URL}/cadastro`, {
                username,
                email,
                password,
                confirmPassword,
            })
            .then((res) => {
                console.log(res.data);
                alert('Usuário cadastrado');
            })
            .catch((err) => {
                console.log(err);
                alert('Dados inválidos!')
            });
        e.preventDefault();
    }

    return (
        <>
            <Body>
                <Form onSubmit={signUp}>
                    <Label htmlFor="name">
                        <Input
                            placeholder="Nome"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.currentTarget.value)}
                            required
                        ></Input>
                    </Label>

                    <Label htmlFor="email">
                        <Input
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            required
                        ></Input>
                    </Label>

                    <Label htmlFor="password">
                        <Input
                            placeholder="Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            required
                        ></Input>
                    </Label>

                    <Label htmlFor="confirmPassword">
                        <Input
                            placeholder="Confirme a senha"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                            required
                        ></Input>
                    </Label>

                    <Button type="submit" id="submitbtn">
                        Cadastrar
                    </Button>
                </Form>
            </Body>
        </>
    );
}

const Body = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Form = styled.form`
    display: flex;
    margin: auto;
    flex-direction: column;
`;

const Label = styled.label`
    display: flex;
    padding-top: 10px;
    flex-direction: column;
`;

const Input = styled.input`
    font-family: "Roboto Condensed";
    width: 315px;
    height: 45px;
    font-size: 14px;
    margin: 2px;
    padding-left: 15px;
    border-style: none;
    border-radius: 5px;

    ::placeholder {
        color: #010100;
    }
`;

const Button = styled.button`
    margin: 15px auto 35px auto;
    align-items: center;
    width: 90px;
    height: 39px;
    font-family: "Roboto Condensed";
    font-size: 16px;
    font-weight: 600;
    color: #fe6910;
    background-color: #f7dfd6;
    border-radius: 5px;
    border-style: none;
`;
