import React from "react"
import styled from 'styled-components';
import Helmet from "../components/helmet";

const Container = styled.div`
    display: flex;
    background-color: #33343b;
    width: 100vw;
    height: 100vh;
`;

const Item = styled.div`
    height: 100vh;
    width: 20vw;
`;

const LeftContainer = Item;
const CenterContainer = styled(Item)`
    flex-grow: 1;
`;
const RightContainer = Item;

const ThreeColLayout = ({ leftContent, centerContent, rightContent }) => {
    return (
        <Container>
            <Helmet></Helmet>
            <LeftContainer>
                {leftContent}
            </LeftContainer>
            <CenterContainer>
                {centerContent}
            </CenterContainer>
            <RightContainer>
                {rightContent}
            </RightContainer>
        </Container>
    )
};

export default ThreeColLayout;