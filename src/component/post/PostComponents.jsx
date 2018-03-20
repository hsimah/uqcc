import React from 'react';
import styled from 'styled-components';

export const PostDate = styled.div`
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.1818em;
    padding-bottom: 0.25em;
    text-transform: uppercase;
`;

export const Article = styled.article`
    padding-bottom: 4em;
`;

export const Header = styled.header`
    padding-bottom: 1em;
`;

export const PostedDate = styled.time`
    cursor: pointer;
`;

export const PostTitle = styled.h3`
    font-size: 1.625rem;
    color: #666;
    padding-top: 0;
    margin-bottom: 0.25em;
    clear: both;
    line-height: 1.4;
    margin: 0;
`;

export const PostLink = styled.a`
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 1);
    text-decoration: none;
    transition: color 80ms ease-in,
    box-shadow 130ms ease-in-out;

    &:hover {
        box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 
        0 3px 0 rgba(0, 0, 0, 1);
    }
`;

export const DateLink = styled(PostLink) `
    color: #767676;

    &:hover {
        color: #000;
    }
`;

export const TitleLink = styled(PostLink) `
    color: #333;
    margin-left: -2px;
`;

export const ScreenReader = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
`;