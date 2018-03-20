import React from 'react';

import { HeaderWrapper } from './components/HeaderComponents';
import Branding from './components/Branding';
import Nav from './components/Nav';

export default props => <HeaderWrapper id='masthead'>
    <Branding store={props.stores.metaStore} />
    <Nav store={props.stores.menuStore} menuId={4} />
</HeaderWrapper>;