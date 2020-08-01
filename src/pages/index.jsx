import React from "react"
import styled from 'styled-components';
import ThreeColLayout from '../layouts/three-col-layout';
import CenteredLayout from '../layouts/centered-layout';
import Section from '../layouts/section';
import Header from "../components/header";
import Image from "../components/image";

const imageDimension = 24;
const IconSection = styled(Section)`
    display: flex !important;
    justify-content: space-between !important;
`;

export default function Home() {
    const centerContent = () => {
        return (
            <CenteredLayout>
                <Section>
                    <Header headerText="Savio Tsui" />
                    <IconSection style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href="https://www.splunk.com/" target="_blank" rel="noreferrer"><Image src="/assets/splunk/splunk-logo.png" alt="Splunk, Inc." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://github.com/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/github/github-logo.png" alt="Github, Inc." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://www.linkedin.com/in/saviotsui/" target="_blank" rel="noreferrer"><Image src="/assets/linkedin/linkedin-logo.png" alt="Linkedin Corp." height={imageDimension} width={imageDimension}></Image></a>
                        <a href="https://www.strava.com/athletes/2815426" target="_blank" rel="noreferrer"><Image src="/assets/strava/strava-logo.png" alt="Strava, Inc." height={imageDimension} width={imageDimension}></Image></a>
                    </IconSection>
                </Section>
            </CenteredLayout>
        );
    };

    return (
        <ThreeColLayout centerContent={centerContent()}>
        </ThreeColLayout>
    );
}