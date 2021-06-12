import { charactersApi } from "../api/api";
//import { updateObjectInArray } from "../helpers/object-helpers";

let LIKE_CHARACTER = 'charactersPage/LIKE_CHARACTER';
let DISLIKE_CHARACTER = 'charactersPage/DISLIKE_CHARACTER';
let SET_CHARACTERS = 'charactersPage/SET_CHARACTERS';
let SET_FAVORITE_CHARS = 'charactersPage/SET_FAVORITE_CHARS';
let SET_CURRENT_PAGE = 'charactersPage/SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'charactersPage/SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'charactersPage/TOGGLE_IS_FETCHING';
let SET_FAVORITE_CHARS_ID_FROM_LS = 'charactersPage/SET_FAVORITE_CHARS_ID_FROM_LS';


let initialState = {
    characters: [],
    favoriteChars: [],
    totalCount: 109,
    currentPage: 1,
    countItemsOnPage: 10,
    isFetching: false,
    arrayIdFavoriteChar: [],
};


const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_CHARACTER:
            return {
                ...state,
                arrayIdFavoriteChar: [...state.arrayIdFavoriteChar, action.id]
            }
        case DISLIKE_CHARACTER:
            return {
                ...state,
                arrayIdFavoriteChar: state.arrayIdFavoriteChar.filter(id => id != action.id)
            }
        case SET_CHARACTERS:
            return {
                ...state, characters: action.characters
            }
        case SET_FAVORITE_CHARS:
            return {
                ...state,
                favoriteChars: action.favoriteChars
            }
        case SET_FAVORITE_CHARS_ID_FROM_LS:
            return {
                ...state, arrayIdFavoriteChar: action.arrayIdFavoriteChar
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state;
    }
}

const addIDInFavorite = (id) => ({ type: LIKE_CHARACTER, id })
const delIDFromFavorite = (id) => ({ type: DISLIKE_CHARACTER, id })
const setCharacters = (characters) => ({ type: SET_CHARACTERS, characters })
const setFavoriteChars = (favoriteChars) => ({ type: SET_FAVORITE_CHARS, favoriteChars })
const setFavoriteCharsIDFromLS_AC=(arrayIdFavoriteChar)=>({type: SET_FAVORITE_CHARS_ID_FROM_LS, arrayIdFavoriteChar})
export const setCurrentPage = (currentPage) =>({ type: SET_CURRENT_PAGE, currentPage })
const setTotalCount = (totalCount) =>({ type: SET_TOTAL_COUNT, totalCount })
const toggleIsFetching = (isFetching) =>({ type: TOGGLE_IS_FETCHING, isFetching })


export const likeCharacter = (id) =>
    async (dispatch, getState) => {
        await dispatch(addIDInFavorite(id));
        saveInLS(getState)
    }
export const dislikeCharacter = (id) =>
    async (dispatch, getState) => {
        await dispatch(delIDFromFavorite(id));
        saveInLS(getState)
    }

const saveInLS=(getState)=>{
        const arrayIdFavoriteChar = getState().charactersPage.arrayIdFavoriteChar;
        let json = JSON.stringify(arrayIdFavoriteChar);
        localStorage.setItem('favoriteCharsID', json);
}

export const requestCharacters = (currentPage, countItemsOnPage) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        getFavoriteCharsIDFromLS(dispatch);
        const data = await charactersApi.getCharacters(currentPage, countItemsOnPage)
        dispatch(setCharacters(data.results));
        dispatch(setTotalCount(data.count));
        dispatch(toggleIsFetching(false));
    }


export const requestFavoriteChars = (currentPage, countItemsOnPage) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const arrayIdFavoriteChar=getFavoriteCharsIDFromLS(dispatch);
        let results = [];
        async function processArray(arrayIdFavoriteChar) {
            const promises = arrayIdFavoriteChar.map(async id => {
                const result = await charactersApi.getCharacterById(currentPage, countItemsOnPage, id)
                results.push(result);
                return result
            });
            await Promise.all(promises);
            dispatch(setFavoriteChars(results));
            dispatch(toggleIsFetching(false));
        }
        processArray(arrayIdFavoriteChar);
    }

const getFavoriteCharsIDFromLS = (dispatch) => {
    let strIdFavoriteChar = localStorage.getItem('favoriteCharsID');
    let arrayIdFavoriteChar = JSON.parse(strIdFavoriteChar) || [];
    dispatch(setFavoriteCharsIDFromLS_AC(arrayIdFavoriteChar));
    return arrayIdFavoriteChar;
}

export default charactersReducer;
