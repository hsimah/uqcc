import React from 'react';
import AltContainer from 'alt-container';

import { Branding } from './BrandingComponents';

export default class extends React.Component {
    getMeta = () => !this.props.store.isLoading() && this.props.store.getMeta();

    componentDidMount = () => this.getMeta();

    render = () => <AltContainer store={this.props.store}>
        <Branding />
    </AltContainer>;
};