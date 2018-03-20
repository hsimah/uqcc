import alt from '../alt/Alt'
import DataActions from '../actions/DataActions';
import DataSource from '../source/DataSource';

class MetaStore {
    constructor() {
        this.state = {
            data: null,
        };

        this.bindListeners({
            handleUpdateMeta: DataActions.FETCH_META,
            handleFetchMeta: DataActions.LOADING_META,
            handleFailedMeta: DataActions.META_FAILED,
        });

        this.exportAsync(DataSource);
        this.exportPublicMethods({
            getMeta: this.getMeta,
        });
    }

    getMeta = () => {
        const { data } = this.state;
        if (data) return data;
        this.getInstance().fetchMeta();
    }

    handleUpdateMeta = data => this.setState({
        data: data,
        metaError: null,
        metaLoaded: true
    });

    handleFetchMeta = () => this.setState({
        data: null,
        metaLoaded: false,
        metaError: false
    })

    handleFailedMeta = error => this.setState({
        metaError: error,
        menuLoaded: false,
        data: null
    });
};

export default alt.createStore(MetaStore, 'MetaStore');