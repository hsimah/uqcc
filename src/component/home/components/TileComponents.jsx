import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    justify-content: center;
`;

const Item = styled.li`
    background: tomato;
    margin: 5px;
    max-width: 250px;
    max-height: 250px;
    min-height: 250px;
    overflow: hidden;
`;

const Slider = styled.div`
    padding: 5px;
    width: 250px;
    height: 250px;
    max-height: 400px;
    background-image: url('/header.jpg');
    overflow-y: hidden;
    font-variant: small-caps;
    font-size: 1.8em;
    
	transition-property: all;
	transition-duration: 1s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`;

const Content = styled.div`
    padding: 5px;    
`

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render = () => {
        const { tile } = this.props;
        const { hover } = this.state;

        const hoverStyle = {
            maxHeight: '3em',
            paddingTop: 0,
            paddingBottom: 0
        }

        return <Link to={tile.object_slug}>
            <Item onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
                <Slider style={hover ? hoverStyle : {}}>
                    {tile.title}
                </Slider>
                <Content>
                    <p>
                        {tile.description}
                    </p>
                </Content>
            </Item>
        </Link >;
    }
}

export const TileContainer = props => {
    const menu = props.menus.find(menu => menu.ID === props.menu);

    return menu ? <Container>{menu.items.map(tile => <Tile key={tile.id} tile={tile} />)}</Container> :
        <h1>Loading...</h1>;
}