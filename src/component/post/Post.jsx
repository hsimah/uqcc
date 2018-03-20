import React from 'react';
import renderHtml from 'react-render-html'
import dateFormat from 'dateformat';

import {
    PostDate,
    Article,
    Header,
    PostedDate,
    PostTitle,
    PostLink,
    DateLink,
    TitleLink,
    ScreenReader
} from './PostComponents';

export default ({ post }) => <Article>
    <Header>
        <PostDate>
            <ScreenReader>Posted on</ScreenReader>
            <DateLink href={post.link}>
                <PostedDate dateTime={post.date}>
                    {dateFormat(new Date(post.date), 'dddd, mmmm dS, yyyy')}
                </PostedDate>
            </DateLink>
        </PostDate>
        <PostTitle>
            <ScreenReader>
                {`"${post.title.rendered}"`}
            </ScreenReader>
            <TitleLink href={post.link}>
                {post.title.rendered}
            </TitleLink>
        </PostTitle>
    </Header>
    {renderHtml(post.content.rendered)}
</Article>;
