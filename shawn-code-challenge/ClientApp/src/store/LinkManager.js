import axios from 'axios';
const addLinkType = 'ADD_LINK_TYPE'
const editLinkType = 'EDIT_LINK_TYPE'
const updateLinkType = 'UPDATE_LINK_TYPE'
const recieveLinks = 'REVIEVE_LINK'
const redirectLink = 'REDIRECT_LINK'
const initialState = { linksList: [], linkDirectory: null }

export const actionCreators = {
    // when user refresh or add a link
    requestLink: linkString => async (dispatch, getState) => {
        const url = `api/Links/LinksManager?linkUrl=${linkString}`;
        const response = await fetch(url);
        const receivedLinks = await response.json();
        dispatch({ type: recieveLinks, receivedLinks });
    },
    // when user click the link
    redirectToLink: linkDirectoryRecieve => async (dispatch, getState) => {
        // we need to add one to the click counter
        const url = `api/Links/LinksClickerCounter?linkUrl=${linkDirectoryRecieve}`;
        const response = await fetch(url);
        const receivedLinks = await response.json();
        dispatch({ type: redirectLink, linkDirectoryRecieve, receivedLinks });
    },
    deleteLink: linkToDelete => async (dispatch, getState) => {
        const passLinkUrl = linkToDelete.linkUrl;
        axios.delete(`api/Links/LinksDelete?linkUrl=${passLinkUrl}`)
            .then(response => {
                const receivedLinks = response.data;
                dispatch({ type: recieveLinks, receivedLinks });
            });
    },
    startEditLink: relativeUrl => async (dispatch, getState) => {
        // const url = `api/Links/LinksDelete?linkUrl=${linkToDelete.linkUrl}`;
        const editedUrl = relativeUrl.linkUrl;
        dispatch({ type: editLinkType, editedUrl });
    },
    updateEditLink: (oldLinkProp, newLinkProp)=>async (dispatch, getState) => {
        // const url = `api/Links/LinksDelete?linkUrl=${linkToDelete.linkUrl}`;
        const updateProps = JSON.stringify({ OldUrl: oldLinkProp, NewUrl: newLinkProp });
        axios.get(`api/Links/LinksUpdate?urlUpdates=${updateProps}`)
            .then(response => {
                const receivedLinks = response.data;
                dispatch({ type: recieveLinks, receivedLinks });
            });
    },
};
export const redcuer = (state, action) => {
    state = state || initialState;
    // console.log(state, " ==> link state ", action, " ==> caller is ");
    if (action.type === recieveLinks) {
        action.receivedLinks.map(link => link.editing = false);
        return {
            ...state,
            linksList: action.receivedLinks,
        };
    }
    if (action.type === redirectLink) {
        action.receivedLinks.map(link => link.editing = false);
        return {
            ...state,
            linkDirectory: action.linkDirectoryRecieve,
            linksList: action.receivedLinks
        };
    }
    if (action.type === editLinkType) {
        var editingStatus = [...state.linksList];
        editingStatus.filter(x => {
            if (x.linkUrl === action.editedUrl) {
                x.editing = true;
            }
            return true;
        });
        return { ...state, linksList: editingStatus };
    }
    return state;
}