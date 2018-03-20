import React from 'react';
import dateFormat from 'dateformat';
import styled from 'styled-components';

const PostDate = styled.div`
    font-size: 0.6875rem;
    font-weight: 800;
    letter-spacing: 0.1818em;
    padding-bottom: 0.25em;
    text-transform: uppercase;
`;

const Article = styled.article``;

const Header = styled.header`
    padding-bottom: 1em;
`;

const PostedDate = styled.time`
    cursor: pointer;
`;

const PostTitle = styled.h4`
    font-size: 1rem;
    color: #666;
    padding-top: 0;
    clear: both;
    margin: 0;
`;

const PostLink = styled.a`
    box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 1);
    text-decoration: none;
    transition: color 80ms ease-in,
        box-shadow 130ms ease-in-out;

    &:hover {
        box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 
            0 3px 0 rgba(0, 0, 0, 1);
    }
`;

const DateLink = styled(PostLink) `
    color: #767676;

    &:hover {
        color: #000;
    }
`;

const TitleLink = styled(PostLink) `
    color: #333;
    margin-left: -2px;
`;

const ScreenReader = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
`;

const Headline = ({ post }) => <Article>
    <Header>
        <PostTitle>
            <ScreenReader>
                {`"${post.title.rendered}"`}
            </ScreenReader>
            <TitleLink href={post.link}>
                {post.title.rendered}
            </TitleLink>
        </PostTitle>
        <PostDate>
            <ScreenReader>Posted on</ScreenReader>
            <DateLink href={post.link}>
                <PostedDate dateTime={post.date}>
                    {dateFormat(new Date(post.date), 'dddd, mmmm dS, yyyy')}
                </PostedDate>
            </DateLink>
        </PostDate>
    </Header>
</Article>;

export const HeadlineContainer = props => {
    const posts = props.posts && props.posts.length;

    return !posts ? <h1>Loading...</h1> :
        <div>
            {props.posts.slice(0, props.length || props.posts.length).map(post => <Headline post={post} key={post.id} />)}
        </div>;
};