import React from 'react';
import AltContainer from 'alt-container';

import { TileContainer } from './TileComponents';

export default class extends React.Component {
    getMenu = () => !this.props.store.isLoading() ?
        this.props.store.getMenu(this.props.menuId) :
        setImmediate(this.getMenu);

    componentDidMount = () => this.getMenu();

    render = () => <AltContainer store={this.props.store}>
        <TileContainer menu={this.props.menuId} />
    </AltContainer>;
};