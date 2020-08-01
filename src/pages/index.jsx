import React from "react"
import styled from 'styled-components';
import Header from "../components/header"
import Image from "../components/image"
import CenteredLayout from '../layouts/centered-layout';
import Section from '../layouts/section';

const Container = styled.div`
    display: flex;
    background-color: #33343b;
    width: 100%;
    height: 100vh;
`;

const Item = styled.div`
    height: 100%;
    width: 20vw;
`;

const LeftContainer = Item;
const CenterContainer = styled(Item)`
    flex-grow: 1;
`;
const RightContainer = Item;

const Body = styled(Section)`
    color: white;
    width: 100%;
`;

const imageDimension = 24;
const IconSection = styled(Section)`
    display: flex;
    justify-content: space-between;
`;

export default function Home() {
    return (
        <Container>
            <LeftContainer></LeftContainer>
            <CenterContainer>
                <CenteredLayout>
                    <Section>
                        <Header headerText="Savio Tsui" />
                        <Body>
                            <IconSection>
                                <a href="https://www.splunk.com/" target="_blank" rel="noreferrer"><Image src="/assets/splunk/splunk-logo.png" alt="Splunk, Inc." height={imageDimension} width={imageDimension}></Image></a>
                                <a href="https://github.com/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/github/github-logo.png" alt="Github, Inc." height={imageDimension} width={imageDimension}></Image></a>
                                <a href="https://www.linkedin.com/in/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/linkedin/linkedin-logo.png" alt="Linkedin Corp." height={imageDimension} width={imageDimension} backgroundColor="white"></Image></a>
                                <a href="https://www.strava.com/athletes/2815426" target="_blank" rel="noreferrer"><Image src="/assets/strava/strava-logo.png" alt="Strava, Inc." height={imageDimension} width={imageDimension} backgroundColor="white"></Image></a>
                            </IconSection>
                        </Body>
                    </Section>
                </CenteredLayout>
            </CenterContainer>
            <RightContainer></RightContainer>
        </Container>
    )
}