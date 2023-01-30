import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/arrow-back-outline.svg"
import user from "../assets/user.png"

export default function Carrinho(){
    const next = useNavigate();

    return(
        <>
        <Header>
            <img src={arrow} alt="arrow" onClick={() => {next("/home")}}/>
            <span>Checkout</span>
            <img src={user} alt="user"/>
        </Header>
        <ContainerPrincipal>
            <Item>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="lupa"/>
                <p>Quantidade: 1
                <br/>
                <br/>
                Preço: 20 kwanzas
                </p>
                <Lixeira> <img src="https://cdn.icon-icons.com/icons2/931/PNG/512/delete_remove_bin_icon-icons.com_72400.png"/></Lixeira>   
            </Item>
            <Item>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="lupa"/>
                <p>Quantidade: 1
                <br/>
                <br/>
                Preço: 20 kwanzas
                </p>
                <Lixeira> <img src="https://cdn.icon-icons.com/icons2/931/PNG/512/delete_remove_bin_icon-icons.com_72400.png"/></Lixeira>   
            </Item>

        
        </ContainerPrincipal>
        <Footer>
                <p>Total: </p>
                <p>40 kwanzas</p>
                <Botao>Escolha sua forma de pagamento</Botao>
            </Footer>
        </>
    )
}

const Header = styled.div`
position:fixed;
top:0px;
left:0px;
box-sizing:border-box;
display:flex;
width:375px;
padding-left:15px;
padding-right:15px;
padding-top:25px;
justify-content:space-between;
img{
    height:25px;
    width:25px;
}
`

const ContainerPrincipal = styled.div`
box-sizing:border-box;
padding-top:75px;
padding-left:15px;
padding-right:15px;
width:375px;
justify-content:center;
align-items:center;
`

const Item = styled.div`
box-sizing:border-box;
padding-left:10px;
padding-right:10px;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
border-radius:10px;
background-color:#eff7fa;
height:85px;
img{
    width:50px;
    height:75px;
    border-radius:5px;
}
`

const Lixeira = styled.div`
img{
    width:30px;
    height:30px;
}
`

const Footer = styled.div`
position:fixed;
box-sizing:border-box;
padding-left:15px;
padding-right:15px;
display:flex;
top:547px;
height:80px;
width:375px;
font-family: "Roboto Condensed";
font-weight:700;
font-size:30px;
justify-content:space-between;
`
const Botao = styled.button`
all:unset;
height:40px;
width:220px;
background-color:orange;
border: 1px solid orangered;
border-radius:5px;
font-family: "Roboto Condensed";
font-weight:400;
font-size:15px;
align-items:center;
justify-content:center;
display:flex;
position:absolute;
top:45px;
left:77px;
`

const Foto = styled.div`
display:flex;
justify-content:center;
img{
    width:300px;
    height:300px;
    border-radius:15px;
}

`

const Titulo = styled.div`
display:flex;
margin-top:25px;
justify-content:space-between;
font-family: "Roboto Condensed";
font-weight:700;
font-size:30px;
img{
    width:25px;
    height:25px;
    line-height:7px;
}
`

const Descricao = styled.div`
margin-top:25px;
overflow-wrap:break-word;
h1{
    all:unset;
    font-family: "Roboto Condensed";
    font-size:20px;
    margin-bottom:10px;
}
h2{
    all:unset;
    font-family: "Roboto Condensed";
    font-size:15px;

}

`