import React from "react"
import styled from 'styled-components';
import ThreeColLayout from '../layouts/three-col-layout';
import CenteredLayout from '../layouts/centered-layout';
import Section from '../layouts/section';
import Header from "../components/header";
import Image from "../components/image";

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
    const centerContent = (
        <CenteredLayout>
            <Section>
                <Header headerText="Savio Tsui" />
                <Body>
                    <IconSection>
                        <a href="https://www.splunk.com/" target="_blank" rel="noreferrer"><Image src="/assets/splunk/splunk-logo.png" alt="Splunk, Inc." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://github.com/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/github/github-logo.png" alt="Github, Inc." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://www.linkedin.com/in/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/linkedin/linkedin-logo.png" alt="Linkedin Corp." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://www.strava.com/athletes/2815426" target="_blank" rel="noreferrer"><Image src="/assets/strava/strava-logo.png" alt="Strava, Inc." height={imageDimension} width={imageDimension}></Image></a>
                    </IconSection>
                </Body>
            </Section>
        </CenteredLayout>
    );

    return (
        <ThreeColLayout centerContent={centerContent}>
        </ThreeColLayout>
    );
}