import React from 'react';

import Group from '../remote-components/GroupComponents';
import Calendar from '../remote-components/Calendar';
import Collapsible from './Collapsible';
import { Aside, AsideHeader, AsideWrapper } from './AsideComponents';

export default () => <Aside aria-label='Social Sidebar'>
    <AsideWrapper>
        <Collapsible header={<AsideHeader>Recent Group Posts</AsideHeader>}>
            <Group />
        </Collapsible>
    </AsideWrapper>
    <AsideWrapper>
        <Collapsible header={<AsideHeader>Upcoming Events</AsideHeader>}>
            <Calendar />
        </Collapsible>
    </AsideWrapper>
</Aside>;