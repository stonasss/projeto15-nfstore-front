import styled from "styled-components";

function HomePage() {
    return (
        <Screen>
            <Top>Essa é a HomePage</Top>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    font-family: "Anton", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
