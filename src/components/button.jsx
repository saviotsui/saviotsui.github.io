import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    --color-0: #02182B;
    --color-1: #0197F6;
    --color-2: #FC6471;
    --color-3: #DDDFDF;
    --color-4: #7D5BA6;
    --color-5: #33343b
    --font-size: 18px;

    font-size: var(--font-size);
    background-color: var(--color-1);
    color: var(--color-3);
    border:0;
    box-shadow: none;
    outline:0;
`;

export default Button;