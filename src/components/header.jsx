import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    --color-0: #02182B;
    --color-1: #0197F6;
    --color-2: #FC6471;
    --color-3: #DDDFDF;
    --color-4: #7D5BA6;
    --color-5: #33343b;
    --font-size: 18px;

    color: var(--color-3);
    border-bottom: 0;
`;

export default function Header({ headerText }) {
    return (
        <H1>
            {headerText}
        </H1>
    );
}