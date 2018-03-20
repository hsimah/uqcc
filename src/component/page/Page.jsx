import React from 'react';
import AltContainer from 'alt-container';

import { PageContainer } from './PageComponents';

export default class extends React.Component {
    getPage = slug => !this.props.store.isLoading() && this.props.store.getPageBySlug(slug);

    componentWillReceiveProps = next => this.getPage(next.match.params.slug);

    componentDidMount = () => this.getPage(this.props.match.params.slug);

    render = () => <AltContainer store={this.props.store}>
        <PageContainer slug={this.props.match.params.slug} />
    </AltContainer>;
};