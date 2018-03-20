import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import './style/site.css';

import MetaStore from './flux/stores/MetaStore';
import MenuStore from './flux/stores/MenuStore';
import PageStore from './flux/stores/PageStore';
import PostStore from './flux/stores/PostStore';

import Page from './component/page/Page';
import Header from './component/header/Header';
import { Home } from './component/home/Home';

import fontawesome from '@fortawesome/fontawesome';
import faLongArrowAltDown from '@fortawesome/fontawesome-free-solid/faLongArrowAltDown';
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import Aside from './component/shared/components/Aside';

fontawesome.library.add(faHome, faLongArrowAltDown, faSortDown, faBars, faTimes);

const metaStore = MetaStore;
const pageStore = PageStore;
const menuStore = MenuStore;
const postStore = PostStore;

export default props => <Router>
    <div id='page' className='site'>
        <a className='skip-link screen-reader-text' href='#content'>Skip to content</a>
        <Header stores={{ metaStore, menuStore }} />
        <div className='site-content-contain'>
            <div id='content' className='site-content'>
                <div className='wrap'>
                    <Switch>
                        <Route path='/' render={props => <Home stores={{ postStore, menuStore }} {...props} />} exact />
                        <Route path='/:parent/:slug' render={props => <Page store={pageStore} {...props} />} />
                        <Route path='/:slug' render={props => <Page store={pageStore} {...props} />} />
                    </Switch>
                    <Aside />
                </div>
            </div>
        </div>
    </div>
</Router>;
