import styled from "styled-components";

export default function Product() {
    return (
        <>
            <Corpo>
                <Header>

                </Header>
                
            </Corpo>
        </>
    );
}

const Corpo = styled.div`
    background-color: #e7edfa;
    
    width: 375px;
    height: 100vh;
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    background-color: #e7edfa;
    width: 100vw;
    height: 6vh;
`

const Image = styled.img`
    
    width: 70vw;
    height: 40vh;

`