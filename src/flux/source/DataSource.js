import DataActions from '../actions/DataActions';

const appUrl = 'https://uqcc.azurewebsites.net';
const metaEndPoint = `${appUrl}/wp-json`;
const pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages?per_page=50&_embed`;
const pageEndPoint = `${appUrl}/wp-json/wp/v2/pages?per_page=50&_embed&slug=`;
const postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;
const menuEndPoint = `${appUrl}/wp-json/wp-api-menus/v2/menus`;

const DataSource = {
    fetchMeta: () => ({
        remote: () => new Promise((resolve, reject) => fetch(metaEndPoint)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                resolve(response.json())
            })
            .catch(error => reject(error))),
        local: () => null,
        success: DataActions.fetchMeta,
        error: DataActions.metaFailed,
        loading: DataActions.loadingMeta
    }),
    fetchMenu: () => ({
        remote: (state, id) => new Promise((resolve, reject) => fetch(`${menuEndPoint}/${id}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(menu => resolve(menu))
            .catch(error => reject(error))),
        local: () => null,
        success: DataActions.fetchMenu,
        error: DataActions.menuFailed,
        loading: DataActions.loadingMenu
    }),
    fetchPages: () => ({
        remote: (state, id) => new Promise((resolve, reject) => fetch(pagesEndPoint)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                resolve(response.json());
            })
            .catch(error => reject(error))),
        local: () => null,
        success: DataActions.fetchPages,
        error: DataActions.pageFailed,
        loading: DataActions.loadingPages
    }),
    fetchPage: () => ({
        remote: (state, slug) => new Promise((resolve, reject) => fetch(`${pageEndPoint}${slug}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(page => resolve(page))
            .catch(error => reject(error))),
        success: DataActions.fetchPage,
        error: DataActions.pageFailed,
        loading: DataActions.loadingPages
    }),
    fetchPosts: () => ({
        remote: () => new Promise((resolve, reject) => fetch(postsEndPoint)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json()
            })
            .then(posts => resolve(posts))
            .catch(error => reject(error))),
        local: () => null,
        success: DataActions.fetchPosts,
        error: DataActions.postFailed,
        loading: DataActions.loadingPosts
    })
};

export default DataSource;