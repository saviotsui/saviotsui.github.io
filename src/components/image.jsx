import React from "react"
import styled from 'styled-components';

const Img = styled.img.attrs(props => ({
    backgroundColor: props.backgroundColor ? `${props.backgroundColor}` : null,
    height: props.height ? `${props.height}` : null,
    width: props.width ? `${props.width}` : null,
}))`
    object-fit: cover;
    object-position: center center;
    background-color: ${props => props.backgroundColor};
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    margin: 0;
`;

const OuterImageWrapper = styled.span.attrs(props => ({
    width: props.width ? `${props.width}` : null
}))`
    width: ${props => props.width}px;
    position: relative;
`;

const Image = ({ alt, src, width, height, backgroundColor }) => {
    return (
        <OuterImageWrapper width={width}>
            <Img src={src} alt={alt} backgroundColor={backgroundColor} height={height} width={width} />
        </OuterImageWrapper>
    );
};

export default Image;