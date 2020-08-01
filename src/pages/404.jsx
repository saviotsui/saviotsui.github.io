import React from "react"
import styled from 'styled-components';
import ThreeColLayout from '../layouts/three-col-layout';
import CenteredLayout from '../layouts/centered-layout';
import Section from '../layouts/section';
import Header from "../components/header";

const Body = styled(Section)`
    color: white;
    width: 100%;
`;

export default function PageNotFound() {
    const centerContent = (
        <CenteredLayout>
            <Section>
                <Header headerText="404" />
                <Body>
                    This page doesn't exist.
                </Body>
            </Section>
        </CenteredLayout>
    );

    return (
        <ThreeColLayout centerContent={centerContent}>
        </ThreeColLayout>
    )
}