import React from 'react';
import styled from 'styled-components';

const BrandingWrapper = styled.div`
    height: 100%;
    
    @media screen and (min-width: 30em) {
        padding: 3em 0;
    }

    @media screen and (min-width: 48em) {
        margin-bottom: 70px;
        bottom: 0;
        display: block;
        left: 0;
        height: auto;
        padding-top: 0;
        position: absolute;
        width: 100%;
    }

    transition: margin-bottom 0.2s;
    z-index: 3;
`;

const Wrap = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 48em) {
        max-width: 1000px;
        padding-left: 3em;
        padding-right: 3em;
    }
`;

const BrandingText = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const SiteTitle = styled.h1`
    color: #fff;
    padding-top: 0;
    font-size: 1.95rem;
    opacity: 1;
    clear: none;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: 0.08em;
    margin: 0;
    margin-top: 0 !important;
    margin-bottom: 0;
    padding: 0;
    text-transform: uppercase;
    
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;

    display: block;
`;

const SiteDescription = styled.p`
    color: #fff;
    opacity: 0.8;
    font-size: 1rem;
    margin: 0;
    padding: 0;
`;

const SiteLink = styled.a`
    color: #fff;

    &:hover {
        color: #fff;
        opacity: 0.7;
    }
`;

const BrandingData = props => <BrandingWrapper>
    <Wrap>
        <BrandingText>
            <SiteTitle>
                <SiteLink href='/' rel='home'>{props.data.name}</SiteLink>
            </SiteTitle>
            <SiteDescription>{props.data.description}</SiteDescription>
        </BrandingText>
        <a href='#content' className='menu-scroll-down'>
            <svg className='icon icon-arrow-right' aria-hidden='true' role='img'>
                <use href='#icon-arrow-right' xlinkHref='#icon-arrow-right'></use>
            </svg>
            <span className='screen-reader-text'>Scroll down to content</span>
        </a>
    </Wrap>
</BrandingWrapper>;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
    min-width: 100vw;
    padding: 0 0 1px 0;
    position: fixed;
`;

const ImageWrapper = styled.div`
    height: 75vh;

    @media screen and (min-width: 48em) {
        height: 100vh;
        max-height: 100%;
        overflow: hidden;
        position: relative;
    }
    &:before {
        @media screen and (min-width: 48em) {
            height: 33%;
        }

        content: '';
        height: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        z-index: 2;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%);
    }
`

const BrandingMedia = () => <ImageWrapper id='image-wrapper'>
    <Image src='/header.jpg' alt='University of Queensland Cycling Club' />
</ImageWrapper>;

export const Branding = props => <div>
    <BrandingMedia />
    {props.data ? <BrandingData data={props.data} /> : <h1>Loading...</h1>}
</div>;