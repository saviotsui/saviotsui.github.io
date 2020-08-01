import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CenteredLayout = props => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default CenteredLayout;