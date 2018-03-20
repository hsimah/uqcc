import alt from '../alt/Alt'
import DataActions from '../actions/DataActions';
import DataSource from '../source/DataSource';

class MenuStore {
    constructor() {
        this.state = {
            menus: [],
            errorMessage: null,
            loaded: false
        };

        this.bindListeners({
            handleUpdateMenu: DataActions.FETCH_MENU,
            handleFailedMenu: DataActions.MENU_FAILED,
            handleFetchMenu: DataActions.LOADING_MENU,
        });

        this.exportAsync(DataSource);
        this.exportPublicMethods({
            getMenu: this.getMenu
        });
    }

    getMenu = id => {
        const menu = this.state.menus.find(menu => menu.ID === id);
        if (menu) return menu;
        this.getInstance().fetchMenu(id);
    }

    handleUpdateMenu = remote => this.setState({
        menus: this.state.menus.concat([remote]),
        errorMessage: null,
        loaded: true
    });

    handleFetchMenu = () => this.setState({
        errorMessage: null,
        loaded: false
    });

    handleFailedMenu = errorMessage => this.setState({
        errorMessage: errorMessage,
        loaded: true
    });

};

export default alt.createStore(MenuStore, 'MenuStore');