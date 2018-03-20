import alt from '../alt/Alt'
import DataActions from '../actions/DataActions';
import DataSource from '../source/DataSource';

class PageStore {
    constructor() {
        this.state = {
            loaded: false,
            pages: [],
            errorMessage: null,
        };

        this.bindListeners({
            handleSingleFetch: DataActions.FETCH_PAGE,
            handleFetch: DataActions.FETCH_PAGES,
            handleLoading: DataActions.LOADING_PAGES,
            handleFailed: DataActions.PAGE_FAILED,
        });

        this.exportAsync(DataSource);
        this.exportPublicMethods({
            getPageBySlug: this.getPageBySlug,
        });
    }

    getPageBySlug = slug => {
        const page = this.state.pages.find(page => page.slug === slug);
        if (page) return page;
        this.getInstance().fetchPage(slug);
        //this.getInstance().fetchPages();
    }

    handleFetch = pages => this.setState({
        pages,
        loaded: true,
        errorMessage: null
    });
    handleSingleFetch = remote => this.setState({ pages: this.state.pages.concat(remote) });
    handleLoading = () => this.setState({ loaded: false });
    handleFailed = errorMessage => this.setState({ errorMessage, loaded: false });
}

export default alt.createStore(PageStore, 'PageStore');