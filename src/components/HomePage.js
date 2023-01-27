import styled from "styled-components";
import { useState, useEffect } from "react"
import axios from "axios";

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
            <Top>Let’s get  started <img src="assets/user.png" alt="user"/></Top>
            <Search>
                <button onSubmit={""}><img src="assets/lupa.png" alt="lupa"/></button>
                <input
                value={search}
                type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="O que você está procurando?"
                />
            </Search>

            <Filters><button>moderno</button></Filters>

            <ItemStyle>
                <Description>
                    <h1>Monalisa</h1>
                    <p>Monalisa digital feita pelo artista Leon@rdo D.</p>
                </Description>
                <button><img src="assets/arrow.png" alt="arrow"/></button>
                <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                alt="monalisa"/>
            </ItemStyle>
            <ItemStyle>
                <Description>
                    <h1>Monalisa</h1>
                    <p>Monalisa digital feita pelo artista Leon@rdo D.</p>
                </Description>
                <button><img src="assets/arrow.png" alt="arrow"/></button>
                <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                alt="monalisa"/>
            </ItemStyle>
            <ItemStyle>
                <Description>
                    <h1>Monalisa</h1>
                    <p>Monalisa digital feita pelo artista Leon@rdo D.</p>
                </Description>
                <button><img src="assets/arrow.png" alt="arrow"/></button>
                <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
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
                <button><img src="assets/arrow.png" alt="arrow"/></button>
                <Img src={image}
                alt={name}/>
        </ItemStyle>
    )
}






const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #93ADD3;
`;

const Top = styled.div`
    font-family: "Anton", sans-serif;
    color: white;
    font-size: 24px ;
    width: 326px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 55px 0px 30px 0px;
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
        font-family: "roboto", sans-serif;
        font-size: 16px;
        transition-delay: 2s;
        transition: all linear .1s;
        &:hover{
            color: white;
            background-color: #999;
        }
        
    }

`

const ItemStyle = styled.div`
    width: 326px;
    height: 180px;
    position: relative;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 15px;
    transition: all linear .5s;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    button{
        width: 40px;
        height: 40px;
        background-color: #636161;
        border: none;
        border-radius: 40px;
        transition: all linear .2s;
        position: absolute;
        bottom: 10px;
        left: 10px;
        img{
            width: 100%;
            height: 50%;
            position: relative;
            object-fit: cover;

        }
        &:hover{
            width: 80px;
        }
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
        font-family: "Anton", sans-serif;
        margin-bottom: 5px;
        
    }
    p{
        font-size: 16px;
        font-family: "roboto", sans-serif;
     
    }

`

const Img = styled.img`
        height: 180px;
        position: absolute;
        top: 0px;
        right: 0px;
        border-radius: 0px 20px 20px 0px;
        object-fit: cover;
        transition: all linear .5s;
        &:hover{
            width: 180px;
        }
`

export default HomePage