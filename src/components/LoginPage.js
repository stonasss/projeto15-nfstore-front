import { Link, useNavigate } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../Context/autentificationContext";
import styled from "styled-components";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        senha: "",
    });
    const [error, setError] = useState(null);
    const { setToken, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const sendInfo = async (e) => {
        e.preventDefault();
        axios
            .post("/sign-in", form)
            .then(({ data }) => {
                //config
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${data.token}`;
                setToken(data.token);
                setUser(data.user);
                navigate("/home");
            })
            .catch((error) => setError(error.response.data));
    };

    const handleInputChange = useCallback(
        ({ target: { name, value } }) =>
            setForm({
                ...form,
                [name]: value,
            }),
        [form, setForm]
    );

    return (
        <>
            <Corpo>
                <Logo>NFsTore</Logo>
                <form onSubmit={sendInfo}>
                    <InputEmail
                        data-test="email"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <InputSenha
                        data-test="password"
                        type="password"
                        name="senha"
                        onChange={handleInputChange}
                    />
                    <BotaoEntrar data-test="sign-in-submit" type="submit">
                        Entrar
                    </BotaoEntrar>
                    <Link to="/register">
                        <IrCadastro data-test="signup-link">
                            Primeira vez? Cadastre-se!
                        </IrCadastro>
                    </Link>
                </form>
            </Corpo>
        </>
    );
}

const Corpo = styled.div`
    width: 100vw;
    background-color: #ffd580;
    height: 100vh;
    display: flex;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    justify-content: center;
    display: flex;
`;
const Logo = styled.div`
    position: absolute;
    top: 159px;
    color: black;
    font-size: 40px;
    font-family: "Unbounded", cursive;
`;

const InputEmail = styled.input.attrs({
    placeholder: "E-mail",
})`
    &&& {
        all: unset;
        box-sizing: border-box;
        padding-left: 11px;
        width: 326px;
        height: 58px;
        position: absolute;
        top: 233px;
        left: 25px;
        background: #ffffff;
        border: 1px solid orangered;
        border-radius: 5px;
        font-family: "Roboto Condensed";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        ::placeholder {
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
        :disabled {
            background: #f2f2f2;
            border: 1px solid #d5d5d5;
            border-radius: 5px;
            color: #afafaf;
        }
    }
`;

const InputSenha = styled.input.attrs({
    placeholder: "Senha",
})`
    &&& {
        all: unset;
        box-sizing: border-box;
        padding-left: 11px;
        width: 326px;
        height: 58px;
        position: absolute;
        top: 304px;
        left: 25px;
        background: #ffffff;
        border: 1px solid orangered;
        border-radius: 5px;
        font-family: "Roboto Condensed";
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        ::placeholder {
            font-family: "Raleway";
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
        :disabled {
            background: #f2f2f2;
            border: 1px solid #d5d5d5;
            border-radius: 5px;
            color: #afafaf;
        }
    }
`;

const BotaoEntrar = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 326px;
    height: 46px;
    top: 375px;
    left: 25px;
    background: orange;
    border: 1px solid orangered;
    border-radius: 5px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 23px;
    color: #060f17;
`;

const BotaoEntrarLoading = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 326px;
    height: 46px;
    top: 375px;
    left: 25px;
    background: #a328d6;
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
`;

const IrCadastro = styled.button`
    all: unset;
    position: absolute;
    left: 110px;
    top: 457px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    color: black;
`;
