import React from 'react';
import Helmet from 'react-helmet';
import T from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const PORTAL_HELMET_DATA_MODEL = {
    metadata: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
        },
        {
            name: 'referrer',
            content: 'origin',
        },
    ],
    link: [
        {
            rel: 'shortcut icon',
            href: '/favicon.ico',
        },
    ],
};

const PortalHelmet = ({ title, children }) => {
    return (
        <StaticQuery
            query={graphql`
                {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
        >
            {data => (
                <Helmet
                    title={`${title ? `${title} | ` : ''}${data.site.siteMetadata.title}`}
                    meta={PORTAL_HELMET_DATA_MODEL.metadata}
                    link={PORTAL_HELMET_DATA_MODEL.link}
                >
                    {children}
                </Helmet>
            )}
        </StaticQuery>
    );
}

PortalHelmet.propTypes = {
    title: T.string,
};

PortalHelmet.defaultProps = {
    title: '',
};

export default PortalHelmet;