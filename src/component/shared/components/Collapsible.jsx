import React from 'react';

import { Wrapper, Header, Collapsing, Content } from './CollapsibleComponents';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = { collapsed: props.collapsed }
    }

    toggle = () => this.setState({ collapsed: !this.state.collapsed });

    render = () => <Wrapper>
        <Header onClick={this.toggle}>
            {this.props.header}
        </Header>
        <Collapsing collapsed={this.state.collapsed}>
            <Content>
                {this.props.children}
            </Content>
        </Collapsing>
    </Wrapper>;
}