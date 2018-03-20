import alt from '../alt/Alt'

const fetch = data => data;
const failed = error => error;
const loading = () => null;

class DataActions {
    fetchMeta = fetch;
    metaFailed = failed;
    loadingMeta = loading;
    
    fetchMenu = fetch;
    menuFailed = failed;
    loadingMenu = loading;

    fetchPage = fetch;
    fetchPages = fetch;
    pageFailed = failed;
    loadingPages = loading;

    fetchPosts = fetch;
    postFailed = failed;
    loadingPosts = loading;
}

export default alt.createActions(DataActions);