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
        axios.post('/sign-in', form)
            .then(({ data }) => {
                //config
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                setToken(data.token);
                setUser(data.user);
                navigate('/home');
            }).catch(error => setError(error.response.data));
    }

    const handleInputChange = useCallback(({ target: { name, value } }) => setForm({
        ...form,
        [name]: value,
    }), [form, setForm])

    return (
        <>
            <Corpo>

                <Logo>
                    NFsTore
                </Logo>
                <form onSubmit={sendInfo}>
                    <InputEmail data-test="email" name="email" onChange={handleInputChange} />
                    <InputSenha data-test="password" type="password" name="senha" onChange={handleInputChange} />
                    <BotaoEntrar data-test="sign-in-submit" type="submit">Entrar</BotaoEntrar>
                    <Link to="/cadastro">
                        <IrCadastro data-test="signup-link">Primeira vez? Cadastre-se!</IrCadastro>
                    </Link>
                </form>
            </Corpo>
        </>
    )
}

const Corpo = styled.div`
background-color: #FFD580;
width:375px;
height:667px;
box-sizing:border-box;
position:relative;
justify-content:center;
display:flex;
`
const Logo = styled.div`
position:absolute;
top:159px;
color:black;
font-size:40px;
font-family: 'Unbounded', cursive;
`

const InputEmail = styled.input.attrs({
    placeholder: "E-mail",
})`
    &&& {
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:233px;
            left:25px;
            background: #FFFFFF;
            border: 1px solid orangered;
            border-radius: 5px;
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: black;
            ::placeholder{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #000000;
            }    
            :disabled{
                background: #F2F2F2;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                color: #AFAFAF;
            }     
    }
  `

const InputSenha = styled.input.attrs({
    placeholder: "Senha",
})`
    &&&{
            all:unset;
            box-sizing:border-box;
            padding-left:11px;        
            width: 326px;
            height: 58px;
            position:absolute;
            top:304px;
            left:25px;
            background: #FFFFFF;
            border: 1px solid orangered;
            border-radius: 5px;
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: black;
            ::placeholder{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                color: #000000;
            }    
            :disabled{
                background: #F2F2F2;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                color: #AFAFAF;
            } 
    }
  `

const BotaoEntrar = styled.button`
    all:unset;
    display: flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    width: 326px;
    height: 46px;
    top: 375px;
    left:25px;
    background: orange;
    border: 1px solid orangered;
    border-radius: 5px;
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 23px;
    color: #FFFFFF;
  `

const BotaoEntrarLoading = styled.button`
all:unset;
display: flex;
justify-content:center;
align-items:center;
position: absolute;
width: 326px;
height: 46px;
top: 375px;
left:25px;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;    
line-height: 23px;
color:#FFFFFF;
`

const IrCadastro = styled.button`
all:unset;
   
position: absolute;
width: 200px;
height: 18px;
left: 92px;
top: 457px;
font-family: "Roboto Condensed";
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
/* identical to box height */
color: black;
  `