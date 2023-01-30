import styled from "styled-components";
import coin from "../assets/drivencoin.png";
import arrow from "../assets/arrow-back-outline.svg";
import user from "../assets/user.png";
import add from "../assets/add-circle-outline.svg";
import { useNavigate } from "react-router-dom";

export default function Product() {
    const next = useNavigate();

    return (
        <>
            <Corpo>
                <Header>
                    <img
                        src={arrow}
                        alt="back"
                        onClick={() => {
                            next("/home");
                        }}
                    ></img>
                    <img
                        src={user}
                        alt="user"
                        onClick={() => {
                            next("/cart");
                        }}
                    ></img>
                </Header>
                <Content>
                    <Image src="http://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=w255-h300-n-l64"></Image>
                    <Title>Sample Product</Title>
                    <Price>
                        <img src={coin} alt="coin"></img>
                        <h1>1000</h1>
                    </Price>
                    <Desc>
                        Arquitetura sintética, material termoplástico feito
                        seguindo modelos sustentáveis
                    </Desc>
                </Content>
                <Cart>
                    <h2>Adicionar ao carrinho</h2>
                    <img src={add} alt="add"></img>
                </Cart>
            </Corpo>
        </>
    );
}

const Corpo = styled.div`
    background-color: #ffd580;
    width: 375px;
    height: 100vh;
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    background-color: #ffd580;
    width: 100vw;
    height: 6vh;
    display: flex;
    justify-content: space-between;

    img {
        width: 30px;
        height: 30px;
        margin: 14px;
    }
`;

const Content = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto 0 auto;
    flex-direction: column;
    width: 76vw;
`;

const Image = styled.img`
    margin: 70px auto 15px auto;
    width: 75vw;
    height: 40vh;
    border: 4px solid orangered;
    border-radius: 10px;
`;

const Title = styled.h1`
    display: flex;
    margin-top: 16px;
    font-size: 24px;
    font-family: "Roboto Condensed";
    font-weight: 600;
`;

const Price = styled.div`
    position: relative;
    margin-top: 16px;
    font-family: "Roboto Condensed";
    font-size: 26px;
    font-weight: 500;

    img {
        margin: -4% 0 0 -8%;
        width: 85px;
        height: 60px;
    }

    h1 {
        position: absolute;
        top: 7px;
        left: 45px;
    }
`;

const Desc = styled.p`
    margin-top: 5px;
    display: flex;
    font-size: 18px;
    line-break: normal;
`;

const Cart = styled.button`
    position: relative;
    margin: 42px auto 0 auto;
    display: flex;
    width: 70vw;
    height: 6vh;
    background-color: orangered;
    border: none;
    border-radius: 24px;

    h2 {
        position: absolute;
        top: 10px;
        left: 18px;
        font-size: 15px;
        font-family: "Oswald";
        font-weight: 300;
    }

    img {
        position: absolute;
        top: 6px;
        right: 15px;
        width: 32px;
        height: 32px;
    }
`;
