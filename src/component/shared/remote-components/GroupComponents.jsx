/*global FB*/
import React from 'react';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const formatter = new Intl.DateTimeFormat('en-au', {
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});

class Group extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            posts: []
        };
    }

    componentDidMount = () => {
        if (window.fbInit) return this.getLoginStatus();

        document.addEventListener('fb_init', () => this.getLoginStatus());
    }

    getLoginStatus = () => {
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                this.setState({
                    loggedIn: true
                }, () => this.getPosts());
            }
        });
    }

    getPosts = () => {
        const { loggedIn } = this.state;

        if (loggedIn) {
            FB.api('/1420522158241530/feed', {
                fields: [
                    'message',
                    'created_time',
                    'permalink_url',
                    'from{name,picture}'
                ],
                limit: 5,
            }, response => this.setState({ posts: response.data }));
        }
    }

    handleLogin = () => FB.login(() => this.setState({ loggedIn: true }, this.getPosts()));

    render = () => {
        const { loggedIn, posts } = this.state;

        if (!loggedIn) return <div>
            <a onClick={this.handleLogin} role='button'><i className='fa fa-facebook'></i> log in</a>
        </div>;

        return <ul>
            {posts.map(post => <li key={post.id}>
                <GroupPost post={post} />
            </li>)}
        </ul>;
    }
}

const ProfilePicture = styled.img`
    height: 55px;
    border-radius: 50%;
`;

const MessageLine = styled.p`
    margin: 0;
    padding: 0;
`;

const Poster = styled.div`
    display: flex;
    font-weight: bold;
    margin: 10px 5% 10px 0;
    padding: 3px;
    text-align: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    
    &:hover {
        cursor: pointer;
    }
`;

const Post = styled.div`
    overflow: hidden;
    width: 100%;
`;

const Name = styled.span`
    color: #666;
    display: block;
    font-size: 11px;
    letter-spacing: .5px;
    text-transform: uppercase;
`;

const Timestamp = styled.span`
    display: block;
    font-size: 10px;
    line-height: 1.6;
    width: 100%;
`;

const PostMeta = styled.div`
    border-bottom: 1px solid #666;
    flex-grow: 2;
    padding-top: 6px;
`;

const GroupPost = ({ post }) => <Post>
    <Poster onClick={() => window.location = post.permalink_url}>
        <ProfilePicture src={post.from.picture.data.url} />
        <PostMeta>
            <Name>
                {post.from.name}
            </Name>
            <Timestamp>
                {formatter.format(new Date(post.created_time))}
            </Timestamp>
        </PostMeta>
    </Poster>
    <div>
        {post.message && post.message.substr(0, 150).split('\n').map((item, key, array) => <MessageLine key={key}>
            {item}
            {key === array.length - 1 ? '...' : null}
        </MessageLine>)}
    </div>
</Post>;

export default Group;