import alt from '../alt/Alt'
import DataActions from '../actions/DataActions';
import DataSource from '../source/DataSource';

class PostStore {
    constructor() {
        this.state = {
            loaded: false,
            posts: [],
            errorMessage: null,
        };

        this.bindListeners({
            handleUpdate: DataActions.FETCH_POSTS,
            handleFetch: DataActions.LOADING_POSTS,
            handleFailed: DataActions.POST_FAILED,
        });

        this.exportAsync(DataSource);

        this.exportPublicMethods({
            getPosts: this.getPosts,
        });
    }

    getPosts = () => {
        const { posts } = this.state;
        if (posts && posts.length) return posts;
        this.getInstance().fetchPosts();
    }

    handleUpdate = posts => this.setState({
        posts,
        loaded: true,
        errorMessage: null
    });

    handleFetch = () => this.setState({
        posts: [],
        loaded: false,
        errorMessage: null
    });

    handleFailed = errorMessage => this.setState({
        errorMessage,
        loaded: false
    });
}

export default alt.createStore(PostStore, 'PostStore');