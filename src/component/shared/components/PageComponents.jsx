import React from 'react';
import styled from 'styled-components';

export const PrimaryWrapper = styled.div`
    @media screen and (min-width: 48em) {
        float: left;
        width: 58%;
    }
`;

export const Main = styled.main`
    display: block;
`;

const Header = styled.header`
    padding-bottom: 2em;
    display: block;
`;

const Heading = styled.h2`
    color: #222;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    clear: both;
    line-height: 1.4;
    margin: 0 0 0.75em;
    padding: 0 1.5em 0 0;
`;

export const PageHeader = props => <Header>
    <Heading>
        {props.children}
    </Heading>
</Header>;