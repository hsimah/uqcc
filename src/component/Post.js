import React from 'react';
import renderHtml from 'react-render-html'
import dateFormat from 'dateformat';

const Post = ({ post, index }) => (
    <article className="post type-post status-publish format-standard hentry category-uncategorised">
        <header className="entry-header">
            <div className="entry-meta">
                <span className="screen-reader-text">Posted on</span>
                <a href={post.link} rel="bookmark">
                    <time className="entry-date published updated" dateTime={post.date}>{dateFormat(new Date(post.date), "dddd, mmmm dS, yyyy")}</time>
                </a>
                <span className="edit-link">
                    <a className="post-edit-link" href="http://uqcc.azurewebsites.net/wp-admin/post.php?post=1&#038;action=edit">
                        Edit
                        <span className="screen-reader-text">{`"${post.title.rendered}"`}</span>
                    </a>
                </span>
            </div>
            <h3 className="entry-title">
                <a href={post.link} rel="bookmark">{post.title.rendered}</a>
            </h3>
        </header>
        <div className="entry-content">
            {renderHtml(post.content.rendered)}
        </div>
    </article>
);

export default Post;