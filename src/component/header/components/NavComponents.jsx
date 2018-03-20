import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Link from 'react-router-dom/Link';

const MenuItem = ({ item, slugPrefix }) => {
    if (item.children) {
        return <li id={`'menu-item-${item.id}'`} className={`'menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-${item.id}'`}>
            <Link to={`/${item.object_slug}`}>
                {item.title}
                <FontAwesomeIcon icon='sort-down' />
            </Link>
            <ul className='sub-menu'>
                {item.children.map((subItem, index) => <MenuItem item={subItem} key={index} slugPrefix={`/${item.object_slug}`} />)}
            </ul>
        </li>
    }

    return <li id={`'menu-item-${item.id}'`} className={`'menu-item menu-item-type-post_type menu-item-object-page menu-item-${item.id}'`}>
        <Link to={`${slugPrefix || ''}/${item.object_slug}`}>
            {item.title}
        </Link>
    </li>
};

const NavMenu = props => {
    const { errorMessage, menu } = props;

    if (errorMessage) {
        return <h1>{errorMessage.message}</h1>;
    }

    return <div className='navigation-top'>
        <div className='wrap'>
            <nav id='site-navigation' className='main-navigation' aria-label='Top Menu'>
                <button className='menu-toggle' aria-controls='top-menu' aria-expanded='false'>
                    <FontAwesomeIcon icon='bars' />
                    <FontAwesomeIcon icon='times' />
                    Menu
                </button>
                <div className='menu-navigation-container'>
                    <ul id='top-menu' className='menu'>
                        <li className='menu-item menu-item-type-post_type menu-item-object-page'>
                            <Link to='/'>
                                <FontAwesomeIcon icon='home' />
                            </Link>
                        </li>
                        {menu && menu.items.map((item, index) => <MenuItem item={item} key={index} />)}
                    </ul>
                </div >
                <ScrollButton href='#content' className='menu-scroll-down'>
                    <FontAwesomeIcon icon='long-arrow-alt-down' />
                    <span className='screen-reader-text' onClick={e => e.target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}>Scroll down to content</span>
                </ScrollButton>
            </nav>
        </div>
    </div>;
};

const ScrollButton = styled.a`
    @media screen and (min-width: 48em) {
        display: block;
        padding: 1em;
        position: absolute;
        right: 0;
        color: #767676;
        top: 0.7em;
    }
`;

export const NavContainer = props => {
    const menu = props.menus.find(menu => menu.ID === props.menu);

    return menu ? <NavMenu menu={menu} /> :
        <h1>Loading...</h1>;
}