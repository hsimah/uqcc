import React from 'react';

import { PrimaryWrapper, Main } from '../shared/components/PageComponents';
import Tiles from './components/Tiles';
import Headlines from './components/Headlines';

export const Home = props => <PrimaryWrapper>
    <Main role='main'>
        <div>
            <Headlines store={props.stores.postStore} />
            <Tiles store={props.stores.menuStore} menuId={5} />
        </div>
    </Main>
</PrimaryWrapper>;