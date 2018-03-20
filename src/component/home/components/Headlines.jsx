import React from 'react';
import AltContainer from 'alt-container';

import { HeadlineContainer } from './HeadlineComponents';

export default class extends React.Component {
    getPosts = () => !this.props.store.isLoading() && this.props.store.getPosts();

    componentDidMount = () => this.getPosts();

    render = () => <AltContainer store={this.props.store}>
        <HeadlineContainer length={3} />
    </AltContainer>;
};