import React from 'react';
import renderHtml from 'react-render-html';

import { PrimaryWrapper, Main } from '../shared/components/PageComponents';
import { PageHeader } from '../shared/components/PageComponents';

export const PageContent = props => <div>
    <PageHeader>
        {props.page.title.rendered}
    </PageHeader>
    <PrimaryWrapper>
        <Main>
            {renderHtml(props.page.content.rendered)}
        </Main>
    </PrimaryWrapper>
</div>;

export const PageContainer = props => {
    const page = props.pages.find(page => page.slug === props.slug);

    return page ? <PageContent page={page} /> : <h1>Loading...</h1>;
}