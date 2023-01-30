import styled from "styled-components";
import { useState, useEffect } from "react"
import axios from "axios";
import user from "../assets/user.png"
import search from "../assets/lupa.png"

function HomePage() {


    const [ itens, setItens] = useState([])
    const [search, setSearch] = useState("")

    // useEffect(()=>{
    //     const promise = axios.get("url")
    //     promise.then((res)=> setItens(res.data))
    //     promise.catch((error) => alert(error))
    // },[])


    return (
        <Screen>

            <Navbar>

            <Top>Let’s get  started <img src={user} alt="user"/></Top>
            <Search>
                <button onSubmit={""}><img src={search} alt="lupa"/></button>
                <input
                value={search}
                type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="O que você está procurando?"
                />
            </Search>

            <Filters>
                <button>moderno</button>
                <button>cubismo</button>
                <button>esportivo</button>
            </Filters>
            
            </Navbar>

            <ItemStyle>
                <Description>
                    <h1>Monalisa</h1>
                    <p>Monalisa digital feita pelo artista Leon@rdo D.</p>
                </Description>

                <h2>R$1750000</h2>
               
                <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                alt="monalisa"/>
            </ItemStyle>
            <ItemStyle>
                <Description>
                    <h1>Vincent van Gogh</h1>
                    <p>Self pintada pelo brilhante Vincentinho</p>
                </Description>

                <h2>R$1550000</h2>
               
                <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e"
                alt="monalisa"/>
            </ItemStyle>
            <ItemStyle>
                <Description>
                    <h1>Meisje met de parel</h1>
                    <p>Criado pelo consagrado J.V.</p>
                </Description>
                
                <h2>R$14000000</h2>


                <Img src="http://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=w255-h300-n-l64"
                alt="monalisa"/>
            </ItemStyle>
            {itens.map((i) => 
                <Item name={i.name} 
                description={i.description}>
                image={i.image}
                </Item>)}
        </Screen>
    );
}




function Item(props){
    const { name, description, image} = props
    return(
        <ItemStyle>
            <Description>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </Description>
                <button><img src="assets/arrow.svg" alt="arrow"/></button>
                <Img src={image}
                alt={name}/>
        </ItemStyle>
    )
}






const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E7EDFA;
`;

const Navbar = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #93ADD3;
    margin: 50px 0px;
    padding: 15px ;
    box-sizing: border-box;
    border-radius: 20px;
    
`

const Top = styled.div`
    font-family: "Anton", sans-serif;
    color: white;
    font-size: 24px ;
    width: 326px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 30px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
`;

const Search =styled.div`
    width: 326px;
    height: 40px;
    border-radius: 40px;
    background-color: white;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    img{
        width: 24px;
        height: 24px;
    }
    input{
        border: none;
        width: alto;
    }
    button{
        border: none;
        background-color: white;
        
    }
`

const Filters = styled.div`
    width: 326px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin-bottom: 15px;
    button{
        border: none;
        border-radius: 40px;
        width: auto;
        height: 30px;
        padding: 0px 5px;
        box-sizing: border-box;
        margin-right: 10px;
        background-color: white;
        font-size: 16px;
        transition-delay: 2s;
        transition: all linear .1s;
        &:hover{
            background-color: #DDD;
        }
        
    }

`

const ItemStyle = styled.div`
    width: 326px;
    height: 180px;
    position: relative;
    background-color: #90AFDE;;
    border-radius: 20px;
    margin: 5px 0px 10px 0px;
    transition: all linear .2s;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    font-family: 'Nunito', sans-serif;

    &:hover{
        margin: 0px 0px 15px 0px;
        img{
            width: 180px;
        }
    }
    h2{
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: 20px;
    }
    

`

const Description = styled.div`
    text-align: start;
    width: 132px;
    position: absolute;
    top: 15px;
    left: 10px;

    h1{
        font-size: 20px;
        margin-bottom: 20px;
        font-weight: 700;
        
    }
    p{
        font-size: 16px;
     
    }

`

const Img = styled.img`
        width: 120px;
        height: 180px;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 0px 20px 20px 0px;
        object-fit: cover;
        transition-delay: 1s;
        transition: all linear .5s;
        &:hover{
            width: 180px;
        }
`

export default HomePage