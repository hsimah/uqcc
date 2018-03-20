import React from 'react';
import styled from 'styled-components';

export const AsideWrapper = props => <Section>
    {props.children}
</Section>;

export const AsideHeader = props => <h2 className='widget-title'>{props.children}</h2>;

export const Aside = styled.section`
    @media screen and (min-width: 48em) {
        float: right;
        width: 36%;
        font-size: 0.875rem;
        line-height: 1.6;
        padding: 0 1em 0 2em;
        display: block;
    }
`;

const Section = styled.section`
    &::before{
        content: "";
        display: table;
        table-layout: fixed;
    }
    padding-bottom: 3em;
`;