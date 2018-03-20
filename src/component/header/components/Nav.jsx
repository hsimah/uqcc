import React from 'react';
import AltContainer from 'alt-container';

import { NavContainer } from './NavComponents';

export default class extends React.Component {
    getMenu = id => !this.props.store.isLoading() && this.props.store.getMenu(id);

    componentWillReceiveProps = next => this.getMenu(next.menuId);

    componentDidMount = () => this.getMenu(this.props.menuId);

    render = () => <AltContainer store={this.props.store}>
        <NavContainer menu={this.props.menuId} />
    </AltContainer>;
};